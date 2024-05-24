import React from "react";
import Profile from "../assets/Photo.png";

function HeroSection() {
  return (
    <section>
      <div className="container max-w-4xl m-auto px-10 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
        <div>
          <h2 className="font-bold text-4xl">Hello, I'm Justin,</h2>
          <div>
            <h2 className="font-bold text-4xl mt-1 gradiant-text pb-2">Software Engineer</h2>
          </div>
          <div>
            <p className="mt-4 text-white-400">
              Ever since I was little, I had a knack for problem solving. In high school I enrolled into AP Computer Science which led me to major in Computer Engineering.
            </p>
          </div>
        </div>
        <div className="relative group">
          <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[320px] after:h-[240px] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 sm:after:w-[420px] sm:after:h-[320px] sm:after:left-auto sm:after:top-0 sm:after:-left-20 sm:after:-translate-x-0 sm:after:-translate-y-0 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[180px] before:h-[180px] before:absolute before:bottom-0 before:right-0 before:-translate-x-1/2 before:-translate-y-1/2">
            <img 
              src={Profile} 
              className="relative z-10 w-[400px] m-auto sm:w-[600px] sm:max-w-none transform transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
