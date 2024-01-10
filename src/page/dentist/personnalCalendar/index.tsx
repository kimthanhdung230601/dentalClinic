import type { Dayjs } from "dayjs";
import React, { useState } from "react";
import { Calendar, ConfigProvider, theme } from "antd";
import type { CalendarProps } from "antd";
import styles from "./styles.module.scss";
import Noti from "./noti";
import PatientList from "./patientList";
import PatientTable from "./patientTable";
import dayjs from "dayjs";
interface PersonalCalendarProps {}
const PersonalCalendar = () => {

  const [value, setValue] = useState(() => dayjs());
  const onSelect = (value: Dayjs) => {
    setValue(value);
  };

  return (
    <>
      <div className={styles.wrapper}>
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
        </ConfigProvider>
        <Noti />
        <PatientList />
      </div>
      <div className={styles.wrap}>
      <PatientTable date={value} setValue={setValue} />
      </div>
    </>
  );
};

export default PersonalCalendar;
