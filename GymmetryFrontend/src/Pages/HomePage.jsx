import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, MoveRight, Plus } from "lucide-react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Sections/HeroSection";
function HomePage() {
  return (
    <div className=" min-h-screen  flex flex-col overflow-x-hidden ">
      <img
        src="media/images/bgImg.jpg"
        alt="bgImg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-50"
      />
      <div className="relative w-full z-10">
        <Navbar />
      </div>

      <div className="flex items-center w-8/10 mx-auto flex-1 justify-center">
        <div className="relative flex flex-col gap-4 justify-center w-1/2 z-10">
          <p className="text-gray-300 w-fit text-sm font-medium flex items-center mb-7 gap-2 rounded-full border-[1px] border-[#E4FF4F] p-2">
            <Dumbbell /> Level Up Your Fitness Journey
          </p>
          <h1 className="text-white text-7xl font-bold">
            Your pocket-sized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4FF4F] to-[#00F0FF] ">
              {" "}
              gym coach{" "}
            </span>
          </h1>
          <p className="text-gray-300 mt-11 text-xl font-light">
            Transform your body and mind with personalized training plans,
            expert guidance, and real progress tracking.
          </p>
          <div className="flex mt-3.5 items-center gap-4">
            <Link
              to={"/exercises"}
              className="inline-flex group hover:shadow-black hover:shadow-md items-center justify-center bg-gradient-to-r from-[#E4FF4F] via-[#FFF94F] to-[#00F0FF] font-medium hover:scale-105 transition-all duration-300 text-lg px-4 py-2 rounded-2xl hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#E4FF4F]"
            >
              <span className="flex items-center group-hover:gap-4 transition-all duration-500 gap-2">
                Browse Exercises <MoveRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to={"/create-plan"}
              className="inline-flex group items-center justify-center bg-[rgba(228,255,79,0.2)] font-medium text-white hover:shadow-black hover:shadow-md  hover:scale-105 transition-all duration-500 text-lg px-4 py-2 rounded-2xl "
            >
              <span className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500 ">
                Create Plan <Plus className="w-4 h-4 group-hover:text-[#E4FF4F]  group-hover:rotate-12 transition-all duration-200" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-1/2 lg:block hidden" />
      </div>
    </div>
  );
}

export default HomePage;
