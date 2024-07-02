// import React from "react";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import "../style/navbar.css";

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <Navbar
//       className="sticky-bottom bg-slate-300 px-2 bg-transparent"
//       collapseOnSelect
//       expand="lg"
//     >
//       <Navbar.Toggle
//         aria-controls="responsive-navbar-nav"
//         className="ml-auto bg-white"
//       />
//       <Navbar.Collapse id="responsive-navbar-nav" className=" text-white">
//         <Nav className=" text-white">
//           <Nav.Link
//             onClick={() => handlePageChange("Home")}
//             className={
//               currentPage === "Home"
//                 ? "nav-link active custom-nav-link ml-auto"
//                 : "nav-link custom-nav-link ml-auto"
//             }
//             href="#home"
//             id="tabs"
//           >
//             Home
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => handlePageChange("About")}
//             className={
//               currentPage === "About"
//                 ? "nav-link active custom-nav-link  ml-auto"
//                 : "nav-link custom-nav-link ml-auto"
//             }
//             href="#link"
//           >
//             About
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => handlePageChange("Projects")}
//             className={
//               currentPage === "Projects"
//                 ? "nav-link active custom-nav-link ml-auto"
//                 : "nav-link custom-nav-link ml-auto"
//             }
//             href="#link"
//           >
//             Projects
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => handlePageChange("Contact")}
//             className={
//               currentPage === "Contact"
//                 ? "nav-link active custom-nav-link ml-auto"
//                 : "nav-link custom-nav-link ml-auto"
//             }
//             href="#link"
//           >
//             Contact
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
// export default NavTabs;
