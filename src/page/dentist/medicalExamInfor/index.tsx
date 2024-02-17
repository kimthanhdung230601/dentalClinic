import { Button, Row, Col, Input, Form, DatePicker } from "antd";
import styles from "./styles.module.scss";
import Teeth from "../../../components/teeth";
import { Link, useNavigate, useParams } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useQuery } from "react-query";
import {
  getCalendarDental,
  getCalendarDetail,
  getPatientDetail,
  updateExam,
} from "../../../api/admin";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import MedicineForPatient from "./medicineForPatient";
import { ALL_TOP_TEETH, toothPosion } from "../../../util/constant";
interface ExamInforProps {}

const ExamInfor = () => {
  
  const { idExam, idPatient } = useParams<{
    idExam: string;
    idPatient: string;
  }>();
  const navigate = useNavigate();
  const { data: patient } = useQuery(["patient"], () =>
    getPatientDetail(idPatient)
  );
  const { data: calendar, refetch } = useQuery(["calendar"], () =>
    getCalendarDetail(idExam)
  );
  console.log("calendar", calendar);

  const patientData = useMemo(() => patient, [patient]);
  const calendarData = useMemo(() => calendar, [calendar]);

  const [form] = Form.useForm<{}>();
  useEffect(() => {
    if (patientData && calendarData) {
      form.setFieldsValue({
        patientName: patient.patientName,
        phoneNumber: patient.phoneNumber,
        patientAddress: patient.patientAddress,
        patientSex: patient.patientSex,
        patientDate: moment(patient.patientDate),
        contentControl: calendar.contentControl,
        patientGmail: patient.patientGmail,
      });
    }
  }, [patientData, calendarData]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  //teethposion
  const [selectedCircle, setSelectedCircle] = useState<any>([]);
  //kiểm tra có phải ngày hôm nay
  const isToday = moment(calendar?.controlDate).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD");

  const handleSuccess = async () => {
    const formattedToothPosion = { toothPosion: selectedCircle.join(",") };
    try {
      const payload = {
        idExam: idExam,
        idAddressWork: "CS1",
        idOperator: calendar.idOperator,
        idPatient: idPatient,
        control: "",
        toothPosion: formattedToothPosion.toothPosion,
        contentControl: calendar.contentControl,
        statusExam: 1,
        controlDate: moment(calendar.controlDate).format("YYYY-MM-DD"),
        typeCalendar: calendar.typeCalendar,
      };
      const res = await updateExam(payload);
      console.log(res);
      alert("Khám thành công");
      refetch();
      navigate("/");
      // console.log(payload);
    } catch (error: any) {
      console.log(error.message);
    }

    // console.log(formattedToothPosion);
  };
  const handleFailed = async () => {
    const formattedToothPosion = { toothPosion: selectedCircle.join(",") };
    try {
      const payload = {
        idExam: idExam,
        idAddressWork: "CS1",
        idOperator: calendar.idOperator,
        idPatient: idPatient,
        control: "",
        toothPosion: formattedToothPosion.toothPosion,
        contentControl: calendar.contentControl,
        statusExam: 2,
        controlDate: moment(calendar.controlDate).format("YYYY-MM-DD"),
        typeCalendar: calendar.typeCalendar,
      };
      const res = await updateExam(payload);
      console.log(res);
      alert("Hủy lượt thành công");
      // console.log(payload);
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleDetalCalendar = (idPatient: any, idOperator: any) => {
    navigate(`/patient/reExamination/${idPatient}/${idOperator}`);
  };

  //xuất file PDF
  const dowloadFilePDF = async () => {
    const doc = new jsPDF();

    try {
      // Load a Unicode font that supports Vietnamese characters
      const vietnameseFont = await fetch(
        require("../../../assets/font/font-times-new-roman.ttf")
      );
      const fontArrayBuffer = await vietnameseFont.arrayBuffer();
      const arrayBufferToBase64 = (buffer: any) => {
        const bytes = new Uint8Array(buffer);
        let binary = "";
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };

      // Sau khi fetch font từ server và có được fontArrayBuffer
      const fontBase64 = arrayBufferToBase64(fontArrayBuffer);
      // Add the font to the PDF document
      doc.addFileToVFS("font-times-new-roman.ttf", fontBase64);
      doc.addFont("font-times-new-roman.ttf", "Unicode", "normal");
      doc.setFont("Unicode");

      const formattedToothPosion = { toothPosion: selectedCircle.join(",") };
      const content = `
      NHA KHOA DENTAL CLINIC
      Địa chỉ: Xuân Thủy, Cầu Giấy, Hà Nội
      Điện thoại: 0362091109
      Email: dentalClinic@gmail.com
      ID: ${idExam} Hà Nội, ngày tháng năm 2023

      PHIẾU KHÁM BỆNH
      Họ và tên: ${form.getFieldValue("patientName")}
      Ngày sinh: ${form.getFieldValue("patientDate")}
      Điện thoại: ${form.getFieldValue("phoneNumber")}
      Email: ${form.getFieldValue("patientGmail")}
      Phương pháp điều trị: 
      Nội dung khám: ${form.getFieldValue("contentControl")}
      Vị trí răng khám: ${formattedToothPosion.toothPosion}
      Nha sĩ phụ trách: ${calendar?.operatorName}
      Lịch tái khám: 
      Khách hàng Nha sĩ;
    `;

      // Thêm nội dung vào file PDF
      doc.text(content, 5, 1);

      // Tải file PDF khi người dùng click vào button
      doc.save("exam_information.pdf");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className={styles.wrapTitle}>
        <div className={styles.title}>
          <h3>Thông tin khám bệnh</h3>
        </div>
        {isToday && (
            <div className={styles.btnGroup}>
          <div className={styles.btn}>
            <button className="second-btn" onClick={() => dowloadFilePDF()}>
              Xuất file PDF
            </button>
          </div>
          <div className={styles.btn}>
            <button
              className="second-btn"
              onClick={() =>
                handleDetalCalendar(idPatient, calendar?.idOperator)
              }
            >
              Tái khám
            </button>
          </div>

          <div className={styles.btn}>
            {" "}
            <Button className="sucess-btn" onClick={() => handleSuccess()}>
              Khám thành công{" "}
            </Button>
          </div>
          <div className={styles.btn}>
            {" "}
            <Button className="warning-btn" onClick={() => handleFailed()}>
              Hủy lượt{" "}
            </Button>
          </div>
        </div>
        )}
      
      </div>
      <div className={styles.wrap}>
        <div className={styles.title2}>
          <h3>Thông tin bệnh nhân</h3>
          <span style={{ fontStyle: "italic" }}>(Khám lần đầu)</span>
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
                <Form.Item label="STT" name="idPatient">
                  <Input defaultValue={"456"} />
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
              <Col span={16}>
                <Form.Item label="Nội dung khám" name="contentControl">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div>
        <Teeth
          toothPosion={calendar?.toothPosion}
          setSelectedCircle={setSelectedCircle}
          selectedCircle={selectedCircle}
        />
      </div>
      <div className={styles.wrapMedicine}>
        <MedicineForPatient idExam={idExam} />
      </div>
    </>
  );
};
