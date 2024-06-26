import React, { useState } from "react";

export default function NavButtons() {
  return (
    <div className="flex justify-center text-white">
      <div className=" text-lg flex justify-center space-x-6 w-[500px]">
       <button className="rounded p-2 bg-red-800">Contact</button>
       <button className="rounded p-2 bg-red-800 ">Projects</button>
       <button className="rounded p-2 bg-red-800 ">AboutMe</button>
      </div>
    </div>
  );
}
