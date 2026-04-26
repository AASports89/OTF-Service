import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { success } from "concurrently/src/defaults";

class Login extends Component {

render()
{

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const loginFormHandler = async (event) => {
  event.preventDefault();
  if (username && password) {
    const response = axios.post("/login", {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: { "Content-Type": "application/json" },
  });
  if ((await response).status === 200) 
    {
      document.location.replace('/profile');
    } else {
      alert("⛔| Invalid Username / Password " + response.status +  ": " +  response.statusText + " |⛔");
    }
  }        
};

document.querySelector(".btn btn-primary");

return(
        <div className="modal-dialog" id="login-modal">
			      <div className="modal-content">
				      <div className="modal-header">
					      <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user"></i> <i>Admin / User Login</i></h5>
				      </div>
				    <div className="modal-body">
					    <form className="content-containers container text-center mt-5" id="login" onSubmit={loginFormHandler}>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
								  <input id="username" className="form-control" value={username} placeholder="Username" name="username" type="text" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
								  <input id="password" className="form-control" value={password} placeholder="******" name="password" type="password" required/>
						    </div>
						    <div className="modal-footer">
								<button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
									  Login
								</button>
                <Link id="close-btn" className="btn btn-secondary" type="button" to={'/'}>
                    Close
                </Link>
                </div>
              </form>
            </div>
          </div>
      </div>
)}};

export default Login;