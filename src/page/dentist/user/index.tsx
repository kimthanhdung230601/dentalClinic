import React from "react";
import { useState } from "react";
import {
  Avatar,
  Col,
  Row,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox,
} from "antd";

import styles from "./styles.module.scss";
import { userName, ID } from "../../../util/constant";
const { Option } = Select;

const User = () => {
  const [form] = Form.useForm<{ name: string; id: number }>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  return (
    <>
      <Row className={styles.wrap}>
        <Col span={6}>
          <div className={styles.wrapAvatar}>
            <div className={styles.avatar}>
              {" "}
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                style={{ backgroundColor: "#7265e6" }}
              >
                {userName}
              </Avatar>
            </div>
            <div className={styles.label}>
              <label>Chức vụ</label>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className={styles.wrapInfor}>
            <Checkbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Form disabled
            </Checkbox>

            <h3 className={styles.title}>Thông tin bác sĩ</h3>
            <div className={styles.form}>
              <Form
                form={form}
                wrapperCol={{ span: 20 }}
                onFinish={onFinish}
                layout="vertical"
                disabled={componentDisabled}
              >
                <Row>
                  <Col span={12}>
                    <Form.Item label="Mã số" name="IdDentist">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="Gmail"
                      name="gmail"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Số điện thoại"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="Ngày sinh"
                      name="dateOfBirth"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Giới tính"
                      name="sex"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Select placeholder="Giới tính">
                        <Option value="Male">Nam</Option>
                        <Option value="Female">Nữ</Option>
                        <Option value="other">Khác</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label="Địa chỉ" name="Address">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Chức vụ"
                      name="position"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item
                      label="Đơn vị công tác"
                      name="workUnit"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Select placeholder="Đơn vị công tác">
                        <Option value="value1">
                          Phòng khám nha khoa cơ sở Hà Đông
                        </Option>
                        <Option value="value2">
                          Phòng khám nha khoa cơ sở Hai Bà Trưng
                        </Option>
                        <Option value="value3">
                          Phòng khám nha khoa cơ sở Mê Linh
                        </Option>
                        <Option value="value4">
                          Phòng khám nha khoa cơ sở Đống Đa
                        </Option>
                        <Option value="value5">
                          Phòng khám nha khoa cơ sở Đông Anh
                        </Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Trình độ học vấn" name="level">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item label="Chứng chỉ (nếu có)" name="certificate">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button className="second-btn" htmlType="submit">
                        Lưu
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default User;
