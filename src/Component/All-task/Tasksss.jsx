import { useState } from "react";
import { Container } from "react-bootstrap";

const Tasksss = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [list, setList] = useState([]);
  const [editid, setEditid] = useState(null);
  const [search, setSearch] = useState("");

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

  //   const delData = (index) => {
  //     let copyData = [...list];
  //     copyData.splice(index, 1);
  //     setList(copyData);
  //   };

  const delData = (indexDel) => {
    const del = list.filter((item, index) => index !== indexDel);
    setList(del);
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

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

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
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here..."
        />

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
              <td
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  padding: "7px",
                  border: "1px solid black",
                }}
              >
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((i, index) => (
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
        {list.length > 0 && filteredList.length === 0 && (
          <p style={{ color: "red", marginTop: "20px", textAlign: "center" }}>
            No guest found matching "{search}"
          </p>
        )}

        {list.length === 0 && (
          <p style={{ marginTop: "20px", color: "gray" }}>
            The guest list is empty. Add someone!
          </p>
        )}
      </Container>
    </>
  );
};

export default Tasksss;
