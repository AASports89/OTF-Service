import React, { Component } from "react";
import Container from 'react-bootstrap/esm/Container.js';
import Navbar from "./Navbar.js";
import favicon from '../images/favicon.svg';

const year = new Date().getFullYear();

class Landing extends Component {

  render() 
  {
    return (
      <Container>
        <Navbar />
        <footer id='footer' className="fixed-bottom navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul class="nav justify-content-center">
            <a id="icon-link" className="nav item justify-content-center" href="https://aasports89.github.io/Bloomington-Mini-Mart/">
              <img id="royal-icon" className='img-card-overlay' src={favicon} alt="Costco Roscoe's Liquor"></img>
            </a>
             <p className="nav item justify-content-center" id="footer-title"><b id="footer-bold">© Bloomington Mini Mart™ - {year}. All Rights Reserved.</b></p>
          </ul>
        </footer>
      </Container>
    );
  }
}

export default Landing;