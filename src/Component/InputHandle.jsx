import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const InputHandle = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState([]);
  const [editid, setEditid] = useState();

  const handleSubmit = () => {
    // console.log(name);
    // console.log(surname);

    // console.log(name, surname);
    const obj = { name, surname };
    console.log(obj);

    if (editid != null) {
      let copyData = [...list];
      copyData[editid] = obj;
      setList(copyData);
      setEditid(null);
    } else {
      setList([...list, obj]);
    }

    setName("");
    setSurname("");
  };

  const delData = (index) => {
    let copyData = [...list];
    copyData.splice(index, 1);
    setList(copyData);
  };

  const editData = (i, index) => {
    // console.log(i);
    setName(i.name);
    setSurname(i.surname);
    setEditid(index);
  };

  // const editData = (index) => {
  //   let editItem = list[index];
  //   setName(editItem.name);
  //   setSurname(editItem.surname);
  //   delData(index);
  // };

  return (
    <>
      <br />
      <br />
      <Container>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <br />
        <button
          variant="primary"
          style={{ fontSize: "18px" }}
          onClick={handleSubmit}
        >
          Add
        </button>

        <br />
        <br />

        <table border={1}>
          <thead>
            <tr>
              <td
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  padding: "7px",
                  border: "1px solid black",
                }}
              >
                Name
              </td>
              <td
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  padding: "7px",
                  border: "1px solid black",
                }}
              >
                Surname
              </td>
            </tr>
          </thead>
          <tbody>
            {list.map((i, index) => (
              <tr key={index}>
                <td
                  style={{
                    fontSize: "18px",
                    padding: "7px",
                    border: "1px solid black",
                  }}
                >
                  {i.name}
                </td>
                <td
                  style={{
                    fontSize: "18px",
                    padding: "7px",
                    border: "1px solid black",
                  }}
                >
                  {i.surname}
                </td>
                <button
                  style={{
                    fontSize: "18px",
                    padding: "7px 15px",
                  }}
                  onClick={() => editData(i, index)}
                >
                  Edit
                </button>
                <button
                  style={{ fontSize: "18px", padding: "7px" }}
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

export default InputHandle;
