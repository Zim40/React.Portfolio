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
        <footer style={styles.footer}>
          FOOTER
          {/* Footer code below */}
        </footer>
      </Container>
    );
}