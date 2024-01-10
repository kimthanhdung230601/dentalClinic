import styles from "./style.module.scss";
import { Button, Col, Row } from "antd";

const DetailSchedule = () => {
  return (
    <>
      <h3>Nội dung</h3>
      <div className={`${styles.boder}`}>
        <Row>
          <Col span={6} className={`${styles.title}  ${styles.boder}`}>
            Phân loại
          </Col>
          <Col span={18} className={`${styles.title}  ${styles.boder}`}></Col>
        </Row>
        <Row>
          <Col span={6} className={`${styles.title}  ${styles.boder}`}>
            Nha sĩ
          </Col>
          <Col span={18} className={`${styles.title}  ${styles.boder}`}></Col>
        </Row>
        <Row>
          <Col span={6} className={`${styles.title}  ${styles.boder}`}>
            Thời gian
          </Col>
          <Col span={18} className={`${styles.title}  ${styles.boder}`}></Col>
        </Row>
        <Row>
          <Col span={6} className={`${styles.title}  ${styles.boder}`}>
            Bệnh nhân
          </Col>
          <Col span={18} className={`${styles.title}  ${styles.boder}`}></Col>
        </Row>
        <Row>
          <Col span={6} className={`${styles.title}  ${styles.boder}`}>
            Nội dung
          </Col>
          <Col span={18} className={`${styles.title}  ${styles.boder}`}></Col>
        </Row>
      </div>{" "}
      <div className={styles.btn}>
        <button className="second-btn">Xóa</button>
      </div>
    </>
  );
};
export default DetailSchedule;
