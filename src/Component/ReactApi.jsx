import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ReactApi = () => {
  const [list1, setList1] = useState([""]);
  const [list2, setList2] = useState([""]);
  const [list3, setList3] = useState([""]);

  useEffect(() => {
    ProductsData();
    QuotesData();
    TodosData();
  }, []);

  function ProductsData() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setList1(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function QuotesData() {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        console.log(res.data.quotes);
        setList2(res.data.quotes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function TodosData() {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        console.log(res.data.todos);
        setList3(res.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <section style={{ padding: "20px 0px" }}>
        <h1 style={{ textAlign: "center" }}>Products Data</h1>
        <Container>
          <table border={1}>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>category</th>
                <th>price</th>
                <th>rating</th>
                <th>stock</th>
              </tr>
            </thead>
            <tbody>
              {list1.map((i, index) => (
                <tr key={index}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.description}</td>
                  <td>{i.category}</td>
                  <td>{i.price}</td>
                  <td>{i.rating}</td>
                  <td>{i.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
      <section style={{ padding: "20px 0px" }}>
        <h1 style={{ textAlign: "center" }}>Quotes Data</h1>
        <Container>
          <table border={1}>
            <thead>
              <tr>
                <th>id</th>
                <th>quote</th>
                <th>author</th>
              </tr>
            </thead>
            <tbody>
              {list2.map((i, index) => (
                <tr key={index}>
                  <td>{i.id}</td>
                  <td>{i.quote}</td>
                  <td>{i.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
      <section style={{ padding: "20px 0px" }}>
        <h1 style={{ textAlign: "center" }}>Todos Data</h1>
        <Container>
          <table border={1}>
            <thead>
              <tr>
                <th>id</th>
                <th>todo</th>
                {/* <th>completed</th> */}
                <th>userId</th>
              </tr>
            </thead>
            <tbody>
              {list3.map((i, index) => (
                <tr key={index}>
                  <td>{i.id}</td>
                  <td>{i.todo}</td>
                  {/* <td>{i.completed}</td> */}
                  <td>{i.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
    </>
  );
};

export default ReactApi;
