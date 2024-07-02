import React from "react";


export default function About() {
  return (
    <div className="flex justify-center overflow-hidden w-full h-screen">
      <div className="flex flex-col align-center items-center justify-center text-white font-mono">
        <h1 className="text-4xl mb-10 font-bold text-shadow-default tracking-widest lg:text-6xl">
          About
        </h1>
        <div className="flex flex-col text-center w-full p-2 lg:w-[500px]">
          <p className="">
          Born in the UK and now a permanent resident of Australia, I have a diverse range of hobbies that keep me engaged and inspired. I enjoy reading fantasy novels, watching sports, gaming, and diving into fascinating topics. Alongside these interests, I have a deep passion for coding, which allows me to combine creativity and logic to solve problems and build innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
