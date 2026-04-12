import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { values } from "sequelize/lib/operators.js";

function Profile() {
  
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    useEffect({
      USERNAME: decoded.USERNAME,
      FIRST_NAME: decoded.FIRST_NAME,
      LAST_NAME: decoded.LAST_NAME
    });

return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center"> {values.valueOf(USERNAME)}'s Dashboard</h1>
          </div>
        </div>
      </div>
    )};

export default Profile;