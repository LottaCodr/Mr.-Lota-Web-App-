import React from "react";
import Image from "next/image";
import lota from "./assets/lota2.jpg";
import { motion } from "framer-motion";
import Stats from "./Stats";

export default function About() {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-row relative h-screen text-left md:text-left max-w-full md:flex-col overflow-hidden justify-evenly items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-primary text-2xl">
        About
      </h3>

      <div className="relative flex flex-row ml-14 justify-evenly items-center  snap-x overflow-hidden mt-20 py-48 px-16 w-screen h-screen">
        <motion.div
          style={{ width: "900px", height: "600px" }}
          className="mt-24 relative object-cover mx-auto bg-primary h-full w-full overflow-hidden rounded-3xl "
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.6,
          }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={lota}
            className="mt-24 relative object-cover mx-auto h-96 w-96 overflow-hidden"
          />
        </motion.div>
        <div className="flex relative flex-col p-5 mr-14 items-center space-y-24 ml-40 overflow-hidden">
          <h1 className=" leading-snug py-20 mr-16 font-extrabold text-6xl">
            Developing Solutions, not just Visuals.
          </h1>
          <p className="text-2xl leading-normal mr-16   overflow-hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            {" "}
          </p>
          <Stats />
        </div>
      </div>
    </motion.div>
  );
}
