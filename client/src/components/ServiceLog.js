// import React, { Component } from "react";
// import express from 'express';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/esm/Container.js';
// import "../App.css";

// const serviceLogRouter = express.Router();

// class ServiceLog extends Component {

// render()
// {
//     serviceLogRouter.post("/", async (req, res) => {
//     try {
//         const dbServiceLogData = await ServiceLog.create({
//             vehicle_vin: req.body.vehicle_vin,
//             vehicle_make: req.body.vehicle_make,
//             vehicle_model: req.body.vehicle_model,
//             scheduled_time: req.body.scheduled_time,
//             client_first_name: req.body.client_first_name,
//             client_last_name: req.body.client_last_name,
//             client_phone_area_code: req.body.client_phone_area_code,
//             client_phone: req.body.client_phone,
//             total_billed: req.body.total_billed,
//             notes: req.body.notes,
//         });
//         return res.status(200).json(dbServiceLogData);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });

// //UPDATE SERVICE LOG//
// serviceLogRouter.put("/:id", async (req, res) => {
//     try {
//         const updateResult = await ServiceLog.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         return res.status(200).json(updateResult);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });

// //DELETE SERVICE LOG//
// serviceLogRouter.delete("/:id", async (req, res) => {
//     try {
//         const deleteServiceLogData = await ServiceLog.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         return res.status(200).json(deleteServiceLogData);
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json(err);
//     }
// });

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

//     const serviceLogFormHandler = async (event) => {
//         event.preventDefault();

//     if (vehicle_vin && vehicle_year && vehicle_make && vehicle_model && scheduled_time && 
//       client_first_name && client_last_name && client_phone_area_code && client_phone && total_billed && notes) {
        
//     const response = await fetch("http://localhost:3001/serviceLogs", {
//           method: "POST",
//           body: JSON.stringify({vehicle_vin, vehicle_year, vehicle_make, vehicle_model, 
//             scheduled_time, client_first_name, client_last_name, client_phone_area_code, 
//             client_phone, total_billed, notes}), headers: { "Content-Type": "application/json" },
//         });
//         if (response.ok) {
//             document.location.replace('/serviceLogs');

//                 } else {
//                     alert("Error❗⛔ Invalid service log info.❗⛔" +
//                         response.status +
//                             ": " +
//                         response.statusText);
// }}};

// document.querySelector(".service-log").addEventListener("click", serviceLogFormHandler);

// return(

//   <Container>
//     <div className="modal-dialog" id="log-modal">
//         <div className="modal-content">
//             <div className="modal-header" id="service-log-title">
//                 <h5 className="modal-title" id="exampleModalLabel"><i>Service Log</i></h5>
//             </div>
//             <div className="modal-body">
//             <form className="content-containers container text-center mt-5">
//                 <div className="card-title" id="vehicle-info"><i id="driver_icon" className="fa-solid fa-truck-moving"></i> | <b>Vehicle Info.</b> | <i id="driver_icon" className="fa-solid fa-truck-moving"></i></div>
//                 <div className="input-group mb-3" id="vehicle">
//                     <input value={vehicle_vin} id="vehicle_vin" className="form-control border rounded" placeholder="VIN # [Last 5]" name="vehicle_vin" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="vehicle">
//                     <input value={vehicle_year} id="vehicle_year" className="form-control border rounded" placeholder="Year" name="vehicle_year" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="vehicle">
//                     <input value={vehicle_make} id="vehicle_make" className="form-control border rounded" placeholder="Make" name="vehicle_make" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="vehicle">
//                     <input value={vehicle_model} id="vehicle_model" className="form-control border rounded" placeholder="Model" name="vehicle_model" type="text" required/>
//                 </div>
//                 <div className="card-title" id="vehicle-info"><i id="driver_icon" className="fa-solid fa-calendar-days"></i> | <b>Service Appointment Date & Time</b> | <i id="driver_icon" className="fa-solid fa-calendar-days"></i></div>
//                 <div className="input-group" id="appointment">
//                     <input value={scheduled_time} id="scheduled_time" type="datetime-local" className="form-control border rounded" placeholder="01/01/2026" name="scheduled_time" required/>
//                 </div>
//                 <div className="card-title"><i id="driver_icon" className="fa-regular fa-id-card"></i> | <b>Client Info.</b> | <i id="driver_icon" className="fa-regular fa-id-card"></i></div>
//                 <div className="input-group mb-3" id="client">
//                     <input value={client_first_name} id="client_first_name" className="form-control" placeholder="First Name" name="client_first_name" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="client">
//                     <input value={client_last_name} id="client_last_name" className="form-control" placeholder="Last Name" name="client_last_name" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="client">
//                     <input value={client_phone_area_code} id="client_phone_area_code" className="form-control" placeholder="Phone # (Area Code)" name="client_phone_area_code" type="text" required/>
//                 </div>
//                 <div className="input-group mb-3" id="client">
//                     <input value={client_phone} id="client_phone" className="form-control" placeholder="Phone #" name="client_phone" type="text" required/>
//                 </div>
//                 <div className="card-title"><b>| For Office Use |</b></div>
//                 <div className="input-group mb-3" id="billed">
//                     <label id="pw_label" htmlFor="total_billed"><i id="cost_icon" className="fa-solid fa-dollar-sign"></i></label>
//                     <input value={total_billed} id="total_billed" className="form-control border rounded" placeholder="$0.00" name="total_billed" type="currency" required/>
//                 </div>
//                 <div className="input-group mb-3" id="notes">
//                     <label id="pw_label" htmlFor="notes"><i id="fill_icon" className="fa-solid fa-clipboard-list"></i></label>
//                     <textarea value={notes} rows={"3"} id="notes" className="form-control border rounded" placeholder="Vehicle Service Notes..." name="notes" type="text" required/>
//                 </div>
//                 <div className="modal-footer">
//                     <button onClick={serviceLogFormHandler} type="submit" id="service-log" className="btn btn-primary" style={{cursor: 'pointer'}}>
//                         Submit
//                     </button>
//                   <Link id="close-btn" className="btn btn-secondary" type="button" to={'/'}>
//                         Close
//                   </Link>
//                 </div>
//             </form>
//         </div>
//       </div>
//     </div>
// </Container>
// )}};

// export default ServiceLog;