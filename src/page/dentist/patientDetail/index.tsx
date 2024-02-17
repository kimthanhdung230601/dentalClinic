import { Avatar, Col, Row, Form, Input, DatePicker } from "antd";
import styles from "./styles.module.scss";
import HistoryMedicine from "./historypatient";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPatientDetail } from "../../../api/admin";
import { useEffect } from "react";
import moment from "moment";
interface PatientDetailProps {}

const PatientDetail = () => {
  const { idPatient } = useParams();
  const { data: patientDetail } = useQuery(["calendar", idPatient], () =>
    getPatientDetail(idPatient)
  );
  // console.log(patientDetail);
  useEffect(()=>{
    form.setFieldsValue({
      idPatient:patientDetail?.idPatient,
      patientName:patientDetail?.patientName,
      patientGmail: patientDetail?.patientGmail,
      phoneNumber:patientDetail?.phoneNumber,
      patientSex:patientDetail?.patientSex,
      patientAddress:patientDetail?.patientAddress,
      patientDate: moment(patientDetail?.controlDate),

    })
  },[patientDetail])

  // Sử dụng idPatient để thực hiện các hoạt động tương ứng, như log ra console:
  // console.log("ID Patient:", idPatient);

  const [form] = Form.useForm<{}>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className={styles.wrap}>
        <h3>Thông tin bệnh nhân</h3>
        <div className={styles.form}>
          <Form
            form={form}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Mã số" name="idPatient">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Họ và tên"
                  name="patientName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Gmail"
                  name="patientGmail"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Ngày sinh"
                  name="patientDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <DatePicker style={{width:"100%"}}/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Giới tính"
                  name="patientSex"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Địa chỉ" name="patientAddress">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>{" "}
      <HistoryMedicine idPatient ={idPatient}/>
    </>
  );
};

export default PatientDetail;
