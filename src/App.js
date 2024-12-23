import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Dashboard from "./Components/Pages/Dashboard";
import Main from "./Components/Pages/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/main" element = {<Main/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


