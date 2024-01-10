import { Col, Row, Table } from "antd";
import { useQuery } from "react-query";
import {
  addListMedicineExam,
  deleteListMedicineExam,
  getListMedicine,
  getListMedicineExam,
} from "../../../api/admin";
import styles from "./styles.module.scss";

interface MedicineForPatientProps {
  idExam: any;
}
interface DataType {
  key: React.Key;
  medicineName: string;
  usingMedicine: string;
  sideEffect: string;
  price:number,

}

// const MedicineForPatient = ({ idExam }: MedicineForPatientProps) => {
//   //thuốc
//   const columns1 = [
//     {
//       title: "Tên thuốc",
//       dataIndex: "medicineName",
//       key: "medicineName",
//     },
//     {
//       title: "Hướng dẫn sử dụng",
//       dataIndex: "usingMedicine",
//       key: "usingMedicine",
//     },
//     {
//       title: "Tác dụng phụ",
//       dataIndex: "sideEffect",
//       key: "sideEffect",
//     },
//     {
//       title: "Giá",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (record: any) => {
//         return (
//           <button
//             className="btn"
//             onClick={() => {
//               handleAddMedicine(record.idMedicine);
//             }}
//           >
//             Thêm
//           </button>
//         );
//       },
//     },
//   ];
//   //thành đơn
//   const columns2 = [
//     {
//       title: "Tên thuốc",
//       dataIndex: "medicineName",
//       key: "medicineName",
//     },
//     {
//       title: "Hướng dẫn sử dụng",
//       dataIndex: "usingMedicine",
//       key: "usingMedicine",
//     },
//     {
//       title: "Tác dụng phụ",
//       dataIndex: "sideEffect",
//       key: "sideEffect",
//     },
//     {
//       title: "Giá",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (record: any) => {
//         return (
//           <button
//             className="warning-btn"
//             onClick={() => handleDeleteMedicine(record.idMedicine)}
//             // onClick={() =>

//             // }
//           >
//             Xóa
//           </button>
//         );
//       },
//     },
//   ];
//   //thuốc của bệnh nhân
//   const {
//     data: patient,
//     isFetching: patientFetching,
//     refetch: patientRefetch,
//   } = useQuery(["product", idExam], () => getListMedicineExam(idExam));
//   //   console.log(product);
//   //danh sách thuốc
//   const {
//     data: medicine,
//     isFetching: medicineFetching,
//     refetch: medicineRefetch,
//   } = useQuery(["product"], () => getListMedicine());
//   //   console.log(product);
//   //thêm thuốc vào đơn
//   const handleAddMedicine = async (value: any) => {
//     const payload = {
//       idExam: idExam,
//       idMedicine: value,
//     };
//     try {
//       const res = await addListMedicineExam(payload);
//       patientRefetch();
//     //   console.log(payload);
//     } catch (error) {
//       alert("thuốc đã được thêm");
//     }
//   };
//   //xóa thuốc khỏi đơn
//   const handleDeleteMedicine = async (value: any) => {
//     const payload = {
//       idExam: idExam,
//       idMedicine: value,
//     };
//     try {
//       const res = await deleteListMedicineExam(payload);
//       patientRefetch();
//     //   console.log(payload);
//     } catch (error) {
//       alert("thuốc đã được thêm");
//     }
//   };
//   return (
//     <>
//       <div className={styles.wrapMedicine}>
//         <Row>
//           <Col>
//             <div className={styles.block}>
//               <h3 className={styles.title}>Thuốc</h3>
//               <Table dataSource={medicine} columns={columns1} />;
//             </div>
//           </Col>
//           <Col>
//             <div  className={styles.block}>
//               <h3 className={styles.title}>Thành đơn</h3>
//               <Table dataSource={patient} columns={columns2} />;
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };
const MedicineForPatient = ({ idExam }: MedicineForPatientProps) => {
  //thuốc
  const columns1 = [
    {
      title: "Tên thuốc",
      dataIndex: "medicineName",
      key: "medicineName",
    },
    {
      title: "Hướng dẫn sử dụng",
      dataIndex: "usingMedicine",
      key: "usingMedicine",
    },
    {
      title: "Tác dụng phụ",
      dataIndex: "sideEffect",
      key: "sideEffect",
    },
    {
      title: "",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => {
        return (
          <button
            className="btn"
            onClick={() => {
           
            }}
          >
            Thêm
          </button>
        );
      },
    },
  ];
  //thành đơn
  const columns2 = [
    {
      title: "Tên thuốc",
      dataIndex: "medicineName",
      key: "medicineName",
    },
    {
      title: "Hướng dẫn sử dụng",
      dataIndex: "usingMedicine",
      key: "usingMedicine",
    },
    {
      title: "Tác dụng phụ",
      dataIndex: "sideEffect",
      key: "sideEffect",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => {
        return (
          <button
            className="warning-btn"
          
          >
            Xóa
          </button>
        );
      },
    },
  ];
  //thuốc của bệnh nhân
  
  //danh sách thuốc
  const data1: DataType[] = [];
  for (let i = 0; i < 7; i++) {
    data1.push({
      key: i,
      medicineName: "Thuốc giản sưng",
      usingMedicine: "sau ăn",
      sideEffect: "không có",
      price:20000,

    });
  }
  const data2: DataType[] = [];
  for (let i = 0; i < 4; i++) {
    data2.push({
      key: i,
      medicineName: "Thuốc giản sưng",
      usingMedicine: "sau ăn",
      sideEffect: "không có",
      price:20000,

    });
  }
  return (
    <>
      <div className={styles.wrapMedicine}>
        <Row>
          <Col>
            <div className={styles.block}>
              <h3 className={styles.title}>Thuốc</h3>
              <Table dataSource={data1} columns={columns1} />;
            </div>
          </Col>
          <Col>
            <div  className={styles.block}>
              <h3 className={styles.title}>Thành đơn</h3>
              <Table dataSource={data2} columns={columns2} />;
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MedicineForPatient;
