import axios from "axios";
import { Form as FormikForm, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
// Added Row, Col, and Button from react-bootstrap
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageApi = () => {
  const [imgList, setImageList] = useState([]);
  const token = "mBfpCqk2MyhRLTvy";

  const initialValues = {
    name: "",
    image: null,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/image", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setImageList(res.data.Data || []);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch images");
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);

    axios
      .post("https://generateapi.techsnack.online/api/image", formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Uploaded successfully!");
        resetForm();
        getData();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Upload failed!");
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <h1 className="mb-4">Image Upload</h1>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <FormikForm>
                <div className="mb-3 text-start">
                  <label className="form-label fw-bold">Name</label>
                  <Field
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>

                <div className="mb-4 text-start">
                  <label className="form-label fw-bold">Select Image</label>
                  <input
                    className="form-control"
                    type="file"
                    name="image"
                    onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-100 py-2">
                  Submit Data
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>

      <hr className="my-5" />

      <Row>
        <Col xs={12}>
          <h3 className="mb-3">Uploaded Gallery</h3>
          <Table responsive striped bordered hover>
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Image Preview</th>
              </tr>
            </thead>
            <tbody>
              {imgList.length > 0 ? (
                imgList.map((item) => (
                  <tr key={item._id}>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-thumbnail"
                        style={{ maxWidth: "150px", height: "auto" }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/100";
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No images found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      <ToastContainer position="bottom-right" />
    </Container>
  );
};

export default ImageApi;
