import React from 'react';
import Image from "next/image";
import lota from "./assets/lota.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "./button";

export default function Hero() {

    const [text, count] = useTypewriter({
        words: [
          "Software Development",
          "Web Development",
          "Brand Identity Designing",
          "UI/UX Designing",
          "Mobile App Development",
        ],
        loop: true,
        delaySpeed: 2000,
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
    <div className="flex flex-row w-full h-full items-center justify-between p-5 mt-32">
        <div className="mr-90 w-1/2 h-full ">
          <h2 className="text-7xl font-bold mb-2">Hi, I'm Mr. Lota</h2>
          <p className="text-2xl text-gray-500">
            Expert in <b className='text-primary tracking-[2px]'>{text}
            <Cursor cursorColor="#F49B43" cursorBlinking/>
            </b>
          </p>
          <p className="mt-10 text-4xl text-black ">
            I help <b className="text-primary">startups</b> {""}
            by designing & developing outstanding web and mobile products.
          </p>
          <div className="mt-5">
            {" "}
            <Button />
          </div>
        </div>
        <div className="justify-center items-start w-1/2 p-5 ml-10">
          <Image 
            src={lota}  
            className="relative object-cover mx-auto h-80 w-80  rounded-full"
          />
        </div>
      </div>
  )
}
