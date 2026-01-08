import React, { createContext, useState } from "react";
import Ui from "./Ui";

export const BtnContext = createContext();

const Context = () => {
  const [no, setNo] = useState(10);

  const incre = () => {
    setNo(no + 1);
  };
  const decre = () => {
    setNo(no - 1);
  };

  return (
    <>
      <BtnContext.Provider value={{ no, incre, decre }}>
        <Ui></Ui>
      </BtnContext.Provider>
    </>
  );
};

export default Context;
