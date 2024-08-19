import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const navbarStyle = {
    minHeight: '60px',
  };

  const navLinkStyle = {
    marginLeft: '10px',
    marginRight: '10px',
  };

  const brandStyle = {
    marginRight: '15px',
    fontSize: '1.2rem',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          <strong>AKHILESHWAR GURRAM</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/experience" style={navLinkStyle}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/blog" style={navLinkStyle}>Blogs</Nav.Link>
            <Nav.Link as={Link} to="/projects" style={navLinkStyle}>Projects</Nav.Link>
            <Nav.Link 
              style={navLinkStyle} 
              href="https://drive.google.com/file/d/1Qrs-IHdePXIGK_eBdHyNxAqqBoQlrDZ-/view" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;