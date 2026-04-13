// import React, { Component } from "react";
// import Container from 'react-bootstrap/esm/Container.js';
// import "../App.css";

// class Inventory extends Component {

//     constructor() {
//     super();
//     this.state = {
//         ID: "",
//         NAME: "",
//         QUANTITY: "",
//         COST: "",
//         errors: {}
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   onSubmit(e) {
//     e.preventDefault();

//     const item = {
//         ID: this.state.ID,
//         NAME: this.state.NAME,
//         QUANTITY: this.state.QUANTITY,
//         COST: this.state.COST
//     };
//   }

// render()
// {
// return (
//   <Container>
//         <div className="modal-dialog" id="inventory-modal">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel"><i>Inventory</i></h5>
//                 </div>
//             <div className="modal-body" id="login-modal">
//                 <form className="content-containers container text-center mt-5" onSubmit={this.onSubmit}>
//                     <div className="input-group" id="login-un">
//                         <label id="un_label" htmlFor="item_id"><i id="id_icon" className="fa-solid fa-fingerprint"></i></label>
//                         <input value={this.state.ID} onChange={this.onChange} id="item_id" className="form-control" placeholder="ID-0000" name="driverID" type="text" required/>
//                     </div>
//                     <div className="input-group" id="login-pw">
//                         <label id="pw_label" htmlFor="item_name"><i id="tag_icon" className="fa-solid fa-tag"></i></label>
//                         <input value={this.state.NAME} onChange={this.onChange} id="item_name" className="form-control" placeholder="0" name="total_filled" type="text" required/>
//                     </div>
//                     <div className="input-group" id="login-pw">
//                         <label id="pw_label" htmlFor="quantity"><i id="quantity_icon" className="fa-solid fa-list-ol"></i></label>
//                         <input value={this.state.QUANTITY} onChange={this.onChange} id="quantity" className="form-control" placeholder="$0.00" name="total_cost" type="text" required/>
//                     </div>
//                     <div className="input-group" id="login-pw">
//                         <label id="pw_label" htmlFor="item_cost"><i id="costs_icon" className="fa-solid fa-coins"></i></label>
//                         <input value={this.state.COST} onChange={this.onChange} id="item_cost" className="form-control" placeholder="$0.00" name="total_cost" type="text" required/>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
//                             Submit
//                         </button>
//                         <button id="close-btn" className="btn btn-secondary" type="button" data-bs-dismiss="modal">
//                             Close
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </Container>
// )}};

// export default Inventory;