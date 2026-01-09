import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { BtnContext } from "./Context";

const Ui = () => {
  const { list } = useContext(BtnContext) || [];

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={item.id || index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Ui;
