import React from "react";

function SkillsSection() {
  const skills = [
    "C++", "Python", "Java", "JavaScript", "HTML/CSS", "MATLAB", "Assembly", "Linux", "Qt", "SQL", "TCP/UDP"
  ];

  return (
    <section>
      <div className="container m-auto px-4 py-14">
        <h2 className="text-2xl font-semibold">Additional technologies and skills</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index}>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                {skill}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
          {skills.slice(4).map((skill, index) => (
            <div key={index}>
              <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
