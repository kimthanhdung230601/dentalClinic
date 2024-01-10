import { Button, Col, Row } from "antd";
import styles from "./style.module.scss";
import { useMemo } from "react";
interface AutoFillTeethProp {
  selectedCircle: number[];
  setSelectedCircle:(list:number[])=>void
}
const AutoFillTeeth = ({ selectedCircle,setSelectedCircle}: AutoFillTeethProp) => {
  const onClear = () => {
    setSelectedCircle([]);
  };
  

  return (
    <div className={styles.autoFillWrap}>
      <p>Vị trí răng</p>
      <Row>
        <Col>
        <div className={styles.block}>
            {selectedCircle?.map((letter, index) => (
              <span key={index}>{letter} </span>
            ))}
          </div>
        </Col>
        <Col>
          <Button 
            type="primary"
            danger
            className={`${styles.btnFill} ${styles.btnClear}`}
            onClick={() => {
              onClear();
            }}
          >
            XÓA
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AutoFillTeeth;
