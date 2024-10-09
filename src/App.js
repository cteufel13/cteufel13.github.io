import './App.css';
import HeroBackground from  './Hero.js';
import AboutMe from './AboutMe.js';
import Navbar from './NavBar.js';
import Experiences from './Experiences.js';
import Footer from './Footer.js';
import {Resume,ReachOut} from './Inbetween.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import{ ProjectsSection , ProjectDetails} from './Projects.js';
import {ProjectsArchive} from './ProjectsArchive.js';

// https://transform.tools/html-to-jsx


// Nav bar is going to have Main Page and then sub pages are going to be Projects and Misc for like pictures and experiences and stuff
function App() {
  
  return (

    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroBackground />
            <AboutMe />
            <Experiences />
            {/* <Resume /> */}
            <ProjectsSection/>
            <ReachOut />
            <Footer />

          </div>} />
        <Route path="/projects/:projectName" element={
          <div>
            <ProjectDetails/>
            <Footer/>
            </div>
          }/>
        <Route path="/projects" element={
          <div>
            <ProjectsArchive/>
            <Footer/>
          </div>}/>
\      </Routes>
    </Router>


    
  );
}

export default App;

