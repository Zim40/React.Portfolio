import React from "react";
import Container from "react-bootstrap/Container";

export default function Home() {


  
  // const image = process.env.PUBLIC_URL + "/profile.png";
  return (
    <Container>
      <section>
        <div className="w-full">
          <div className="flex flex-col align-center items-center">
            <h3 className="">Welcome.</h3>
          </div>
          {/* <img className="" src={image} alt="profile" /> */}
        </div>
      </section>
    </Container>
  );
}
