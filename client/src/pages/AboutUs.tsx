import React from "react";
import HeaderSection from "../components/HeaderSection";
import { images, images2 } from "../assets/Images";
import { Wrapper } from "../components/Wrapper";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Wrapper >
      <HeaderSection imgUrl={images[1]} title="About Us" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic = {true} />
      <div className="w-full px-vw5 ">
        
        <div className="w-full h-vh100 bg-primary flex  gap-vw2 px-vw5 py-vh5 sm_:px-1 rounded-md xl2_:bg-white xl2_:flex-col-reverse xl2_:h-auto ">
          {/* <section className="w-p50 xl2_:w-full flex flex-col justify-between items-center  xl2_:gap-vh5 ">
            <img src={images[0]} alt="" className="object-cover object-center w-full h-vh30 xl2_:h-vh50  lg2_:h-vh30 rounded-lg  shadow-md shadow-gray-400"/>
            <div className="w-full h-p30 flex justify-between items-center">

                <img src={images2[3]} alt="" className="object-cover object-top w-p48 h-full xl2_:h-vh75  lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-md shadow-gray-400  "/>
                <img src={images2[2]} alt="" className="object-cover object-center w-p48 h-full xl2_:h-vh75 lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-gray-400"/>
                
            </div>
            <img src={images[2]} alt="" className="object-cover object-top w-full h-p30 xl2_:h-vh50 lg2_:h-vh30 rounded-lg  shadow-gray-400"/>
          </section> */}
          <section className="w-auto h-full  flex items-center justify-center"> 
          
            <img src="https://lh3.googleusercontent.com/pw/AP1GczMXQdEh6rAUTRTpgm-Q3-uLZt5ssQKcc1Abz86icg7cFeoHDoCL5Y3sz24shjrGZQsrjshCsD2D8ttIF-kvrDsVX8IGDpNiCPMvxTAlFngMASbdlFELF9R6esWLyuO-Y_gjYRPmEtfz2zzQihQBVScrqnJUwGVJ54Vvx2n5u7Wkw_wrRL0CXPxJ1T389jKHGmFEgX6zqbWmGPlYEW5sV1DLa2oj-Z3Fa_tlvBpNiXL3kQjHHQpUwVp7BqhSGPq8BCqQVtSMslxCgUfGL-jZ_KKtWMp6vCMfJ6KwOgLj_FS2PVHv6ETYM5vF_rAwolBFhxT952_pGFGbZzRNsnHfPak2kQ93ZR8zQTDENsF863GIO37Dbu9QySYLa85pa3SfNSZVzyvA4i8awJzB8iQWQ1WkB-4xIJxR-zxy-iHAzvrls0JsaM-8DHHCoS1f0pURVkQZOaDo6v4nWzDGQVQDJe2np1JIVFwnJwM9hfT7slQ3YdRwK3nsyZJGdC9qDzrIhTQob7EHc_8Z-qEkFdxd-MdjtlCzfvYzWqssW8I9fTVpKVkDJ1WzYihQwpMTk47D03IlGHH2MZhnLn9XcxTHlerV9MPwFdV2p6gM_Z5kaTl3Fzt4M25ZpPUG1SLPgrpASvWHkrrc9Rpz9Elch2sU3dYYwDHe9a2kD0ixl58AVqzRibd5XFe-p8FkzCZSyBZLD30c7W3O_3oMEh_nTrNWDujTNERdzCf8G_HUWGpQHluX6zSLIrROW2HFiZurVFviPKUDJqCvuQ7Juu1t56_5FlSgL50cNeMVphlbcIjMRayPGYPY1uwAVUQSLuWR8AQO44UYaveBeJDpqv7SSTDFSZLXHJMaI8Y5oTcourfKgYwKIF2spz0VsCFMorSeqBtcCIlL3MalIyumMw0g5BGheGOQxT1gxZgmuXjxqmXUrjpUkXUx489Xhi43GKUX=w609-h913-s-no-gm?authuser=0"  alt="jsyz" className="max-h-full xl3_:opacity-0 about_animation " />
          </section>
          <section className="w-p50 xl2_:w-full   text-white flex flex-col justify-start items-center gap-vh3 xl2_:bg-primary xl2_:px-vw5 xl2_:py-vh12 xl2_:rounded-xl">
            
              

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
    </Wrapper>
  );
};

export default AboutUs;
