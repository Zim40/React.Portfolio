import React from 'react'; 
import Container from 'react-bootstrap/Container';



export default function Home () {
    const styles= {
        text: {
            textAlign: 'center',
            fontSize: 20,
        },
        title: {
            paddingTop: 150,
            textAlign: 'center',
            fontSize: 30
        },
        
    }
    return (
      <Container>
        <section>
          <h3 style={styles.title}>Welcome!</h3>
          <p style={styles.text} className="my-auto">
            My name is Michael Monaghan and I invite you to browse my portfolio.
            <br></br>
            Feel free to send enquires through the Contact tab.
          </p>
        </section>
      </Container>
    );
}