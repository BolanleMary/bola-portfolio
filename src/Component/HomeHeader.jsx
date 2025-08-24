import React, { } from "react";
import BOLA from "../assets/BOLA.png"
import AboutIcon from "../assets/AboutIcon.png";
import ProjectIcon from "../assets/ProjectIcon.png";
import ResumeIcon from "../assets/ResumeIcon.png"
import EmailIcon from "../assets/EmailIcon.png";
import { Link } from 'react-router-dom';

function HomeHeader() {  
const scrollToSection =(id) =>{
      const section =document.getElementById(id);
      if (section){
        section.scrollIntoView({behavior:"smooth"});
      }
    };
  return (
<header className="text-slate-800 mr-6 flex items-center justify-between mt-8 lg:gpl-4 lg:pr-6 sticky z-[20] mgit logx-auto">
          <Link to="/"><div className="pl-4 flex">
             <img src={BOLA} alt="profile picture" className="w-14 h-14" />
             <p className="font-semibold font-serif text-amber-700  text-4xl">
               olanle
             </p>
           </div>
           </Link> 
           {/* Container for hamburger menu and navigation */}
           <div className="relative lg:flex lg:justify-end lg:flex-grow">
             {/* Hamburger menu for smaller screens */}
             <button
               id="hamburger-button"
               className="lg:hidden flex flex-col justify-center
                items-center w-10 h-10 bg-white border border-gray-200 rounded"
               // Add this code inside your onClick event handler
         onClick={() => {
           // Toggle menu open/close state
           document.getElementById("nav-menu").classList.toggle("hidden");
           const hamburgerButton = document.getElementById("hamburger-button");
           hamburgerButton.classList.toggle("open");
         
           const hamburgerTop = document.getElementById("hamburger-top");
           const hamburgerMiddle = document.getElementById("hamburger-middle");
           const hamburgerBottom = document.getElementById("hamburger-bottom");
         
           if (hamburgerButton.classList.contains("open")) {
             hamburgerTop.classList.add("rotate-45", "translate-x-1.5", "translate-y-1.5");
             hamburgerMiddle.classList.add("opacity-0");
             hamburgerBottom.classList.add("-rotate-45", "translate-x-1.5", "-translate-y-1.5");
           } else {
             hamburgerTop.classList.remove("rotate-45", "translate-x-1.5", "translate-y-1.5");
             hamburgerMiddle.classList.remove("opacity-0");
             hamburgerBottom.classList.remove("-rotate-45", "translate-x-1.5", "-translate-y-1.5");
           }
         }}
             >
               <span
                 id="hamburger-top"
                 className="block w-6 h-0.5 bg-gray-600 mb-1 transition-transform duration-300"
               ></span>
               <span
                 id="hamburger-middle"
                 className="block w-6 h-0.5 bg-gray-600 mb-1 transition-opacity duration-300"
               ></span>
               <span
                 id="hamburger-bottom"
                 className="block w-6 h-0.5 bg-gray-600 transition-transform duration-300"
               ></span>
             </button>
             {/* Navigation menu */}
             <nav
               id="nav-menu"
               className="hidden lg:flex lg:flex-row flex-col absolute lg:relative right-0 top-12 lg:top-0 bg-white lg:bg-transparent shadow-md lg:shadow-none w-40 lg:w-auto p-4 lg:p-0"
             >
               <ul className="flex lg:flex-row flex-col gap-4 lg:gap-16 items-start lg:items-center">
        
                 
                 <button className="flex gap-1 items-center"
                 onClick={() => scrollToSection("about")}>
                   <img src={AboutIcon} alt="Home Icon" className="w-7 h-7" />
                   <li>About</li>
                 </button>
                
                 <Link to="/project">
                 <div className="flex gap-1 items-center Onclick:text-amber-200">
                   <img src={ProjectIcon} alt="Project Icon" className="w-7 h-7" />
                         <li>Projects</li>
                 </div>
                 </Link>

                 <Link to="/resume">
                 <div className="flex gap-1 items-center Onclick:text-amber-200">
                   <img src={ResumeIcon} alt="Project Icon" className="w-7 h-7" />
                         <li>Resume</li>
                 </div>
                 </Link>
                 
                 
                 
                 <div className="flex gap-1 items-center"
                 onClick={() => scrollToSection("contact")}>
                   <img src={ EmailIcon } alt="Project Icon" className="w-7 h-7" />
                   <li>Contact</li>
                 </div>
                 
               </ul>
             </nav>
           </div>
         </header>
  )
}
   export default HomeHeader;  