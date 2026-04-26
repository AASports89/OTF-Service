import React, { Component } from "react";
import axios from "axios";

const user_id = document.querySelector(".logged-in-user-id").innerHTML;
const username = document.querySelector(".logged-in-user-username").innerHTML;

class Profile extends Component {
render()
{
//     const submitServiceLogHandler = async (event) => {
//     event.preventDefault();

//     const vehicle_vin = document.querySelector("#vehicle_vin");
//     const vehicle_year = document.querySelector("#vehicle_year");
//     const vehicle_make = document.querySelector("#vehicle_make");
//     const vehicle_model = document.querySelector("#vehicle_model");
//     const scheduled_time = document.querySelector("#scheduled_time");
//     const client_first_name = document.querySelector("#client_first_name");
//     const client_last_name = document.querySelector("#client_last_name");
//     const client_phone_area_code = document.querySelector("#client_phone_area_code");
//     const client_phone = document.querySelector("#client_phone");
//     const total_billed = document.querySelector("#total_billed");
//     const notes = document.querySelector("#notes");

//     if (!user_id) {
//         alert("⛔| Please login or signup to schedule vehicle service(s) |⛔");
//     } else {
//         if (vehicle_vin && vehicle_year && vehicle_make && vehicle_model && scheduled_time && client_first_name && 
//             client_last_name && client_phone_area_code && client_phone && total_billed && notes && user_id) 
//             {
//                 const response = axios.post("/api/post/", {
//                     method: "POST",
//                     body: JSON.stringify({ vehicle_vin, vehicle_year, vehicle_make, vehicle_model, scheduled_time, 
//                         client_first_name, client_last_name, client_phone_area_code, client_phone, total_billed, notes, user_id }),
//                     headers: { "Content-Type": "application/json" },
//             });
//             if (response.ok) {
//                 document.location.replace("/profile");
//                                 +
//                 alert(`✅| Service log data updated successfully |✅`);
//             } else {
//                 alert(
//                     "⛔| Failed to update service log |⛔" +
//                         response.status +
//                         ": " +
//                         response.statusText
//                 );
//             }
//         } else {
//             alert("⛔| Missing or Invalid data fields |⛔");
//         }
//     }
// };
// //DELETE POST DATA VIA CLIENT API CALL//
// const deleteServiceLogHandler = async (event) => {
//     event.preventDefault();

//     const deleteServiceLogId = event.target.getAttribute("data-id");
//     if (deleteServiceLogId) {
//         const response = axios.delete("/api/post/" + deleteServiceLogId, {
//             method: "DELETE",
//             headers: { "Content-Type": "application/json" },
//         });
//         if (response.ok) {
//             alert(`❌| Service log deleted |❌`
//                             +
//             document.location.replace("/profile"));
//         } else {
//             alert(
//                 "⛔| Failed to delete service log " +
//                     response.status +
//                     ": " +
//                     response.statusText + " |⛔"
//             );
//         }
//     }
// };

// //EVENT LISTENERS//
// document.querySelector(".service-log").addEventListener("click", submitServiceLogHandler);

// const deleteButtons = document.querySelectorAll(".delete-serviceLog");
// deleteButtons.forEach((el) =>
//     el.addEventListener("click", (event) => deleteServiceLogHandler(event))
// );

return (
    <header>
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 id="dash-title" className="text-center"> {username}'s Dashboard</h1>
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
                        <td>{this.$`id`}</td>
                        <td>
                            {this.$`scheduled_time`}
                        </td>
                        <td id="editt">
                            <a className="service-log" id="service-log" href={"/edit/" + this.$`id`}><i className="fa-solid fa-file-pen" Style={"color: rgb(236, 113, 22);"}></i></a>
                        </td>
                        <td id="delete">
                            <a className="delete-serviceLog" id="delete-serviceLog" data-id={this.$`id`}><i className="fa-solid fa-trash-can" Style={"color: rgb(194, 11, 11);"}></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </header>
)}};

export default Profile;