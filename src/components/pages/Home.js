import React from "react";
import NavButtons from "../navigation/navButtons";

export default function Home() {
  // const image = process.env.PUBLIC_URL + "/profile.png";
  return (
    <div className="flex justify-center overflow-hidden w-full h-screen">
      <div className="flex flex-col align-center items-center justify-center text-white font-mono">
        <h1 className="text-4xl mb-10 font-bold text-shadow-default lg:text-6xl">
          Hi, I'm Michael
        </h1>
        <div className="flex text-center w-3/4 p-2 lg:w-[500px]">
          <p>
            I am an Entry-level Full Stack Web Developer based in the Barossa
            Valley with skills in:
            <br />
            <span className="font-semibold">
              HTML + CSS + JavaScript + React + MongoDB
            </span>
            <br />
            and various other web Technologies creating user friendly
            interfaces.
          </p>
        </div>
        <div className="mt-16">
          <NavButtons />
        </div>
      </div>
      {/* <img className="" src={image} alt="profile" /> */}
    </div>
  );
}
