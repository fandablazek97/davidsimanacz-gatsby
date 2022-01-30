import React from "react";
import { Link } from "gatsby";

export default function CallToAction() {
  return (
    <Link
      to="/rezervace-schuzky"
      className="w-full h-96 lg:h-128 bg-secondary block relative z-0 group overflow-hidden focus-visible:a11y-secondary"
    >
      <div className="ui-wrapper relative z-1 h-full flex flex-col justify-center items-center lg:items-start">
        <span className="text-white texl-2xl uppercase text-center lg:text-left tracking-widest font-medium mb-8">
          Chcete nezávazně poradit s vašimi financemi?
        </span>
        <span className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold">
          Rezervace schůzky
        </span>
      </div>
      {/* Hover span */}
      <span className="absolute z-0 inset-[-5%] w-[110%] h-[110%] bg-gray-950 bg-opacity-25 scale-x-0 opacity-0 -skew-x-12 group-hover:scale-x-110 group-hover:opacity-100 transform-gpu transition duration-400 md:duration-800"></span>
    </Link>
  );
}
