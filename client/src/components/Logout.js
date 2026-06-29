import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render()
    {
    return(
            <div className="jumbotron mt-5">
                    <h3 className="text-center">
                        <strong><i className="fa-solid fa-user-lock fa-fade fa-xl" Style={"color: rgb(218, 18, 18);"}></i> has been logged out</strong>
                    </h3>
                    <h3 id='home-link' className="text-center">
                        <strong><Link id='home-link' to="/">Click | <i className="fa-solid fa-house-laptop fa-beat fa-xl" Style={"color: rgb(161, 179, 195);"}></i> | to return home</Link></strong>
                    </h3>
                    <h3 id='login-link' className="text-center">
                        <strong>
                            <Link id='login-link' to="/login">Click | <i className="fa-solid fa-circle-user fa-beat-fade fa-xl" Style={"color: rgb(99, 230, 190);"}></i> | to login</Link>
                        </strong>
                    </h3>
            </div>
        )}}

export default Logout;