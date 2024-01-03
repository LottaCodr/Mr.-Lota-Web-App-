
"use client";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

export default function Home({
  aboutMeData,
  servicesData,
  portfolioData,
  testimonialData,
}) {
  return (
      <main className="h-screen w-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Hero Section */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* about section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* services section */}
      <section id="services" className="snap-center">
        <Services/>
      </section>
    </main>
    
  );
}

//run at the server side

// export async function getStaticProps() {
//   const db = await connectToDatabase();

//   //fetch data from MongoDB collections
//   const aboutMeData = await db.collection("aboutMe").findOne({});
//   const servicesData = await db.collection("services").findOnee({});
//   const portfolioData = await db.collection("portfolio").findOne({});
//   const testimonialData = await db.collection("testimonial").findOne({});

//   return {
//     props: {
//       aboutMeData,
//       servicesData,
//       portfolioData,
//       testimonialData,
//     },
//   };
// }
