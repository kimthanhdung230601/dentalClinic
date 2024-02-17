import { Button, Row, Col, Input, Form, DatePicker, Select } from "antd";
import styles from "./styles.module.scss";
import Teeth from "../../../components/teeth";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getOperatorName,
  getPatientDetail,
  insertCalendarDental,
} from "../../../api/admin";
import moment, { Moment } from "moment";
const { Option } = Select;
interface ReExaminationProps {}
interface Operator {
  idOperator: string;
  operatorName: string;
  idPatient: string;
  phoneNumber: number;
  patientAddress: string;
}
interface FormValues {
  idOperator: string;
  contentControl: string;
  patientDate: moment.Moment;
  controlDate: Moment;
  patientName: string;
  patientSex: string;
  patientGmail: string;
  phoneNumber: number;
  patientAddress: string;
}
const ReExamination = () => {
  const { idPatient, idOperator } = useParams<{
    idPatient: string;
    idOperator: string;
  }>();
  const navigate = useNavigate();
  // console.log(idPatient);
// console.log("idOperator",idOperator);

  const [form] = Form.useForm<FormValues>();
  const formValues: FormValues = form.getFieldsValue();
  const [object, setValue] = useState<any>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setValue(values);
  };
  const [selectedCircle, setSelectedCircle] = useState<any>([]);
  const { data: patient } = useQuery(["patient"], () =>
    getPatientDetail(idPatient)
  );
  // console.log("selectedCircle",selectedCircle);

  const patientData = useMemo(() => patient, [patient]);
  useEffect(() => {
    if (patientData) {
      form.setFieldsValue({
        // idPatient: idPatient,
        patientName: patient.patientName,
        phoneNumber: patient.phoneNumber,
        patientAddress: patient.patientAddress,
        patientSex: patient.patientSex,
        patientDate: moment(patient.patientDate),
        patientGmail: patient.patientGmail,
      });
    }
  }, [patientData]);
  const { data: operator } = useQuery(["operator"], () => getOperatorName());
  const extractedData = operator?.map(
    ({ idOperator, operatorName }: Operator) => ({
      value: idOperator,
      label: operatorName,
    })
  );
  const handleReExam = async () => {
    try {
      // Validate các trường trong form
      const values = await form.validateFields();
  
      const formattedToothPosion = { toothPosion: selectedCircle.join(",") };
  
      const payload = {
        idAddressWork: "CS1",
        idOperator: values.idOperator,
        idPatient: idPatient,
        control: "",
        toothPosion: formattedToothPosion.toothPosion,
        contentControl: values.contentControl,
        statusExam: 0,
        controlDate: values.controlDate ? values.controlDate.format("YYYY-MM-DD") : null,
        typeCalendar: 0,
        state: 1,
      };
  
      // Gọi API hoặc thực hiện hành động lưu ở đây
      const res = await insertCalendarDental(payload);
      console.log(res);
      alert("Đặt lịch tái khám thành công");
      navigate("/");
    } catch (error) {
      console.error("Validation error:", error);
  
      // Hiển thị thông báo cho người dùng nếu có lỗi trong việc validate các trường
      alert("Điền đầy đủ thông tin trước khi lưu.");
    }
  };
  
  return (
    <>
      <div className={styles.wrapTitle}>
        <div className={styles.title}>
          <h3>Đặt lịch tái khám</h3>
        </div>
        <div className={styles.btnGroup}>
          <div className={styles.btn}>
            {" "}
            <Button className="btn" onClick={() => handleReExam()}>
              Lưu
            </Button>
          </div>
          <div className={styles.btn}>
            {" "}
            <Button className="warning-btn" onClick={()=>{navigate("/")}}>Hủy</Button>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.title2}>
          <h3>Thông tin bệnh nhân</h3>
        </div>
        <div className={styles.form}>
          <Form
            form={form}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Nha sĩ phụ trách" name="idOperator" rules={[{ required: true }]}>
                  <Select>
                    {extractedData?.map(({ value, label }: any) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Họ và tên" name="patientName">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số điện thoại" name="phoneNumber">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Địa chỉ liên hệ" name="patientAddress">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Giới tính" name="patientSex">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày sinh" name="patientDate">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Gmail" name="patientGmail">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Nội dung khám" name="contentControl" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>{" "}
              <Col span={8}>
                <Form.Item label="Ngày tái khám" name="controlDate" rules={[{ required: true }]}>
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div>
        {" "}
        <Teeth
          toothPosion={undefined}
          setSelectedCircle={setSelectedCircle}
          selectedCircle={selectedCircle}
        />
      </div>
    </>
  );
};
