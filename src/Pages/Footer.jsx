import React from 'react';
import { SiMinutemailer } from "react-icons/si";
    import { FaLinkedin } from "react-icons/fa";
    import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-white p-4 flex flex-col items-center justify-center text-center md:text-left">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h5 className="text-lg font-bold mb-2">Quick Links</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <ul className="flex justify-center md:justify-start">
            <li className="mr-4"><a href="#" target="_blank"><SiMinutemailer size={24} className="hover:text-gray-400" /></a></li>
            <li className="mr-4"><a href="#" target="_blank"><FaLinkedin size={24} className="hover:text-gray-400" /></a></li>
            <li><a href="#" target="_blank"><FaGithub size={24} className="hover:text-gray-400" /></a></li>
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