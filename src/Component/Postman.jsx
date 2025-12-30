// import axios from "axios";
// import { Form as FormikForm, Field, Formik } from "formik";
// import { useEffect, useState } from "react";
// import { Container, Table } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";

// const Postman = () => {
//   const [list4, setList4] = useState([]);
//   const [editData, setEditData] = useState(null);

//   const Token = "lIQrOrhrIjaV05yc";

//   const ini = editData
//     ? { username: editData.username, password: editData.password }
//     : { username: "", password: "" };

//   useEffect(() => {
//     GetData();
//   }, []);

//   function GetData() {
//     axios
//       .get("https://generateapi.techsnack.online/api/test", {
//         headers: { Authorization: Token },
//       })
//       .then((res) => {
//         console.log(res.data.Data);
//         setList4(res.data.Data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   const deleteData = (id) => {
//     console.log(id);
//     axios
//       .delete(`https://generateapi.techsnack.online/api/test/${id}`, {
//         headers: {
//           Authorization: Token,
//         },
//       })
//       .then((id) => {
//         // console.log(id);
//         toast.success("Deleted Successfully");
//         GetData();
//       })
//       .catch((error) => {
//         console.log(error);
//         toast.error("Failed to delete");
//       });
//   };

//   const PostData = (values, { resetForm }) => {
//     // console.log(values);
//     if (editData) {
//       axios
//         .patch(
//           `https://generateapi.techsnack.online/api/test/${editData._id}`,
//           values,
//           {
//             headers: { Authorization: Token },
//           }
//         )
//         .then(() => {
//           toast.success("Updated successfully!");
//           setEditData(null);
//           resetForm();
//           GetData();
//         })
//         .catch(() => toast.error("Update failed"));
//     } else
//       axios
//         .post("https://generateapi.techsnack.online/api/test", values, {
//           headers: { Authorization: Token },
//         })
//         .then(() => {
//           toast.success("Data added successfully!");
//           resetForm();
//           GetData();
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("Failed to add data");
//         });
//   };

//   return (
//     <>
//       <Container className="text-center">
//         <section style={{ padding: "20px 0px" }}>
//           <h1 style={{ textAlign: "center" }}> Data</h1>
//           <br />
//           <Formik
//             initialValues={ini}
//             enableReinitialize={true}
//             onSubmit={PostData}
//           >
//             <FormikForm>
//               <Field
//                 name="username"
//                 type="text"
//                 className="w-25"
//                 placeholder="Enter Username"
//               ></Field>
//               <br />
//               <Field
//                 name="password"
//                 type="text"
//                 className="w-25"
//                 placeholder="Enter Password"
//               ></Field>
//               <br />
//               <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
//                 Submit
//               </button>
//             </FormikForm>
//           </Formik>
//           <br />

//           <Table border={1}>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Password</th>
//                 <th colSpan={2}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {list4.map((i, _id) => (
//                 <tr key={i._id}>
//                   <td>{i.username}</td>
//                   <td>{i.password}</td>
//                   <td>
//                     <button onClick={() => setEditData(i)}>Update</button>
//                   </td>
//                   <td>
//                     <button onClick={() => deleteData(i._id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </section>
//         <ToastContainer position="top-right" autoClose={2000} />
//       </Container>
//     </>
//   );
// };

// export default Postman;

import axios from "axios";
import { Form as FormikForm, Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const Postman = () => {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, SetSearch] = useState("");

  const initialValues = {
    Roll_no: "",
    Name: "",
    Maths: "",
    Science: "",
    English: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const token = "3XtSvjFfj2xKIofA";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://generateapi.techsnack.online/api/Marksheet", {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        setList(res.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editId != null) {
      axios
        .patch(
          `https://generateapi.techsnack.online/api/Marksheet/${editId}`,
          values,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(() => {
          toast.success("Data updated successfully ");
          setEditId(null);
          setFormData(initialValues);
          getData();
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update data");
        });
    } else {
      axios
        .post("https://generateapi.techsnack.online/api/Marksheet", values, {
          headers: { Authorization: token },
        })
        .then(() => {
          toast.success("Data added successfully ");
          getData();
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add data");
        });
    }
  };

  const editBtn = (i) => {
    // console.log(i);
    setEditId(i._id);
    setFormData({
      Roll_no: i.Roll_no,
      Name: i.Name,
      Maths: i.Maths,
      Science: i.Science,
      English: i.English,
    });
  };

  const deleteBtn = (id) => {
    // console.log(id);
    axios
      .delete(`https://generateapi.techsnack.online/api/Marksheet/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        toast.success("Data deleted successfully");
        getData();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete data");
      });
  };

  const searchData = (e) => {
    console.log(e.target.value);
    SetSearch(e.target.value);
  };

  return (
    <>
      <Container className="text-center">
        <br />
        <Formik
          initialValues={formData}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          <FormikForm>
            <Field
              className="w-25"
              type="number"
              name="Roll_no"
              placeholder="Roll No"
              min="1"
              max="100"
            ></Field>
            <br />
            <Field
              className="w-25"
              type="text"
              name="Name"
              placeholder="Student Name"
            ></Field>
            <br />
            <Field
              className="w-25"
              type="number"
              name="Maths"
              placeholder="Maths"
              min="1"
              max="100"
            ></Field>
            <br />
            <Field
              className="w-25"
              type="number"
              name="Science"
              placeholder="Science"
              min="1"
              max="100"
            ></Field>
            <br />
            <Field
              className="w-25"
              type="number"
              name="English"
              placeholder="English"
              min="1"
              max="100"
            ></Field>
            <br />
            <button type="submit" className="py-2 px-3 fw-bold w-25 fs-5">
              {editId ? "Update" : "Submit"}
            </button>
          </FormikForm>
        </Formik>
        <br />
        <input
          type="text"
          placeholder="Search..."
          className="w-25"
          onChange={(e) => searchData(e)}
        />
        <Table border={2}>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Maths</th>
              <th>Science</th>
              <th>English</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list
              .filter((i) => {
                if (search === "") {
                  return i;
                } else if (
                  i.Name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return i;
                }
              })
              .map((i, _id) => (
                <tr key={i._id}>
                  <td>{i.Roll_no}</td>
                  <td>{i.Name}</td>
                  <td>{i.Maths}</td>
                  <td>{i.Science}</td>
                  <td>{i.English}</td>
                  <td>
                    <button onClick={() => editBtn(i)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteBtn(i._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Postman;
