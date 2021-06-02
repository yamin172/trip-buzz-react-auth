import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" href="#home">Easy Ride</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/destinations" href="#destinations">Destinations</Nav.Link>
                <Nav.Link as={Link} to="/login" href="#login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
