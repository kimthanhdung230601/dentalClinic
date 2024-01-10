import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
import { logIn } from "../../../api/admin";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
interface LogInProps {}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LogIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const payload = values;
      console.log("payload",payload);
      const res = await logIn(values);
      if(res) alert("Đăng nhập thành công");
      Cookies.set("token",res.token);
      Cookies.set("idOperator",res?.user.idOperator);
      Cookies.set("isOperator",res?.user.isOperator);
      Cookies.set("operatorName", res?.user.operatorName);
      Cookies.set("operatorGmail",res?.user.operatorGmail);
      Cookies.set("operatorDate",res?.user.operatorDate);
      Cookies.set("operatorSex",res?.user.operatorSex);
      Cookies.set("operatorAddress",res?.user.operatorAddress);
      Cookies.set("operatorPosition",res?.user.operatorPosition);
      Cookies.set("operatorLevel",res?.user.operatorLevel);
      Cookies.set("operatorCertificate",res?.user.operatorCertificate);
      Cookies.set("idAddressWork",res?.user.idAddressWork);
      
      navigate("/");
    } catch (error:any) {
     alert("Đăng nhập thất bại");
     
    }
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <Form
          {...layout}
          form={form}
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>Dental Clinic</h1>
          <Form.Item
            label="só điện thoại"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>
              Đăng nhập
            </Button>
            <Button  htmlType="submit">
              Quên mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
