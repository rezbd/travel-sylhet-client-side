import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Travel Sylhet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/home#locations">Locations</Nav.Link>
                                <Nav.Link as={Link} to="/home#facilities">Facilities</Nav.Link>
                                <Nav.Link as={Link} to="/home#about">About</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;