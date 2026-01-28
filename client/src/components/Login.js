import React, { Component } from "react";
import { login } from "./UserFunctions.js";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    });
  }

render() 
{
return(
          <div className="modal-dialog">
			      <div className="modal-content">
				      <div className="modal-header">
					      <h5 className="modal-title" id="exampleModalLabel"><i className="fa-brands fa-black-tie"></i> <i>Admin. Login</i></h5>
				      </div>
				    <div className="modal-body" id="login-modal">
					    <form className="content-containers container text-center mt-5" onSubmit={this.onSubmit} id="login">
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
								  <input value={this.state.username} onChange={this.onChange} id="username" className="form-control" placeholder="Username" name="username" type="text" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
								  <input value={this.state.password} onChange={this.onChange} id="password" className="form-control" placeholder="******" name="password" type="password" required/>
						    </div>
						    <div className="modal-footer">
								  <button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
									  Login
								  </button>
                  <button id="close-btn" className="btn btn-secondary" type="button" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
)}};

export default Login;