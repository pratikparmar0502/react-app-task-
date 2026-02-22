import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const CrudForm = () => {
  const [list, setList] = useState([]);
  const [editid, setEditid] = useState(null);
  const [search, setSearch] = useState("");

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

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    if (!values.name || !values.email || !values.password) {
      return alert("Please fill all the field!");
    }
    if (editid !== null) {
      // const updatedList = [...list];
      // updatedList[editid] = values;
      // setList(updatedList);

      setList(list.map((item, index) => (index === editid ? values : item)));
      setEditid(null);
    } else {
      setList([...list, values]);
    }
    resetForm();
  };

  const UpdateBtn = (index) => {
    // console.log(index);
    setEditid(index);
  };
  const DeleteBtn = (index) => {
    // console.log(index);
    let isDeleted = window.confirm("Are you sure you want to delete?");
    if (isDeleted) {
      let copyData = [...list];
      copyData.splice(index, 1);
      setList(copyData);

      // setList(list.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <Container className="text-center my-4">
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
                onChange={(e) =>
                  setFieldValue("image", URL.createObjectURL(e.target.files[0]))
                }
              />
              <br />
              <label htmlFor="">Multiple File (3)</label>
              <input
                type="file"
                multiple
                name="galary"
                id=""
                onChange={(e) => {
                  let files = Array.from(e.target.files);
                  setFieldValue(
                    "galary",
                    files.map((f) => URL.createObjectURL(f)),
                  );
                }}
              />
              <br />
              <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
                {editid ? "Update" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here..."
            className="form-control w-25 mx-auto my-3"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="my-5">
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
            {list
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <img width="80px" src={item.image} alt="" />
                  </td>
                  <td>
                    {item.galary.map((image) => (
                      <img
                        src={image}
                        width="40px"
                        style={{ margin: "2px" }}
                        alt="imagesss"
                        key={image}
                      />
                    ))}
                  </td>
                  <td>
                    <button onClick={() => UpdateBtn(index)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => DeleteBtn(index)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default CrudForm;
