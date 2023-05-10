import React from 'react';
import Container from 'react-bootstrap/Container'

export default function About () {
    const styles = {
        title: {
          paddingTop: 100,
            
            textAlign: 'center',
            fontSize: 30,
            borderBottom: 'solid'
        },
        text: {
          textAlign: 'center',
          fontSize: 20,
          padding:20
        },
        
    }
    return (
      <Container>
        <h3 className="m-auto" style={styles.title}>
          About
        </h3>

        <p className="m-auto" style={styles.text}>
          My name is Michael Monaghan and this page is a space to preview the
          collection of projects I have created on my Web Development Journey.
          My journey began at the beginning of 2023 to become a Web Developer
          with the dream of creating user friendly websites across a broad range
          of industries, utilizing modern technology to benefit the modern
          society we live in today, to date the collection of technologies I
          have learnt revolve around best practices and in demand languages
          which include, but not limited to: HTML, CSS, JavaScript, MySQL,
          Sequelize, Express and Handlebars.
        </p>
      </Container>
    );
};