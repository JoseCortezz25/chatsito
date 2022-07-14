import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Home = () => {
  const [id, setId] = useState("1234");

  const numberRandom = useMemo(() => Math.floor(Math.random() * 9999), []);

  return (
    <main className={styles.home}>
      <div className={styles.information}>
        <h1>Chatsito</h1>
        <p>A magnificent, simple, amazing, empathetic, beautiful, chat developed with react and socke.io.
        </p>
        <div className={styles.enterBox}>
          <input
            type="number"
            placeholder="Write an id"
            onChange={(e) => setId(e.target.value)}
          />
          <Link to={`/chat/${id}`}>
            <button>Go to chat</button>
          </Link>
        </div>
        <p>We recommend you to enter the chat: <strong>{numberRandom}</strong></p>
      </div>
    </main>
  );
};
