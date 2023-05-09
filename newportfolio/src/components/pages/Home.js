import React from 'react'; 
import Container from 'react-bootstrap/Container';



export default function Home () {
    const styles= {
        text: {
            textAlign: 'center',
            fontSize: 20,
            padding:20
        },
        title: {
            paddingTop: 100,
            
            textAlign: 'center',
            fontSize: 30,
            borderBottom: 'solid'
        },
        image: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          height:'50%',
          width: '50%',
          // height: 350,
          borderRadius: '50%',
          border:'solid'
          
        }
        
    }
    const image = process.env.PUBLIC_URL + '/profile.png'
    return (
      <Container>
        <section>
          <h3 style={styles.title}>Welcome!</h3>
          <p style={styles.text} className="my-auto">
            My name is Michael Monaghan and I invite you to browse my portfolio.
            <br></br>
            Feel free to send enquires through the Contact tab.
          </p>
          <img className="m-auto" style={styles.image} src={image} alt="profile"></img>
        </section>
      </Container>
    );
}