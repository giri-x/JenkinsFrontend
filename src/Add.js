import axios from "axios";
import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./App2.css";


function Add() {
  const [inputData, setInputData] = useState({
    field: "",
    applicantName: "",
    result: ""
  });



  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:1229/job", inputData)
        .then((res) => {
          alert("Data added Successfully");
          window.location.href = "/View";
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };


  const validateValues = (inputData) => {
    if (inputData.field.length === 0) {
      alert("Please enter the field !!! ");
      return false;

    } else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border  p-5" id="addemp">
        <form onSubmit={handleSubmit}>
          <h1>ADD  DATA</h1>
          <div>
            <lable htmlFor="field">Field</lable>
            <input
              type="text"
              name="field"
              id="field"
              className="form-control"
              role="aid"
              onChange={(e) =>
                setInputData({ ...inputData, field: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="applicantName">Applicant Name</lable>
            <input
              type="text"
              name="applicantName"
              className="form-control"
              role="aname"
              onChange={(e) =>
                setInputData({ ...inputData, applicantName: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="result">Result</lable>
            <input
              type="text"
              name="result"
              className="form-control"
              role="aresult"
              onChange={(e) =>
                setInputData({ ...inputData, result: e.target.value })
              }
            />
          </div>







          <br />

          <button className="btn btn-info ">Submit</button>
        </form>


      </div>
    </div>
  );
}

export default Add;
