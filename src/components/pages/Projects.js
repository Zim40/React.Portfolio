import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardData from "../../ProjectData";


export default function Projects() {
  const style = {
    title: {
      paddingTop: 100,
      textAlign: 'center',
      fontFamily: "Abril Fatface, cursive",
      borderBottom: 'solid'
    },
    btn: {
      justifyContent: 'center',
      display: 'flex'
    }
  };

  return (
    <Container>
       <div style={style.title} className="p-title">
      <h1>Projects</h1>
      </div>
      {cardData.map((projects, index) => (
        
          <Card style={{ maxWidth: "18rem", display: 'inline-flex', margin: 10, background: 'grey' }} key={index}>
            <Card.Img variant="top" src={projects.image} />
            <Card.Body>
              <Card.Title>{projects.title}</Card.Title>
              <Card.Text>{projects.text}</Card.Text>
              <Button style={style.btn} variant="success" href={projects.Url}>View Repository</Button>
            </Card.Body>
          </Card>
        
      ))}
    </Container>
  );
}
