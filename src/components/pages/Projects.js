import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cardData from "../../ProjectData";
// import Loading from "../Loading/Loader";

export default function Projects() {
  return (
    <div className="mb-16 w-full flex flex-col items-center align-center justify-center font-mono lg:mt-16">
      <div className="w-full">
        <h1 className="mb-0 flex items-center justify-center tracking-widest  h-16 text-2xl font-mono text-white text-shadow-default font-bold lg:text-6xl ">
          Projects
        </h1>
      </div>

      {cardData.map((projects, index) => (
        <div key={index} className="flex flex-col w-full lg:w-1/2">
          <Card className="bg-transparent mx-2 my-2">
            <Card.Img
              className="opacity-60"
              variant="top"
              src={projects.image}
              // style={{maxWidth: "400px"}}
            />
            <Card.Body>
              <Card.Title className="text-white text-shadow-default font-semibold">
                {projects.title}
              </Card.Title>

              <Card.Text className="text-neutral-300">
                <span className=" text-sm text-shadow-default">
                  {projects.technology.join(" + ")}
                </span>
              </Card.Text>
              <Card.Text className="text-neutral-400 text-xs">
                <span className="font-bold">Status: </span>{" "}
                {projects.completionStatus ? "Completed" : "On Going"}
              </Card.Text>

              {/* <Card.Text className="text-neutral-400">
                <span className="font-bold">Link:  </span>{" "}
                {projects.deployedUrl ? projects.deployedUrl : ""}
              </Card.Text> */}
              <Card.Text className="text-neutral-400 text-xs">
                {projects.text}
              </Card.Text>
              <div className="flex  space-x-2">
              <Button
                variant="success"
                target="_blank"
                rel="noreferrer"
                href={projects.Url}
              >
                View Repository
              </Button>
              {projects.deployedUrl ? (
                <Button
                  variant="success"
                  target="_blank"
                  rel="noreferrer"
                  href={projects.deployedUrl}
                  className="text-neutral-400"
                >
                  {/* <span className="font-bold"></span>{" "} */}
                  Deployed Link
                </Button>
              ) : (
                ""
              )}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
