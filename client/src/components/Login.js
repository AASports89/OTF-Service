import React, { Component } from "react";
import { Link } from 'react-router-dom';

  const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

class Login extends Component {
  
render()
{

  return(
          <div className="modal-dialog" id="login-modal">
			      <div className="modal-content">
				      <div className="modal-header">
					      <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user"></i> <i>Admin / User Login</i></h5>
				      </div>
				    <div className="modal-body">
					    <form className="content-containers container text-center mt-5" onSubmit={loginUser} id="login">
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
								  <input value={loginUser} onChange={this.onChange} id="username" className="form-control" placeholder="Username" name="username" type="text" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
								  <input value={loginUser} onChange={this.onChange} id="password" className="form-control" placeholder="******" name="password" type="password" required/>
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