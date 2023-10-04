import React, { useState } from 'react';
import NavTabs from './Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Home from '../pages/Home';


export default function Header () {

    
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
            <NavTabs
             currentPage={currentPage}
             handlePageChange={handlePageChange}
            />
            {renderPage()}
        </div>
        
    )
}