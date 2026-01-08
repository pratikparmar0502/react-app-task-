import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const CardsApi = () => {
  const [list, setList] = useState([]);
  const [editID, setEditID] = useState(null);

  const initialValues = {
    name: "",
    price: "",
    MRP: "",
    image: "",
    multi_image: [],
    rating: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const token = "QpcGjvfhSiDCBzjR";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/Produc_Cards", {
        headers: { Authorization: token },
      })
      .then((res) => setList(res.data.Data || []))
      .catch(() => toast.error("Fetch Error!!!"));
  };

  // Unified Handle Submit (POST & PATCH)
  const handleSubmit = (values, { resetForm }) => {
    const data = new FormData();
    data.append("name", values.name);
    data.append("price", values.price);
    data.append("MRP", values.MRP);
    data.append("rating", values.rating);

    // Only append files if they are actual File objects (newly selected)
    if (values.image instanceof File) {
      data.append("image", values.image);
    }

    if (values.multi_image && values.multi_image.length > 0) {
      values.multi_image.forEach((file) => {
        if (file instanceof File) {
          data.append("multi_image", file);
        }
      });
    }

    const url = "https://generateapi.techsnack.online/api/Produc_Cards";
    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };

    if (editID) {
      // UPDATE logic
      axios
        .patch(`${url}/${editID}`, data, config)
        .then(() => {
          toast.success("Product updated successfully");
          finalizeForm(resetForm);
        })
        .catch((err) => toast.error("Update failed"));
    } else {
      // CREATE logic
      axios
        .post(url, data, config)
        .then(() => {
          toast.success("Product added successfully");
          finalizeForm(resetForm);
        })
        .catch((err) => toast.error("Submission failed"));
    }
  };

  const finalizeForm = (resetForm) => {
    setEditID(null);
    setFormData(initialValues);
    resetForm();
    getData();
  };

  const delBtn = (_id) => {
    axios
      .delete(`https://generateapi.techsnack.online/api/Produc_Cards/${_id}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        toast.success("Deleted successfully");
        getData();
      })
      .catch(() => toast.error("Delete failed"));
  };

  const editBtn = (item) => {
    setEditID(item._id);
    setFormData({
      name: item.name,
      price: item.price,
      MRP: item.MRP,
      image: item.image, // URL from API
      multi_image: item.multi_image || [], // URLs from API
      rating: item.rating,
    });
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card className="shadow-sm p-3 sticky-top" style={{ top: "20px" }}>
            <h4 className="mb-3">{editID ? "Edit Product" : "Add Product"}</h4>
            <Formik
              initialValues={formData}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Field
                    name="name"
                    placeholder="Name"
                    className="form-control mb-2"
                  />
                  <Field
                    name="price"
                    placeholder="Price"
                    className="form-control mb-2"
                  />
                  <Field
                    name="MRP"
                    placeholder="MRP"
                    className="form-control mb-2"
                  />
                  <Field
                    name="rating"
                    placeholder="Rating (1-5)"
                    className="form-control mb-2"
                  />

                  <label className="small fw-bold">Main Image</label>
                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
                  />

                  <label className="small fw-bold">Gallery Images</label>
                  <input
                    type="file"
                    className="form-control mb-3"
                    multiple
                    onChange={(e) =>
                      setFieldValue("multi_image", Array.from(e.target.files))
                    }
                  />

                  <Button
                    type="submit"
                    variant={editID ? "warning" : "primary"}
                    className="w-100"
                  >
                    {editID ? "Update Product" : "Submit Product"}
                  </Button>

                  {editID && (
                    <Button
                      variant="link"
                      className="w-100 mt-2 text-muted"
                      onClick={() => finalizeForm(() => {})}
                    >
                      Cancel Edit
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </Card>
        </Col>

        {/* Table Section */}
        {/* <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">Product Inventory</Card.Title>
              <Table responsive hover className="align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Pricing</th>
                    <th>Rating</th>
                    <th>Images</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 ? (
                    list.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="fw-bold">{item.name}</div>
                        </td>
                        <td>
                          <span className="text-success fw-bold">
                            ${item.price}
                          </span>
                          <div className="text-muted small text-decoration-line-through">
                            ${item.MRP}
                          </div>
                        </td>
                        <td>⭐ {item.rating}</td>
                        <td>
                          <div className="d-flex gap-1">
                            <img
                              src={item.image}
                              alt="main"
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                            />
                            {item.multi_image?.slice(0, 2).map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt="gallery"
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                  opacity: 0.7,
                                }}
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4 text-muted">
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col> */}

        {/* Cards Grid Column */}
        <Col lg={8}>
          <Row>
            {list.map((item) => (
              <Col md={6} key={item._id} className="mb-4">
                <Card className="h-100 shadow-sm border">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />

                  <Card.Body className="border">
                    <Card.Title className="fw-bold fs-4 mb-2">
                      {item.name}
                    </Card.Title>

                    <div className="d-flex align-items-center gap-3 mb-2">
                      <span className="fs-3 fw-bold text-dark">
                        ₹{item.price}
                      </span>
                      <span className="text-muted text-decoration-line-through">
                        MRP: ₹{item.MRP}
                      </span>
                    </div>

                    <div
                      className="text-warning mb-3"
                      style={{ fontSize: "1.2rem" }}
                    >
                      {[1, 2, 3, 4, 5].map((starIndex) => {
                        if (starIndex <= item.rating) {
                          return <span key={starIndex}>★</span>;
                        } else {
                          return (
                            <span key={starIndex} style={{ color: "#ccc" }}>
                              ★
                            </span>
                          );
                        }
                      })}
                      <span className="text-muted small ms-2">
                        ({item.rating})
                      </span>
                    </div>

                    <div className="d-flex justify-content-between gap-2 border-top pt-3">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: "1px solid #eee",
                          }}
                        >
                          <img
                            src={
                              item.multi_image && item.multi_image[i]
                                ? item.multi_image[i]
                                : "https://via.placeholder.com/60"
                            }
                            alt={`thumb-${i}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <Button
                        variant="primary"
                        className="px-5 py-2"
                        onClick={() => editBtn(item)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        className="px-5 py-2"
                        onClick={() => delBtn(item._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CardsApi;
