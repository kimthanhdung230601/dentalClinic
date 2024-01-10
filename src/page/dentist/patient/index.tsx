// import type { ColumnsType } from "antd/es/table";
// import Table from "antd/es/table";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.scss";
// import BreadCrumb from "../../../components/Breadcrumb";
// import { useQuery } from "react-query";
// import { getListPatient } from "../../../api/admin";
// interface PatientsProps {}
// interface DataType {
//   idPatient: number;
//   patientName: string;
//   phoneNumber: number;
//   patientGmail?: string;
//   patientDate?: string;
//   patientSex?: string;
//   patientAddress?: string;
// }
// const collums: ColumnsType<DataType> = [
//   { title: "Mẫ số", dataIndex: "idPatient", key: "idPatient" },
//   { title: "Họ tên", dataIndex: "patientName", key: "patientName" },
//   { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
//   { title: "Gmail", dataIndex: "patientGmail", key: "patientGmail" },
//   { title: "Ngày sinh", dataIndex: "patientDate", key: "patientDate" },
//   { title: "Giới tính", dataIndex: "patientSex", key: "patientSex" },
//   { title: "Địa chỉ", dataIndex: "patientAddress", key: "patientAddress" },

//   {
//     // title: "Action",
//     key: "action",
//     render: (_, record) => {
//       return (
//         <>
//           <Link to={`/patients/detail/${record.idPatient}`}>
//             <button className="btn">Chi tiết</button>
//           </Link>{" "}
//         </>
//       );
//     },
//   },
// ];
// //
// const Patients = () => {
//   const { data: patient } = useQuery(["calendar"], () => getListPatient());

//   return (
//     <>

//       <div className={styles.wrap}>
//         {" "}
//         <Table columns={collums} dataSource={patient} />
//       </div>
//     </>
//   );
// };

// export default Patients;
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import BreadCrumb from "../../../components/Breadcrumb";
import { useQuery } from "react-query";
import { getListPatient } from "../../../api/admin";
interface PatientsProps {}
interface DataType {
  idPatient: string;
  patientName: string;
  phoneNumber: number;
  patientGmail?: string;
  patientDate?: string;
  patientSex?: string;
  patientAddress?: string;
}
const collums: ColumnsType<DataType> = [
  { title: "Mẫ số", dataIndex: "idPatient", key: "idPatient" },
  { title: "Họ tên", dataIndex: "patientName", key: "patientName" },
  { title: "Số điện thoại", dataIndex: "phoneNumber", key: "phoneNumber" },
  { title: "Gmail", dataIndex: "patientGmail", key: "patientGmail" },
  { title: "Ngày sinh", dataIndex: "patientDate", key: "patientDate" },
  { title: "Giới tính", dataIndex: "patientSex", key: "patientSex" },
  { title: "Địa chỉ", dataIndex: "patientAddress", key: "patientAddress" },

  {
    // title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <>
          <Link to={`/patients/detail/${1}`}>
            <button className="btn">Chi tiết</button>
          </Link>{" "}
        </>
      );
    },
  },
];
const data: DataType[] = [
  {
    idPatient: "P01",
    patientName: "Vi Vi",
    phoneNumber: 19715609,
    patientGmail: "Vivi@gmail.com",
    // patientDate: string;
    patientSex: "Nam",
    patientAddress: "Hà Nội",
  },
  {
    idPatient: "P02",
    patientName: "Nguyễn Minh Châu",
    phoneNumber: 91123456,
    patientGmail: "Chau@gmail.com",
    // patientDate: string;
    patientSex: "Nữ",
    patientAddress: "Hà Nội",
  },
  {
    idPatient: "P03",
    patientName: "Hoài Nam",
    phoneNumber: 19715609,
    patientGmail: "NamHoai@gmail.com",
    // patientDate: string;
    patientSex: "Nam",
    patientAddress: "Hà Nội",
  },
  {
    idPatient: "P04",
    patientName: "Vy Anh",
    phoneNumber: 19715609,
    patientGmail: "Vivi@gmail.com",
    // patientDate: string;
    patientSex: "Nam",
    patientAddress: "Hà Nội",
  },
];
const Patients = () => {
  return (
    <>
      <div className={styles.wrap}>
        {" "}
        <Table columns={collums} dataSource={data} />
      </div>
    </>
  );
};

export default Patients;
