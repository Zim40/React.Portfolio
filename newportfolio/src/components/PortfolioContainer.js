import React, {useState} from 'react';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Projects from '../components/pages/Projects';
import NavTabs from './Navbar';
import Home from '../components/pages/Home';

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
    const handlePageChange = (page) => setPage(page)

    return (
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
    );
}