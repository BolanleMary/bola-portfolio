    // AboutMEpage
    import React from 'react';
    import Header from '../Component/Header';
    import AboutImage from "../assets/AboutImage.jpg"
    import { SiMinutemailer } from "react-icons/si";
    import { FaLinkedin } from "react-icons/fa";
    import { FaGithub } from "react-icons/fa";

    function AboutMe() {
      // Component logic and state management can go here
      return (
        <section id='about'>
        
        
        <div class=" bg-slate-300 flex items-center justify-center h-screen p-4  "> 
                          {/* <p class="border border-solid border-2 border-black border-l-4 ml-4 lg:h-[600px] h-[400px] 
                 item-center justify-center">*/}
                  <div class="flex flex-row lg:gap-20" >
                    <div class=" bg-slate-300  items-center justify-center  ">
                  <p class=" lg:text-5xl text-center underline decoration-black font-serif text-2xl">ABOUT ME</p>
        <p class=" text-black lg:text-3xl text-xl w-72 lg:mt-16 lg:w-[600px]">I'm a frontend developer with a passion for crafting seamless digital experiences that
                   delight and inspire. With a keen eye for details and a love for clean code, I bring ideas 
                   to life on the web. Let's build something awesome together!"</p>
                   <div class="flex flex-row gap-20 mt-6 lg:text-5xl">
                    <a
                    href="mailto:bolanlemary9@gmail.com"
                    target="_blank"
                rel="noopener noreferrer"
                    className=" text-inherit hover:text-current"
                  >
                   <SiMinutemailer  />
                   </a>
                   <a
                href="https://www.linkedin.com/in/bolanlemary/"
                target="_blank"
                rel="noopener noreferrer">
                   <FaLinkedin class=""/>
                   </a>
                   <a
                href="https://github.com/BolanleMary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline"
              >
                   <FaGithub class="" />
                   </a>
                   </div>
                  </div>
        <img  src={AboutImage}
                class=" lg:w-[400px] lg:h-[500px] w-40 h-62 mt-10 border border-black rounded-full shadow-2xl shadow-black "/>
                
                   </div>
                   
               
                 
                
              </div>
              
              </section>
      );
    }
    export default AboutMe;