import React, { useState } from "react";

const StateExample = () => {
  const [text, setText] = useState("Hello world");

  const [no, setNo] = useState(0);

  const incre = () => {
    setNo(no + 5);
  };

  const increment = (i) => {
    setNo(no + i);
  };

  return (
    <div>
      <h1>{text}</h1>
      <h1>{no}</h1>
      <button onClick={() => setText("hello world by state")}> Click me</button>

      {/* <button onClick={() => setNo(no + 5)}> ++++</button> */}

      <button onClick={incre}>+ 5</button>
      <button onClick={() => increment(50)}>+ 50</button>
    </div>
  );
};

export default StateExample;
