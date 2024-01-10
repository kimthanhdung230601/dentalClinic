import React, { useEffect, useState } from "react";
import { Form, Input, Button, Col, Row, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import { deleteMedicine, getMedicineDetail, insertMedicine, updateMedicine } from "../../api/admin";
interface EditMedicineModalProp {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  idMedicine?: any;
}
const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 22 },
};

const EditMedicineModal = ({
  visible,
  onCancel,
  onOk,
  idMedicine,
}: EditMedicineModalProp) => {
  // console.log(idMedicine);

  const [form] = Form.useForm<{}>();

  const { data: medicineDetail } = useQuery(["calendar", idMedicine], () =>
    getMedicineDetail(idMedicine)
  );
  // console.log(medicineDetail);

  useEffect(() => {
    if (medicineDetail) {
      form.setFieldsValue({
        medicineName: medicineDetail.medicineName,
        medicineForm: medicineDetail.medicineForm,
        amount: medicineDetail.amount,
        usingMedicine: medicineDetail.usingMedicine,
        idMedicine: medicineDetail.idMedicine,
        ingredient: medicineDetail.ingredient,
        sideEffect: medicineDetail.sideEffect,
        barcode: medicineDetail.barcode,
        origin: medicineDetail.origin,
        price: medicineDetail.price,
      });
    } else {
      form.resetFields();
    }
  }, [medicineDetail]);
  //upload image
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = async (values: any) => {
    const payload = {
      medicineName: values.medicineName,
      medicineForm: values.medicineForm,
      amount: values.amount,
      usingMedicine: values.usingMedicine,
      idMedicine: values.idMedicine,
      ingredient: values.ingredient,
      sideEffect: values.sideEffect,
      barcode: values.barcode,
      origin: values.origin,
      price: values.price,
    }
    console.log(payload);
    if (!idMedicine) {
      console.log("add");
      const res = await insertMedicine(payload);
      console.log(res);
    } else {
      console.log("update");
      const res = await updateMedicine(idMedicine,payload)
      console.log(res); 
    }
    onCancel();
  };
  const HandleDeleteMedicine = async (values:any)=>{
    console.log("delete");
    const res = await deleteMedicine(values);
    console.log(res);
    
    onCancel();
    
  }
  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        width={800}
        footer={null}
        title="Sản phẩm"
      >
        <Form {...layout} form={form} onFinish={onFinish} layout="vertical">
          <Row>
            <Col span={8}>
              {" "}
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={16} className={styles.title}>
              <h3>Tên thuốc: </h3>
              <p>Gía tiền:</p>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item label="Mã số" name="idMedicine">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tên thuốc" name="medicineName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Dạng thuốc" name="medicineForm">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Liều lượng" name="amount">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Cách sử dụng" name="usingMedicine">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tác dụng phụ" name="sideEffect">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Thành phần hoạt chất chính" name="ingredient">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giá tiền" name="price">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Xuất xứ" name="origin">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mã vạch" name="barcode">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button
              className="second-btn"
              htmlType="submit"
              style={{ marginRight: "2vh" }}
            >
              Lưu
            </Button>
            <Button className="warning-btn" onClick={()=>HandleDeleteMedicine(idMedicine)}>
              Xóa
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditMedicineModal;
