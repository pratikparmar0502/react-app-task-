import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { BtnContext } from "./Context";

const Ui = () => {
  const { no, incre, decre } = useContext(BtnContext);
  return (
    <>
      <Container>
        <h1>{no}</h1>
        <button onClick={incre}>+++</button>
        <button onClick={decre}>---</button>
      </Container>
    </>
  );
};

export default Ui;
