import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Task5 = () => {
  const [list, setList] = useState([]);
  const ini = {
    rollno: "",
    studentname: "",
    maths: "",
    science: "",
    english: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (
      !values.rollno ||
      !values.studentname ||
      !values.maths ||
      !values.science ||
      !values.english
    ) {
      alert("Please fill all the fields");
    }
    console.log(values);
    setList((prev) => [...prev, values]);
    resetForm();
    return;
  };

  const total = (i) => {
    return Number(i.maths) + Number(i.science) + Number(i.english);
  };

  const percentage = (i) => {
    const calculatedTotal = total(i);
    return Math.round(calculatedTotal / 3);
  };

  const grade = (i) => {
    const gradeValue = percentage(i);

    if (gradeValue >= 90 && gradeValue <= 100) {
      return "A+";
    } else if (gradeValue >= 80 && gradeValue <= 89) {
      return "A";
    } else if (gradeValue >= 70 && gradeValue <= 79) {
      return "B";
    } else if (gradeValue >= 55 && gradeValue <= 69) {
      return "C";
    } else if (gradeValue >= 34 && gradeValue <= 55) {
      return "D";
    } else {
      return "F";
    }
  };
  const min = (i) => {
    return Math.min(Number(i.maths), Number(i.science), Number(i.english));
  };

  const max = (i) => {
    return Math.max(Number(i.maths), Number(i.science), Number(i.english));
  };

  return (
    <>
      <Container className="my-4 text-center">
        <Formik initialValues={ini} onSubmit={handleSubmit}>
          <Form>
            <Field name="rollno" type="text" className="w-25"></Field>
            <br />
            <Field name="studentname" type="text" className="w-25"></Field>
            <br />
            <Field
              name="maths"
              type="number"
              min="1"
              max="100"
              className="w-25"
            ></Field>
            <br />
            <Field
              name="science"
              type="number"
              min="1"
              max="100"
              className="w-25"
            ></Field>
            <br />
            <Field
              name="english"
              type="number"
              min="1"
              max="100"
              className="w-25"
            ></Field>
            <br />
            <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
              Add
            </button>
          </Form>
        </Formik>
        <table className="my-5">
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
          </tr>
          {list.map((i, index) => (
            <tr key={index}>
              <td>{i.rollno}</td>
              <td>{i.studentname}</td>
              <td>{i.maths}</td>
              <td>{i.science}</td>
              <td>{i.english}</td>
              <td>{total(i)}</td>
              <td>{percentage(i)}%</td>
              <td>{grade(i)}</td>
              <td>{min(i)}</td>
              <td>{max(i)}</td>
            </tr>
          ))}
        </table>
      </Container>
    </>
  );
};

export default Task5;
