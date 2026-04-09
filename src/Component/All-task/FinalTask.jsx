// import { useState } from "react";

// const FinalTask = () => {
//   const [text, setText] = useState("");
//   const [list, setList] = useState([]);
//   const [editIndex, setEditindex] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text === "") {
//       return alert("Please enter task!");
//     }
//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = text;
//       setList(updatedList);
//       setEditindex(null);
//     } else {
//       setList([...list, text]);
//     }
//     setText("");
//   };

//   const delBtn = (delIndex) => {
//     console.log(delIndex);
//     if (window.confirm("are you sure?") === false) {
//       return;
//     }
//     const filterData = list.filter((i, index) => index !== delIndex);
//     console.log(filterData);
//     setList(filterData);
//   };

//   const editBtn = (index) => {
//     console.log(index);
//     setEditindex(index);
//     setText(list[index]);
//   };

//   return (
//     <>
//       <div style={{ margin: 5 }}>
//         <div>
//           <form action="" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               id=""
//               placeholder="Enter your task"
//             />
//             <button type="submit">
//               {editIndex !== null ? "Update" : "Submit"}
//             </button>
//           </form>
//         </div>
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <td>Tasks</td>
//               </tr>
//             </thead>
//             <tbody>
//               {list.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item}</td>
//                   <td>
//                     {" "}
//                     <button onClick={() => delBtn(index)}>Delete</button>
//                   </td>
//                   <td>
//                     {" "}
//                     <button onClick={() => editBtn(index)}>Edit</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FinalTask;

// ===========================================================================================================================
// ===========================================================================================================================
// ===========================================================================================================================
// ===========================================================================================================================
// ===========================================================================================================================

// import { useEffect, useState } from "react";

// const FinalTask = () => {
//   const [formdata, setFormdata] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [list, setList] = useState([]);
//   const [editIndex, setEditindex] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const data = localStorage.getItem("users");
//     if (data) {
//       setList(JSON.parse(data));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(list));
//   }, [list]);

//   const handleSubmit = (e) => {
//     console.log(formdata);

//     e.preventDefault();
//     if (
//       formdata.name === "" ||
//       formdata.email === "" ||
//       formdata.password === ""
//     ) {
//       return alert("Please fill all the field!");
//     }
//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = formdata;
//       setList(updatedList);
//       setEditindex(null);
//     } else {
//       setList([...list, formdata]);
//     }

//     setFormdata({
//       name: "",
//       email: "",
//       password: "",
//     });
//   };

//   const delBtn = (delIndex) => {
//     console.log(delIndex);
//     if (window.confirm("Are you sure?") === true) {
//       const delData = list.filter((i, index) => index !== delIndex);
//       setList(delData);
//     } else {
//       return;
//     }
//   };

//   const editBtn = (index) => {
//     console.log(index);
//     setEditindex(index);
//     setFormdata(list[index]);
//   };

//   const filteredData = list.filter((i) => {
//     return i.name.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <>
//       <div style={{ margin: 5 }}>
//         <div>
//           <form action="" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formdata.name}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, name: e.target.value })
//               }
//               id=""
//               placeholder="Enter your name"
//             />
//             <input
//               type="text"
//               name="email"
//               value={formdata.email}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, email: e.target.value })
//               }
//               id=""
//               placeholder="Enter your email"
//             />
//             <input
//               type="text"
//               name="password"
//               value={formdata.password}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, password: e.target.value })
//               }
//               id=""
//               placeholder="Enter your password"
//             />
//             <br />
//             <button type="submit">
//               {editIndex !== null ? "Update" : "Submit"}
//             </button>
//             <br />
//             <br />
//             <input
//               type="search"
//               name="search"
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search here..."
//               id=""
//             />
//           </form>
//         </div>
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <td>Name</td>
//                 <td>Email</td>
//                 <td>Password</td>
//                 <td colSpan={2}>Actions</td>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.password}</td>
//                   <td>
//                     {" "}
//                     <button onClick={() => delBtn(index)}>Delete</button>
//                   </td>
//                   <td>
//                     {" "}
//                     <button onClick={() => editBtn(index)}>Edit</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FinalTask;

// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================

// import { useState } from "react";

// const FinalTask = () => {
//   const [formdata, setFormdata] = useState({
//     name: "",
//     email: "",
//     password: "",
//     profile: null,
//     galary: [],
//   });
//   const [list, setList] = useState([]);
//   const [editIndex, setEditindex] = useState(null);

//   const handleSubmit = (e) => {
//     console.log(formdata);

//     e.preventDefault();
//     if (!formdata.name || !formdata.email || !formdata.password) {
//       return alert("Please fill all the field!");
//     }

//     if (editIndex === null && !formdata.profile) {
//       return alert("Profile required");
//     }

//     if (editIndex === null && formdata.galary.length === 0) {
//       return alert("Gallery required");
//     }

//     if (formdata.galary.length > 3) {
//       return alert("Maximum length 3!");
//     }

//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = formdata;
//       setList(updatedList);
//       setEditindex(null);
//     } else {
//       setList([...list, formdata]);
//     }

//     setFormdata({
//       name: "",
//       email: "",
//       password: "",
//       profile: null,
//       galary: [],
//     });
//   };

//   const delBtn = (delIndex) => {
//     console.log(delIndex);
//     if (window.confirm("Are you sure?") === true) {
//       const delData = list.filter((i, index) => index !== delIndex);
//       setList(delData);
//     } else {
//       return;
//     }
//   };

//   const editBtn = (index) => {
//     console.log(index);
//     setEditindex(index);
//     setFormdata({ ...list[index] });
//   };

//   return (
//     <>
//       <div style={{ margin: 5 }}>
//         <div>
//           <form action="" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formdata.name}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, name: e.target.value })
//               }
//               id=""
//               placeholder="Enter your name"
//             />
//             <input
//               type="text"
//               name="email"
//               value={formdata.email}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, email: e.target.value })
//               }
//               id=""
//               placeholder="Enter your email"
//             />
//             <input
//               type="text"
//               name="password"
//               value={formdata.password}
//               onChange={(e) =>
//                 setFormdata({ ...formdata, password: e.target.value })
//               }
//               id=""
//               placeholder="Enter your password"
//             />
//             <br />
//             <input
//               type="file"
//               name="profile"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 const imgURL = URL.createObjectURL(file);
//                 setFormdata({ ...formdata, profile: imgURL });
//               }}
//               id=""
//             />
//             {formdata.profile && (
//               <img
//                 src={formdata.profile}
//                 alt="profile preview"
//                 style={{ width: "50px" }}
//               />
//             )}
//             <input
//               type="file"
//               multiple
//               name="galary"
//               onChange={(e) => {
//                 const files = Array.from(e.target.files);
//                 const imgURL = files.map((file) => URL.createObjectURL(file));
//                 setFormdata({ ...formdata, galary: imgURL });
//               }}
//               id=""
//             />
//             {formdata.galary.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt="galary preview"
//                 style={{ width: "50px", margin: "5px" }}
//               />
//             ))}
//             <br />
//             <button type="submit">
//               {editIndex !== null ? "Update" : "Submit"}
//             </button>
//             <br />
//           </form>
//         </div>
//         <div>
//           <table>
//             <thead>
//               <tr>
//                 <td>Name</td>
//                 <td>Email</td>
//                 <td>Password</td>
//                 <td>Profile</td>
//                 <td>Galary</td>
//                 <td colSpan={2}>Actions</td>
//               </tr>
//             </thead>
//             <tbody>
//               {list.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.password}</td>
//                   <td>
//                     <img
//                       src={item.profile}
//                       style={{ width: "50px" }}
//                       alt="profile"
//                     />
//                   </td>
//                   <td>
//                     {item.galary.map((img, i) => (
//                       <img
//                         src={img}
//                         key={i}
//                         alt="galary imgs"
//                         style={{ width: "50px", margin: "5px" }}
//                       />
//                     ))}
//                   </td>
//                   <td>
//                     {" "}
//                     <button onClick={() => delBtn(index)}>Delete</button>
//                   </td>{" "}
//                   <td>
//                     {" "}
//                     <button onClick={() => editBtn(index)}>Edit</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FinalTask;

// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================

// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import { Field, Form, Formik } from "formik";
// import React, { useState } from "react";

// const FinalTask = () => {
//   const [list, setList] = useState([]);
//   const [editIndex, setEditindex] = useState(null);

//   const formData =
//     editIndex !== null
//       ? list[editIndex]
//       : {
//           username: "",
//           email: "",
//           password: "",
//         };

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);

//     if (!values.username || !values.email || !values.password) {
//       return alert("Please fill all the field!");
//     }

//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = values;
//       setList(updatedList);
//       setEditindex(null);
//     } else {
//       setList([...list, values]);
//     }
//     resetForm();
//   };

//   const delBtn = (delindex) => {
//     console.log(delindex);

//     const isConfirmed = window.confirm("Are you sure?");
//     if (isConfirmed) {
//       const filteredData = list.filter((i, index) => index !== delindex);
//       setList(filteredData);
//     }
//   };

//   const editBtn = (index) => {
//     console.log(index);

//     setEditindex(index);
//   };

//   return (
//     <>
//       <Container className="text-center p-5">
//         <Formik
//           onSubmit={handleSubmit}
//           initialValues={formData}
//           enableReinitialize={true}
//         >
//           <Form>
//             <Field
//               name="username"
//               type="text"
//               placeholder="Username"
//               className="py-2 px-3 w-25"
//             />
//             <br />
//             <Field
//               name="email"
//               type="text"
//               placeholder="Email"
//               className="py-2 px-3 w-25"
//             />
//             <br />
//             <Field
//               name="password"
//               type="text"
//               placeholder="Password"
//               className="py-2 px-3 w-25"
//             />
//             <br />
//             <Button
//               type="submit"
//               variant="contained"
//               className="py-2 px-3 w-25"
//             >
//               {editIndex !== null ? "Update" : "Submit"}
//             </Button>
//           </Form>
//         </Formik>

//         <table className="my-5">
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
//                   <button onClick={() => editBtn(index)}>Update</button>
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

// export default FinalTask;

// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================

// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import React, { useState } from "react";
// import * as yup from "yup";

// const FinalTask = () => {
//   const [list, setList] = useState([]);
//   const [editIndex, setEditindex] = useState(null);

//   const formData =
//     editIndex !== null
//       ? list[editIndex]
//       : {
//           username: "",
//           email: "",
//           password: "",
//         };

//   const validationSchema = yup.object({
//     username: yup.string().required("Required"),
//     email: yup.string().required("Required"),
//     password: yup
//       .string()
//       .min(8, "Minimum 8")
//       .max(16, "Maximum 16")
//       .required("Required"),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);

//     if (editIndex !== null) {
//       const updatedList = [...list];
//       updatedList[editIndex] = values;
//       setList(updatedList);
//       setEditindex(null);
//     } else {
//       setList([...list, values]);
//     }
//     resetForm();
//   };

//   const delBtn = (delindex) => {
//     console.log(delindex);

//     const isConfirmed = window.confirm("Are you sure?");
//     if (isConfirmed) {
//       const filteredData = list.filter((i, index) => index !== delindex);
//       setList(filteredData);
//     }
//   };

//   const editBtn = (index) => {
//     console.log(index);

//     setEditindex(index);
//   };

//   return (
//     <>
//       <Container className="text-center p-5">
//         <Formik
//           onSubmit={handleSubmit}
//           initialValues={formData}
//           enableReinitialize={true}
//           validationSchema={validationSchema}
//         >
//           {({ setFieldValue }) => (
//             <Form>
//               <Field
//                 name="username"
//                 type="text"
//                 placeholder="Username"
//                 className="py-2 px-3 w-25"
//               />
//               <ErrorMessage
//                 name="username"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//               <br />
//               <Field
//                 name="email"
//                 type="text"
//                 placeholder="Email"
//                 className="py-2 px-3 w-25"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//               <br />
//               <Field
//                 name="password"
//                 type="text"
//                 placeholder="Password"
//                 className="py-2 px-3 w-25"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//               <br />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 className="py-2 px-3 w-25"
//               >
//                 {editIndex !== null ? "Update" : "Submit"}
//               </Button>
//             </Form>
//           )}
//         </Formik>

//         <table className="my-5">
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
//                   <button onClick={() => editBtn(index)}>Update</button>
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

// export default FinalTask;

// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================
// ===================================================================================================================================

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const FinalTask = () => {
  const [list, setList] = useState([]);
  const [editIndex, setEditindex] = useState(null);

  // useEffect(() => {
  //   const savedData = localStorage.getItem("users");
  //   if (savedData) {
  //     setList(JSON.parse(savedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(list));
  // }, [list]);

  const formData =
    editIndex !== null
      ? list[editIndex]
      : {
          username: "",
          email: "",
          password: "",
          profile: null,
          galary: [],
        };

  const validationSchema = yup.object({
    username: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup
      .string()
      .min(8, "Minimum 8")
      .max(16, "Maximum 16")
      .required("Required"),
    profile: yup.mixed().required("Required"),
    galary: yup
      .array()
      .min(2, "Minimum 2")
      .max(3, "Maximum 3")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = values;
      setList(updatedList);
      setEditindex(null);
    } else {
      setList([...list, values]);
    }
    resetForm();
  };

  const delBtn = (delindex) => {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) {
      const filteredData = list.filter((i, index) => index !== delindex);
      setList(filteredData);
    }
  };

  const editBtn = (index) => {
    setEditindex(index);
  };

  return (
    <Container className="text-center p-5">
      <Formik
        onSubmit={handleSubmit}
        initialValues={formData}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="py-2 px-3 w-25"
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
            <br />

            <Field
              name="email"
              type="text"
              placeholder="Email"
              className="py-2 px-3 w-25"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
            <br />

            <Field
              name="password"
              type="text"
              placeholder="Password"
              className="py-2 px-3 w-25"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
            <br />
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const imgURL = URL.createObjectURL(file);
                setFieldValue("profile", imgURL);
              }}
            />
            {values.profile && (
              <img
                src={
                  typeof values.profile === "string"
                    ? values.profile
                    : URL.createObjectURL(values.profile)
                }
                width="50px"
                alt="profile preview"
              />
            )}
            <ErrorMessage
              name="profile"
              component="div"
              style={{ color: "red" }}
            />
            <br />
            <input
              type="file"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const imgURLs = files.map((file) => URL.createObjectURL(file));
                setFieldValue("galary", imgURLs);
              }}
            />
            {values.galary.map((img, i) => (
              <img
                src={img}
                key={i}
                width="50px"
                alt="galary preview"
                style={{ margin: "5px" }}
              />
            ))}
            <ErrorMessage
              name="galary"
              component="div"
              style={{ color: "red" }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              className="py-2 px-3 w-25"
            >
              {editIndex !== null ? "Update" : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>

      <table className="my-5">
        <thead>
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
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <img
                  src={item.profile}
                  alt="profile"
                  width="50px"
                  style={{ objectFit: "cover", margin: "5px" }}
                />
              </td>
              <td>
                {item.galary.map((img, i) => (
                  <img
                    src={img}
                    key={i}
                    alt="galary"
                    width="50px"
                    style={{ objectFit: "cover", margin: "5px" }}
                  />
                ))}
              </td>
              <td>
                <button onClick={() => editBtn(index)}>Update</button>
              </td>
              <td>
                <button onClick={() => delBtn(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default FinalTask;
