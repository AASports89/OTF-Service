import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const load = <i className="fa-solid fa-user-lock fa-bounce fa-lg" Style={"color: rgb(26, 111, 217);"}></i>;

function Login() {

  const [USERNAME, setUsername] = useState("");
  const [PASSWORD, setPassword] = useState(""); 

  useEffect(() => {load});

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      if (!USERNAME || USERNAME === "" || !PASSWORD || PASSWORD === "") 
      {
        toast.warning("⛔❗| All Fields Are Required |❗⛔");
        return; 
      }
      const res = await axios.post("http://localhost:3000/login", {
        USERNAME: USERNAME,
        PASSWORD: PASSWORD
      });
      
      if (res.status === 200) 
      {
        setUsername(''); 
        setPassword(''); 
        toast.success("...✅| User Successfully Logged In |✅...");
      }

      const token = await res.data.token;
      localStorage.setItem("🪙", token); 

    } catch (error) {
      console.error("⛔❗| Login Error |❗⛔", error);
      toast.error("⛔❗| Invalid User / Login Credentials |❗⛔", error);
    }
  };

  return(
        <div className="modal-dialog" id="login-modal">
			      <div className="modal-content">
				      <div className="modal-header">
					      <h5 className="modal-title" id="exampleModalLabel"><i className="fa-solid fa-user"></i> <i>Admin / User Login</i></h5>
				      </div>
				    <div className="modal-body">
					    <form className="content-containers container text-center mt-5" id="login" onSubmit={handleLogin}>
                <div className="input-group" id="login-un">
                  <label id="un_label" htmlFor="username"><i id="un_icon" className="fas fa-user"></i></label>
								  <input id="username" className="form-control username" value={USERNAME} onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username" type="text" required/>
						    </div>
                <div className="input-group" id="login-pw">
                  <label id="pw_label" htmlFor="password"><i id="pw_icon" className="fas fa-lock"></i></label>
								  <input id="password" className="form-control password" value={PASSWORD} onChange={(e) => setPassword(e.target.value)} placeholder="******" name="password" type="password" required/>
						    </div>
						    <div className="modal-footer">
								<button type="submit" id="pw_login" className="btn btn-primary login-btn" Style={{cursor: 'pointer'}}>
									  Login
								</button>
                <Link to={'/'} id="close-btn" className="btn btn-secondary" type="button">
                    Close
                </Link>
                </div>
              </form>
            </div>
          </div>
      </div>
)};

export default Login;