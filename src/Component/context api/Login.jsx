import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { AuthContext } from "./ContextApi";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const formData = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Login Success: ", values);
    setUser(values);
    history.push("/");
  };

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
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Login;
