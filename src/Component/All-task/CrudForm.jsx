import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const CrudForm = () => {
  const [list, setList] = useState([]);
  const [editid, setEditid] = useState(null);

  const ini =
    editid !== null
      ? list[editid]
      : {
          name: "",
          email: "",
          password: "",
        };

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    if (!values.name || !values.email || !values.password) {
      return alert("Please fill all the field!");
    }
    if (editid !== null) {
      const updatedList = [...list];
      updatedList[editid] = values;
      setList(updatedList);
      setEditid(null);
    } else {
      setList([...list, values]);
      resetForm();
    }
  };

  const UpdateBtn = (index) => {
    // console.log(index);
    setEditid(index);
  };
  const DeleteBtn = (index) => {
    // console.log(index);
    let isDeleted = window.confirm("Are you sure you want to delete?");
    if (isDeleted) {
      let copyData = [...list];
      copyData.splice(index, 1);
      setList(copyData);
    }
  };

  return (
    <>
      <Container className="text-center my-4">
        <Formik
          initialValues={ini}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <Form>
            <Field
              type="text"
              placeholder="Enter Your Name"
              className="w-25"
              name="name"
            />{" "}
            <br />
            <Field
              type="text"
              placeholder="Enter Your Email"
              className="w-25"
              name="email"
            />{" "}
            <br />
            <Field
              type="text"
              placeholder="Enter Your Password"
              className="w-25"
              name="password"
            />{" "}
            <br />
            <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
              {editid ? "Update" : "Submit"}
            </button>
          </Form>
        </Formik>

        <table className="my-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => UpdateBtn(index)}>Update</button>
                </td>
                <td>
                  <button onClick={() => DeleteBtn(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default CrudForm;
