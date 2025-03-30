import React from "react";
import { NavLink } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

function NavBar() {
    
    return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/productlist" activeclassname="active">Products</Nav.Link>
              <Nav.Link as={NavLink} to="/addproduct" activeclassname="active">Add a Product</Nav.Link>
              <Nav.Link as={NavLink} to="/editproduct" activeclassname="active">Edit a Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
