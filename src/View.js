import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function View() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
   //const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:1229/job/all")
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
        .delete("http://localhost:1229/job/" + id)
        .then((res) => {
          alert("record has deleted");
          window.location.href = "/View";
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-0bg-success " style={{backgroundColor:"gray",margin:"30px"}} role="JOB">
          JOB PORTAL
        </h1>

        <h1 id="app2" className="text-center text-0bg-success " style={{backgroundColor:"white",margin:"30px"}} role="JOB-DETAILS">
          JOB DETAILS
        </h1>


        
        <div className="text-end">
          <Link to="/Add" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />

        <div class="mt-10">
        <table className="table table-bordered  table-dark table-striped w-100 border bg-black shadow px-5 pb-5 rounded ">
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
                <td>{d.jid}</td>
                <td>{d.field}</td>
                <td>{d.applicantName}</td>
                <td>{d.result}</td>
               

                <td>
                  <Link
                    to={`/update/${d.jid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleSubmit(d.jid)}
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
    </div>
  );
}

export default View;
