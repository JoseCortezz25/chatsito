import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Message } from "../Message";
import styles from "./styles.module.css";
import { MdSend, MdKeyboardBackspace } from "react-icons/md";
import { useChat } from "../../hook/useChat";


export const Chat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { messages, sendMessage } = useChat(id);
  const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}`

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.myMessage.value;
    if (value.length === 0) {
      alert('Hey, write something...')
    }else {
      sendMessage(e.target.myMessage.value);
      e.target.myMessage.value = "";
    }
  };

  return (
    <div className={styles.chat}>
      <header className={styles.header}>
        <button className={styles.btnGoBack} onClick={() => navigate(-1)}>
          <MdKeyboardBackspace />
        </button>
        <p>Conversation with chat id: {id}</p>
      </header>
      <ol className={styles.messages}>
        {messages.length === 0 ? (
          <>
            <Message body={"Your messages will apper here"} hour={currentHour} sender={true} />
            <Message body={"The messages that you receive are here"} hour={currentHour} sender={false} />
          </>
        ) : (
          messages.map((message) => (
            <Message {...message} key={message.text + Math.random()} />
          ))
        )}
      </ol>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="myMessage" placeholder="Write a message..." autoComplete="off"/>
        {/* <button type="submit">
          <MdSend />
        </button> */}
      </form>
    </div>
  );
};
