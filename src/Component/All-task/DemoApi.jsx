// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as yup from "yup";
// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";

// const Demo = () => {
//   const [list, setList] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [search, setSearch] = useState("");

//   const formData =
//     editIndex !== null
//       ? list[editIndex]
//       : { username: "", email: "", password: "" };

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
//             {list.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.username}</td>
//                 <td>{item.email}</td>
//                 <td>{item.password}</td>
//                 <td>
//                   <button onClick={() => editBtn(index)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => delBtn(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Container>
//     </>
//   );
// };

// export default Demo;
