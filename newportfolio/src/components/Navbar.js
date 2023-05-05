import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavTabs ({currentPage, handlePageChange}) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};
export default NavTabs;