import { Button, Col, Row, Form, Input, Select } from "antd";
//
import styles from "./style.module.scss";
import {
  ALL_TEETH,
  ALL_TEETH_CHILD,
  ALL_BOTTOM_TEETH,
  ALL_TOP_TEETH,
  ALL_TOP_CHILD,
  ALL_BOTTOM_CHILD,
} from "../../util/constant";
const { Option } = Select;
interface SelectProps {
  selectedCircle: number[];
  setSelectedCircle: (list: number[]) => void;
}

const ClickFilter = ({ selectedCircle, setSelectedCircle }: SelectProps) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  //---------
  const mergeArr = (items: number[]) => {
    selectedCircle.forEach((item: number) => {
      if (!items.includes(item)) items.push(item);
    });
    return items;
  };
  const onMergeArr = (items: number[]) => {
    setSelectedCircle(mergeArr(items));
    console.log(items);
  };
  return (
    <>
      <div className={styles.btnWrap}>
        <Form
          form={form}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          layout="vertical"
        >
          {" "}
          <Form.Item label="Phương pháp điều trị" name="method">
            <Select placeholder="Phương pháp">
              <Option value="Male">Niềng răng</Option>
              <Option value="Female">Nhổ răng</Option>
              <Option value="other">Nhổ răng khôn</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>{" "}
      <div className={styles.btnWrap}>
        <Row gutter={16}>
          <Col span={10}>
            <p>Người lớn</p>
          </Col>
          <Col span={10}>
            <p>Trẻ em</p>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            <Button
              className={`${styles.btnFill} ${styles.btn} `}
              onClick={() => {
                onMergeArr(ALL_TEETH);
              }}
            >
              Lựa chọn cả hàm
            </Button>
          </Col>
          <Col span={10}>
            <Button
              className={`${styles.btnFill} ${styles.btn} ${styles.btn}`}
              onClick={() => {
                onMergeArr(ALL_TEETH_CHILD);
              }}
            >
              Lựa chọn cả hàm
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            <Button
              className={`${styles.btnFill} ${styles.btn}`}
              onClick={() => {
                onMergeArr(ALL_TOP_TEETH);
              }}
            >
              Lựa chọn hàm trên
            </Button>
          </Col>
          <Col span={10}>
            <Button
              className={`${styles.btnFill} ${styles.btn}`}
              onClick={() => {
                onMergeArr(ALL_TOP_CHILD);
              }}
            >
              Lựa chọn hàm trên
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={10}>
            {" "}
            <Button
              className={`${styles.btnFill} ${styles.btn} `}
              onClick={() => {
                onMergeArr(ALL_BOTTOM_TEETH);
              }}
            >
              Lựa chọn hàm dưới
            </Button>
          </Col>
          <Col span={10}>
            {" "}
            <Button
              className={`${styles.btnFill} ${styles.btn} ${styles.btn}`}
              onClick={() => {
                onMergeArr(ALL_BOTTOM_CHILD);
              }}
            >
              Lựa chọn hàm dưới
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ClickFilter;
