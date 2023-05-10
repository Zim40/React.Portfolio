import React from 'react';
import Container from 'react-bootstrap/Container'

export default function Footer () {
    const styles = {
      images: {
        maxHeight: 100,
        maxWidth: 100,
        padding: 10,
        marginLeft: "auto",
        marginRight: "auto",
        float: 'right'
      },
      footerStyle: {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        background: "transparent",
        padding: "20",
        
      },
    };

    const icons = {
      linkedIn: process.env.PUBLIC_URL + '/linkedin.png',
      github: process.env.PUBLIC_URL + '/github-mark-white.png'
    }
    return (
      <Container>
        <footer style={styles.footerStyle} >
          
          {/* Footer code below */}
         <a href="https://www.linkedin.com/in/michael-monaghan-217404253/"><img style={styles.images} className="linkedIn" src={icons.linkedIn} alt="linked in"></img></a>
         <a href="https://github.com/Zim40"><img style={styles.images} className="github " src={icons.github} alt="github"></img></a>
         
        </footer>
      </Container>
    );
}