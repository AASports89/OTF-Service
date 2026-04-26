import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container.js';
import favicon from '../images/favicon.svg';
import nav_logo from '../images/nav_logo.svg';

const year = new Date().getFullYear();

class HomePage extends Component {

render()
{
  const loggedIn = async() => {
      const response = axios.get("/api/user/login", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
        });
  }

  const logout = async () => {
    const response = axios("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
  });

  if ((await response).status) {
      document.location.replace('/logout');
  }
};



return (
      <Container>
        <header>
        <nav id="nav-home" className="navbar navbar-expand-lg navbar-light">
          <a id="btn-home" className="navbar-brand" to={'http://localhost:3000/'} style={{cursor: 'pointer'}}>
              <img id="mini-mart-logo" src={nav_logo} class="d-inline-block" />
                <b>On The Fly Vehicle Service™</b>
          </a>
          <Link to={'/login'} type="button" id="admin-btn" className="btn btn-primary">
            <i className="fa-solid fa-user"></i> Login
          </Link>
          <Link to={'/register'} type="button" id="register" className="btn btn-primary">
            <i className="fa-solid fa-user-plus fa-lg"></i> Register
          </Link>
        <>
          {loggedIn ? (
          <></>
          ):(
        <>
          {/* <Link to="/serviceLog" type="button" id="log-btn" className="btn btn-success">
            <i className="fa-regular fa-hard-drive"></i> Service Log
          </Link>
          <Link to="/inventory" type="button" id="inv-btn" className="btn btn-secondary">
            <i className="fa-solid fa-warehouse"></i> Inventory
          </Link> */}
          <Link id="logout" type="button" to='/logout' className="btn btn-danger">
            <i className="fa-solid fa-lock fa-lg"></i> Logout
          </Link>
        </>
        )}
        </>
        </nav>
        </header>
        <footer id='footer' className="fixed-bottom navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <thead>
              <tr>
                <th className="nav item col justify-content-center">
                  <a id="yelp" href="#">
                    <i className="fa-brands fa-yelp fa-lg"></i>
                  </a>
                </th>
                <th>
                  <a id="ig" className="nav item col justify-content-center" href="#">
                    <i className="fa-brands fa-instagram fa-lg"></i>
                  </a>
                </th>
              </tr>
            </thead>
            <p className="nav item justify-content-center" id="footer-title"><b id="footer-bold">© On The Fly Service™ - {year}. All Rights Reserved.</b></p>
        </footer>
      </Container>
)}};

export default HomePage;