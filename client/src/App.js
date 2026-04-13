import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container.js';
import HomePage from "./components/HomePage.js";
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
          <Container>
            <HomePage />
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/driverLog" element={<DriverLog/>} />
              {/* <Route path="/inventory" element={<Inventory/>} /> */}
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }

export default App;