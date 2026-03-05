import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Field, Form, Formik } from "formik";

const Login = () => {
  const formData = {
    email: "",
    password: "",
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
            <Field name="email" className="w-25" placeholder="Email" />
            <br />
            <Field name="password" className="w-25" placeholder="Password" />
            <br />
            <Button className="w-25" variant="contained" type="submit">
              Submit
            </Button>
            <span className="mt-3">
              Don't have an account? <a href="/register">Register</a>
            </span>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Login;
