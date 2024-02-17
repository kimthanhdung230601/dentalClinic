import styles from "./styles.module.scss";
import { useState } from "react";
import { Form, Input, Table, Tag, Tooltip, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import DentalModal from "../../../components/modal/modalDental";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import {  getListOperator } from "../../../api/admin";
interface DataType {
  key: string;
  idOperator?: string;
  operatorName: string; //tên thuốc
  operatorGmail: string; // dạng thuốc
  operatorPhone: number; //liều lượng
  operatorDate: string; //cách sử dụng
  operatorSex: string; //mã thuốc
  operatorAddress?: string; //thành phần chính
  operatorPositon?: string; //tác dụng phụ
  operatorWork: string; //mã code
  operatorLevel?: string; // công ty sản xuất
  operatorCertificate?: string; // xuất xứ
}
interface OperatorListProps {}

const OperatorList = () => {
  const [form] = Form.useForm();
  const { data: operator,refetch } = useQuery(["operator"], () => getListOperator());
  //set modal add new medicine
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idOperator,setIdOperator] =useState<any>();
  const showModal = (value:any) => {
    setIsModalOpen(true);
   setIdOperator(value);
   refetch();

  };
  const handlseModalOk = () => {
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
    refetch();
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã số",
      dataIndex: "idOperator",
      key: "idOperator",
      fixed: "left",
      width: 100,
    },
    {
      title: "Họ và tên",
      dataIndex: "operatorName",
      key: "operatorName",
      fixed: "left",
      width: 170,
    },
    {
      title: "Gmail",
      dataIndex: "operatorGmail",
      key: "operatorGmail",
      width: 180,
    },

    {
      title: "Số điện thoại",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      width: 130,
    },
    {
      title: "Ngày sinh",
      dataIndex: "operatorDate",
      key: "operatorDate",
      width: 120,
    },

    {
      title: "Giới tính",
      dataIndex: "operatorSex",
      key: "operatorSex",
      width: 100,
    },

    {
      title: "Địa chỉ",
      dataIndex: "operatorAddress",
      key: "operatorAddress",
      width: 140,
    },
    {
      title: "Chức vụ",
      dataIndex: "operatorPositon",
      key: "operatorPositon",
      width: 100,
    },
    {
      title: "Trình độ học vấn",
      dataIndex: "operatorLevel",
      key: "operatorLevel",
      width: 150,
    },
    {
      title: "Chứng chỉ",
      dataIndex: "operatorCertificate",
      key: "operatorCertificate",
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (record) => (
        <button
          className="btn"
          onClick={() => {
            showModal(record?.phoneNumber);
          }}
        >
          Chi tiết
        </button>
      ),
    },
  ];
  return (
    <>
      {" "}
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.btn}>
            {" "}
            <Button className="btn" onClick={()=>{showModal(undefined)}}>
              Thêm mới
            </Button>
          </div>{" "}
          <div className={styles.search}>
            <Form
              form={form}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className={styles.form}
            >
              <Form.Item name="text" className={styles.formItem}>
                <Input className={styles.input} placeholder="Tìm kiếm ở đây" />
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Button className={styles.button} htmlType="submit">
                  <SearchOutlined />
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <Table columns={columns} dataSource={operator} scroll={{ x: 1300 }} />
      </div>
      {/* <Ex /> */}
      <DentalModal
        visible={isModalOpen}
        onCancel={handleModalCancel}
        onOk={handlseModalOk}
        idOperator={idOperator}
      />
      {/* <EditMedicineModal
        visible={isModalOpen2}
        onCancel={handleModalCancel2}
        onOk={handlseModalOk2}
      /> */}
    </>
  );
};

export default OperatorList;
