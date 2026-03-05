import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Field, Form, Formik } from "formik";

const Register = () => {
  const formData = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleSubmit = () => {};

  return (
    <>
      <Container>
        <Formik
          initialValues={formData}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          <Form className="text-center my-5 d-flex flex-column align-items-center justify-content-center">
            <Field name="username" className="w-25" placeholder="Username" />
            <br />
            <Field name="email" className="w-25" placeholder="Email" />
            <br />
            <Field name="password" className="w-25" placeholder="Password" />
            <br />
            <Field
              name="confirm_password"
              className="w-25"
              placeholder="Confirm Password"
            />
            <br />
            <Button className="w-25" variant="contained" type="submit">
              Submit
            </Button>
            <span className="mt-3">
              Already have an account? <a href="/login">Login</a>
            </span>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Register;
