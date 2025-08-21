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
    

    function ProjectPage() {
      // Component logic and state management can go here
      return (
        <div class="  mt-0 bg-slate-100 ">
          <Header
          />
        
        
        <div class="  mb-20   bg-slate-100 p-8">
          
        <h1 class="text-center mb-8 font-bold text-2xl lg:text-5xl md:text-4xl ">My Projects</h1>
        
        <div
         
        class=" lg:flex   flex-col flex   lg:flex-row   md: flex md: flex-col lg:gap-0 gap-20 lg:mt-20
         ">
           <div
            class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-96  mx-auto justify-center bg-slate-100 
           md:w-[400px] w-84 md:w-[500px]"
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
            Cogito is an internal app</a>
          
          </div>
          </div>          
          <div
            class=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-[390px]  mx-auto justify-center bg-slate-100 
           md:w-[400px] md:w-[500px] w-92"
           style={{
           backgroundImage: `url(${Plumber})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backdropFilter:"blur(10px)",
           }}
          >
            <div class="flex gap-2 text-3xl item-center text-center">
            <img
              src={LogoImage}
              alt="Mi Artisan"
              class=" ml-32 mt-4 my-2 md:w-12 md:h-12 w-16 h-16"
            />
            <p class="font-semibold text-2xl lg:text-3xl mt-6"> MI ARTISAN</p>
            </div>
            <div class="mt-52 text-center bg-slate-200 h-28 ">
              <button>
              <h6 class="text-lg mb-6">An online platform that connect Artisan with customers</h6>
            <a href ="https://psigroup-intellectsams-projects.vercel.app/" 
            target="_blank"rel="noopener noreferrer" class="" >
            Click to check</a>
          </button>
          </div>
          </div>
          
          <div
            className=" outline-2 outline-slate-100 shadow-lg shadow-[#0E0AE6]
           transition-transform duration-300 ease-in-out transform hover:scale-105 
           hover:shadow-2x lg:w-[400px] lg:h-[406px]  mx-auto justify-center bg-slate-100
           md:w-[400px] md:w-[500px] md:h-[500px]  w-84 "

           style={{
           backgroundImage: `url(${ME})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backdropFilter:"blur(10px)",
           }} 
          >
            <div class ="flex justify-center pt-8">
            <img src={BOLA} alt="profile picture" className="   w-14 h-14" />
            <p className="font-semibold font-serif text-amber-700 text-4xl  ">
              olanle
            </p>
            
            </div>
             <div class="lg:mt-52 md:mt-76 mt-52 text-center bg-slate-200 h-28 ">
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
        </div>
              
        </div>
        <>
        <Footer/>
        </>
        </div>
      
      );
    }
    export default ProjectPage;