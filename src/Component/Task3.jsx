import { useState } from "react";
import { Container } from "react-bootstrap";

const Task3 = () => {
  const [rollNo, setRollNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [records, setRecords] = useState([]);
  const [editID, setEditid] = useState(null);

  const handleSubmit = () => {
    console.log(rollNo);
    console.log(studentName);

    const obj = {
      rollNo,
      studentName,
      maths,
      science,
      english,
      records,
    };

    if (editID != null) {
      let copyData = [...records];
      copyData[editID] = obj;
      setRecords(copyData);
      setEditid(null);
    } else {
      setRecords([...records, obj]);
    }
    // console.log(obj);

    setRollNo("");
    setStudentName("");
    setMaths("");
    setEnglish("");
    setScience("");
  };

  const total = (i) => {
    return Number(i.maths) + Number(i.science) + Number(i.english);
  };

  const percentage = (i) => {
    return total(i) / 3;
  };

  const grade = (i) => {
    const grades = percentage(i);
    if (grades >= 90) {
      return "A+";
    } else if (grades >= 80) {
      return "A";
    } else if (grades >= 70) {
      return "B";
    } else if (grades >= 60) {
      return "C";
    } else if (grades >= 50) {
      return "D";
    } else {
      return "F";
    }
  };
  const min = (i) => {
    return Math.min(i.maths, i.science, i.english);
  };
  const max = (i) => {
    return Math.max(i.maths, i.science, i.english);
  };

  const editData = (i, index) => {
    // console.log(i);
    setRollNo(i.rollNo);
    setStudentName(i.studentName);
    setMaths(i.maths);
    setEnglish(i.english);
    setScience(i.science);
    setEditid(index);
  };

  const delData = (index) => {
    const copyData = [...records];
    copyData.splice(index, 1);
    setRecords(copyData);
  };

  return (
    <>
      <Container>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <input
            type="text"
            name=""
            id=""
            value={rollNo}
            placeholder="Roll No"
            onChange={(e) => setRollNo(e.target.value)}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            value={studentName}
            placeholder="Student Name"
            onChange={(e) => setStudentName(e.target.value)}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            value={maths}
            placeholder="Maths"
            onChange={(e) => setMaths(e.target.value)}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            value={science}
            placeholder="Science"
            onChange={(e) => setScience(e.target.value)}
          />
          <br />
          <input
            type="text"
            name=""
            id=""
            value={english}
            placeholder="English"
            onChange={(e) => setEnglish(e.target.value)}
          />
          <br />
          <br />
          <button
            style={{ fontSize: "18px", padding: "5px 15px" }}
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
        <table border={2}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Maths</th>
              <th>Science</th>
              <th>English</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Min</th>
              <th>Max</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((i, index) => (
              <tr key={index}>
                <td>{i.rollNo}</td>
                <td>{i.studentName}</td>
                <td>{i.maths}</td>
                <td>{i.science}</td>
                <td>{i.english}</td>
                <td>{total(i)}</td>
                <td>{percentage(i)}</td>
                <td>{grade(i)}</td>
                <td>{min(i)}</td>
                <td>{max(i)}</td>
                <td>
                  <button onClick={() => editData(i, index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Task3;
