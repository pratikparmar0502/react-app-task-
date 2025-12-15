import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { Container } from "react-bootstrap";

const Task4 = () => {
  const [list, setList] = useState([]);
  const ini = {
    rollNo: "",
    studentName: "",
    gujarati: "",
    english: "",
    maths: "",
  };

  const f = useFormik({
    initialValues: ini,
    onSubmit: (values) => {
      // console.log(values);

      setList([...list, values]);
      f.handleReset();
    },
  });

  const total = (i) => {
    return Number(i.maths) + Number(i.gujarati) + Number(i.english);
  };

  const percentage = (i) => {
    const calculatedTotal = total(i);
    return Math.round(calculatedTotal / 3);
  };

  const grade = (i) => {
    const grades = percentage(i);

    const gradeValue = Math.floor(grades);

    if (gradeValue >= 90) {
      return "A+";
    } else if (gradeValue >= 80) {
      return "A";
    } else if (gradeValue >= 70) {
      return "B";
    } else if (gradeValue >= 60) {
      return "C";
    } else if (gradeValue >= 50) {
      return "D";
    } else {
      return "F";
    }
  };

  const min = (i) => {
    return Math.min(Number(i.maths), Number(i.gujarati), Number(i.english));
  };

  const max = (i) => {
    return Math.max(Number(i.maths), Number(i.gujarati), Number(i.english));
  };

  return (
    <>
      <Container>
        <form onSubmit={f.handleSubmit} className="text-center my-4">
          <input
            type="number"
            name="rollNo"
            id=""
            min={1}
            max={100}
            onChange={f.handleChange}
            value={f.values.rollNo}
            placeholder="Roll No"
            required
          />
          <br />
          <input
            type="text"
            name="studentName"
            id=""
            onChange={f.handleChange}
            value={f.values.studentName}
            placeholder="Student Name"
            required
          />
          <br />
          <input
            type="number"
            name="gujarati"
            id=""
            min={1}
            max={100}
            onChange={f.handleChange}
            value={f.values.gujarati}
            placeholder="Gujarati"
            required
          />
          <br />
          <input
            type="number"
            name="english"
            id=""
            min={1}
            max={100}
            onChange={f.handleChange}
            value={f.values.english}
            placeholder="English"
            required
          />
          <br />
          <input
            type="number"
            name="maths"
            id=""
            min={1}
            max={100}
            onChange={f.handleChange}
            value={f.values.maths}
            placeholder="Maths"
            required
          />{" "}
          <br />
          <button type="submit">Add</button>
        </form>
        <div className="text-center my-4">
          <h1>Students Marksheet</h1>
          <table>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Gujarati</th>
              <th>English</th>
              <th>Maths</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
            {list.map((i, index) => (
              <tr key={index}>
                <td>{i.rollNo}</td>
                <td>{i.studentName}</td>
                <td>{i.gujarati}</td>
                <td>{i.english}</td>
                <td>{i.maths}</td>
                <td>{total(i)}</td>
                <td>{percentage(i)}%</td>
                <td>{grade(i)}</td>
                <td>{min(i)}</td>
                <td>{max(i)}</td>
              </tr>
            ))}
          </table>
        </div>
      </Container>
    </>
  );
};

export default Task4;
