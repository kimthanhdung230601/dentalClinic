// import React, { useEffect, useState } from "react";
// import { Form, Input, Button, Col, Row, Modal, Upload, DatePicker, Checkbox } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import { useQuery } from "react-query";
// import {
//   getOperatorDetail,
//   insertOperator,
//   updateOperator,
// } from "../../api/admin";
// import moment from "moment";
// interface DentalModalProp {
//   visible: boolean;
//   onCancel: () => void;
//   onOk: () => void;
//   idOperator?: any;
// }
// const layout = {
//   labelCol: { span: 16 },
//   wrapperCol: { span: 20 },
// };

// const DentalModal = ({
//   visible,
//   onCancel,
//   onOk,
//   idOperator,
// }: DentalModalProp) => {
//   // console.log(idOperator);
//   const { data: operator } = useQuery(["calendar", idOperator], () =>
//     getOperatorDetail(idOperator)
//   );

//   console.log("o", operator?.operatorName);
//   const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

//   useEffect(() => {
//     form.setFieldsValue({
//       idOperator: operator?.idOperator,
//       operatorName: operator?.operatorName,
//       operatorGmail: operator?.operatorGmail,
//       phoneNumber: parseInt(operator?.phoneNumber),
//       operatorDate: moment(operator?.operatorDate),
//       operatorSex: operator?.operatorSex,
//       operatorAddress: operator?.operatorAddress,
//       operatorPosition: operator?.operatorPosition,
//       operatorLevel: operator?.operatorLevel,
//       operatorCertificate: operator?.operatorCertificate,
//     });
//   }, [operator]);
//   // console.log("sfed",idOperator);

//   const [form] = Form.useForm<{}>();
//   const onFinish = async (values: any) => {
//     if (idOperator) {
//       try {
//         const payload = {
//           idOperator: values.idOperator,
//           idAddressWork: "Nguyễn Trãi, Hà Đông",
//           operatorName: values.operatorName,
//           operatorGmail: values.operatorGmail,
//           phoneNumber: parseInt(values.phoneNumber),
//           operatorDate: values.operatorDate.format("YYYY-MM-DD"),
//           operatorSex: values.operatorSex,
//           operatorAddress: values.operatorAddress,
//           operatorPosition: values.operatorPosition,
//           operatorLevel: values.operatorLevel,
//           operatorCertificate: values.operatorCertificate,
//           isOperator: 0,
//         };
//         const res = await updateOperator(payload);
//         console.log(res);
//       } catch (error: any) {
//         console.log(error.response);
//       }
//     } else {
//       try {
//         const payload = {
//           idAddressWork: "Nguyễn Trãi, Hà Đông",
//           operatorName: values.operatorName,
//           operatorGmail: values.operatorGmail,
//           phoneNumber: parseInt(values.phoneNumber),
//           operatorDate: values.operatorDate.format("YYYY-MM-DD"),
//           operatorSex: values.operatorSex,
//           operatorAddress: values.operatorAddress,
//           operatorPosition: values.operatorPosition,
//           operatorLevel: values.operatorLevel,
//           operatorCertificate: values.operatorCertificate,
//           isOperator: 0,
//           password: "D123",
//         };
//         // console.log("Success:", payload);
//         const res = await insertOperator(payload);
//         if (res) console.log(res);
//       } catch (error: any) {
//         console.log(error.response);
//       }
//     }
//     onCancel();
//   };
//   //upload image
//   return (
//     <>
//       <Modal
//         visible={visible}
//         onCancel={onCancel}
//         onOk={onOk}
//         width={700}
//         footer={null}
//         title="Thông tin nha sĩ"
//       > <Checkbox
//               checked={componentDisabled}
//               onChange={(e) => setComponentDisabled(e.target.checked)}
//             >
//               Sửa
//             </Checkbox>
//         <Form
//           {...layout}
//           form={form}
//           onFinish={onFinish}
//           layout="vertical"
//           disabled={componentDisabled}
//         >
           
//           <Row>
//             <Col span={12}>
//               <Form.Item label="Mã số" name="idOperator">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Họ và tên" name="operatorName">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <Form.Item label="Gmail" name="operatorGmail">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 label="Số điện thoại"
//                 name="phoneNumber"
//                 rules={[
//                   {
//                     pattern: /^[0-9]+$/,
//                     message: "Vui lòng nhập số điện thoại hợp lệ!",
//                   },
//                 ]}
//               >
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <Form.Item label="Ngày sinh" name="operatorDate">
//                 <DatePicker style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Giới tính" name="operatorSex">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <Form.Item label="Địa chỉ" name="operatorAddress">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Chức vụ" name="operatorPosition">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <Form.Item label="Đơn vị công tác" name="operatorWork">
//                 <Input />
//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item label="Trình độ học vấn" name="operatorLevel">
//                 <Input />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Form.Item label="Chứng chỉ (nếu có)" name="operatorCertificate">
//             <Input.TextArea showCount maxLength={100} />
//           </Form.Item>
//           <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
//             <Button
//               className="second-btn"
//               // type="primary"
//               htmlType="submit"
//               style={{ marginRight: "2vh" }}
//             >
//               Lưu
//             </Button>
//             <Button className="warning-btn" htmlType="submit">
//               Xóa
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default DentalModal;
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Col, Row, Modal, Upload, DatePicker, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import {
  getOperatorDetail,
  insertOperator,
  updateOperator,
} from "../../api/admin";
import moment from "moment";
interface DentalModalProp {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  idOperator?: any;
}
const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 20 },
};

const DentalModal = ({
  visible,
  onCancel,
  onOk,
  idOperator,
}: DentalModalProp) => {
  // console.log(idOperator);

  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  useEffect(() => {
    if(idOperator){
      form.setFieldsValue({
        idOperator: "D01",
        operatorName: "Nguyễn Văn A",
        operatorGmail: "AVan@gmail.com",
        operatorPhone: 987123123,
        // operatorDate: "1990-12-01",
        operatorSex: "Nam",
        operatorAddress: "Hà Đông, Hà Nội",
        operatorPositon: "Quản lý",
        operatorWork: "Hà Đông",
        operatorLevel: "Nha sĩ",
        operatorCertificate: "không có",
    });
    } else{
      form.resetFields();
    }
    
  }, [idOperator]);
  // console.log("sfed",idOperator);

  const [form] = Form.useForm<{}>();
  const onFinish = async (values: any) => {
   
    onCancel();
  };
  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        width={700}
        footer={null}
        title="Thông tin nha sĩ"
      > <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Sửa
            </Checkbox>
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          layout="vertical"
          disabled={componentDisabled}
        >
           
          <Row>
            <Col span={12}>
              <Form.Item label="Mã số" name="idOperator">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Họ và tên" name="operatorName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Gmail" name="operatorGmail">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[
                  {
                    pattern: /^[0-9]+$/,
                    message: "Vui lòng nhập số điện thoại hợp lệ!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Ngày sinh" name="operatorDate">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" name="operatorSex">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Địa chỉ" name="operatorAddress">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Chức vụ" name="operatorPosition">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Đơn vị công tác" name="operatorWork">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Trình độ học vấn" name="operatorLevel">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Chứng chỉ (nếu có)" name="operatorCertificate">
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button
              className="second-btn"
              // type="primary"
              htmlType="submit"
              style={{ marginRight: "2vh" }}
            >
              Lưu
            </Button>
            <Button className="warning-btn" htmlType="submit">
              Xóa
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DentalModal;
