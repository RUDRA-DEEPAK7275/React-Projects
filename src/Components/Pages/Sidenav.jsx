import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const VerticalNavbar = () => {
    return (
        <nav className="sidenav0 navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item"> <Link to="/dashboard">Dashboard</Link> </li>
                <li className="nav-item"> <Link to="/mycourses">My Courses</Link> </li>
                <li className="nav-item"> <Link to="/discussion">Disscusions</Link> </li>
                <li className="nav-item"> <Link to="/report">Reports</Link> </li>
                <li className="nav-item"> <Link to="/settings">Settings</Link> </li>
                <br />
                <br />
                <br />
                <li className="nav-item"> <Link to="/signup">SignUp
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                </Link> </li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;