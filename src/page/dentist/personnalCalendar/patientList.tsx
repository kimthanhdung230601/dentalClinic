import styles from "./styles.module.scss";
interface PatientListProps {}

const PatientList = () => {
  return (
    <>
      <div className={styles.patientsWrap}>
        <div className={styles.wrap}>
          <div className={styles.block}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src={require("../../../assets/img/logo.png")}
              />
            </div>
            <div className={styles.des}>
              <span className={styles.desOne}>Bệnh nhân hôm nay </span>
              <span className={styles.desNumber}>04</span>
              <span className={styles.desTwo}>BN</span>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
        <div className={styles.block}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src={require("../../../assets/img/logo.png")}
              />
            </div>
            <div className={styles.des}>
              <span className={styles.desOne}>Khám thành công </span>
              <span className={styles.desNumber}>02</span>
              <span className={styles.desTwo}>Ca</span>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
        <div className={styles.block}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src={require("../../../assets/img/logo.png")}
              />
            </div>
            <div className={styles.des}>
              <span className={styles.desOne}>Bị hủy </span>
              <span className={styles.desNumber}>0</span>
              <span className={styles.desTwo}>Ca</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientList;
