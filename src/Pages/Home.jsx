import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/backgroundimage.jpg";
import AboutMe from "./AboutMe";
import ProjectPage from "./ProjectPage";
import Contact from "./ContactPage";
import Footer from "./Footer";
import BOLA from "../assets/BOLA.png"
import HomeIcon from "../assets/HomeIcon.png";
import AboutIcon from "../assets/AboutIcon.png";
import ProjectIcon from "../assets/ProjectIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
import { Link } from 'react-router-dom';



function Home() {
  /*{
    /*const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const textToType = "Welcome to my Website.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
      setText(textToType.substring(0, index + 1));
    }, 180); // adjust the speed here

    return () => clearInterval(typingInterval);
  }, [index, textToType]); 
  }*/

  

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [fonts, setFonts] = useState([
    "font-serif", // serif font
    "font-sans", // sans-serif font
    "font-mono", // monospace font
    "font-display", // display font
    "font-extrabold", // extra bold font
    "font-bold", // bold font
    "font-light", // light font
    "font-thin", // thin font
    "italic", // italic font
    "oblique", // oblique font
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 500); // change font every 0.5 seconds

    return () => clearInterval(intervalId);
  }, [fonts]);
const scrollToSection =(id) =>{
      const section =document.getElementById(id);
      if (section){
        section.scrollIntoView({behavior:"smooth"});
      }
    };
  

  return (
    <div class="w-screen ref={ref}
      style={{ transitionDelay: '0.2s' }}
      className={`transition duration-500 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}">
      <head>
        <title> My portfolio</title>
      </head>
      {/*bg-linear-to-bl from-blue-200 to-blue-400*/}

     {/* Header*/}
     <header className="text-slate-800 mr-6 flex items-center justify-between mt-8 pl-4 sticky z-[20] mx-auto">
          <Link to="/"><div className="pl-4 flex">
             <img src={BOLA} alt="profile picture" className="w-14 h-14" />
             <p className="font-semibold font-serif text-amber-700 italic text-4xl">
               olanle
             </p>
           </div>
           </Link> 
           {/* Container for hamburger menu and navigation */}
           <div className="relative lg:flex lg:justify-end lg:flex-grow">
             {/* Hamburger menu for smaller screens */}
             <button
               id="hamburger-button"
               className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-white border border-gray-200 rounded"
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
                {/* <Link to="/">
                 <div className="flex gap-1 items-center">
                     <img
                     src={HomeIcon}
                     alt="Home Icon"
                     className="hover:w-10 hover:h-10 w-7 h-7"
                   />
                   <li className="hover:text-[#000]">Home</li>
                 </div>
                 </Link>*/}
                 
                 <button className="flex gap-1 items-center"
                 onClick={() => scrollToSection("about")}>
                   <img src={AboutIcon} alt="Home Icon" className="w-7 h-7" />
                   <li>About</li>
                 </button>
                
                 <Link to="/project">
                 <div className="flex gap-1 items-center onclick:text-amber-200">
                   <img src={ProjectIcon} alt="Project Icon" className="w-7 h-7" />
                         <li>Projects</li>
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
                
<div>

        <div
        style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
          className=" flex justify-center flex-col place-items-center   h-screen w-screen 
         text-slate-950"
        >
          {/* <h1
            className="text-2xl font-mono border-r-2 border-gray-600 animate-typing pr-2"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {text}

            <span className="animate-blink">|</span>
          </h1>*/}
          <div className="flex items-center  justify-center">
            <h1 className={`text-5xl text-center ${fonts[currentIndex]}`}>
              Hello!
            </h1>
            {/*<span className="ml-4 text-5xl">👋</span> */}
          </div>
          <h2>welcome to my website</h2>
          <h2 className=" text-2xl"> I'm Olowookere Bolanle Mary</h2>
          <p class="text-3xl"></p>
          <p class="w-80 ">
            A passionate{" "}
            <span className="font-extrabold "> frontend developer</span> , ready
            to tune up and build exceptional website that exceed your
            expectation.
          </p>
          <button
            class="bg-gradient-to-r from-black to-slate-700 shadow-lg shadow-black
             text-blue-200 w-52 mt-12 hover:scale-105 "
          >
            {" "}
            See Portfolio!
          </button>
        </div>
        {/*About email popup*/}
        <div
          className="absolute mt-40 right-0 mr-10 flex flex-col items-center"
          style={{
            top: `${scrollY}px`,
            transition: "top 0.2s ease-out",
            zIndex: 1,
          }}
        >
          <img src={EmailIcon} alt="Email Icon" className="w-10 h-10 mb-2" />
          <a
            href="mailto:bolanlemary9@gmail.com"
            className="text-white text-lg font-bold hover:text-gray-200"
          >

            bolanlemary9@gmail.com
          </a>
        </div>
        </div>
      

      {/*About me page*/}
      <div>
      <AboutMe/>
      </div>
      
      {/*CONTACT page*/}
      <Contact/>
     
      
        <footer>
<Footer/>
        </footer>
    </div>
  );
}
export default Home;
