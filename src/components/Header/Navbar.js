import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../style/navbar.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    
      <Navbar
        className="sticky-top bg-slate-300 px-2"
        collapseOnSelect
        expand="lg"
      
        
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="" >
            <Nav.Link
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active custom-nav-link ml-auto" : "nav-link custom-nav-link ml-auto"
              }
              href="#home"
              id="tabs"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active custom-nav-link  ml-auto" : "nav-link custom-nav-link ml-auto"
              }
              href="#link"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active custom-nav-link ml-auto" : "nav-link custom-nav-link ml-auto"
              }
              href="#link"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active custom-nav-link ml-auto" : "nav-link custom-nav-link ml-auto"
              }
              href="#link"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  );
}
export default NavTabs;
