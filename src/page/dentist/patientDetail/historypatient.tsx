import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Table, TableColumnsType } from "antd";
import { useQuery } from "react-query";
import {
  getHistoryPatient,
  getHistoryPatientMedicine,
} from "../../../api/admin";
import axios from "axios";

interface DataType {
  key: React.Key;
  idExam: string;
  toothPosion: string;
  contentControl: string;
  controlDate: any;
  statusExam: number;
  state: number;
  numericalOrder: number;
  patientName: string;
  operatorName: string;
}

interface ExpandedDataType {
  key: React.Key;
  medicineName: string;
  medicineForm: string;
  amount: number;
  using: string;
  priceMedicine: number;
}

interface HistoryMedicineProp {
  idPatient: any;
}

const HistoryMedicine = ({ idPatient }: HistoryMedicineProp) => {
  const [listMedicine, setListMedicine] = useState<ExpandedDataType[]>([]);
  const [selectedIdExam, setSelectedIdExam] = useState<string | null>(null);
  const [expandedRowKey, setExpandedRowKey] = useState<string | null>(null);

  const fetchMedicineData = async (idExam: string) => {
    try {
      const res = await axios.get(`http://localhost:8080/exams/medicine?idExam=${idExam}`);
      setListMedicine(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    if (selectedIdExam && expandedRowKey === selectedIdExam) {
      fetchMedicineData(selectedIdExam);
    }
  }, [selectedIdExam, expandedRowKey]);
  const columnsForMedicine: TableColumnsType<ExpandedDataType> = [
    { title: "Tên thuốc", dataIndex: "medicineName", key: "medicineName" },
    { title: "Dạng thuốc", dataIndex: "medicineForm", key: "medicineForm" },
    { title: "Liều lượng", dataIndex: "amount", key: "amount" },
    { title: "Cách sử dụng", dataIndex: "usingMedicine", key: "usingMedicine" },
  ];

  const columns: TableColumnsType<DataType> = [
    { title: "Mã khám bệnh", dataIndex: "idExam", key: "idExam" },
    { title: "Vị trí răng", dataIndex: "toothPosion", key: "toothPosion" },
    { title: "Nội dung", dataIndex: "contentControl", key: "contentControl" },
    { title: "Ngày khám", dataIndex: "controlDate", key: "controlDate" },
    {
      title: "Nha sĩ phụ trách",
      dataIndex: "operatorName",
      key: "operatorName",
    },
    {
      title: "Trạng thái",
      dataIndex: "state",
      key: "state",
      render: (state: number) => {
        return state === 0 ? "Khám lần đầu" : "Tái khám";
      },
    },
    { title: "STT", dataIndex: "numericalOrder", key: "numericalOrder" },
  ];

  const { data: historyPatient } = useQuery(["history"], () =>
    getHistoryPatient(idPatient)
  );
  const historyPatientWithKey = historyPatient?.map(
    (item: any, index: any) => ({
      ...item,
      key: index.toString(),
    })
  );
  const handleExpand = (expanded: boolean, record: DataType) => {
    if (expanded) {
      setSelectedIdExam(record.idExam);
      setExpandedRowKey(record.idExam);
    } else {
      setExpandedRowKey(null);
    }
  };

  return (
    <div className={styles.wrap}>
      <h3>Lịch sử khám</h3>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => {
            handleExpand(record.idExam === expandedRowKey, record);
            return (
              <Table
                columns={columnsForMedicine}
                dataSource={listMedicine}
                pagination={false}
              />
            );
          },
          defaultExpandedRowKeys: ["1"],
          onExpand: (expanded, record) => handleExpand(expanded, record),
        }}
        dataSource={historyPatientWithKey}
      />

    </div>
  );
};

export default HistoryMedicine;

