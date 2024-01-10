import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalendarFilled,
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
  MedicineBoxFilled,
  ReconciliationOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Flex } from "antd";
import styles from "./style.module.scss";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import DentalList from "../dentalList";
import Cookies from "js-cookie";
import { userName } from "../../../util/constant";
const { Header, Sider, Content } = Layout;
type MenuItem = {
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  label: React.ReactNode;
  type?: "group";
  onClick?: () => void; // Correct the type of onClick
};
//

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  to?: string, // Make 'to' an optional parameter
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label: to ? <Link to={to}>{label}</Link> : label, // Conditionally wrap the label with the Link component
    type,
  };
}

const items: MenuItem[] = [
  getItem("Lịch làm việc", "calendar", <CalendarFilled />, "/", [
    getItem("Bệnh nhân", "", undefined, "/"),
    getItem("Nha sĩ", "surgeryCalendar", undefined, "/surgeryCalendar"),
  ]),
  getItem(
    "Danh sách bệnh nhân",
    "patients",
    <UnorderedListOutlined />,
    "/patients"
  ),
  getItem("Danh sách nha sĩ","dentalList", <ReconciliationOutlined />, "/dentailList"),
  getItem("Thuốc", "medicine", <MedicineBoxFilled />, "/medicine"),
  // getItem("Thông tin cá nhân", "user", <UserOutlined />, "/user"),
  getItem("Đăng xuất", "log", <LogoutOutlined />, "/logout"),
];

const Home = () => {
  const location = useLocation();
  const parts = location.pathname.split("/");
  const value = parts[parts.length - 1];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.sider}
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 50px 0px rgba(156, 153, 189, 0.25)",
          height: "100vh",
        }}
      >
        <div className={styles.siderImg}>
          <img
            src={require("../../../assets/img/logoText.png")}
            className={styles.img}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[value]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className={styles.header}
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className={styles.menu}>
            <div className={styles.iconInforWrap}>
              {" "}
              <BellOutlined className={styles.iconInfor} />
            </div>

            <div className={styles.information}>
              <div className={styles.imgWrap}>
                {" "}
                <img
                  className={styles.avatar}
                  src={require("../../../assets/img/logo.png")}
                />
              </div>
              <div className={styles.userName}>{userName}</div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
