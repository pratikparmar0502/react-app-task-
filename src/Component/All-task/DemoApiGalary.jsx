import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

const DemoApiGalary = () => {
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const formData =
    editIndex !== null
      ? list.find((item) => item._id === editIndex)
      : { username: "", email: "", password: "", profile: "", galary: [] };

  const token = "8GcJq07e5NxgWnA6";
  const url = "https://generateapi.techsnack.online/api/DemoApiGalary";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}`, {
        headers: { Authorization: token },
      });
      console.log(res.data.Data);
      setList(res.data.Data);
    } catch (error) {
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
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
        toast("Data deleted successfully");
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
    const data = new FormData();

    data.append("username", values.username);
    data.append("email", values.email);
    data.append("password", values.password);

    if (values.profile && typeof values.profile !== "string") {
      data.append("profile", values.profile);
    }

    if (
      values.galary &&
      typeof values.galary !== "string" &&
      values.galary.length > 0
    ) {
      values.galary.forEach((item) => {
        data.append("galary", item);
      });
    }
    if (editIndex !== null) {
      try {
        const res = await axios.patch(`${url}/${editIndex}`, data, {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data.Data);
        toast("Data updated successfully");
        setEditIndex(null);
        getData();
        resetForm();
      } catch (error) {
        console.log(error?.response?.data);
      }
    } else {
      try {
        const res = await axios.post(`${url}`, data, {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data.Data);
        toast("Data added successfully");
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
    profile: yup.mixed().required("Profile is resquired"),
    galary: yup
      .array()
      .min(2, "Minimum image is 2")
      .max(5, "Maxmum image is 5")
      .required("Galary is resquired"),
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
          {({ setFieldValue }) => (
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
              <input
                type="file"
                name="profile"
                id=""
                onChange={(e) => setFieldValue("profile", e.target.files[0])}
              />
              <br />
              <ErrorMessage
                name="profile"
                component="div"
                className="text-danger"
              />
              <br />
              <input
                type="file"
                multiple
                name="galary"
                id=""
                onChange={(e) =>
                  setFieldValue("galary", Array.from(e.target.files))
                }
              />
              <br />
              <ErrorMessage
                name="galary"
                component="div"
                className="text-danger"
              />
              <br />
              <button type="submit" className="fs-5 w-25">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        <br />
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here....."
          className="w-25"
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <div className="my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="mt-2">Wait for few moments</h5>
          </div>
        ) : (
          <table className="table table-bordered table-hover table-striped mt-4">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Profile</th>
                <th>Galary</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list
                .filter((item) =>
                  item.username.toLowerCase().includes(search.toLowerCase()),
                )
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      {item.profile && (
                        <img
                          src={item.profile}
                          alt="profile"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </td>
                    <td>
                      {item.galary &&
                        item.galary.map((images, index) => (
                          <img
                            key={index}
                            src={images}
                            alt="images"
                            style={{
                              width: "50px",
                              height: "50px",
                              marginLeft: "5px",
                              objectFit: "cover",
                            }}
                          />
                        ))}
                    </td>
                    <td>
                      <Button
                        className="btn btn-info text-white py-2 px-3"
                        onClick={() => editData(item._id)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger text-white  py-2 px-3"
                        onClick={() => delData(item._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Container>
    </>
  );
};

export default DemoApiGalary;
