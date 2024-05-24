import React from 'react';

function EducationSection() {
  return (
    <section className="py-8" id="education">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
            <p>
              Graduated from Westview High School in San Diego, CA.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
            <p>
              Enrolled at UC Riverside with a major in Computer Engineering.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
            <p>
              Interned at Northrop Grumman in Chandler, AZ working within Space Systems.
            </p>
          </div>
          <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
            <p>
              Graduated at UC Riverside with a Bachelors of Science in Computer Engineering. Accepted a full-time job at Northrop Grumman in Palmdale, CA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
