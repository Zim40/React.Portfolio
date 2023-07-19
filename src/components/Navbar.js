import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    navTabs: {
      fontSize: 30,
      fontFamily: "Abril Fatface, cursive",
    },
    navLinks: {
      color: 'white',
    },
    navContainer: {
      // float: "right",
    },
    menu: {
      background: 'white'
    }
  };

  return (
    <Navbar
      style={styles.navContainer}
      className="sticky-top bg-body-tertiary"
      bg="dark"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Toggle style={styles.menu} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav style={styles.navTabs} className="">
            <Nav.Link style={styles.navLinks}
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link style={styles.navLinks}
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              About
            </Nav.Link>
            <Nav.Link style={styles.navLinks}
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              Projects
            </Nav.Link>
            <Nav.Link style={styles.navLinks}
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavTabs;
