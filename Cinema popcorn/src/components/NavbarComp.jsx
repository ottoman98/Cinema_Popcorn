import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComp.css";
function NavbarComp() {
  return (
   <Navbar bg="light" expand="lg">
    <Container fluid>
        <Navbar.Brand href="#home">PCC</Navbar.Brand>
    </Container>
    </Navbar>
  );
}

export default NavbarComp;
