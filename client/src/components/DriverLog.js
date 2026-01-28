import { Component } from "react";
import Container from 'react-bootstrap/esm/Container.js';
import { useNavigate } from "react-router-dom";
// import { driverLog } from "./UserFunctions.js";
import "../App.css";

class DriverLog extends Component {

//     constructor() {
//     super();
//     this.state = {
//       driverID: "",
//       fuelType: "",
//       totalFilled: "",
//       totalCost: "",
//       errors: {}
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   onSubmit(e) {
//     e.preventDefault();

//     const driverLogs = {
//         driverID: this.state.driverID,
//         fuelType: this.state.fuelType,
//         totalFilled: this.state.totalFilled,
//         totalCost: this.state.totalCost
//     };
//     driverLog(driverLogs).then(res => {
//       if (res) {
//         this.props.history.push(`/driverLog`);
//       }
//     });
//   }

render() 
{
return (
  <Container>
    <div className="modal-dialog" id="login_modal">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><i>Driver Logs</i></h5>
            </div>
            <div className="modal-body" id="login-modal">
            <form className="content-containers container text-center mt-5">
                <div className="input-group" id="login-un">
                    <label id="un_label" htmlFor="driverID"><i id="driver_icon" className="fa-regular fa-id-card"></i></label>
                    <input value={this.state.driverID} onChange={this.onChange} id="driverID" className="form-control" placeholder="0000-1" name="driverID" type="text" required/>
                </div>
                <div className="input-group dropdown" id="login-pw">
                    <label id="pw_label" htmlFor="fuel_type"><i id="fuel_icon" className="fa-solid fa-gas-pump"></i></label>
                        <input value={this.state.fuelType} onChange={this.onChange} id="fuel_type" className="btn btn-secondary dropdown-toggle" placeholder="Select" name="fuel_type" type="text" data-bs-toggle="dropdown" aria-expanded="false" required/>
                        <ul className="dropdown-menu">
                            <li><p className="dropdown-item">87</p></li>
                            <li><p className="dropdown-item">89</p></li>
                            <li><p className="dropdown-item">92</p></li>
                        </ul>
                </div>
                <div className="input-group" id="login-pw">
                    <label id="pw_label" htmlFor="total_filled"><i id="fill_icon" className="fa-solid fa-scale-balanced"></i></label>
                    <input value={this.state.totalFilled} onChange={this.onChange} id="total_filled" className="form-control" placeholder="0" name="total_filled" type="text" required/>
                </div>
                <div className="input-group" id="login-pw">
                    <label id="pw_label" htmlFor="total_cost"><i id="cost_icon" className="fa-solid fa-dollar-sign"></i></label>
                    <input value={this.state.totalCost} onChange={this.onChange} id="total_cost" className="form-control" placeholder="$0.00" name="total_cost" type="text" required/>
                </div>
                <div className="modal-footer">
                    <button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
                        Submit
                    </button>
                    <button id="close-btn" className="btn btn-secondary" type="button" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
</Container>
)}};

export default DriverLog;