import connectToDatabase from "mongodb";
import Navbar from "./components/navbar";
import React from "react";
import TheHome from "./components/home";

export default function Home({
  aboutMeData,
  servicesData,
  portfolioData,
  testimonialData,
}) {
  return (
    <main>
      <TheHome/>
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
