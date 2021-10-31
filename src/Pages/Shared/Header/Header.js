import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-nav mb-5">
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Travel Sylhet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                {/* <Nav.Link as={HashLink} to="/home#locations">Locations</Nav.Link> */}
                                {/* <Nav.Link as={HashLink} to="/home#facilities">Facilities</Nav.Link> */}
                                <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                                {user?.email ?
                                    <Nav.Link as={Link} to="/myBookings">My Bookings</Nav.Link> : ''
                                }
                                {user?.email ?
                                    <Nav.Link as={Link} to="/manageBookings">Manage All Bookings</Nav.Link> : ''
                                }
                                {user?.email ?
                                    <Nav.Link as={Link} to="/addService">Add Destination</Nav.Link> : ''
                                }
                                {user?.email ?
                                    <Button onClick={logOut} variant="warning">Logout</Button> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user?.displayName}</a>
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