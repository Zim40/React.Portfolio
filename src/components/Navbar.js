import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function NavTabs ({currentPage, handlePageChange}) {

  const styles = {
    
      navTabs: {
        fontSize: 40,
        fontFamily: 'Tangerine, cursive',
        
      },
      navContainer: {
        float: "right",
      },
    
  };

    return (
      <Navbar style={styles.navContainer}   className="sticky-top bg-body-tertiary" bg="darkgrey" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={styles.navTabs} className="">
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
          </Navbar.Collapse>
        </Container>
              
       
    

      </Navbar>
    );
};
export default NavTabs;