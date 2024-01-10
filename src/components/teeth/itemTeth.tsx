import styles from "./style.module.scss";
interface ItemTeethProps {
  idNumber: number;
  addClass: any;
  onClick: (id: number) => void;
  label: string;
  selectedCircle: number[];
}
const ItemTeeth: React.FC<ItemTeethProps> = ({
  idNumber,
  addClass,
  onClick,
  label,
  selectedCircle
}) => {
  return (
    <div
      className={`${styles.circle} ${addClass} ${selectedCircle.includes(idNumber)? styles.btnSelect:""} `}
      onClick={() => onClick(idNumber)}
    >
      <div>{label}</div>
    </div>
  );
};
export default ItemTeeth;
