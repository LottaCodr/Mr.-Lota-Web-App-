// components/Navbar.js
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "./button";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "about" },
    { id: 2, link: "skills" },
    { id: 3, link: "services" },
    { id: 4, link: "projects" },
    { id: 5, link: "testimonials" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-primary bg-white fixed nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Mr. Lota
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-primary duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {/* Your mobile icon or button */}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 to-bold text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl "
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

     <Button/>
    </div>
  );
}
