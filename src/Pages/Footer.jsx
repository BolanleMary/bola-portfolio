import React from 'react';
import { Link } from 'react-router-dom';
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-white p-4 flex flex-col items-center justify-center text-center md:text-left">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h5 className="text-lg font-bold mb-2">Quick Links</h5>
          <ul>
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/project" className="hover:text-gray-400">Project</Link></li>
            <li><Link to="/resume"className="hover:text-gray-400">Resume</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <ul className="flex justify-center md:justify-start">
            <li className="mr-4">
                         <a
                                href="mailto:bolanlemary9@gmail.com"
                                target="_blank"
                            rel="noopener noreferrer"
                                className=" text-inherit hover:text-current"
                              >
                               < MdMarkEmailRead size={24} className="hover:text-gray-400"  />
                               </a>
                              </li>
            <li className="mr-4">
              <a href="https://www.linkedin.com/in/bolanlemary/"
                target="_blank"
                rel="noopener noreferrer"><FaLinkedin size={24} className="hover:text-gray-400" />
                </a>
                </li>
            <li>
              <a href="https://github.com/BolanleMary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline"><FaGithub size={24} className="hover:text-gray-400" />
                </a>
                </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
        </div>
      </div>
       <p className="text-sm">&copy; 2025 Your Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;