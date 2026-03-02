// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as yup from "yup";
// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";

// const Demo = () => {
//   const [list, setList] = useState(() => {
//     const savedData = localStorage.getItem("myCrudList");
//     return savedData ? JSON.parse(savedData) : [];
//   });
//   const [editIndex, setEditIndex] = useState(null);
//   const [search, setSearch] = useState("");

//   const formData =
//     editIndex !== null
//       ? list[editIndex]
//       : { username: "", email: "", password: "" };

//   useEffect(() => {
//     localStorage.setItem("myCrudList", JSON.stringify(list));
//   }, [list]);

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);

//     if (editIndex !== null) {
//       const updatedList = [...list];
//       // console.log(updatedList);
//       updatedList[editIndex] = values;
//       setList(updatedList);
//       setEditIndex(null);
//     } else {
//       setList([...list, values]);
//     }
//     resetForm();
//   };

//   const validationSchema = yup.object({
//     username: yup.string().required("Name is required"),
//     email: yup.string().required("Email is required"),
//     password: yup.string().min("6").required("Password is required"),
//   });

//   const delBtn = (index) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete?");
//     if (isConfirmed) {
//       let filteredIndex = list.filter((item, itemIndex) => itemIndex !== index);
//       setList(filteredIndex);
//     }
//   };

//   const editBtn = (index) => {
//     console.log(index);
//     setEditIndex(index);
//   };

//   return (
//     <>
//       <Container className="text-center my-4 ">
//         <Formik
//           initialValues={formData}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//           enableReinitialize={true}
//         >
//           <Form>
//             <Field
//               className="w-25"
//               name="username"
//               placeholder="Enter Username"
//             />
//             <ErrorMessage
//               name="username"
//               component="div"
//               className="text-danger"
//             />
//             <br />
//             <Field className="w-25" name="email" placeholder="Enter Email" />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-danger"
//             />

//             <br />
//             <Field
//               className="w-25"
//               name="password"
//               placeholder="Enter Password"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="text-danger"
//             />

//             <br />
//             <button type="submit" className="fs-5 w-25">
//               {editIndex !== null ? "Update" : "Submit"}
//             </button>
//           </Form>
//         </Formik>

//         <input
//           type="search"
//           name="search"
//           id=""
//           placeholder="Search here..."
//           className="w-25 my-3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <table border={1}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th colSpan={2}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list
//               .filter((item) => {
//                 if (search === "") {
//                   return item;
//                 } else if (
//                   item.username.toLowerCase().includes(search.toLowerCase())
//                 ) {
//                   return item;
//                 }
//               })
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.username}</td>
//                   <td>{item.email}</td>
//                   <td>{item.password}</td>
//                   <td>
//                     <button onClick={() => editBtn(index)}>Edit</button>
//                   </td>
//                   <td>
//                     <button onClick={() => delBtn(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </Container>
//     </>
//   );
// };

// export default Demo;

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Demo = () => {
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formData =
    editIndex !== null
      ? list[editIndex]
      : { username: "", email: "", password: "", image: "", multi_images: [] };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    if (editIndex !== null) {
      const updatedList = [...list];
      // console.log(updatedList);
      updatedList[editIndex] = values;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, values]);
    }
    resetForm();
    document.querySelector("#singleImage").value = "";
    document.querySelector("#multiImage").value = "";
  };

  const validationSchema = yup.object({
    username: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
    image: yup.mixed().required("Image is required"),
    multi_images: yup
      .array()
      .min(2, "Minimum 2 images")
      .max(5, "Maximum 5 images")
      .required("Multiple Image is required"),
  });

  const delBtn = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      let filteredIndex = list.filter((item, itemIndex) => itemIndex !== index);
      setList(filteredIndex);
    }
  };

  const editBtn = (index) => {
    console.log(index);
    setEditIndex(index);
  };

  return (
    <>
      <Container className="text-center my-4 ">
        <Formik
          initialValues={formData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ setFieldValue, values }) => (
            <Form className="border p-4 shadow-sm bg-light">
              <div className="mb-3">
                <label className="d-block">Image</label>
                <input
                  type="file"
                  className="mx-auto w-50 form-control"
                  name="image"
                  id="singleImage"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setFieldValue("image", url);
                    }
                  }}
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-danger"
                />
                {values.image && (
                  <img
                    src={values.image}
                    alt="preview"
                    className="mt-2"
                    style={{ width: "50px" }}
                  />
                )}
              </div>
              <div className="mb-3">
                <label className="d-block">Multiple Images</label>
                <input
                  type="file"
                  multiple
                  className="mx-auto w-50 form-control"
                  name="multi_images"
                  id="multiImage"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                      const urls = files.map((file) =>
                        URL.createObjectURL(file),
                      );
                      setFieldValue("multi_images", urls);
                    }
                  }}
                />
                <ErrorMessage
                  name="multi_images"
                  component="div"
                  className="text-danger"
                />
                <div className="mt-2">
                  {values.multi_images &&
                    values.multi_images.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        alt="Multi-Images Preview"
                        className="m-1"
                        width="80px"
                      />
                    ))}
                </div>
              </div>
              <Field
                className="w-50 form-control mx-auto"
                name="username"
                placeholder="Enter Username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
              <br />

              <Field
                className="w-50 form-control mx-auto"
                name="email"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />

              <br />
              <Field
                className="w-50 form-control mx-auto"
                name="password"
                placeholder="Enter Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />

              <br />
              <button type="submit" className="btn btn-primary w-50 mt-1">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>

        <table border={1}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Multiple Images</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>
                  {item.multi_images &&
                    item.multi_images.map((images, i) => (
                      <img
                        key={i}
                        src={images}
                        alt="multiple Images"
                        className="m-1"
                        width="50"
                        height="50"
                      />
                    ))}
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Button variant="info" onClick={() => editBtn(index)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => delBtn(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Demo;
