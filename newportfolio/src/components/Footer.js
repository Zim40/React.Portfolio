import React from 'react';
import Container from 'react-bootstrap/Container'

export default function Footer () {
    const styles = {
        footer: {
            textAlign: 'center'
        }
    }
    return (
      <Container>
        <footer className='sticky-0' style={styles.footer}>
          
          {/* Footer code below */}
        </footer>
      </Container>
    );
}