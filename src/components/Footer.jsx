import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

function Footer() {
  return (
    <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
            <li>
              <a href="https://www.facebook.com/justin.mazon.372/" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} className="w-5" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/justinmazon44/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className="w-5" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/justinmazon/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} className="w-5" alt="Instagram" />
              </a>
            </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
