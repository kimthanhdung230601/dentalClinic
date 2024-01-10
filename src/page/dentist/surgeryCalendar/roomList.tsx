import React from "react";
import Room from "./room";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

interface RoomListProps {
  rooms: string[];
  // bookedRooms: string[];
  // onBookRoom: (roomName: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({
  rooms,
  // onBookRoom,
}) => {
  const columnWidth = 100 / rooms.length; // Tính toán độ rộng của mỗi cột dựa trên số lượng phòng
  const columnStyle = {
    flex: `0 0 ${columnWidth}%`,
    maxWidth: `${columnWidth}%`,
    width: `${columnWidth}%`,
  };
  return (
    <div className={styles.roomName}>
      {" "}
      <Row >
        {rooms.map((roomName) => (
          <Col span={24} className={styles.room} style={columnStyle}>
            <Room
              key={roomName}
               roomName={roomName}
              // onBookRoom={() => onBookRoom(roomName)}
            />
          </Col>
        ))}{" "}
      </Row>
    </div>
  );
};

export default RoomList;
