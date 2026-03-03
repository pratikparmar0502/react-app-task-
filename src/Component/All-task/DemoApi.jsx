import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const DemoApi = () => {
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formData =
    editIndex !== null
      ? list.find((item) => item._id === editIndex)
      : { username: "", email: "", password: "" };

  const token = "8GcJq07e5NxgWnA6";
  const url = "https://generateapi.techsnack.online/api/DemoApi";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(`${url}`, {
        headers: { Authorization: token },
      });
      console.log(res.data.Data);
      setList(res.data.Data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const delData = async (_id) => {
    // console.log(_id);
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      try {
        await axios.delete(`${url}/${_id}`, {
          headers: { Authorization: token },
        });
        getData();
      } catch (error) {
        console.log(error?.response?.data);
      }
    }
  };

  const editData = (_id) => {
    // console.log(_id);
    setEditIndex(_id);
  };

  const handleSubmit = async (values, { resetForm }) => {
    // console.log(values);

    if (editIndex !== null) {
      const { _id, ...updatedData } = values;

      try {
        const res = await axios.patch(`${url}/${editIndex}`, updatedData, {
          headers: { Authorization: token },
        });
        console.log(res.data.Data);
        setEditIndex(null);
        getData();
        resetForm();
      } catch (error) {
        console.log(error?.response?.data);
      }
    } else {
      try {
        const res = await axios.post(`${url}`, values, {
          headers: { Authorization: token },
        });
        console.log(res.data.Data);
        getData();
        resetForm();
      } catch (error) {
        console.log(error?.response?.data);
      }
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .min(6, "At least 6 Characters")
      .required("Password is required"),
  });

  return (
    <>
      <Container className="text-center my-4 ">
        <Formik
          initialValues={formData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          <Form>
            <Field
              className="w-25"
              name="username"
              placeholder="Enter Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger"
            />
            <br />
            <Field className="w-25" name="email" placeholder="Enter Email" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />

            <br />
            <Field
              className="w-25"
              name="password"
              placeholder="Enter Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />

            <br />
            <button type="submit" className="fs-5 w-25">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </Form>
        </Formik>

        <table border={1}>
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
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => editData(item._id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => delData(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default DemoApi;
