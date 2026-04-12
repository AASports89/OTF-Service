import React, { Component, useState } from "react";
import axios from 'axios';
import { values } from "sequelize/lib/operators.js";
import { register } from "./UserFunctions.js";

class Register extends Component {

constructor() {
    super();
    this.state = {
        username: "",
        password: "",
		first_name: "",
		last_name: "",
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      username: this.state.username,
      password: this.state.password,
	  first_name: this.state.first_name,
	  last_name: this.state.last_name
    }) 
  }

  onSubmit(e) {
    e.preventDefault();
  }

render()
{

const user = {
      username: this.state.username,
      password: this.state.password,
	  first_name: this.state.first_name,
	  last_name: this.state.last_name
    };

        register(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`);
      }
    })
const handleRegister = () => {

		axios.post(
			'http://localhost:3000/auth/register',
			{
				username: user.username,
        		password: user.password,
				first_name: user.first_name,
				last_name: user.last_name
			},
			{
				withCredentials: true,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
			},
		).then((response) => {
			console.log(response);
		});
};

return (
          <div className="modal-dialog">
			      <div className="modal-content">
				      <div className="modal-header">
					      <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user-plus fa-lg"></i> <i> Register New User</i>
                </h5>
				    </div>
				    <div className="modal-body" id="login-modal">
					    <form className="content-containers container text-center mt-5" onSubmit={handleRegister} id="login">
                <div className="input-group" id="login-un">
                  <label htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
                  <input value={this.state.username} onChange={this.onChange} type="text" className="form-control" name="username" placeholder="Username" />
						    </div>
                <div className="input-group" id="login-pw">
                  <label htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
                  <input value={this.state.password} onChange={this.onChange} type="password" className="form-control" name="password" placeholder="*******" />
						    </div>
                <div className="input-group" id="login-un">
                  <label htmlFor="name"><i id="name_icon" className="fa-solid fa-id-badge"></i></label>
                  <input value={this.state.first_name} onChange={this.onChange} type="text" className="form-control" name="first_name" placeholder="First Name" />
						    </div>
                <div className="input-group" id="login-un">
                  <label htmlFor="name"><i id="name_icon" className="fa-regular fa-id-badge"></i></label>
                  <input value={this.state.last_name} onChange={this.onChange} type="text" className="form-control" name="last_name" placeholder="Last Name" />
						    </div>
						    <div className="modal-footer">
								  <button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
									  Register New User
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

export default Register;