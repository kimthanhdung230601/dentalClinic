import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Form, Input, Table, Tag, Tooltip, Button } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CaretRightOutlined,
  SearchOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import { getCalendarPatient } from "../../../api/admin";
import moment from "moment";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  idExam: string;
  idPatient: string;
  patientName: string;
  phoneNumber: number;
  state: number|string;
  contentControl: string;
  numericalOrder: string;
  dentalName: string;
  statusExam: string | number;
  // records: {
  //   // Union type for statusExam
  // };
}

interface PatientTableProps {
  date: any;
  setValue?: Function;
}

const onFinish = (values: any) => {
  console.log("Success:", values);
};
const PatientTable = ({ date, setValue }: PatientTableProps) => {
  const day = date.format("YYYY-MM-DD");
  const [form] = Form.useForm();
  const [currentDate, setCurrentPage] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const navigate = useNavigate();
  useEffect(() => {
    setCurrentPage(moment().format("YYYY-MM-DD"));
  }, []);

  const {
    data: product,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["product", day], () => getCalendarPatient(day));
  const handlePreviousDay = () => {
    const previousDate = moment(date).subtract(1, "day");
    if (setValue) {
      setValue(previousDate);
    } else {
      console.error("setValue function is undefined");
    }
  };

  const handleNextDay = () => {
    const nextDate = moment(date).add(1, "day");
    if (setValue) {
      setValue(nextDate);
    } else {
      console.error("setValue function is undefined");
    }
  };
  const handleDetalCalendar = (idExam: any, idPatient: any) => {

    navigate(`/patient/examinationInfor/${idExam}/${idPatient}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Họ tên",
      dataIndex: "patientName",
      key: "patientName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },

    {
      title: "Trạng thái",
      key: "state",
      dataIndex: "state",
      render: (_, { state }) => {
        let color;
        let text;

        if (state === 0) {
          color = "#1890ff";
          text = "Khám lần đầu";
        } else if (state === 1) {
          color = "#87d068";
          text = "Tái khám";
        }

        return (
          <>
            <Tag color={color}>{text}</Tag>
          </>
        );
      },
    },
    {
      title: "Nội dung",
      dataIndex: "contentControl",
      key: "contentControl",
    },
    {
      title: "Mã số khám bệnh",
      dataIndex: "numericalOrder",
      key: "numericalOrder",
    },
    {
      title: "Nha sĩ phụ trách",
      dataIndex: "operatorName",
      key: "operatorName",
      filters: [
        {
          text: "JohnJohnyy",
          value: "Nguyen Van A",
        },
        {
          text: "Nguyễn Minh Châu",
          value: "Nguyen Van B",
        },
        {
          text: "Nguyen Van A",
          value: "Nguyen Van C",
        },
      ],
      onFilter: (value: any, rec) => rec.dentalName.indexOf(value) === 0,
      //  onFilter: (value: string, record) => record.dentalName.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (

            <button
              className="btn"
              onClick={() =>
                handleDetalCalendar(record.idExam, record.idPatient)
              }
            >
              Chi tiết
            </button>

        );
      },
    },
    {
      title: "",
      key: "statusExam",
      render: (_, records) => {
        let icon = null;

        if (records.statusExam === 1) {
          icon = (
            <Tooltip title="Đã khám" placement="rightTop">
              <CheckCircleTwoTone
                twoToneColor="#87d068"
                style={{ fontSize: "21px" }}
              />
            </Tooltip>
          );
        }
        if (records.statusExam === 0) {
          icon = null;}

        if (records.statusExam === 2) {
          icon = (
            <Tooltip title="Bỏ lượt" placement="rightTop">
              <CloseCircleTwoTone
                twoToneColor="#ff0000"
                style={{ fontSize: "21px" }}
              />
            </Tooltip>
          );
        }

        return <>{icon}</>;
      },
    },

  ];
  return (
    <>
      <div className={styles.patientTableWrap}>
        <div className={styles.btnGroup}>
          <div>
            <button className="btn" onClick={handlePreviousDay}>
              <CaretLeftOutlined />
            </button>
            {/* <input className={styles.input} /> */}
            <label className={styles.label}>{day}</label>
            <button className="btn" onClick={handleNextDay}>
              <CaretRightOutlined />
            </button>
          </div>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className={styles.form}
            form={form}
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
        <div className={styles.table}>
          <Table columns={columns} dataSource={product} />
        </div>
      </div>
    </>
  );
};

export default PatientTable;
