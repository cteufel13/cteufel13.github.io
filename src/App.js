import './App.css';
import HeroBackground from  './Hero.js';
import AboutMe from './AboutMe.js';
import Navbar from './NavBar.js';

import Projects from './Projects.js';
import Footer from './Footer.js';

// https://transform.tools/html-to-jsx


// Nav bar is going to have Main Page and then sub pages are going to be Projects and Misc for like pictures and experiences and stuff
function App() {
  
  return (
    <div>
      <Navbar />
      <HeroBackground />
      <AboutMe />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;

