// import styles from "./styles.module.scss";
// import { useState } from "react";
// import { Form, Input, Table, Button } from "antd";
// import { SearchOutlined } from "@ant-design/icons";
// import type { ColumnsType } from "antd/es/table";
// // import Ex from "./example";
// import AddMedicineModal from "../../../components/modal/addMedicineModal";
// import EditMedicineModal from "../../../components/modal/editMedicineModal";
// import { useQuery } from "react-query";
// import { getListMedicine } from "../../../api/admin";
// interface DataType {
//   key: string;
//   medicineName: string; //tên thuốc
//   medicineForm: string; // dạng thuốc
//   amount: number; //liều lượng
//   usingMedicine: string; //cách sử dụng
//   idMedicine: string; //mã thuốc
//   ingredient: string; //thành phần chính
//   sideEffect?: string; //tác dụng phụ
//   barcode: string; //mã code
//   origin?: string; // xuất xứ
//   price: number; //giá
// }
// interface MedicineProps {}

// const Medicine = () => {
//   const [form] = Form.useForm();
//   const onFinish = (value: any) => {
//     console.log(value);
//   };
//   //set modal add new medicine
//   //modal edit medcine 
//    const { data: medicine,refetch } = useQuery(["calendar"], () => getListMedicine());
//   const [isModalOpen2, setIsModalOpen2] = useState(false);
// const [idMedicine, setIdMedicine] =useState<any>();
//   const showModal2 = (value:any) => {
//     setIsModalOpen2(true);
//     console.log(value);
//     setIdMedicine(value);
//   };

//   const handlseModalOk2 = () => {
//     setIsModalOpen2(false);
//   };

//   const handleModalCancel2 = () => {
//     setIsModalOpen2(false);
//     refetch();
//   };
//   const columns: ColumnsType<DataType> = [
//     {
//       title: "Mã số",
//       dataIndex: "idMedicine",
//       key: "idMedicine",
//       fixed: "left",
//       width: 100,
//     },
//     {
//       title: "Tên thuốc",
//       dataIndex: "medicineName",
//       key: "medicineName",
//       fixed: "left",
//       width: 170,
//     },
//     {
//       title: "Phân loại",
//       dataIndex: "medicineForm",
//       key: "medicineForm",
//       width: 100,
//     },

//     {
//       title: "Liều lượng",
//       key: "amount",
//       dataIndex: "amount",
//       width: 100,
//     },
//     {
//       title: "Cách sử dụng",
//       dataIndex: "usingMedicine",
//       key: "usingMedicine",
//       width: 100,
//     },

//     {
//       title: "Thành phần hoạt chất chính",
//       dataIndex: "ingredient",
//       key: "ingredient",
//       width: 220,
//     },

//     {
//       title: "Tác dụng phụ",
//       dataIndex: "sideEffect",
//       key: "sideEffect",
//       width: 190,
//     },
//     {
//       title: "Mã vạch",
//       dataIndex: "barcode",
//       key: "barcode",
//       width: 100,
//     },

//     { title: "Xuất xứ", dataIndex: "origin", key: "origin", width: 100 },
//     {
//       title: "giá tiền",
//       dataIndex: "price",
//       key: "price",
//       sorter: (a, b) => a.price - b.price,
//       width: 100,
//     },
//     {
//       title: "Action",
//       key: "action",
//       fixed: "right",
//       width: 100,
//       render: (_, record) => (
//         <button
//           className="btn"
//           onClick={() => {
//             showModal2(record.idMedicine);
//           }}
//         >
//           Chi tiết
//         </button>
//       ),
//     },
//   ];


 
//   return (
//     <>
//       {" "}
//       <div className={styles.wrap}>
//         <div className={styles.header}>
//           <div className={styles.btn}>
//             {" "}
//             <Button className="btn" onClick={()=>{showModal2(undefined)}}>
//               Thêm mới
//             </Button>
//           </div>
//           <div className={styles.search}>
//             <Form
//               form={form}
//               name="basic"
//               initialValues={{ remember: true }}
//               onFinish={onFinish}
//               className={styles.form}
//             >
//               <Form.Item name="text" className={styles.formItem}>
//                 <Input className={styles.input} placeholder="Tìm kiếm ở đây" />
//               </Form.Item>
//               <Form.Item className={styles.formItem}>
//                 <Button className={styles.button} htmlType="submit">
//                   <SearchOutlined />
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>

//         <Table columns={columns} dataSource={medicine} scroll={{ x: 1300 }} />
//       </div>
//       {/* <Ex /> */}
//       <AddMedicineModal
//         visible={isModalOpen2}
//         onCancel={handleModalCancel2}
//         onOk={handlseModalOk2}
//       />
//       <EditMedicineModal
//         visible={isModalOpen2}
//         onCancel={handleModalCancel2}
//         onOk={handlseModalOk2}
//         idMedicine = {idMedicine}
//       />
//     </>
//   );
// };

// export default Medicine;
// //HistoryMedicine

import styles from "./styles.module.scss";
import { useState } from "react";
import { Form, Input, Table, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
// import Ex from "./example";
import AddMedicineModal from "../../../components/modal/addMedicineModal";
import EditMedicineModal from "../../../components/modal/editMedicineModal";
import { useQuery } from "react-query";
import { getListMedicine } from "../../../api/admin";
interface DataType {
  // key: string;
  medicineName: string; //tên thuốc
  medicineForm: string; // dạng thuốc
  amount: number; //liều lượng
  usingMedicine: string; //cách sử dụng
  idMedicine: string; //mã thuốc
  ingredient: string; //thành phần chính
  sideEffect?: string; //tác dụng phụ
  barcode: string; //mã code
  origin?: string; // xuất xứ
  price: number; //giá
}
interface MedicineProps {}

const Medicine = () => {
  const [form] = Form.useForm();
  const onFinish = (value: any) => {
    console.log(value);
  };
  //set modal add new medicine
  //modal edit medcine 
  const [isModalOpen2, setIsModalOpen2] = useState(false);
const [idMedicine, setIdMedicine] =useState<any>();
  const showModal2 = (value:any) => {
    setIsModalOpen2(true);
    console.log(value);
    setIdMedicine(value);
  };

  const handlseModalOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleModalCancel2 = () => {
    setIsModalOpen2(false);
  
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã số",
      dataIndex: "idMedicine",
      key: "idMedicine",
      fixed: "left",
      width: 100,
    },
    {
      title: "Tên thuốc",
      dataIndex: "medicineName",
      key: "medicineName",
      fixed: "left",
      width: 170,
    },
    {
      title: "Phân loại",
      dataIndex: "medicineForm",
      key: "medicineForm",
      width: 100,
    },

    {
      title: "Liều lượng",
      key: "amount",
      dataIndex: "amount",
      width: 100,
    },
    {
      title: "Cách sử dụng",
      dataIndex: "usingMedicine",
      key: "usingMedicine",
      width: 100,
    },

    {
      title: "Thành phần hoạt chất chính",
      dataIndex: "ingredient",
      key: "ingredient",
      width: 220,
    },

    {
      title: "Tác dụng phụ",
      dataIndex: "sideEffect",
      key: "sideEffect",
      width: 190,
    },
    {
      title: "Mã vạch",
      dataIndex: "barcode",
      key: "barcode",
      width: 100,
    },

    { title: "Xuất xứ", dataIndex: "origin", key: "origin", width: 100 },
    {
      title: "giá tiền",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <button
          className="btn"
          onClick={() => {
            showModal2(1);
          }}
        >
          Chi tiết
        </button>
      ),
    },
  ];


  const data: DataType[] = [
    {
      idMedicine: "M01",
      medicineName: "Kháng sinh răng ",
      medicineForm: "ml",
      amount: 15,
      usingMedicine: "For Pain",
      sideEffect: "Headache",
      ingredient: "Acetaminophen",
      price: 12000,
      origin: "Canada",
      barcode: "654321"
  },
  {
    idMedicine: "M02",
    medicineName: "Fluoride Gel",
    medicineForm: "viên",
    amount: 2,
    usingMedicine: "For Pain",
    sideEffect: "Không",
    ingredient: "Acetaminophen",
    price: 12000,
    origin: "Canada",
    barcode: "1234"
},
{
  idMedicine: "M03",
  medicineName: "Kháng sinh răng ",
  medicineForm: "ml",
  amount: 15,
  usingMedicine: "For Pain",
  sideEffect: "Headache",
  ingredient: "Acetaminophen",
  price: 12000,
  origin: "Canada",
  barcode: "654321"
},
{
  idMedicine: "M04",
  medicineName: "Acetaminophen",
  medicineForm: "ml",
  amount: 20,
  usingMedicine: "For Pain",
  sideEffect: "Headache",
  ingredient: "Acetaminophen",
  price: 12000,
  origin: "Canada",
  barcode: "654321"
},
  
  ];
  
  return (
    <>
      {" "}
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.btn}>
            {" "}
            <Button className="btn" onClick={()=>{showModal2(undefined)}}>
              Thêm mới
            </Button>
          </div>
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

        <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      </div>
      {/* <Ex /> */}
      <AddMedicineModal
        visible={isModalOpen2}
        onCancel={handleModalCancel2}
        onOk={handlseModalOk2}
      />
      <EditMedicineModal
        visible={isModalOpen2}
        onCancel={handleModalCancel2}
        onOk={handlseModalOk2}
        idMedicine = {idMedicine}
      />
    </>
  );
};

export default Medicine;
//HistoryMedicine
