import { Button, Select, Modal } from "antd";
import { setDayLength, setStatusDisplay } from "../../../action/dentist";
import type { SelectProps } from "antd";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useState,useEffect} from "react";
import moment from "moment";
import dayjs from "dayjs";
import { DAY } from "../../../util/constant";
import AddSurgery from "../../../components/modal";
import { getOperatorName } from "../../../api/admin";

interface TProps {
  filter?: any;
  setFilter?: Function;
  payload?: number;
  setPayload?: Function;
  setValue?: Function;
  setSelectedOperator:Function;
  selectedOperator:any;
}
interface Operator {
  phoneNumber: number;
  idOperator: string;
  operatorName: string;
  
}
function Filter(props: TProps) {
  const { filter, setFilter, payload, setPayload, setValue ,setSelectedOperator,selectedOperator} = props;
  const onSearch = (value: string) => {};
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handlseModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  //list operator
  const { data: operator } = useQuery(["operator"], () =>
    getOperatorName()
  );
  const [operatorNames, setOperatorNames] = useState<string[]>([]);

  useEffect(() => {
    if (operator) {
      const names = operator.map((op: Operator) => op.operatorName);
      setOperatorNames(names);
    }
  }, [operator]);

  const allOperatorNames = [...operatorNames]; // Tạo một bản sao của mảng operatorNames
  allOperatorNames.unshift("Tất cả"); // Thêm giá trị "All" vào đầu mảng
  
  const transformedOperatorNames = allOperatorNames.map((name, index) => ({
    value: name,
    label: name,
  }));
  //filter tên nha sĩ
 const onChange = (value: string) => {
    setSelectedOperator(value);
  };

  const [operatorName, setOperatorName] = useState<string>("");
  return (
  
    <>
      <div className={styles.row1}>
        {" "}
        <span className={styles.col}>
          <button
            className="btn-none-boder "
            onClick={
              () => {
                //   setValue?.(() => dayjs());
                setFilter?.((prev: any) => ({
                  ...prev,
                  start: moment(prev.start, DAY).subtract(1, "days"),
                }));
              }
              //
            }
          >
            <CaretLeftOutlined />
          </button>
          <Button
            className={styles.btnFilter}
            onClick={() => {
              setValue?.(() => dayjs());
              setFilter?.((prev: any) => ({
                ...prev,
                start: moment(),
              }));
            }}
          >
            {" "}
            Hôm nay
          </Button>
          <button
            className="btn-none-boder "
            onClick={() =>
              setFilter?.((prev: any) => ({
                ...prev,
                start: moment(prev.start, DAY).add(1, "days"),
              }))
            }
          >
            <CaretRightOutlined />
          </button>
        </span>
        <span className={styles.col}>
          <Button className={styles.btnChoosen} onClick={showModal}>
            Đăng ký lịch 
          </Button>
        </span>
        <span className={styles.col}>
          {" "}
          <Button
            className={`${
              filter?.status_display == "many"
                ? styles.btnChoosen
                : styles.btnUsually
            }`}
            onClick={() => {
              setFilter?.((prev: any) => ({
                ...prev,
                status_display: "many",
                dayLength: 5,
              }));
              dispatch(setStatusDisplay("many"));
              dispatch(setDayLength(5));
            }}
          >
            Hiển thị bình thường
          </Button>
          <Button
            className={`${
              filter?.status_display == "one"
                ? styles.btnChoosen
                : styles.btnUsually
            }`}
            onClick={() => {
              setFilter?.((prev: any) => ({
                ...prev,
                status_display: "one",
                dayLength: 1,
              }));
              dispatch(setStatusDisplay("one"));
              dispatch(setDayLength(1));
            }}
          >
            Hiển thị một ngày
          </Button>
        </span>{" "}
      </div>

      <div className={styles.select}>
        {/* <div className={styles.selectItem}>
          <label>Phân loại:</label>
          <Select
            showSearch
            style={{ width: "40vh" }}
            placeholder="Phân loại lịch"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "2",
                label: "Lịch khám",
              },
              {
                value: "3",
                label: "Lịch nghỉ",
              },
              {
                value: "4",
                label: "Lịch họp",
              },
            ]}
          />
        </div> */}

        <div className={styles.selectItem}>
          <label>Nha sĩ:</label>
          <Select
            showSearch
            style={{ width: "40vh" }}
            placeholder="Chọn nha sĩ"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={transformedOperatorNames}
          />
        </div>
        <AddSurgery
          visible={isModalOpen}
          onCancel={handleModalCancel}
          onOk={handlseModalOk}
          // operatorName={operatorName}
          // setOperatorName={setOperatorName}
        />
          {/* <AddSurgery />
        </Modal> */}
      </div>
    </>
  );
}

export default Filter;
