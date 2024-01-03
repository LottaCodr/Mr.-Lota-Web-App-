import React from 'react';
import Image from "next/image";
import lota from "./assets/lota.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "./button";

export default function Hero() {

    const [text, count] = useTypewriter({
        words: [
          "Software Developer",
          "Web Developer",
          "Brand Identity Designer",
          "UI/UX Designer",
          "Mobile App Developer",
        ],
        loop: true,
        delaySpeed: 900,
      });
    
      //   //change some words automatically
      //   const [expertise, setExpertise] = useState("Software Development");
    
      //   useEffect(() => {
      //     const words = [
      //       "Software Development",
      //       "Web Development",
      //       "Brand Identity Designing",
      //       "UI/UX Designing",
      //       "Mobile App Development",
      //     ];
      //     let currentIndex = 0;
    
      //     //setting interval to be changing every 2 seconds
      //     const intervalId = setInterval(() => {
      //       currentIndex = (currentIndex + 1) % words.length;
      //       setExpertise(words[currentIndex]);
      //     }, 2000);
    
      //     //run the effect only once on component mount
      //     return () => clearInterval(intervalId);
      //   }, []);

      {/* use for later in the image sizing
      md:w-48 md:h-48 lg:w-64 lg:h-64
      
      */}
  return (
    <header className=" relative flex flex-col w-screen  h-screen items-center justify-between px-16 top-36 snap-center md:flex-row">
        <div className="mr-90 w-screen h-screen ">
          <h2 className=" font-bold text-gray-600 mt-11 uppercase mb-2">hello, my name is</h2>
          <h2 className="text-9xl text-primary py-7 font-extrabold font mb-2">Mr. Lota</h2>
          <p className="text-2xl text-gray-500">
            I'm a <b className='text-primary tracking-[2px]'>{text}
            <Cursor cursorColor="#F49B43" cursorBlinking/>
            </b>
          </p>
          <p className="leading-snug mt-10 text-4xl text-black ">
            Helping <b className="text-primary">startups</b> {""}
            by designing, developing & maintaining outstanding web and mobile products.
          </p>
          <div className="mt-5">
            {" "}
            <button className=" bg-secondary mr-3 px-6 py-3 rounded-full font-semibold hover:bg-primary-200 hover:text-white text-primary">
    <b >Download CV</b>
  </button>
          </div>
        </div>
        <div className="justify-center items-center w-full px-5 mb-36 ml-10">
          <Image 
            src={lota}  
            className="relative object-cover mx-auto h-80 w-80  rounded-full"
          />
        </div>
      </header>
  )
}
