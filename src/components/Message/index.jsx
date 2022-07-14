import React from "react";
import styles from "./styles.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Message = ({ body, hour, sender = false }) => {
  console.log(body);
  return (
    <li className={styles.message}>
      <div className={sender ? styles.sender : styles.receiver}>
        <p>{body}</p>
        <span className={styles.messageHour}>{hour}</span>
      </div>
      
      {/* <select name="" id="" className={sender ? `${styles.sender} ${styles.select}` : `${styles.receiver} ${styles.select}`}>
        <option value=""> <BsThreeDotsVertical /> </option>
        <option value="">Edit</option>
        <option value="">Delete</option>
      </select> */}
    </li>
  );
};
