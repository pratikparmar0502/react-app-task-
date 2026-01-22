import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const UserRef = () => {
  const inputRef = useRef();

  const handleChange = () => {
    inputRef.current.style.transform = "scale(1.5)";
  };
  return (
    <>
      <Container className="my-5">
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          name=""
          placeholder="Enter..."
        />
      </Container>
    </>
  );
};

export default UserRef;
