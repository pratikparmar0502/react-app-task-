import React, { createContext, useState } from "react";
import Ui from "./Ui";
import { Field, Form, Formik } from "formik";
import { Button, Container } from "react-bootstrap";

export const BtnContext = createContext();

const Context = () => {
  const [list, setList] = useState([]);

  const formData = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // console.log("Form data", values);
    if (!values.name || !values.email || !values.password) {
      return alert("Please fill all the fields");
    }
    setList([...list, values]);
    resetForm();
  };

  return (
    <>
      <Container className="mt-5 mb-5 text-center p-4">
        <Formik onSubmit={handleSubmit} initialValues={formData}>
          <Form>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className="w-25"
            ></Field>
            <br />
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-25"
            ></Field>
            <br />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="w-25"
            ></Field>
            <br />
            <Button
              type="submit"
              variant="primary"
              className="m-2 px-5 py-2 w-25"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Container>

      <BtnContext.Provider value={{ list, setList }}>
        <Ui></Ui>
      </BtnContext.Provider>
    </>
  );
};

export default Context;
