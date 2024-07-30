import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function View() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:1229/applicant/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:1229/applicant/" + id)
        .then((res) => {
          alert("record has deleted");
          window.location.href="/ViewConsumer";
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
    
  };

  return (
    <div id="body">
      <div className="container ">
      <h1 id="app2" className="text-center text-0bg-success " style={{backgroundColor:"gray",margin:"30px"}} role="ONLINE-JOB-PORTAL">
          ONLINE-JOB-PORTAL
        </h1>

        <h1 id="app2" className="text-center text-0bg-success " style={{backgroundColor:"white",margin:"30px"}} role="APPLICANT-DETAILS">
          APPLICANT-DETAILS
        </h1>

        <div className="text-end">
          <Link to="/AddEmployee" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
        <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.experiance}</td>
                <td>{d.expertise}</td>
                <td>{d.job.result}</td>  

                <td>
                  <Link
                    to={`/updateemployee/${d.id}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleSubmit(d.id)}
                    className="btn btn-sm ms-1 btn-danger" id="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
