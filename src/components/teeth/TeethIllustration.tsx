import styles from "./style.module.scss";
import ItemTeeth from "./itemTeth";

interface TeethIllustrationProps {
  selectedCircle: number[];
  setSelectedCircle: (list: number[]) => void;
}
const TeethIllustration = ({
  selectedCircle,
  setSelectedCircle,
}: TeethIllustrationProps) => {
  const handleClick = (id: number) => {
    if (selectedCircle.includes(id)) {
      setSelectedCircle(selectedCircle.filter((value: number) => value != id));
    } else {
      setSelectedCircle([...selectedCircle, id]);  
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* đường kẻ phân cách */}
        <div className={styles.hozLine}></div>
        <div className={styles.veLine}></div>
        {/* hình tròn hiển thị vị trí răng */}
        <div className={styles.circleContainer}>
          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin8}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={11}
              label="11"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin9}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={21}
              label="21"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin7}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={12}
              label="12"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin10}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={22}
              label="22"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin6}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={13}
              label="13"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin11}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={23}
              label="23"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin5}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={14}
              label="14"
            />
            <ItemTeeth
              addClass={`${styles.circleInner5}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={111}
              label="A"
            />
            <ItemTeeth
              addClass={`${styles.circleInner6}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={121}
              label="A"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin12}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={24}
              label="24"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin4}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={15}
              label="15"
            />
            <ItemTeeth
              addClass={`${styles.circleInner4}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={112}
              label="B"
            />
            <ItemTeeth
              addClass={`${styles.circleInner7}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={122}
              label="B"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin13}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={25}
              label="25"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin3}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={16}
              label="16"
            />
            <ItemTeeth
              addClass={`${styles.circleInner3}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={113}
              label="C"
            />
            <ItemTeeth
              addClass={`${styles.circleInner8}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={123}
              label="C"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin14}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={26}
              label="26"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin2}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={17}
              label="17"
            />
            <ItemTeeth
              addClass={`${styles.circleInner2}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={114}
              label="D"
            />
            <ItemTeeth
              addClass={`${styles.circleInner9}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={124}
              label="D"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin15}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={27}
              label="27"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin1}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={18}
              label="18"
            />
            <ItemTeeth
              addClass={`${styles.circleInner1}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={115}
              label="E"
            />
            <ItemTeeth
              addClass={`${styles.circleInner10}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={125}
              label="E"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin16}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={28}
              label="28"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin32}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={48}
              label="48"
            />
            <ItemTeeth
              addClass={`${styles.circleInner20}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={145}
              label="E"
            />
            <ItemTeeth
              addClass={`${styles.circleInner11}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={135}
              label="E"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin17}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={38}
              label="38"
            />
          </div>
          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin31}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={47}
              label="47"
            />
            <ItemTeeth
              addClass={`${styles.circleInner19}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={144}
              label="D"
            />
            <ItemTeeth
              addClass={`${styles.circleInner12}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={134}
              label="D"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin18}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={37}
              label="37"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin30}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={46}
              label="46"
            />
            <ItemTeeth
              addClass={`${styles.circleInner18}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={143}
              label="C"
            />
            <ItemTeeth
              addClass={`${styles.circleInner13}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={133}
              label="C"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin19}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={36}
              label="36"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin29}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={45}
              label="45"
            />
            <ItemTeeth
              addClass={`${styles.circleInner17}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={142}
              label="B"
            />
            <ItemTeeth
              addClass={`${styles.circleInner14}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={132}
              label="B"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin20}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={35}
              label="35"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin28}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={44}
              label="44"
            />
            <ItemTeeth
              addClass={`${styles.circleInner16}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={141}
              label="A"
            />
            <ItemTeeth
              addClass={`${styles.circleInner15}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={131}
              label="A"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin21}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={34}
              label="34"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin27}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={43}
              label="43"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin22}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={33}
              label="33"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin26}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={42}
              label="42"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin23}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={32}
              label="32"
            />
          </div>

          <div className={`${styles.row}`}>
            <ItemTeeth
              addClass={`${styles.circleMargin25}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={41}
              label="41"
            />
            <ItemTeeth
              addClass={`${styles.circleMargin24}`}
              onClick={handleClick}
               selectedCircle={selectedCircle}
              idNumber={31}
              label="31"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeethIllustration;
