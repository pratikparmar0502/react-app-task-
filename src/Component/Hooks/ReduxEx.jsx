import { Container } from "react-bootstrap";
import { incre, decre } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const ReduxEx = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Container className="my-5 text-center fs-1">
        <button onClick={() => dispatch(incre())}>+</button> Counter is {count}{" "}
        <button onClick={() => dispatch(decre())}>-</button>
      </Container>
    </>
  );
};

export default ReduxEx;
