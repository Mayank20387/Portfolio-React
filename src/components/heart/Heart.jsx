// import "./topbar.scss";
import { AiFillHtml5, AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
import "./heart.scss";
export default function Heart() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App1">
      <div className="right1">
        <p>Send some love!</p>
        <div className="wrapper1">
          <AiFillHeart className="icon heart" />
          <p>{counter}</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <AiOutlinePlus className="icon plus" />
          </button>
        </div>
      </div>
    </div>
  );
}
