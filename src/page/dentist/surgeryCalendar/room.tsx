import React from 'react';
import styles from "./style.module.scss"
interface RoomProps {
  roomName: string;
  //isBooked: boolean;
  //onBookRoom: (roomName: string) => void;
}

const Room: React.FC<RoomProps> = ({ roomName }) => {
  return (
    <span 
    //onClick={() => onBookRoom(roomName)}
    >
      {roomName} 
    </span>
  );
};

export default Room;

