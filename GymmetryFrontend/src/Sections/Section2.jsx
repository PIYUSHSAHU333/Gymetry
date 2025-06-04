import React from "react";
import FeatureCard from "../Components/FeatureCard";
import { BicepsFlexed, NotebookPen, MapPin } from 'lucide-react';


function Section2() {
  return (
    <section className="section2 min-h-screen overflow-auto justify-center bg-[rgba(0,0,0,0.9)]  ">
      <div className="flex flex-col space-y-7 py-4 items-center justify-center mx-auto w-8/10 h-full">
        <p className="text-gray-300 w-fit text-sm px-4 font-medium flex  items-center bg-[rgba(228,255,79,0.1)] mb-7 gap-2 rounded-full border-[1px] border-[#E4FF4F] p-2">
          Find Your Fitness Formula
        </p>

        <h1 className="text-4xl text-[#E4FF4F] font-bold">
          Start your fitness journey today
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl text-center font-light">
          Your fitness journey, personalized — from workouts and routines to
          locations that fit your lifestyle.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard img={"https://i.pinimg.com/736x/06/cb/25/06cb253e94f7a54280f6d800250da6f0.jpg"} text={`Explore Muscles`}  icon={<BicepsFlexed className="rounded-full bg-gradient-to-r from-[#E4FF4F] via-[#FFF94F] to-[#00F0FF] w-8 h-8 p-2 text-black" />} title={"Muscle Group"} />

            <FeatureCard img={"https://i.pinimg.com/736x/7b/79/04/7b79047962a120c665f05e55dd6a7c2d.jpg"} text={`Find Gyms`}  icon={<MapPin className="rounded-full bg-gradient-to-tl from-[#E4FF4F] via-[#FFF94F] to-[#00F0FF] w-8 h-8 p-2 text-black" />} title={"Nearby Gyms"} />
            <FeatureCard img={"https://i.pinimg.com/736x/04/0a/40/040a40b336dd6de3037f60d3407372c2.jpg"} text={`View Plans`}  icon={<NotebookPen className="rounded-full bg-gradient-to-br from-[#E4FF4F] via-[#FFF94F] to-[#00F0FF] w-8 h-8 p-2 text-black" />} title={"Customized Plans"} />
        </div>
      </div>
    </section>
  );
}

export default Section2;
