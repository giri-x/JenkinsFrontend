// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./App2.css";

// function Edit() {
//   const { id } = useParams();
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("http://localhost:1229/job/" + id)
//       .then((response) => setData(response.data))
//       .catch((err) => console.log(err));
//   }, []);

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:1229/job", data).then((res) => {
//       alert("User Updated Successfully");
//       navigate("/");
//     });
//   };

//   return (
//     <div>
//       <div
//         id="edit2"
//         className="d-flex w-100 vh-100 justify-content-center align-items-center "
//       >
//         <div className="w-50 border  p-5" id="addemp">
//           <form onSubmit={handleSubmit}>
//             <h1>UPDATE Job DATA</h1>
//             <div>
//               <lable htmlFor="jid">ID :</lable>
//               <input
//                 type="number"
//                 disabled
//                 name="jid"
//                 className="form-control"
//                 value={data.jid}
//                 //onChange={(e) => setData({ ...data, name: e.target.value })}
//               />
//             </div>

//             <div>
//               <lable htmlFor="field">FIELD:</lable>
//               <input
//                 type="text"
//                 name="field"
//                 className="form-control"
//                 value={data.field}
//                 onChange={(e) => setData({ ...data, field: e.target.value })}
//               />
//             </div>
//             <div>
//               <lable htmlFor="applicantName">applicantName</lable>
//               <input
//                 type="text"
//                 name="applicantName"
//                 className="form-control"
//                 value={data.applicantName}
//                 onChange={(e) => setData({ ...data, applicantName: e.target.value })}
//               />
//             </div>
//             </div>
//             <div>
//               <lable htmlFor="result">result</lable>
//               <input
//                 type="text"
//                 name="result"
//                 className="form-control"
//                 value={data.result}
//                 onChange={(e) => setData({ ...data, result: e.target.value })}
//               />
//             </div>

            
//             <br />

//             <button className="btn btn-info ">Update</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Edit;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Edit() {
  const { id } = useParams();
  const [data, setData] = useState({}); // Initialize with an empty object
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:1229/job/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:1229/job", data) // Add the id to the PUT request
      .then((res) => {
        alert("User Updated Successfully");
        navigate("/");
      });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border  p-5" id="addemp">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE Job DATA</h1>
            <div>
              <label htmlFor="jid">ID :</label>
              <input
                type="number"
                disabled
                name="jid"
                className="form-control"
                value={data.jid}
                //onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="field">FIELD:</label>
              <input
                type="text"
                name="field"
                className="form-control"
                value={data.field}
                onChange={(e) => setData({ ...data, field: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="applicantName">applicantName</label>
              <input
                type="text"
                name="applicantName"
                className="form-control"
                value={data.applicantName}
                onChange={(e) => setData({ ...data, applicantName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="result">result</label>
              <input
                type="text"
                name="result"
                className="form-control"
                value={data.result}
                onChange={(e) => setData({ ...data, result: e.target.value })}
              />
            </div>

            <br />

            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;