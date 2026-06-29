import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "sonner";

const Register = () => {

  const [USERNAME, setUsername] = useState("");
  const [PASSWORD, setPassword] = useState("");
  const [FIRST_NAME, setFirstName] = useState("");
  const [LAST_NAME, setLastName] = useState("");
  const [IS_ADMIN, setIsAdmin] = useState("");

  useEffect(() => {
    <i className="fa-solid fa-user-plus fa-fade fa-lg" Style={"color: rgb(26, 111, 217);"}></i>
  });

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      if (!USERNAME || USERNAME === "" ||
          !PASSWORD || PASSWORD === "" ||
          !FIRST_NAME || FIRST_NAME === "" ||
          !LAST_NAME || LAST_NAME === "" || 
          !IS_ADMIN || IS_ADMIN === ""
        ) 
      {
        toast.warning("⛔❗| All Fields Are Required |❗⛔");
        return; 
      }

      const res = await axios.post("http://localhost:5000/register", {
        USERNAME: USERNAME,
        PASSWORD: PASSWORD,
        FIRST_NAME: FIRST_NAME,
        LAST_NAME: LAST_NAME,
        IS_ADMIN: IS_ADMIN
      });

      if (res.status === 201) {
        setUsername(""); 
        setPassword(""); 
        setFirstName("");
        setLastName("");
        setIsAdmin("");
        toast.success("...✅| New User Registered |✅...");
      }
    } catch (error) {
      console.error("⛔❗| User Registration Error |❗⛔", error);
      toast.error("⛔❗| User Registeration Error |❗⛔");
    }
  };

return (
        <div className="modal-dialog" id="register-modal" tabindex="-1" aria-labelledby="exampleModalLabel">
			    <div className="modal-content">
				    <div className="modal-header">
					    <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user-plus fa-lg"></i> <i> Register New User</i></h5>
				    </div>
				    <div className="modal-body">
					    <form className="content-containers container text-center mt-5" id="login" onSubmit={handleSignup}>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
                  <input id="username" value={USERNAME} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" name="username" placeholder="Username" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
                  <input id="password" value={PASSWORD} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" placeholder="*******" required/>
						    </div>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="name"><i id="name_icon" className="fa-solid fa-id-badge"></i></label>
                  <input id="first_name" value={FIRST_NAME} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" name="first_name" placeholder="First Name" required/>
						    </div>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="name"><i id="name_icon" className="fa-regular fa-id-badge"></i></label>
                  <input id="last_name" value={LAST_NAME} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" name="last_name" placeholder="Last Name" required/>
						    </div>
                <div className="input-group" id="login-un">
                  <input id="is_admin" value={IS_ADMIN} onChange={(e) => setIsAdmin(e.target.value)} type="checkbox" className="form-check-input" required/>
                  <label className='form-check-label' id="un_label" for="is_admin"><i id="name_icon" className="fa-brands fa-black-tie"></i></label>
						    </div>
						    <div className="modal-footer">
								  <button type="submit" id="register-user" className="btn btn-primary" Style={{cursor: 'pointer'}}>
									  Register User
								   </button>
                  <Link id="close-btn" className="btn btn-secondary" type="button" to={'/'}>
                    Close
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
  )};

export default Register;