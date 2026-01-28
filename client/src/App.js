import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container.js';
import Landing from "./components/Landing.js";
import Profile from "./components/Profile.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import DriverLog from "./components/DriverLog.js";
import Inventory from "./components/Inventory.js";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Landing />
          <Container>
            <Routes>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/driverLog" component={DriverLog} />
              <Route path="/inventory" component={Inventory} />
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }

export default App;