import React from 'react'
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item">
                  <a href="mailto:support@gmail.com">
                    <i className="icofont-support-faq mr-2" />
                    support@novena.com
                  </a>
                </li>
                <li className="list-inline-item">
                  <i className="icofont-location-pin mr-2" />
                  Address Ta-134/A, New York, USA{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>Call Now : </span>
                  <span className="h4">823-4565-13456</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="images/logo.png" alt="img" className="img-fluid" />
          </NavLink>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarmain"
            aria-controls="navbarmain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="department.html"
                  id="dropdown02"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Department <i className="icofont-thin-down" />
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                  <li>
                    <NavLink className="dropdown-item" to="/department">
                      Departments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/departmentsingle"
                    >
                      Department Single
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="doctor.html"
                  id="dropdown03"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Doctors <i className="icofont-thin-down" />
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li>
                    <NavLink className="dropdown-item" to="/doctor">
                      Doctors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/doctorsingle"
                    >
                      Doctor Single
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="appoinment">
                      Appoinment
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="blog-sidebar.html"
                  id="dropdown05"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog <i className="icofont-thin-down" />
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                  <li>
                    <NavLink className="dropdown-item" to="/blogsidebar">
                      Blog with Sidebar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/blogsingle">
                      Blog Single
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
