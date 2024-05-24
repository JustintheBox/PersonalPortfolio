import React from "react";

function TechnologiesSection() {
  const technologies = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS, Bootstrap, Tailwind", level: "Beginner" },
    { name: "JavaScript, TypeScript, JQuery", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "C++", level: "Advanced" },
  ];

  const getWidth = (level) => {
    switch (level) {
      case "Beginner":
        return "w-1/4";
      case "Intermediate":
        return "w-1/2";
      case "Advanced":
        return "w-3/4";
      default:
        return "w-0";
    }
  };

  return (
    <section className="py-10 bg-gray-900" id="skills">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <div className="mt-14">
          {technologies.map((tech, index) => (
            <div key={index} className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-white">{tech.name}</h2>
                <p className="text-gray-400">{tech.level}</p>
              </div>
              <div className="w-full h-2 mt-2 bg-gray-700 rounded-md">
                <div className={`h-full bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md ${getWidth(tech.level)}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
