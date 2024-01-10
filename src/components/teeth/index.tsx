import { Button, Col, Layout, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import TeethIllustration from "./TeethIllustration";
import { useEffect, useState } from "react";
import ClickFilter from "./clickFilter";
import AutoFillTeeth from "./autoFillTeeth";
const { Content } = Layout;
interface TeethProps {
  toothPosion?: any;
  selectedCircle: number[];
  setSelectedCircle:(list:number[])=>void
}

const Teeth = ({ toothPosion,setSelectedCircle,selectedCircle }: TeethProps) => {
  useEffect(() => {
    if (toothPosion) {
      // const positionsArray = toothPosion.split(",").map(Number);
      const positionsArray = toothPosion;
      setSelectedCircle(positionsArray);
    }
  }, [toothPosion, setSelectedCircle]);
  return (
    <Content className={`${styles.content}`}>
      <div>
        <h3>Vị trí răng</h3>
      </div>
      <Row>
        <Col span={10}>
          <TeethIllustration
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />
        </Col>
        <Col span={14}>
          <ClickFilter
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />
          <AutoFillTeeth
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />
        </Col>
      </Row>
      {/* <div className={styles.btnGroup}>
        <Button>Cancel</Button>
        <Button className={styles.btnFill} type="primary">
          Save
        </Button>
      </div> */}
    </Content>
  );
};

export default Teeth;
//
