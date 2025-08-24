    // MyComponent.jsx
    import React from 'react';
    import LogoImage from "../assets/MI-Artisan LogoImage.png";
    import Logo from "../assets/Cogito logo.png";
    import BOLA from "../assets/BOLA.png";
    import Plumber from "../assets/Plumber.jpg";
    import Cogito from "../assets/Cogito.webp"
    import Header from "../Component/Header"
    import ME from "../assets/backgroundImg.jpg"
    import Footer from "./Footer"
    import AboutMe from "../assets/AboutImage.jpg"
    import ScrollFadeIn from '../Component/ScrollFadeIn';
    

    function ProjectPage() {
      
      return (
        <div class="  mt-0 bg-slate-100 ">
          <Header
          />
        
        
        <div class="  mb-20   bg-slate-100 p-8">
          
        <h1 class="text-center mb-8 font-bold text-2xl lg:text-5xl md:text-4xl ">My Projects</h1>
        
        <div
         
        class=" lg:flex   flex-col flex   lg:flex-row   md: flex md: flex-col lg:gap-12 gap-20 lg:mt-20
         ">
          <ScrollFadeIn>
           <div
            class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-96  mx-auto justify-center bg-slate-200 
           md:w-[400px] w-84 md:w-[500px]  ">
           
           
        { /* style={{
           backgroundImage: `url(${Cogito})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backdropFilter:"blur(10px)",
           
              }}*/ }
             
          
            <img
            src={Cogito}
            class="md:p-4 p-2"
            />
            <div class=" flex justify-center items-center">
            <img
              src={Logo}
              alt="Cogito Logo"
              class=" absolute flex md:mb-[600px] lg:mb-[450px] mb-96 my-2 md:w-36 md:h- "
            />
            </div>
            <div class=" text-center bg-slate-200 h-24 ">
              <h6 class="text-lg pb-2 lg:pb-5">An online platform for management, enhancing safety and work flow efficiency</h6>
            <a href ="https://psigroup-intellectsams-projects.vercel.app/" 
            target="_blank"rel="noopener noreferrer" class="pt-8" >
            Cogito is an internal app</a>
          
          </div>
          </div>
          </ScrollFadeIn> 
          <ScrollFadeIn>          
          <div
            class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-96  mx-auto justify-center bg-slate-200 
           md:w-[400px] md:w-[500px] w-84  ">
            
            <img
            src={Plumber}
            class="md:p-4 p-2 w-92 md:w-[500px] h-72 md:h-68"
            />
            <div class="flex    justify-center items-center text-center gap-2 relative
            text-3xl  
           ]">
            <img
              src={LogoImage}
              alt="Mi Artisan"
              class=" absolute mr-28 md:mr-32 mb-[510px] md:mb-[450px] items-center  my-2 md:w-20 md:h-10 w-16 h-10"
            />
            <p class=" absolute ml-24 mb-[510px] md:mb-[450px] font-semibold text-2xl lg:text-2xl "> MI ARTISAN</p>
            </div>
            <div class=" text-center bg-slate-200 h-28 ">
              <button>
              <h6 class="text-lg mb-6">An online platform that connect Artisan with customers</h6>
            <a href ="https://psigroup-intellectsams-projects.vercel.app/" 
            target="_blank"rel="noopener noreferrer" class="" >
            Click to check</a>
          </button>
          </div>
          </div>
          </ScrollFadeIn>
           <ScrollFadeIn>
          <div
            className=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-[400px]  mx-auto justify-center bg-slate-200
           md:w-[400px] md:w-[500px]   w-84 ">

           <img
            src={AboutMe}
            class="md:p-4 p-2 w-92 md:w-[500px] h-72 md:h-68"
            />
            <div class="flex    justify-center items-center text-center gap-2 relative
            text-3xl  
           ">
            <img
              src={BOLA}
              alt="Image"
              class=" absolute mr-18 md:mr-20 mb-[510px] md:mb-[450px] items-center  my-2 md:w-20 md:h-10 w-16 h-10"
            />
            <p class=" absolute ml-20 mb-[510px] md:mb-[450px] font-semibold text-4xl lg:text-4xl text-amber-700 "> olanle</p>
            </div>
             <div class=" text-center bg-slate-200 h-28 ">
              <h6 class="text-lg mb-6">My personal website portfolio to showcase my skills and 
                experiences
              </h6>
              <button>
            <a href ="https://bolanlemary.netlify.app/" 
            target="_blank"rel="noopener noreferrer" class="" >
            Click to go back to home page</a>
          </button>
       
          </div>
         
        </div>
        </ScrollFadeIn>
         
        </div>
              
        </div>
        <>
        <Footer/>
        </>
        </div>
      
      );
    }
    export default ProjectPage;