import React, { useState } from "react";

const StateTask2 = () => {
  const [no, setNo] = useState(0);

  const incre = (a) => {
    setNo(no + a);
  };

  const decre = (b) => {
    setNo(no - b);
  };
  return (
    <>
      <div className="parent">
        <div className="parent2">
          <div className="parent3">
            <div className="main">
              <h1>{no}</h1>
            </div>
            <div className="child">
              <button onClick={() => incre(1)}>+1</button>
              <button onClick={() => decre(5)}>-5</button>
              <button onClick={() => incre(20)}>+20</button>
              <button onClick={() => decre(10)}>-10</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateTask2;
