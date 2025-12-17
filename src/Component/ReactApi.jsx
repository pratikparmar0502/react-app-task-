import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ReactApi = () => {
  const [list, setList] = useState([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    console.log("test");
    Data();
  }, [no]);

  function Data() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res.data);
        setList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Container>
        <button onClick={() => setNo(no + 1)}>Click</button>
        <table>
          <tbody>
            <tr>
              <td>userId</td>
              <td>id</td>
              <td>title</td>
              <td>body</td>
            </tr>
            {list.map((i, index) => (
              <tr key={index}>
                <td>{i.userId}</td>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default ReactApi;
