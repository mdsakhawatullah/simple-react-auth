import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Card} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
     <Navbar fixed="top" bg="light" expand="lg">      
  <Navbar.Brand href="#home">City Bus Service</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link><Link to="/destination">Destination</Link></Nav.Link>
      <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Navbar> 
        </div>
    );
};

export default Header;