import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function AddEmployee() {
  const [records, setRecords] = useState([]);
  const[data,setData]=useState([])
  const [inputData, setInputData] = useState({
    name: "",
    experiance:"",
    expertise:"",
    job:
    {
    jid:"",
    field:"",
    applicantName:"",
    result: ""
    
  }
});

useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:1229/job/all")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };

  let handleChange = (e) => {
    if (e.target.name === "jid") {
        console.log(e.target.value);
        setInputData({ ...inputData, job: { jid: e.target.value } });
        axios.get("http://localhost:1229/job/"+e.target.value)
        .then((res)=>{
            console.log(res.data);
            setInputData({ ...inputData, job: res.data });
            // setInputData({ ...inputData, payroll: { da: res.data.da } });
            // setInputData({ ...inputData, payroll: { basic: res.data.basic } });
            setData(res.data);
            return res.data;
        })
        .catch((err) => console.error(err));
    }; 
  }

  // const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    // setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:1229/applicant", inputData)
        .then((res) => {
          alert("Data added Successfully");
          window.location.href="/";
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };

 

  const validateValues = (inputData) => {
    if (inputData.name.length === 0) {
      alert("Enter Valid Details ");
      return false;
    } else if (inputData.job.field.length === 0) {
      alert("Enter Valid Details ");
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
      <div className="w-50 border  p-5" style={{color:"black"}} id="addemp">
        <form onSubmit={handleSubmit}>
          <h1 >ADD CUSTOMER DATA</h1>
          <div>
            <lable htmlFor="name">Name</lable>
            <input
              type="text"
              name="name"
              role="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="experiance">EXPERIANCE</lable>
            <input
              type="text"
              name="experiance"
              role="experiance"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, experiance: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="expertise">EXPERTISE</lable>
            <input
              type="text"
              name="expertise"
              role="expertise"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, expertise: e.target.value })
              }
            />
          </div>


          <div>
          <label htmlFor="jid">Job Id</label>
          
                  <select
                    class="form-select"
                    required="required"
                    name="jid"
                    title="Select ID "
                    onChange={handleChange}
                  >
                    <option name="jid" selected="selected">
                      Select One
                    </option>
                    { records.map((d,i) => (
                      <option value={d.jid} key={i}>
                        {d.jid}
                      </option>
                    ))}
                  </select>
            </div>

          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default AddEmployee;