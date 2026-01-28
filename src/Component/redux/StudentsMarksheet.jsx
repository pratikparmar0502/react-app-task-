import React, { useState } from "react";
import { Button, Container, TableContainer, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, updateStudent } from "./marksheetSlice";

const StudentsMarksheet = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [sub1, setSub1] = useState("");
  const [sub2, setSub2] = useState("");
  const [sub3, setSub3] = useState("");
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  // const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const students = useSelector((state) => state.marksheet.students);

  const handleSubmit = () => {
    if (!rollNo || !name || !sub1 || !sub2 || !sub3) {
      alert("Please fill all fields");
      return;
    }
    if (edit) {
      dispatch(updateStudent({ rollNo, name, sub1, sub2, sub3 }));
      setEdit(null);
    } else {
      const isDuplicate = students.some(
        (student) => student.rollNo === rollNo && student.rollNo !== edit,
      );

      if (isDuplicate) {
        alert("Roll no is already existed!");
        return;
      }
      dispatch(addStudent({ rollNo, name, sub1, sub2, sub3 }));
    }
    setName("");
    setRollNo("");
    setSub1("");
    setSub2("");
    setSub3("");
  };
  const handleDel = (rollNo) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      dispatch(deleteStudent(rollNo));
    }
  };
  const handleEdit = (student) => {
    setRollNo(student.rollNo);
    setName(student.name);
    setSub1(student.sub1);
    setSub2(student.sub2);
    setSub3(student.sub3);
    setEdit(student.rollNo);
  };

  return (
    <>
      <Container sx={{ margin: "20px auto", textAlign: "center" }}>
        <h1>Student Marksheet</h1>
        <TextField
          value={rollNo}
          disabled={!!edit}
          type="number"
          variant="outlined"
          label="Roll No"
          onChange={(e) => setRollNo(e.target.value)}
          sx={{ margin: "5px" }}
        ></TextField>
        <br />
        <TextField
          value={name}
          type="text"
          variant="outlined"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          sx={{ margin: "5px" }}
        ></TextField>
        <br />
        <TextField
          value={sub1}
          type="number"
          variant="outlined"
          label="Sub1"
          onChange={(e) => setSub1(e.target.value)}
          sx={{ margin: "5px" }}
        ></TextField>
        <br />
        <TextField
          value={sub2}
          type="number"
          variant="outlined"
          label="Sub2"
          onChange={(e) => setSub2(e.target.value)}
          sx={{ margin: "5px" }}
        ></TextField>
        <br />
        <TextField
          value={sub3}
          type="number"
          variant="outlined"
          label="Sub3"
          onChange={(e) => setSub3(e.target.value)}
          sx={{ margin: "5px" }}
        ></TextField>
        <br />
        <Button
          variant="contained"
          sx={{ margin: "10px auto", display: "block" }}
          type="submit"
          onClick={() => handleSubmit()}
        >
          {edit ? "Update" : "Submit"}
        </Button>
        <br />
        <TableContainer>
          <input
            type="search"
            name="search"
            // value={inputValue}
            variant="outlined"
            placeholder="Search Name"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button
            type="button"
            style={{ marginLeft: "10px", padding: "8px 20px" }}
            onClick={(e) => setSearch(inputValue)}
          >
            Search
          </button>  */}
          <table border={2} style={{ margin: "20px auto" }}>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Sub1</th>
                <th>Sub2</th>
                <th>Sub3</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Grade</th>
                <th>Min</th>
                <th>Max</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((student) =>
                  student.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.sub1}</td>
                    <td>{student.sub2}</td>
                    <td>{student.sub3}</td>
                    <td>{student.total}</td>
                    <td>{student.per}</td>
                    <td>{student.grade}</td>
                    <td>{student.min}</td>
                    <td>{student.max}</td>
                    <td>
                      <button onClick={() => handleEdit(student)}>
                        Update
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDel(student.rollNo)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default StudentsMarksheet;
