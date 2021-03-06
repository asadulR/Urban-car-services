import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);


    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <header className='sticky-top'>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark" className='py-3' >
                <Container>
                   <Link className='nav-brand' to='/'> <Navbar.Brand> <img src={logo} height='30px' alt="" /> </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} to="home#experts">EXPERTS</Nav.Link>
                            <Nav.Link as={Link} to="/addservice">ADD SERVICE</Nav.Link>
                            {/* <Nav.Link as={Link} to="/manage">MANAGE SERVICE</Nav.Link> */}
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/manage">MANAGE SERVICE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/manage">MANAGE</Nav.Link>
                                
                                </>
                            }
                            {
                                user ? 
                                <button onClick={handleSignout} className='signout-btn'>Sign out</button>
                                : <Nav.Link as={Link} to="/login">
                                LOG IN
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;