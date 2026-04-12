// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import nav_logo from '../images/nav_logo.svg';
// import Login from './Login.js';
// // import { login, register } from './UserFunctions.js';

// function Navbar() {

//     const logout = () => {
//       axios.get('http://localhost:3000/auth/logout', {
//         headers: { 'Content-Type': 'application/json' },
//             withCredentials: true,
//             method: 'GET',
//         }).then((response) => {
//             console.log(response);
//             console.log(response.data.session);
//             return response;
//         });
//         localStorage.clear();
//         window.location.reload();
//     }

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

//     //   <nav>
//     //   <ul className="navbar-nav">
//     //     <li className="nav-item">
//     //       <Link to="/driverLogs" id="inv-btn" type="button" className="btn btn-success">
//     //         <i className="fa-regular fa-hard-drive"></i> Driver Log
//     //       </Link>
//     //       <Link to="/inventories" id="inv-btn" type="button" className="btn btn-secondary">
//     //         <i className="fa-solid fa-warehouse"></i> Inventory
//     //       </Link>
//     //     </li>
//     //     <li className="nav-item">
//     //       <a id="logout" type="button" onClick={logout} className="btn btn-primary">
//     //        <i className="fa-solid fa-lock fa-lg"></i> Logout
//     //       </a>
//     //     </li>
//     //   </ul>
//     // {localStorage.usertoken ? login : register}
//   //   </nav>

// return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//           <a id="btn-home" className="navbar-brand" to='http://192.168.1.12:3000/' style={{cursor: 'pointer'}}>
//               <img id="mini-mart-logo" src={nav_logo} class="d-inline-block" />
//                 On The Fly Service™ Portal
//           </a>
//           <Link to={'/login'} type="button" id="admin-btn" className="btn btn-primary">
//             <i className="fa-solid fa-user"></i> Login
//           </Link>
//           <Link to="/register" type="button" id="register" className="btn btn-primary">
//             <i className="fa-solid fa-user-plus fa-lg"></i> Register
//           </Link>
//           <Link to="/driverLog" type="button" id="log-btn" className="btn btn-success">
//             <i className="fa-regular fa-hard-drive"></i> Service Log
//           </Link>
//           <Link to="/inventory" type="button" id="inv-btn" className="btn btn-secondary">
//             <i className="fa-solid fa-warehouse"></i> Inventory
//           </Link>
//           <a id="logout" type="button" onClick={logout} className="btn btn-primary">
//             <i className="fa-solid fa-lock fa-lg"></i> Logout
//           </a>
//   </nav>
// )};

// export default Navbar;