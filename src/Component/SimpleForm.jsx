import { Field, Form, Formik } from "formik";
import {
  TextField,
  Button,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Avatar,
  Box,
} from "@mui/material";
import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SimpleForm = () => {
  const token = "mMW98bxpWWiD0KYu";
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null); // Index ki jagah ID use karna better hai

  const initialValues = {
    name: "",
    email: "",
    password: "",
    image: null,
    multi_image: [],
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    // Edit ke waqt string aati hai isliye validation thoda easy rakha hai
    image: yup.mixed().required("Image is required"),
    multi_image: yup.array().min(1, "Kam se kam 1 image chahiye"),
  });

  // --- 1. GET DATA ---
  const GetData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/SimpleForms", {
        headers: { Authorization: token },
      })
      .then((res) => setList(res.data.Data))
      .catch(() => toast.error("Data load nahi hua"));
  };

  useEffect(() => {
    GetData();
  }, []);

  // --- 2. ADD / UPDATE ---
  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);

    // Single Image: Sirf tab append karo jab nayi file select ho
    if (values.image && typeof values.image !== "string") {
      formData.append("image", values.image);
    }

    // Multi Image: Loop chalao aur sirf nayi files append karo
    if (values.multi_image) {
      values.multi_image.forEach((file) => {
        if (typeof file !== "string") {
          formData.append("multi_image", file);
        }
      });
    }

    const url = editId
      ? `https://generateapi.techsnack.online/api/SimpleForms/${editId}`
      : "https://generateapi.techsnack.online/api/SimpleForms";

    const method = editId ? "patch" : "post";

    axios[method](url, formData, { headers: { Authorization: token } })
      .then(() => {
        toast.success(editId ? "Update ho gaya!" : "Add ho gaya!");
        resetForm();
        setEditId(null);
        GetData();
      })
      .catch(() => toast.error("Kuch galti hui hai"));
  };

  // --- 3. DELETE ---
  const handleDelete = (id) => {
    if (window.confirm("Delete karna hai?")) {
      axios
        .delete(`https://generateapi.techsnack.online/api/SimpleForms/${id}`, {
          headers: { Authorization: token },
        })
        .then(() => {
          toast.success("Delete successfully");
          GetData();
        });
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      <ToastContainer position="top-right" autoClose={1500} />

      <Formik
        initialValues={
          editId ? list.find((i) => i._id === editId) : initialValues
        }
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "30px",
            }}
          >
            <h3>{editId ? "Update User" : "Add User"}</h3>

            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Field
              name="password"
              as={TextField}
              type="password"
              label="Password"
              fullWidth
              sx={{ mb: 2 }}
            />

            {/* Single Image Input */}
            <Box sx={{ textAlign: "left", mb: 2 }}>
              <label>
                <b>Profile Pic:</b>
              </label>
              <br />
              <input
                type="file"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              {values.image && (
                <Avatar
                  src={
                    typeof values.image === "string"
                      ? values.image
                      : URL.createObjectURL(values.image)
                  }
                  sx={{ width: 60, height: 60, mt: 1 }}
                />
              )}
            </Box>

            {/* Multi Image Input */}
            <Box sx={{ textAlign: "left", mb: 2 }}>
              <label>
                <b>Gallery:</b>
              </label>
              <br />
              <input
                type="file"
                multiple
                onChange={(e) =>
                  setFieldValue("multi_image", Array.from(e.target.files))
                }
              />
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {values.multi_image?.map((file, i) => (
                  <img
                    key={i}
                    src={
                      typeof file === "string"
                        ? file
                        : URL.createObjectURL(file)
                    }
                    alt=""
                    width="50"
                    height="50"
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                ))}
              </Box>
            </Box>

            <Button type="submit" variant="contained" color="primary">
              {editId ? "Update" : "Submit"}
            </Button>
            {editId && (
              <Button onClick={() => setEditId(null)} sx={{ ml: 2 }}>
                Cancel
              </Button>
            )}
          </Form>
        )}
      </Formik>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Profile
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Password
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Gallery
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.password}</TableCell>
                <TableCell>
                  <Avatar src={item.image} alt="" />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {item.multi_image?.map((img, i) => (
                      <img
                        alt=""
                        key={i}
                        src={img}
                        width="30"
                        height="30"
                        style={{ borderRadius: "3px" }}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Button onClick={() => setEditId(item._id)}>Edit</Button>
                  <Button color="error" onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SimpleForm;
