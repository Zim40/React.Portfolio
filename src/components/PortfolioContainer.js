import React, {useState} from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer'

export default function PortfolioContainer () {

  

    const [currentPage, setPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />
        }
        if(currentPage === 'About') {
            return <About />
        }
        if(currentPage === 'Contact') {
            return <Contact />
        }
        if(currentPage === 'Projects') {
            return <Projects />
        }
    }
    const handlePageChange = (page) => setPage(page);

    return (
      <div>
        <Navbar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        
        {renderPage()}
        <Footer />
      </div>
    );
}