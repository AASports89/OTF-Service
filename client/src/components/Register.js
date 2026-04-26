import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Register extends Component {

render()
{
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  const first_name = document.querySelector("#first_name");
  const last_name = document.querySelector("#last_name");
  const is_admin = false;

  const registerFormHandler = async (event) => {

    if (password.length < 6) {
        alert("⛔| The minimum password length is 6 characters |⛔");
    } else if (username && password && first_name && last_name) {
        const response = axios.post("/register", {
            method: "POST",
            body: JSON.stringify({ username, password, first_name, last_name, is_admin }),
            headers: { "Content-Type": "application/json" },
        });
        if ((await response).status) {
            document.location.replace("/profile");
        } else {
            alert(
              "⛔| Failed to register new user " +
                    response.status +
                    ": " +
                    response.statusText + " |⛔"
            );
        }
    } else {
        alert("⛔| Missing / Invalid data fields |⛔");
    }
};

return (
        <div className="modal-dialog" id="register-modal" tabindex="-1" aria-labelledby="exampleModalLabel">
			    <div className="modal-content">
				    <div className="modal-header">
					    <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user-plus fa-lg"></i> <i> Register New User</i></h5>
				    </div>
				    <div className="modal-body">
					    <form className="content-containers container text-center mt-5" id="login">
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
                  <input id="username" value={username} type="text" className="form-control" name="username" placeholder="Username" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
                  <input id="password" value={password} type="password" className="form-control" name="password" placeholder="*******" required/>
						    </div>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="name"><i id="name_icon" className="fa-solid fa-id-badge"></i></label>
                  <input id="first_name" value={first_name} type="text" className="form-control" name="first_name" placeholder="First Name" required/>
						    </div>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="name"><i id="name_icon" className="fa-regular fa-id-badge"></i></label>
                  <input id="last_name" value={last_name} type="text" className="form-control" name="last_name" placeholder="Last Name" required/>
						    </div>
						    <div className="modal-footer">
								  <button type="submit" id="register-user" className="btn btn-primary" style={{cursor: 'pointer'}}>
									  Register New User
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

export default Register;