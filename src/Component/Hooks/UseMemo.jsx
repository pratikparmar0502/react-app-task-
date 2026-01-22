import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [no, setNo] = useState(0);

  const counter = useMemo(() => {
    return no * no;
  });
  return (
    <>
      <h1>{no}</h1>
      <h2>{counter}</h2>
      <button onClick={() => setNo(no + 5)}>+++</button>
    </>
  );
};

export default UseMemo;
