    // AboutMEpage
    import React from 'react';
    import Header from '../Component/Header';
    import AboutImage from "../assets/AboutImage.jpg"
    import AboutImage1 from "../assets/AboutImg.png"
    import { MdMarkEmailRead } from "react-icons/md";
    import { FaLinkedin } from "react-icons/fa";
    import { FaGithub } from "react-icons/fa";
    import ScrollFadeIn from '../Component/ScrollFadeIn';

    function AboutMe() {
      // Component logic and state management can go here
      return (
        <section id='about'>
        
        
        <div class=" bg-slate-300 flex flex-col items-center justify-center p-4   "> 
                  <p class=" lg:text-5xl text-center underline decoration-black font-serif text-2xl">ABOUT ME</p>       
                  <div class="flex lg:flex-row md:flex-row md:gap-20 flex-col lg:gap-20" >
                     <ScrollFadeIn>
                <img  src={AboutImage}
                class="bg-slate-300  lg:w-[400px] lg:h-[500px] w-72 h-76 mt-10 border border-black rounded-full shadow-2xl shadow-black "/>
                </ScrollFadeIn>
                    <div class="    ">
                      <ScrollFadeIn>
                          <p class=" text-black lg:text-3xl text-xl w-72 md:mt-16 lg:mt-16 lg:w-[600px]">I'm a frontend developer with a passion for crafting seamless digital experiences that
                   delight and inspire. With a keen eye for details and a love for clean code, I bring ideas 
                   to life on the web. Let's build something awesome together!"</p> </ScrollFadeIn>
                   <ScrollFadeIn>
                   <div class="flex flex-row lg:gap-32 gap-20 mt-6 lg:text-5xl text-3xl">
                    <a
                    href="mailto:bolanlemary9@gmail.com"
                    target="_blank"
                rel="noopener noreferrer"
                    className=" text-inherit hover:text-current"
                  >
                   < MdMarkEmailRead  />
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
                   </ScrollFadeIn>
                  </div>
        
                   </div>
                   
               
                 
                
              </div>
              
              </section>
      );
    }
    export default AboutMe;