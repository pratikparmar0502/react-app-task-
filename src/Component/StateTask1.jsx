import React, { useState } from "react";

const StateTask1 = () => {
  const [text, setText] = useState("Hello world");
  return (
    <>
      <div className="parent">
        <div className="parent2">
          <div className="parent3">
            <div className="main">
              <h1>{text}</h1>
            </div>
            <div className="child">
              <button onClick={() => setText("Good Morning")}>
                Good Morning
              </button>
              <button onClick={() => setText("Good Evening")}>
                Good Evening
              </button>
              <button onClick={() => setText("Good Afternoon")}>
                Good Afternoon
              </button>
              <button onClick={() => setText("Good Night")}>Good Night</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateTask1;
