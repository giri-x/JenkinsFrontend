import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams , Link } from "react-router-dom";
import "./App2.css";
 
function UpdateEmployee() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1229/applicant/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
 
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1229/applicant", data).then((res) => {
      alert("User Updated Successfully");
      window.location.href= "/View1"
    });
  };
 
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border p-5" id="addemp">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE APPLICANT DATA</h1>
 
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="text"
                disabled
                name="id"
                className="form-control"
                role="uid"
                value={data.id}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
 
            <div>
            <lable htmlFor="name">Name :</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              role="uname"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </div>
 
          <div>
            <lable htmlFor="experiance">experiance:</lable>
            <input
              type="text"
              name="experiance"
              className="form-control"
              role="uexperiance"
              value={data.experiance}
              onChange={(e) =>
                setData({ ...data, experiance: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="expertise">expertise :</lable>
            <input
              type="text"
              name="expertise"
              className="form-control"
              role="uexpertise"
              value={data.expertise}
              onChange={(e) =>
                setData({ ...data, expertise: e.target.value })
              }
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
 
export default UpdateEmployee;