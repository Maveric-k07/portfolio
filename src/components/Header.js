import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import favicon from '../assets/favicon.jpg'
const Header = () => {
  const navbarStyle = {
    paddingLeft: '50px',
    paddingRight: '50px',
    height: '60px',
  };

  const navLinkStyle = {
    marginLeft: '20px',
  };

  const brandStyle = {
    marginRight: '30px',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={navbarStyle}>
      <Navbar.Brand as={Link} to="/" style={brandStyle}>
      <div style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
        <strong>AKHILESHWAR GURRAM</strong>
      </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/experience" style={navLinkStyle}>Experience</Nav.Link>
          <Nav.Link as={Link} to="/blog" style={navLinkStyle}>Blogs</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={navLinkStyle}>Projects</Nav.Link>
          <Nav.Link style={navLinkStyle} href="https://drive.google.com/file/d/1Qrs-IHdePXIGK_eBdHyNxAqqBoQlrDZ-/view" target="_blank" rel="noopener noreferrer">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
