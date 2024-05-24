import React from "react";

function Header() {
  return (
    <header className={'border-b border-gray-900' } id="home">
      <div className="container m-auto px-2 py-6 max-w-8xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-white">Justin's Portfolio</h1>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#aboutme" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#extracurriculars" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-300">
                  Extracurriculars
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
