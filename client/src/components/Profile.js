import React from "react";
import { getProfile } from './Auth.js';

function Profile() {

return (
    <header>
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 id="dash-title" className="text-center"> {getProfile}'s Dashboard</h1>
            <table id="table-dash">
                            <thead>
                                <tr id="dash-table">
                                    <th id="table-id">Service-ID:</th>
                                    <th id="table-created">Date/Time: <i className="fa-regular fa-calendar-days" Style={"color: rgb(8, 85, 205);"}></i></th>
                                    <th id="table-edit">Edit:</th>
                                    <th id="table-delete">Delete:</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr id="table-row">
                                        <td>S-0001</td>
                                        <td>
                                            04/13/2026 @12:30 PM PST
                                        </td>
                                        <td id="editt">
                                            <a id="edit" href="/edit/{{this.id}}"><i className="fa-solid fa-file-pen" Style={"color: rgb(236, 113, 22);"}></i></a>
                                        </td>
                                        <td id="delete">
                                            <a className="delete-post" id="delete-post" data-id="{{this.id}}"><i className="fa-solid fa-trash-can" Style={"color: rgb(194, 11, 11);"}></i></a>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
          </div>
        </div>
      </div>
    </header>
    )};

export default Profile;