import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardData from "../../ProjectData";


export default function Projects() {
// const formatTech = (index) => {
//   const data = cardData.technology[index];
//   return data.join(" + ")
  
// }
// formatTech();

  return (
    <div className="mb-16 w-full flex flex-col items-center align-center justify-center font-mono">
      
      {cardData.map((projects, index) => (
        <div className="">
          <Card key={index} className="bg-transparent  m-2">
            <Card.Img className="opacity-60" variant="top" src={projects.image} />
            <Card.Body>
              <Card.Title className="text-white text-shadow-default font-semibold">{projects.title}</Card.Title>
              
              <Card.Text className="text-neutral-300"><span className="  text-shadow-default">{projects.technology.join(" + ")}</span></Card.Text>
              <Card.Text className="text-neutral-400">{projects.text}</Card.Text>
              <Button  variant="success" href={projects.Url}>View Repository</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
