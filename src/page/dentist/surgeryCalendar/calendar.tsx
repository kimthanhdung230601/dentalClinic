import React from "react";
import { useState, useEffect } from "react";
import RoomList from "./roomList";
import styles from "./style.module.scss";
import { Col, Row } from "antd";
import moment from "moment";
import { useMutation, useQuery } from "react-query";
import { operator_name, SHIFTS } from "../../../util/constant";
import AddSurgery from "../../../components/modal";
import { getCalendarDental, getOperatorName } from "../../../api/admin";

interface CalendarProps {
  dates: string[];
  filter: any;
  selectedOperator?: any;
  setSelectedOperator?: Function;
  idCalendar?: any;
}
interface Operator {
  phoneNumber: number;
  idOperator: string;
  operatorName: string;
  operatorGmail: string;
  operatorDate: string;
  operatorSex: string;
  operatorAddress: string;
  operatorPosition: string;
  operatorLevel: string;
  operatorCertificate: string;
}

const CalendarCustom: React.FC<CalendarProps> = ({ dates, filter,selectedOperator }) => {

  //getCalendarDental
  const [currentDate, setCurrentPage] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  useEffect(() => {
    setCurrentPage(moment().format("YYYY-MM-DD"));
  }, []);

  const {
    data: calendar,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(["calendar", currentDate], () => getCalendarDental(currentDate));
  // console.log("calendar",calendar);
  const [idExam, setIdExam] = useState<any>(); // Khởi tạo state cho idExam

  useEffect(() => {
    if (calendar?.idExam) {
      setIdExam(calendar.idExam); // Cập nhật giá trị idExam khi calendar.idExam có giá trị
    }
  }, [calendar]);

  //list operator
  const { data: operator } = useQuery(["operator", calendar], () =>
    getOperatorName()
  );
  const [operatorNames, setOperatorNames] = useState<string[]>([]);

  useEffect(() => {
    if (operator) {
      const names = operator.map((op: Operator) => op.operatorName);
      setOperatorNames(names);
    }
  }, [operator]);
  //filter dental name
  const filteredOperatorNames = selectedOperator
    ? operatorNames.filter((name) => name === selectedOperator)
    : operatorNames;
    //styles col
    const columnWidth = 100 / filteredOperatorNames.length; // Tính toán độ rộng của mỗi cột dựa trên số lượng phòng
    const columnStyle = {
      flex: `0 0 ${columnWidth}%`,
      maxWidth: `${columnWidth}%`,
      width: `${columnWidth}%`,
    };
  //show calendar
  const value = (
    room: string,
    shift: string,
    date: string,
    examData: any[] // Dữ liệu từ JSON bạn nhận được
  ) => {
    // Tìm kiếm các sự kiện khớp với điều kiện
    const matchingExams = examData.filter(
      (exam) =>
        exam.controlDate === date &&
        exam.shift.toString() === shift &&
        exam.operatorName === room
    );

    // Kiểm tra nếu có sự kiện loại 3 (xin nghỉ)
    const hasLeaveRequest = matchingExams.find(
      (exam) => exam.typeCalendar === 3
    );

    // Kiểm tra nếu có sự kiện loại 4 (họp)
    const hasMeetingRequest = matchingExams.find(
      (exam) => exam.typeCalendar === 4
    );

    // Tìm sự kiện loại 2 (nếu có)
    const eventWithTypeTwo = matchingExams.find(
      (exam) => exam.typeCalendar === 2
    );

    if (hasLeaveRequest) {
      return (<>Lịch họp: {hasLeaveRequest.contentControl}</>);
    } else if (hasMeetingRequest) {
      return (<>Xin nghỉ: {hasMeetingRequest.contentControl}</>)
    } else if (eventWithTypeTwo) {
      // Nếu có sự kiện loại 2, hiển thị thông tin patientName và contentControl
      return (
        <>

          <div>Khám: {eventWithTypeTwo.patientName}</div>
          <div>Nội dung:{eventWithTypeTwo.contentControl}</div>
        </>
      );
    } else {
      return ""; // Nếu không có sự kiện nào khớp
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shift,setShift] = useState();
  const [date,setDate] = useState();
  const [operatorName,setOperatorName] = useState();
  const showModal = (idCalendar: any,shift:any,date:any,operatorName:any) => {
    setIsModalOpen(true);
    setIdExam(idCalendar);
    setShift(shift);
    setDate(date);
    setOperatorName(operatorName)
  };
  const handlseModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    refetch();
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.row}>
        <div className={styles.time}></div>
        {dates.map((date) => (
          <div key={date} className={styles.day}>
            <h2 className={styles.boder && styles.date} >{date}</h2>
            <div className={styles.roomList}>
              <RoomList
                rooms={filteredOperatorNames}
              />
            </div>
          </div>
        ))}
      </div>
      {SHIFTS.map((shift) => (
  <div className={styles.row} key={shift}>
    <div className={styles.time}>Kíp {shift}</div>{" "}
    {dates.map((date) => (
      <div key={date} className={styles.day} >
        <div className={styles.roomList} >
          <Row>
            {filteredOperatorNames.map((room, index) => {
              const matchingExams: any[] = calendar.filter(
                (exam: any) =>
                  exam.controlDate === date &&
                  exam.shift.toString() === shift &&
                  exam.operatorName === room
              );

              const idExamForCell = matchingExams.length
                ? matchingExams[0].idExam
                : null;

              return (
                <Col
                  span={24}
                  sm={Math.floor(24 / filteredOperatorNames.length)}
                  style={columnStyle}
                  key={index}
                  className={`${styles.record}`}
                  onClick={()=>{
                    showModal(idExamForCell,shift,date,room);
                  }}
                  // onClick={() => {
                  //   // showModal(idExamForCell,shift,date,exam.idOperator);
                  //   const idOperatorForCell = matchingExams.length
                  //   ? matchingExams[0].idOperator
                  //   : null;
                  // showModal(idExamForCell, shift, date, idOperatorForCell);
                  // }}
                >
                  {value(room, shift, date, calendar)}
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    ))}
  </div>
))}
      <AddSurgery
        visible={isModalOpen}
        onCancel={handleModalCancel}
        onOk={handlseModalOk}
        idExam={idExam}
        shift={shift}
        date={date}
        operatorName={operatorName}
      />
    </div>
  );
};

export default CalendarCustom;
