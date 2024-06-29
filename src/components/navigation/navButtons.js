import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

export default function NavButtons({ currentPage, handlePageChange }) {
  return (
    <div className="fixed z-50 bg-[#232827] bottom-0 w-full text-3xl gap-10 flex h-12 items-center align-center text-white justify-center px-2 appearance-none lg:mb-40">
      <button
        onClick={() => handlePageChange("Home")}
        className={
          currentPage === "Home"
            ? "rounded  mx-2  text-red-600 p-2"
            : "rounded  mx-2  p-2"
        }
      >
        <FaHome />
      </button>
      <button
        onClick={() => handlePageChange("About")}
        className={
          currentPage === "About"
            ? "rounded  mx-2 text-red-600 p-2"
            : "rounded  mx-2 p-2"
        }
      >
        <IoMdInformationCircle />
      </button>
      <button
        onClick={() => handlePageChange("Projects")}
        className={
          currentPage === "Projects"
            ? "rounded  mx-2 text-red-600 p-2"
            : "rounded  mx-2 p-2"
        }
      >
        <GrProjects />
      </button>
      <button
        onClick={() => handlePageChange("Contact")}
        className={
          currentPage === "Contact"
            ? "rounded  mx-2 text-red-600 p-2"
            : "rounded  mx-2  p-2"
        }
      >
        <MdEmail />
      </button>
     
    
    </div>
  );
}
