import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

function ProjectsSection() {
  const projects = [
    { 
      img: Project1, 
      title: "Autonomous Trash Picking Robot", 
      description: "ROS2 robot to solve waste collection and encourage eco-friendly practices.",
      previewLink: "https://www.youtube.com/watch?v=zVrcM-32XTs&ab_channel=JustinMazon", 
      githubLink: "https://github.com/KLeong91/KHRJ---Senior-Design" 
    },
    { 
      img: Project2, 
      title: "Pokemon Card Detector", 
      description: "Quickly identifies your pokemon card using OpenCV. Searches a database of over 15,000 pokemon cards.",
      previewLink: "https://www.youtube.com/watch?v=CmKXkBg8A2w&ab_channel=JustinMazon", 
      githubLink: "https://github.com/JustintheBox/PokemonCardDetector" 
    },
    { 
      img: Project3, 
      title: "Face Tracking Nerf Turret", 
      description: "Fully automated nerf gun turret that will fire upon face detection using OpenCV.",
      previewLink: "https://www.youtube.com/watch?v=0kSbqZipghE&ab_channel=JustinMazon", 
      githubLink: "https://github.com/JustintheBox/FaceTrackingNerfTurret" 
    },
    { 
      img: Project4, 
      title: "Regicide (Chess)", 
      description: "Chess made from scratch using C++ and SDL2.",
      previewLink: "https://www.chess.com/home", 
      githubLink: "https://github.com/JustintheBox/Chess-Interface"
    }
  ];

  return (
    <section className="bg-gray-900" id="projects">
    <div className="container m-auto px-4 sm:py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={project.img} className="w-full h-auto" alt={project.title} />
            <h3 className="text-2xl font-semibold mt-8">{project.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            <div className="flex mt-12 gap-2">
              <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full py-2 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700 text-white font-semibold focus:outline-none focus:ring focus:ring-blue-300">
                  Preview
                </button>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <button className="w-full py-2 border border-blue-500 rounded-full hover:border-blue-700 text-blue-500 font-semibold focus:outline-none focus:ring focus:ring-blue-300">
                  Checkout GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default ProjectsSection;