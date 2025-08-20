import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/backgroundimage.jpg";
import HomeHeader from "../Component/HomeHeader";
import AboutMe from "./AboutMe";
import Contact from "./ContactPage";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import ScrollFadeIn from '../Component/ScrollFadeIn';



function Home() {  
  const [fonts, ] = useState([
    "font-serif", 
    "font-sans", 
    "font-mono", 
    "font-display", 
    "font-extrabold", 
    "font-bold", 
    "font-light",
    "font-thin", 
    "italic", 
    "oblique",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 500); // change font every 0.5 seconds

    return () => clearInterval(intervalId);
  }, [fonts]);


  return (
    <div class="w-screen ref={ref}
      style={{ transitionDelay: '0.2s' }}
      className={`transition duration-500 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}">
      <head>
        <title>Bolanle Portfolio</title>
      </head>
         {/* Header*/}
         <HomeHeader/>
                
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
                  <div className="flex items-center  justify-center">
            <h1 className={`text-5xl text-center ${fonts[currentIndex]}`}>
              Hello!
            </h1>
            {/*<span className="ml-4 text-5xl">👋</span> */}
          </div>
          <h2>welcome to my website</h2>
          <h2 className=" text-2xl"> I'm Olowookere Bolanle Mary</h2>
          <p class="text-3xl"></p>
          <p class="w-80 p-2 ">
            A passionate{" "}
            <span className="font-extrabold "> frontend developer</span> , ready
            to tune up and build exceptional website that exceed your
            expectation.
          </p>
          <ScrollFadeIn>
            <Link to="/project">
          <button
            class="bg-gradient-to-r from-black to-slate-700 shadow-lg shadow-black
             text-blue-200 w-62 py-2 mt-12 hover:scale-105 text-lg rounded-full "
          >
            {" "}
            See Project!
          </button>
          </Link>
          </ScrollFadeIn>
        </div>
        </div>
          {/*About me page*/}
            <AboutMe/>
            {/*CONTACT page*/}
           <Contact/>
         <footer>
            <Footer/>
        </footer>
    </div>
  );
}
export default Home;
