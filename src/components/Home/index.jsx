import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [id, setId] = useState(null)
  const handleChanges = (e) => {
    setId(e.target.value)
  }
  return (
    <main>
      <h1>Chatsito</h1>
      <input type="text" placeholder="Write an id" onChange={handleChanges}/>
      <Link to={`/chat/${id}`}>
        <button>Go to chat</button>
      </Link>
    </main>
  );
};
