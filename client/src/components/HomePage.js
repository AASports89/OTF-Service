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

const logout = () => {
      axios.get('http://192.168.1.8:3000/auth/logout', {
        headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            method: 'GET',
        }).then((response) => {
            console.log(response);
            console.log(response.data.session);
            return response;
        });
        localStorage.clear();
        window.location.reload();
    }

//   const login = user => {
//   return axios
//     .post("users/login", {
//       USERNAME: user.USERNAME,
//       PASSWORD: user.PASSWORD
//     })
//     .then(response => {
//       localStorage.setItem("usertoken", response.data);
//       return response.data;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const register = newUser => {
//   return axios
//     .post("users/register", {
//       USERNAME: newUser.USERNAME,
//       PASSWORD: newUser.PASSWORD,
//       FIRST_NAME: newUser.FIRST_NAME,
//       LAST_NAME: newUser.LAST_NAME
//     })
//     .then(response => {
//       console.log("Registered");
//     });
// };

return (
      <Container>
        <header>
        <nav id="nav-home" className="navbar navbar-expand-lg navbar-light">
          <a id="btn-home" className="navbar-brand" to={'http://localhost:3000/'} style={{cursor: 'pointer'}}>
              <img id="mini-mart-logo" src={nav_logo} class="d-inline-block" />
                <b>On The Fly Service™ Portal</b>
          </a>
          <Link to={'/login'} type="button" id="admin-btn" className="btn btn-primary">
            <i className="fa-solid fa-user"></i> Login
          </Link>
          <Link to={'/register'} type="button" id="register" className="btn btn-primary">
            <i className="fa-solid fa-user-plus fa-lg"></i> Register
          </Link>
        <>
          {localStorage.getItem("userToken") ? (
          <></>
          ):(
        <>
          <Link to="/driverLog" type="button" id="log-btn" className="btn btn-success">
            <i className="fa-regular fa-hard-drive"></i> Service Log
          </Link>
          {/* <Link to="/inventory" type="button" id="inv-btn" className="btn btn-secondary">
            <i className="fa-solid fa-warehouse"></i> Inventory
          </Link> */}
          <a id="logout" type="button" onClick={logout} className="btn btn-primary">
            <i className="fa-solid fa-lock fa-lg"></i> Logout
          </a>
        </>
        )}
        </>
        </nav>
        </header>
        <footer id='footer' className="fixed-bottom navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul class="nav justify-content-center">
            <a id="icon-link" className="nav item justify-content-center" href="https://aasports89.github.io/Bloomington-Mini-Mart/">
              <img id="royal-icon" className='img-card-overlay' src={favicon} alt="OTF Service™"></img>
            </a>
             <p className="nav item justify-content-center" id="footer-title"><b id="footer-bold">© On The Fly Service™ - {year}. All Rights Reserved.</b></p>
          </ul>
        </footer>
      </Container>
)}};

export default HomePage;