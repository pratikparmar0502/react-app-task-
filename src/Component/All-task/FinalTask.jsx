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

import { useState } from "react";

const FinalTask = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    profile: null,
    galary: [],
  });
  const [list, setList] = useState([]);
  const [editIndex, setEditindex] = useState(null);

  const handleSubmit = (e) => {
    console.log(formdata);

    e.preventDefault();
    if (!formdata.name || !formdata.email || !formdata.password) {
      return alert("Please fill all the field!");
    }

    if (editIndex === null && !formdata.profile) {
      return alert("Profile required");
    }

    if (editIndex === null && formdata.galary.length === 0) {
      return alert("Gallery required");
    }

    if (formdata.galary.length > 3) {
      return alert("Maximum length 3!");
    }

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = formdata;
      setList(updatedList);
      setEditindex(null);
    } else {
      setList([...list, formdata]);
    }

    setFormdata({
      name: "",
      email: "",
      password: "",
      profile: null,
      galary: [],
    });
  };

  const delBtn = (delIndex) => {
    console.log(delIndex);
    if (window.confirm("Are you sure?") === true) {
      const delData = list.filter((i, index) => index !== delIndex);
      setList(delData);
    } else {
      return;
    }
  };

  const editBtn = (index) => {
    console.log(index);
    setEditindex(index);
    setFormdata({ ...list[index] });
  };

  return (
    <>
      <div style={{ margin: 5 }}>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
              id=""
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              id=""
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="password"
              value={formdata.password}
              onChange={(e) =>
                setFormdata({ ...formdata, password: e.target.value })
              }
              id=""
              placeholder="Enter your password"
            />
            <input
              type="file"
              name="profile"
              onChange={(e) => {
                const file = e.target.files[0];
                const imgURL = URL.createObjectURL(file);
                setFormdata({ ...formdata, profile: imgURL });
              }}
              id=""
            />
            {formdata.profile && (
              <img
                src={formdata.profile}
                alt="profile preview"
                style={{ width: "50px" }}
              />
            )}
            <input
              type="file"
              multiple
              name="galary"
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const imgURL = files.map((file) => URL.createObjectURL(file));
                setFormdata({ ...formdata, galary: imgURL });
              }}
              id=""
            />
            {formdata.galary.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="galary preview"
                style={{ width: "50px", margin: "5px" }}
              />
            ))}
            <br />
            <button type="submit">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
            <br />
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Profile</td>
                <td>Galary</td>
                <td colSpan={2}>Actions</td>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <img
                      src={item.profile}
                      style={{ width: "50px" }}
                      alt="profile"
                    />
                  </td>
                  <td>
                    {item.galary.map((img, i) => (
                      <img
                        src={img}
                        key={i}
                        alt="galary imgs"
                        style={{ width: "50px", margin: "5px" }}
                      />
                    ))}
                  </td>
                  <td>
                    {" "}
                    <button onClick={() => delBtn(index)}>Delete</button>
                  </td>{" "}
                  <td>
                    {" "}
                    <button onClick={() => editBtn(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FinalTask;
