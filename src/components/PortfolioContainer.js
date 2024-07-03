import React, { useState } from "react";

// import Header from "./Header/Header";
import NavButtons from "./navigation/navButtons";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function PortfolioContainer() {
  const [currentPage, setPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };
  const handlePageChange = (page) => setPage(page);

  return (
    <div className="flex flex-col">
      
        <NavButtons
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      

      {renderPage()}
      {/* Page Rendered from Header/Navbar */}
    </div>
  );
}
