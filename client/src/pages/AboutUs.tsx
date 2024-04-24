import React from "react";
import HeaderSection from "../components/HeaderSection";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <div className="w-full ">
      <HeaderSection imgUrl="" title="About Us" desc="this is about us " TextLogic = {true} />
      <div className="w-full px-vw5 ">
        <div className="w-full bg-primary flex gap-vw2 px-vw5 py-vh5 rounded-md">
          <section className="w-p50 flex flex-col justify-between">
            <img src="" alt="" className="object-cover object-center w-full h-p30 border border-black"/>
            <div className="w-full h-p30 flex gap-vh2">

                <img src="" alt="" className="object-cover object-center w-full h-full border border-orange-400"/>
                <img src="" alt="" className="object-cover object-center w-full h-full border border-orange-400"/>
                
            </div>
            <img src="" alt="" className="object-cover object-center w-full h-p30 border border-black"/>
          </section>
          <section className="w-p50 bg-blue-600 flex flex-col gap-vh3">
            

            <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            

                <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            

          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
