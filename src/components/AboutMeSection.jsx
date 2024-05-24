import React from "react";
import ParallaxBackground from "../assets/parallax-background.jpg";
import { Parallax } from 'react-parallax';

function AboutMeSection() {
  return (
    <Parallax bgImage={ParallaxBackground} strength={800} bgImageStyle={{transform: 'scale(1)', objectFit: 'scale-down', objectPosition: '50% 50%' }}>
      <section className="min-h-screen flex items-center" id="aboutme">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold text-white">About me</h2>
          <div className="flex flex-col sm:flex-row gap-12 mt-12">
            <div className="flex-1">
              <p className="text-white-400">
                Hi! I'm Justin Mazon, a 4th year Computer Engineering major from UC Riverside. After graduation, I will be working at Northrop Grumman in Palmdale, CA as an Associate Software Engineer.
              </p>
              <p className="text-white-400 mt-2">
                You'll often catch me immersed in a game of chess, strumming away on my guitar, or enjoying quality time with friends.
              </p>
              <a href="https://drive.google.com/file/d/1C9BYaduVxbSkB0XklQ0knMS-727YeBVa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button>
              </a>
            </div>
            <div className="flex-1 flex justify-center items-start">
              <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0kSbqZipghE"
                  title="Face Tracking Nerf Turret using OpenCV and Arduino (Final Project - CS 120B)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}

export default AboutMeSection;
