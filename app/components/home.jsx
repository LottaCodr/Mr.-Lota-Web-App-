"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";

export default function TheHome() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Hero Section */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* about section */}
      <section id="about" className="snap-center">
        <About />
      </section>
    </main>
  );
}
