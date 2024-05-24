import React from "react";

function ExtracurricularsSection() {
  return (
    <section id="extracurriculars" className="py-8">
      <div className="container m-auto px-4 mt-5">
        <h2 className="text-2xl font-semibold">Extracurriculars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Member of Chess Club</h3>
            <p className="text-white-600 mb-2">From: May 2024 - Present</p>
            <p className="text-white-600">
              Member of the Chess Club. Participate in matches every Wednesday.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Vice President of ACM@UCR</h3>
            <p className="text-white-600 mb-2">From: February 2022 - 2023</p>
            <p className="text-white-600">
                Provided leadership for the largest computer science club on campus by resourcing academic and professional development.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Member of acts2fellowship</h3>
            <p className="text-white-600 mb-2">From: September 2022 - Present</p>
            <p className="text-white-600">
                Assisting with tabling events, engaging with members, and promoting our activities within the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtracurricularsSection;
