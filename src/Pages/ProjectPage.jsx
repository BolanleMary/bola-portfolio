    // MyComponent.jsx
    import React from 'react';
    import LogoImage from "../assets/MI-Artisan LogoImage.png";
    import Logo from "../assets/Cogito logo.png";
    import BOLA from "../assets/BOLA.png";
    import Plumber from "../assets/Plumber.jpg";
    import Cogito from "../assets/Cogito.webp"

    function ProjectPage() {
      // Component logic and state management can go here
      return (
        <div class=" mb-8  bg-slate-100 ">
        <h1 class="text-center mb-8 font-bold ">My Project</h1>
        
        <div
        
        class=" lg:flex lg:gap-20 mt-10 flex-col flex  lg:flex-row  lg: gap-20 md: flex md: flex-col
        md:items-center md:justify-center ">
          <div 
          class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] h-96 lg:ml-24 mx-auto justify-center 
           bg-slate-100 md:w-[400px] md:ml-24 w-84 

            "
           style={{
           backgroundImage: `url(${Plumber})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backdropFilter:"blur(10px)",
           }}
           >
          <div
            class=" flex gap-2 text-3xl "
          >
            <img
              src={LogoImage}
              alt="Mi Artisan Logo"
              class=" ml-32 mt-4 my-2 md:w-12 md:h-12 w-16 h-16"
            />
            <p class="font-semibold text-2xl  lg:text-3xl mt-6">MI ARTISAN</p>
            
            </div>
            <div class="mt-52 text-center bg-slate-200 h-26 ">
              <h6 class="text-lg mb-6">we connect customers to Artisan closest to them </h6>
            <a href ="https://psigroup-intellectsams-projects.vercel.app/" 
            target="_blank"rel="noopener noreferrer" class="" >
            Click to check Mi-Artisan</a>
          
          </div>
                     </div>
          
          <div
            class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] h-96 lg:ml-24 mx-auto justify-center bg-slate-100 
           md:w-[400px] md:ml-24 w-84"
           style={{
           backgroundImage: `url(${Cogito})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backdropFilter:"blur(10px)",
           }}
          >
            <img
              src={Logo}
              alt="Cogito Logo"
              class=" ml-52 mt-4 my-2 md:w-12 md:h-12 "
            />
            <div class="mt-52 text-center bg-slate-200 h-28 ">
              <h6 class="text-lg mb-6">An online platform that connect Artisan with customers</h6>
            <a href ="https://psigroup-intellectsams-projects.vercel.app/" 
            target="_blank"rel="noopener noreferrer" class="" >
            Click to check Mi-Artisan</a>
          
          </div>
          </div>
          
        </div>
        <div class="lg:flex lg:gap-24 mt-10 flex-col flex bg-stone-50 lg:flex-row bg-slate-100 
         lg: gap-24 md: flex md: flex-col ">
          <div
            className=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lgw-[400px] h-96 lg:ml-[500px] mx-auto justify-center bg-slate-100
           md:w-[400px] md:ml-24 w-84  "
          >
            <div class ="text-center align-center">
            <img src={BOLA} alt="profile picture" className=" mt-24  w-14 h-14" />
            <p className="font-semibold font-serif text-amber-700 italic text-4xl  ">
              olanle
            </p>
            </div>
          </div>
         { /*<div
            class=" outline-2 outline-emerald-950 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105
            hover:shadow-2x w-[500px] h-64 flex gap-2 text-3xl "
          >
            Cogito
          </div> */}
        </div>
        </div>
      
      );
    }
    export default ProjectPage;