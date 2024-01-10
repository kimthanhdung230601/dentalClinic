import React, { useEffect, useState } from "react";
import CalendarCustom from "./calendar";
import { Col, Row, Calendar, Layout, ConfigProvider } from "antd";
import { Dayjs } from "dayjs";
import type { CalendarProps } from "antd";
import dayjs from "dayjs";
import Filter from "./filter";
import moment from "moment";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import DetailSchedule from "./inforSchedule";
import { setEndDate, setStartDate } from "../../../action/dentist";
import { DAY } from "../../../util/constant";
import BreadCrumb from "../../../components/Breadcrumb";
const cx = classNames.bind(styles);

const { Content } = Layout;

const SurgeryCalendar = () => {
  const [value, setValue] = useState(() => dayjs());
  const dispatch = useDispatch();

  const dentist = useSelector((state: any) => state.dentist);
  const [filter, setFilter] = useState({
    status_display: "many",
    start: dentist.startDate || moment(),
    end: dentist.endDate || undefined,
    dayLength: dentist.dayLength || undefined,
  });

  const onSelect = (newValue: Dayjs) => {
    // alert(newValue.format(DAY));
    setValue(newValue);
    setFilter((prev: any) => ({
      ...prev,
      start: newValue.format(DAY),
    }));
  };
  function getDaysInMonth(value: any): string[] {
    const { dayLength } = filter;
    const day = moment(value, DAY);
    const dates: string[] = [];

    for (let i = 0; i < dayLength; i++) {
      dates.push(day.format(DAY));
      day.add(1, "day");
    }

    return dates;
  }

  const dates: string[] = getDaysInMonth(filter.start);
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);

  return (
    <>
      <Row>
        <Col span={8}>
          {" "}
          <Content className={cx("content")}>
            <div>
              {" "}
              <ConfigProvider
                theme={{
                  components: {
                    Calendar: {
                      colorPrimary: "#2db7f5",
                    },
                  },
                }}
              >
                <Calendar
                  className={styles.wrap}
                  fullscreen={false}
                  onSelect={onSelect}
                />
              </ConfigProvider>{" "}
            </div>
          </Content>
          {/* <Content className={cx("content")}>
            {" "}
            <DetailSchedule />{" "}
          </Content> */}
        </Col>
        <Col span={16}>
          {" "}
          <Content className={cx("content")}>
            {" "}
            <Filter
              filter={filter}
              setFilter={setFilter}
              setValue={setValue}
              setSelectedOperator={setSelectedOperator}
              selectedOperator={selectedOperator}
            />
            <CalendarCustom
              dates={dates}
              filter={filter}
              selectedOperator={selectedOperator}
              setSelectedOperator={setSelectedOperator}
            />
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default SurgeryCalendar;
