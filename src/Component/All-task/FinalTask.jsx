import { useState } from "react";

const FinalTask = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditindex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return alert("Please enter task!");
    }
    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = text;
      setList(updatedList);
      setEditindex(null);
    } else {
      setList([...list, text]);
    }
    setText("");
  };

  const delBtn = (delIndex) => {
    console.log(delIndex);
    if (window.confirm("are you sure?") === false) {
      return;
    }
    const filterData = list.filter((i, index) => index !== delIndex);
    console.log(filterData);
    setList(filterData);
  };

  const editBtn = (index) => {
    console.log(index);
    setEditindex(index);
    setText(list[index]);
  };

  return (
    <>
      <div style={{ margin: 5 }}>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id=""
              placeholder="Enter your task"
            />
            <button type="submit">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Tasks</td>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>
                    {" "}
                    <button onClick={() => delBtn(index)}>Delete</button>
                  </td>
                  <td>
                    {" "}
                    <button onClick={() => editBtn(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FinalTask;
