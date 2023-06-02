import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Projects () {

    const style = {
        // projSection: {
        //   paddingTop: 100,
            
        //   textAlign: 'center',
        //   fontSize: 30,
        //   // borderBottom: 'solid'
            
        // },
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
        card: {
            height: 575,
            background: 'lightgrey',
            paddingBottom: 60
            
            
        }

    }

    const cardData = [
        {
            image: process.env.PUBLIC_URL + '/FetchEvent.png',
            title: 'Fetch Event',
            text: `The motivation behind this project is to work collaboratively to create an application that uses existing open
            server-side APIs to suggest live music events to attend based on the user's musical preference and location. This
            is a great opportunity to practice working collaboratively with other developers in creating an application that
            is built on taking advantage of the knowledge and creativity of every group member, as well as practicin
            fundamental coding skills.`
        },
        {
            image: process.env.PUBLIC_URL + '/updatedUnifiedGG.png',
            title: 'UnifiedGG',
            text: `In today's digital age, gaming has become more than just a pastime; it's a social activity. However, finding like-minded gamers to play with can be a challenge. That's where our website comes in. Our platform is designed to connect gamers with others who share similar interests and playstyles, creating an inclusive community where players can find and join groups easily. By fostering a sense of belonging and teamwork, our website empowers gamers to enhance their gaming experience and build lasting relationships. We believe that by bringing people together through gaming, we can create a positive impact in the gaming community.`
        },
        {
          image: process.env.PUBLIC_URL + '/screenshot.png',
          title: 'RuralTech: Admin Inventory',
          text: 'Living in a regional area there are many small businesses that operate out of farmers markets and some even from the living room, with this comes difficulty with keeping track of inventory and ultimately not having the tool to do so. With Rural Tech’s admin interface we open the door for those business owners to easily navigate inventory and sell their products online. '
        }
    ]
    return (
      <Container>
        <section style={style.projSection} className="projects m-auto" id="projects">
          <h3 style={style.title}>Projects</h3>
          <p style={style.text}>
            From the beginning of this journey I have been able to be apart of
            an amazing group of people that have helped me gain invaluable
            knowledge in the Web Development world, and because of this I am
            able to present the projects I have completed, both in group and
            solo projects.
          </p>
        </section>
        <Row xs={1} md={2} className="g-4">
      {cardData.map((card, index) => (
        <Col >
          <Card style={style.card} key={index}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </Container>
      
    );
}