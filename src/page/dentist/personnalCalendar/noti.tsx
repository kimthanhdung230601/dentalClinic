import { Button, List } from "antd";
import styles from "./styles.module.scss";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getNoti } from "../../../api/admin";
// const {  Avatar, List  } = antd;
interface NotiProps {}

const Noti = () => {
  const id = Cookies.get("idOperator");
  // console.log("id",id);
  const { data, isLoading, isFetching, refetch } = useQuery(
    ["product", id],
    () => getNoti(id)
  );
  console.log("data", data);
  // const contentArray = data.map(item => item.content);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.notiWrap}>
          <div className={styles.header}>
            <div className={styles.wrappImg}>
              <img
                className={styles.img}
                src={require("../../../assets/img/logo.png")}
              />
            </div>
            <h3 className={styles.title}>Thông báo</h3>
          </div>
          <div className={styles.block}>
            <div className={styles.list}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item: any, index) => (
                  <List.Item>
                    <List.Item.Meta
                      className={styles.content}
                      title={<p>đến nha sĩ {item.operatorName}</p>}
                      description={
                        <div>
                          <div className={styles.customDescription}>
                            {item.content}
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>

          {/* <button className={styles.btnDetail}>Chi tiết</button> */}
        </div>
      </div>
    </>
  );
};

export default Noti;

