import React from "react";
import Container from "react-bootstrap/Container";

export default function Home() {
  const styles = {
    text: {
      textAlign: "center",
      fontSize:25,
      padding: 0,
    },
    title: {
      paddingTop: 100,
      fontFamily: "Abril Fatface, cursive",
      textAlign: "center",
      fontSize: 50,
    
    },
    image: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      height: "200px",
      width: "200px",
      // height: 350,
      borderRadius: "50%",
      border: "solid",
    },
  };
  const image = process.env.PUBLIC_URL + "/profile.png";
  return (
    <Container>
      <section>
        <div  >
          <h3 className="homeWelcome" style={styles.title}>Welcome.</h3>
        </div>
        <p style={styles.text} className="my-auto welcomeText">
            My name is Michael Monaghan and I invite you to browse my portfolio.
          </p>
        <img
          className="m-auto bioImg"
          style={styles.image}
          src={image}
          alt="profile"
        ></img>
      </section>
    </Container>
  );
}
