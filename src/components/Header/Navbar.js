import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../style/navbar.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Navbar
        className="sticky-top bg-body-tertiary navbar"
        collapseOnSelect
        expand="lg"
        
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active custom-nav-link " : "nav-link custom-nav-link"
              }
              href="#home"
              id="tabs"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"
              }
              href="#link"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"
              }
              href="#link"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active custom-nav-link" : "nav-link custom-nav-link"
              }
              href="#link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
export default NavTabs;
