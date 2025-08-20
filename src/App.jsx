import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Project from './Pages/ProjectPage';
import Contact from './Pages/ContactPage';
import Resume from './Pages/Resume';
import Resumee from './Pages/Resumee';



function Main() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<About/>}/>
        <Route path="/project"element={<Project/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/resume"element={<Resume/>}/>
        
      </Routes>
    </>
  );
}
export default Main;