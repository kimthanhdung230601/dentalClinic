import React, { useEffect } from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Modal,
  Spin,
  Alert,
} from "antd";

import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import {
  autoUpdate,
  deleteCalendar,
  getCalendarDental,
  getCalendarDetail,
  getIdOperator,
  getOperatorName,
  getPatientName,
  insertCalendarDental,
  updateExam,
} from "../../api/admin";
import moment from "moment";
//import { operatorName, ID } from "../../../util/constant";
const { Option } = Select;
interface AddSurgeryProps {
  visible: boolean;
  idExam?: string;
  onCancel: () => void;
  onOk: () => void;
  shift?: any;
  date?: any;
  operatorName?: any;
}
interface Operator {
  phoneNumber: number;
  idOperator: string;
  operatorName: string;
}
interface Patient {
  phoneNumber: number;
  idPatient: string;
  patientName: string;
}
interface calendar {}
// const AddSurgery = ({
//   visible,
//   onCancel,
//   onOk,
//   idExam,
//   shift,
//   date,
//   operatorName,
// }: AddSurgeryProps) => {
//   const [loading, setLoading] = React.useState<boolean>(false);
//   const [form1] = Form.useForm();
//   const [form2] = Form.useForm();
//   const [showForm2, setShowForm2] = useState(false); // Sử dụng state để quản lý hiển thị Form thứ 2
//   const [formData, setFormData] = useState<any>({});
//   const [id, setId] = useState<any>({});
//   const onFinish = (values: any) => {
//     console.log("Success:", values);
//   };
//   // console.log("shift", shift);

//   const handleClassificationChange = (value: string) => {
//     // Kiểm tra giá trị của trường "Phân loại lịch" và hiển thị/ẩn Form thứ 2
//     if (value === "2") {
//       setShowForm2(true); // Hiển thị Form thứ 2 nếu giá trị là "Lịch phẫu thuật"
//       form2.resetFields();
//     } else {
//       setShowForm2(false); // Ẩn Form thứ 2 nếu giá trị không phải "Lịch phẫu thuật"
//     }
//   };
//   //get calendar detail
//   const { data: calendar } = useQuery(["calendar", idExam], () =>
//     getCalendarDetail(idExam)
//   );
//   //  const [id, getIdOperator]= useState<any>({});
//   // if (shift) {
//   //   getIdOperator(operatorName)
//   //     .then(res => {
//   //       // console.log("res", res?.idOperator);
//   //       setId(res?.idOperator)
//   //     })
//   //     .catch(error => {
//   //       console.error("Error:", error);
//   //     });
//   // }
//   useEffect(() => {
//     if (calendar) {
//       form1.setFieldsValue({
//         typeCalendar: calendar.typeCalendar,
//         idOperator: calendar.idOperator,
//         controlDate: moment(calendar.controlDate),
//         shift: calendar.shift,
//         contentControl: calendar.contentControl,
//       });
//       if (calendar.typeCalendar == "2") {
//         setShowForm2(true);
//         form2.setFieldsValue({
//           idPatient: calendar.idPatient,
//         });
//       }
//     } else {
//       if (shift && date && operatorName) {
//         getIdOperator(operatorName)
//           .then((res) => {
//             // setId(res?.idOperator)
//             form1?.resetFields();
//             form2?.resetFields();
//             form1.setFieldsValue({
//               controlDate: moment(date),
//               idOperator: res?.idOperator,
//               shift: shift,
//             });
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       } else {
//         form1?.resetFields();
//         form2?.resetFields();
//       }
//     }
//   }, [calendar, form1, form2, shift, date, operatorName]);

//   const handleSave = async (value: any) => {
//     if (!idExam) {
//       try {
//         const form1Values = form1.getFieldsValue();
//         const form2Values = form2.getFieldsValue();
//         const controlDate = form1Values.controlDate.format("YYYY-MM-DD"); // Chuyển đổi Moment thành chuỗi "YYYY-MM-DD"
//         const modifiedForm1Values = { ...form1Values, controlDate };
//         setFormData({
//           ...modifiedForm1Values,
//           ...form2Values,
//         });
//         const payload = {
//           idOperator: form1.getFieldsValue().idOperator,
//           controlDate: form1Values.controlDate.format("YYYY-MM-DD"),
//           typeCalendar: form1.getFieldsValue().typeCalendar,
//           shift: form1.getFieldsValue().shift,
//           contentControl: form1.getFieldsValue().contentControl,
//           idPatient: form2.getFieldsValue().idPatient,
//         };

//         const res = await insertCalendarDental(payload);
//         const res2 = await autoUpdate();
//         alert(res2);
//         console.log(payload);
//       } catch (error: any) {
//         // alert("Sửa thành công")
//         console.log(error.response);
//       }
//     } else {
//       try {
//         const form1Values = form1.getFieldsValue();
//         const form2Values = form2.getFieldsValue();
//         const controlDate = form1Values.controlDate.format("YYYY-MM-DD"); // Chuyển đổi Moment thành chuỗi "YYYY-MM-DD"
//         const modifiedForm1Values = { ...form1Values, controlDate };
//         setFormData({
//           ...modifiedForm1Values,
//           ...form2Values,
//         });
//         const payload = {
//           idExam: idExam,
//           idOperator: form1.getFieldsValue().idOperator,
//           controlDate: form1Values.controlDate.format("YYYY-MM-DD"),
//           typeCalendar: form1.getFieldsValue().typeCalendar,
//           shift: form1.getFieldsValue().shift,
//           contentControl: form1.getFieldsValue().contentControl,
//           idPatient: form2.getFieldsValue().idPatient,
//           numericalOrder: 0,
//         };
//         const res = await updateExam(payload);
//         // alert("Sửa thành công");
//         // if (res) <Alert message="Sửa thành công" type="success" />;
//       } catch (error: any) {
//         console.log(error.response);
//       }
//     }
//     onCancel();
//   };
//   const handleDelete = async () => {
//     try {
//       const payload = idExam;
//       const res = await deleteCalendar(idExam);
//       if (res) console.log("delete calendar success");
//     } catch (error: any) {
//       console.log(error.response);
//     }
//     onCancel();
//   };
//   //list operator
//   const { data: operator } = useQuery(["operator"], () => getOperatorName());
//   const extractedData = operator?.map(
//     ({ idOperator, operatorName }: Operator) => ({
//       value: idOperator,
//       label: operatorName,
//     })
//   );
//   //list patient
//   const { data: patient } = useQuery(["patient"], () => getPatientName());
//   const extractedDataPatient = patient?.map(
//     ({ idPatient, patientName, phoneNumber }: Patient) => ({
//       value: idPatient,
//       label: `${patientName}-${phoneNumber}`,
//     })
//   );
//   return (
//     <Spin spinning={loading}>
//       <Modal
//         visible={visible}
//         onCancel={onCancel}
//         onOk={onOk}
//         width={591}
//         footer={null}
//       >
//         {" "}
//         <div className={styles.wrap}>
//           <div className={styles.wrapInfor}>
//             {/* <label>label: {operatorName}</label> */}
//             <div className={styles.form}>
//               <Form
//                 form={form1}
//                 wrapperCol={{ span: 24 }}
//                 onFinish={onFinish}
//                 layout="vertical"
//               >
//                 <Row gutter={16}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Phân loại lịch"
//                       name="typeCalendar"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your information!",
//                         },
//                       ]}
//                     >
//                       <Select
//                         placeholder="Phân loại"
//                         onChange={handleClassificationChange}
//                       >
//                         <Option value="2">Lịch khám</Option>
//                         <Option value="3">Lịch họp</Option>
//                         <Option value="4">Nghỉ</Option>
//                       </Select>
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Họ và tên"
//                       //valuePropName={operatorName||undefined}
//                       // initialValue={operatorName || undefined}
//                       name="idOperator"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your information!",
//                         },
//                       ]}
//                     >
//                       <Select>
//                         {extractedData?.map(({ value, label }: any) => (
//                           <Option key={value} value={value}>
//                             {label}
//                           </Option>
//                         ))}
//                       </Select>
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Row gutter={16}>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Ngày"
//                       name="controlDate"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your information!",
//                         },
//                       ]}
//                     >
//                       <DatePicker
//                         style={{ width: "100%" }}
//                         format="YYYY-MM-DD"
//                       />
//                     </Form.Item>
//                   </Col>
//                   <Col span={12}>
//                     <Form.Item
//                       label="Thời gian"
//                       name="shift"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your information!",
//                         },
//                       ]}
//                       style={{ width: "100" }}
//                     >
//                       <Select>
//                         <Option value="1">Kíp 1</Option>
//                         <Option value="2">Kíp 2</Option>
//                         <Option value="3">Kíp 3</Option>
//                         <Option value="4">Kíp 4</Option>
//                       </Select>
//                     </Form.Item>
//                   </Col>
//                 </Row>
//                 <Form.Item label="Nội dung" name="contentControl">
//                   <Input.TextArea showCount maxLength={100} />
//                 </Form.Item>
//               </Form>
//             </div>
//             {showForm2 && (
//               <div className={styles.form}>
//                 <Form
//                   form={form2}
//                   wrapperCol={{ span: 24 }}
//                   onFinish={onFinish}
//                   layout="vertical"
//                 >
//                   <Row gutter={16}>
//                     <Col span={12}>
//                       <Form.Item
//                         label="Tên bệnh nhân"
//                         name="idPatient"
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please input your information!",
//                           },
//                         ]}
//                       >
//                         <Select>
//                           {extractedDataPatient?.map(
//                             ({ value, label }: any) => (
//                               <Option key={value} value={value}>
//                                 {label}
//                               </Option>
//                             )
//                           )}
//                         </Select>
//                       </Form.Item>
//                     </Col>
//                     <Col span={12}></Col>
//                   </Row>
//                   <Row>
//                     <Col span={24}></Col>
//                   </Row>
//                 </Form>{" "}
//               </div>
//             )}{" "}
//             <Button className="second-btn" onClick={handleSave}>
//               Lưu
//             </Button>
//             <Button
//               className="warning-btn"
//               onClick={handleDelete}
//               style={{ marginLeft: "10px" }}
//             >
//               Xóa
//             </Button>
//           </div>
//         </div>
//       </Modal>{" "}
//     </Spin>
//   );
// };
const AddSurgery = ({
  visible,
  onCancel,
  onOk,
  idExam,
  shift,
  date,
  operatorName,
}: AddSurgeryProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [showForm2, setShowForm2] = useState(false); // Sử dụng state để quản lý hiển thị Form thứ 2
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  // console.log("shift", shift);
console.log("id", idExam);

  const handleClassificationChange = (value: string) => {
    // Kiểm tra giá trị của trường "Phân loại lịch" và hiển thị/ẩn Form thứ 2
    if (value === "2") {
      setShowForm2(true); // Hiển thị Form thứ 2 nếu giá trị là "Lịch phẫu thuật"
      form2.resetFields();
    } else {
      setShowForm2(false); // Ẩn Form thứ 2 nếu giá trị không phải "Lịch phẫu thuật"
    }
  };
  //get calendar detail

  useEffect(() => {
    if (idExam) {
      form1.setFieldsValue({
        typeCalendar: "Lịch họp",
        idOperator: "P01",
        // controlDate: "2024-01-09",
        shift: "kíp 4",
        contentControl: "tái khám",
      });
    } else {
      form1?.resetFields();
      form2?.resetFields();
    }
  }, [form1, form2,idExam]);

  return (
    <Spin spinning={loading}>
      <Modal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        width={591}
        footer={null}
      >
        {" "}
        <div className={styles.wrap}>
          <div className={styles.wrapInfor}>
          
            <div className={styles.form}>
              <Form
                form={form1}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                layout="vertical"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Phân loại lịch"
                      name="typeCalendar"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Phân loại"
                        onChange={handleClassificationChange}
                      >
                        <Option value="2">Lịch khám</Option>
                        <Option value="3">Lịch họp</Option>
                        <Option value="4">Nghỉ</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="idOperator"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Select>
                        <Option value={1}>Nguyễn Văn A</Option>
                        <Option value={1}>Thuận Bình</Option>
                        <Option value={1}>Nguyễn Châu Anh</Option>
                        <Option value={1}>Lý Đào</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Ngày"
                      name="controlDate"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <DatePicker
                        style={{ width: "100%" }}
                        format="YYYY-MM-DD"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Thời gian"
                      name="shift"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                      style={{ width: "100" }}
                    >
                      <Select>
                        <Option value="1">Kíp 1</Option>
                        <Option value="2">Kíp 2</Option>
                        <Option value="3">Kíp 3</Option>
                        <Option value="4">Kíp 4</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Nội dung" name="contentControl">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </Form>
            </div>
            {showForm2 && (
              <div className={styles.form}>
                <Form
                  form={form2}
                  wrapperCol={{ span: 24 }}
                  onFinish={onFinish}
                  layout="vertical"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Tên bệnh nhân"
                        name="idPatient"
                        rules={[
                          {
                            required: true,
                            message: "Please input your information!",
                          },
                        ]}
                      >
                        <Select>
                          <Option value={"1"}>Vi Anh:0971056001</Option>
                          <Option value={"1"}>Vi Vi: 086712378</Option>
                          <Option value={"1"}>Hùng: 045617989</Option>
                          <Option value={"1"}>Nguyễn Văn Châu: 0456789153</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}></Col>
                  </Row>
                  <Row>
                    <Col span={24}></Col>
                  </Row>
                </Form>{" "}
              </div>
            )}{" "}
            <Button className="second-btn">Lưu</Button>
            <Button className="warning-btn" style={{ marginLeft: "10px" }}>
              Xóa
            </Button>
          </div>
        </div>
      </Modal>{" "}
    </Spin>
  );
};

export default AddSurgery;
