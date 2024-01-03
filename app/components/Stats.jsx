import React from "react";

export default function Stats() {
  return (
    <div className="flex mb-32  relative  flex-row w-full h-full items-center overflow-hidden mx-auto max-w-full z-0 justify-start space-x-36 mt-10">
      <div className="flex flex-col">
        <h3 className="font-extrabold text-5xl">12+</h3>
        <p>Years of Experience</p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-5xl">20+</h3>
        <p>Satisfied Companies</p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-5xl">57+</h3>
        <p>Completed Projects</p>
      </div>
    </div>
  );
}
