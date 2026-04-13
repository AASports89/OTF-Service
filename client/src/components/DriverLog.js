import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container.js';
// import { driverLog } from "./UserFunctions.js";
import "../App.css";

class DriverLog extends Component {

    constructor() {
    super();
    this.state = {
      DRIVER_ID: "",
      FUEL_TYPE: "",
      TOTAL_FILLED: "",
      TOTAL_COST: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const driverLogs = {
        DRIVER_ID: this.state.DRIVER_ID,
        FUEL_TYPE: this.state.FUEL_TYPE,
        TOTAL_FILLED: this.state.TOTAL_FILLED,
        TOTAL_COST: this.state.TOTAL_COST
    };
    driverLog(driverLogs).then(res => {
      if (res) {
        this.props.history.push(`/driverLog`);
      }
    });
  }
render()
{
return (
  <Container>
    <div className="modal-dialog" id="log-modal">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><i>Service Log</i></h5>
            </div>
            <div className="modal-body">
            <form className="content-containers container text-center mt-5">
                <div className="input-group" id="login-un">
                    <label id="un_label" htmlFor="driverID"><i id="driver_icon" className="fa-regular fa-id-card"></i></label>
                    <input value={this.state.DRIVER_ID} onChange={this.onChange} id="driverID" className="form-control" placeholder="0000-1" name="driverID" type="text" required/>
                </div>
                <div className="input-group dropdown" id="login-pw">
                    <label id="pw_label" htmlFor="fuel_type"><i id="fuel_icon" className="fa-solid fa-gas-pump"></i></label>
                        <input value={this.state.FUEL_TYPE} onChange={this.onChange} id="fuel_type" className="btn btn-secondary dropdown-toggle" placeholder="Select" name="fuel_type" data-bs-toggle="dropdown" aria-expanded="true" required />
                        <ul className="dropdown-menu">
                            <li><p className="dropdown-item">87</p></li>
                            <li><p className="dropdown-item">89</p></li>
                            <li><p className="dropdown-item">92</p></li>
                        </ul>
                </div>
                <div className="input-group" id="login-pw">
                    <label id="pw_label" htmlFor="total_filled"><i id="fill_icon" className="fa-solid fa-scale-balanced"></i></label>
                    <input value={this.state.TOTAL_FILLED} onChange={this.onChange} id="total_filled" className="form-control" placeholder="0" name="total_filled" type="text" required/>
                </div>
                <div className="input-group" id="login-pw">
                    <label id="pw_label" htmlFor="total_cost"><i id="cost_icon" className="fa-solid fa-dollar-sign"></i></label>
                    <input value={this.state.TOTAL_COST} onChange={this.onChange} id="total_cost" className="form-control" placeholder="$0.00" name="total_cost" type="text" required/>
                </div>
                <div className="modal-footer">
                    <button type="submit" id="pw_login" className="btn btn-primary" style={{cursor: 'pointer'}}>
                        Submit
                    </button>
                  <Link id="close-btn" className="btn btn-secondary" type="button" to={'/'}>
                    Close
                  </Link>
                </div>
            </form>
        </div>
      </div>
    </div>
</Container>
)}};

export default DriverLog;