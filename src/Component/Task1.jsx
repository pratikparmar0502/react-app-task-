import { useState } from "react";
import { Container } from "react-bootstrap";

const Task1 = () => {
  const [list1, setList1] = useState([]);

  const flowersData = [
    { name: "Rose", category: "Flower" },
    { name: "Lotus", category: "Flower" },
    { name: "Sunflower", category: "Flower" },
    { name: "Tulip", category: "Flower" },
    { name: "Marigold", category: "Flower" },
  ];

  const animalsData = [
    {
      name: "Dog",
      category: "Animals",
    },
    { name: "Cat", category: "Animals" },
    { name: "Cow", category: "Animals" },
    { name: "Lion", category: "Animals" },
    { name: "Tiger", category: "Animals" },
  ];

  const clothesData = [
    { name: "Shirt", category: "Clothes" },
    { name: "Pant", category: "Clothes" },
    { name: "Kurti", category: "Clothes" },
    { name: "Saree", category: "Clothes" },
    { name: "Dress", category: "Clothes" },
  ];

  const allData = [...animalsData, ...clothesData, ...flowersData];

  const all = () => {
    setList1(allData);
  };

  const flowers = () => {
    setList1(flowersData);
  };

  const clothes = () => {
    setList1(clothesData);
  };

  const animals = () => {
    setList1(animalsData);
  };

  const delData = (index) => {
    let copyData = [...list1];
    copyData.splice(index, 1);
    setList1(copyData);
  };

  return (
    <>
      <br />
      <Container>
        <button style={{ marginRight: "30px", fontSize: "20px" }} onClick={all}>
          All
        </button>
        <button
          style={{ marginRight: "30px", fontSize: "20px" }}
          onClick={flowers}
        >
          Flower
        </button>
        <button
          style={{ marginRight: "30px", fontSize: "20px" }}
          onClick={animals}
        >
          Animal
        </button>
        <button
          style={{ marginRight: "30px", fontSize: "20px" }}
          onClick={clothes}
        >
          Clothes
        </button>
        <br /> <br />
        <table border={2}>
          <thead>
            <tr>
              <th
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  border: "1px solid black",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  border: "1px solid black",
                }}
              >
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {list1.map((i, index) => (
              <tr>
                <td
                  style={{
                    padding: "10px",
                    fontSize: "18px",
                    border: "1px solid black",
                  }}
                >
                  {i.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    fontSize: "18px",
                    border: "1px solid black",
                  }}
                >
                  {i.category}
                </td>
                <button
                  style={{
                    padding: "10px",
                    fontSize: "18px",
                    fontWeight: "600",
                    border: "1px solid black",
                  }}
                  onClick={() => delData(index)}
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};
export default Task1;
