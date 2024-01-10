import { Breadcrumb } from "antd";

interface BreadCrumbProps {}

const BreadCrumb = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="/surgeryCalendar">Lịch phẫu thuật</a>,
          },
          {
            title: <a href="/patients">Bệnh nhân</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </>
  );
};

export default BreadCrumb;
