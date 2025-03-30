import React from "react";
import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={NavLink} to="/productlist" activeclassname="active">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/addproduct" activeclassname="active">Add-Product</Nav.Link>
              <Nav.Link as={NavLink} to="/editproduct" activeclassname="active">Edit-Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default NavBar;
