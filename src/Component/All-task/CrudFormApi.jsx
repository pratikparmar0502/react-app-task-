import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const CrudFormApi = () => {
  const [list, setList] = useState([]);
  const [editid, setEditid] = useState(null);
  const token = "1xd6BQmCZn05codn";

  const ini =
    editid !== null
      ? list[editid]
      : {
          name: "",
          email: "",
          password: "",
          image: "",
          galary: [],
        };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);

    const formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("email", values.email);
    formdata.append("password", values.password);

    if (values.image && typeof values.image !== "string") {
      formdata.append("image", values.image);
    }

    if (values.galary && values.galary.length > 0) {
      values.galary.forEach((file) => {
        if (typeof file !== "string") {
          formdata.append("galary", file);
        }
      });
    }

    if (editid != null) {
      // const realID = list[editid]._id;
      axios
        .patch(
          `https://generateapi.techsnack.online/api/CrudForm/${list[editid]._id}`,
          formdata,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          },
        )
        .then((res) => {
          console.log(res.data.Data, "Update Success");
          alert("Update Success!!!");
          setEditid(null);
          getData();
          resetForm();
        })
        .catch((err) => {
          console.error(err.response.data);
        });
      return;
    }
    axios
      .post("https://generateapi.techsnack.online/api/CrudForm", formdata, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.Data, "Submit Success");
        alert("Data Saved!!!");
        getData();
        resetForm();
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const getData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/CrudForm", {
        headers: { Authorization: token },
      })
      .then((res) => {
        // console.log(res.data.Data);
        setList(res.data.Data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const Updatebtn = (index) => {
    setEditid(index);
  };

  const Deletebtn = (_id) => {
    let isDel = window.confirm("Are you sure you want to delete?");
    if (isDel) {
      axios
        .delete(`https://generateapi.techsnack.online/api/CrudForm/${_id}`, {
          headers: { Authorization: token },
        })
        .then(() => {
          console.log("Deleted Successfully");
          getData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Container className="my-4 text-center">
        <Formik
          initialValues={ini}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ setFieldValue }) => (
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
              <label htmlFor="">Single File</label>
              <input
                type="file"
                name="image"
                id=""
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <br />
              <label htmlFor="">Multiple File (3)</label>
              <input
                type="file"
                multiple
                name="galary"
                id=""
                onChange={(e) => {
                  setFieldValue("galary", Array.from(e.target.files));
                }}
              />
              <br />
              <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
                {editid ? "Update" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Image</th>
              <th>Galary</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <img width="50px" src={item.image} alt="" />
                </td>
                <td>
                  {item.galary.map((img, index) => (
                    <img
                      src={img}
                      key={index}
                      alt="imgesssss"
                      width="50px"
                      style={{ margin: "2px" }}
                    />
                  ))}
                </td>
                <td>
                  <button onClick={() => Updatebtn(index)}>Update</button>
                </td>
                <td>
                  <button onClick={() => Deletebtn(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default CrudFormApi;
