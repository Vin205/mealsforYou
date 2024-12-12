import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nabar.css';

const NavBar = () => {
  const logoUrl = "./images/m.png"; // Replace with your logo image URL

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        {logoUrl && <img
          src={logoUrl}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
          alt="Navbar Logo"
        />}
        MealsForYou
      </Navbar.Brand>
      
      <Nav className="ml-auto">
        <Nav.Link href="#about-us" className="mr-3">About Us</Nav.Link>
        <Nav.Link href="#contact-us" className="mr-3">Contact Us</Nav.Link>
        <Nav.Link href="#poll" className="mr-3">Poll</Nav.Link>
        <Button variant="outline-light" as={Link} to="/register" className="mr-3">Register</Button>
        <Button variant="outline-light" as={Link} to="/login">Login</Button>
      </Nav>
    </Navbar>
  );
}

export default NavBar;



