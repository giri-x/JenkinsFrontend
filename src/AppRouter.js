import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import View from './View';
import View1 from './View1';
import AddEmployee from './AddEmployee';
import Add from './Add';
import UpdateCons from "./UpdateCons";
import Edit from "./Edit";


const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/View" element={<View />} />
                <Route path="/View1" element={<View1 />} />
                <Route path="/AddEmployee" element={<AddEmployee />} />
                <Route path="/Add" element={<Add />} />
                <Route path="/updateemployee/:id" element={<UpdateCons/>} />
                <Route path="/update/:id" element={<Edit/>} />

            </Routes>
        </Router>
      
    </div>
  )
}

export default AppRouter
