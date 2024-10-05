import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Logo from './imgs/logo.png';



const NavBar = () => {
    
    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");
    const [heightNav,setheightNav] = useState("20%");

    const handleScroll = () => {
        const scrollY= window.scrollY;
        const fadeStart = 600
        const fadeEnd = 720;

        if (scrollY <= fadeStart) {
            setheightNav("20%");
            setBackgroundColor("rgba(0, 0, 0, 0)");
        }
        else if (scrollY <= fadeEnd) {
            setBackgroundColor(`rgba(0, 0, 0, ${(scrollY-fadeStart)/(fadeEnd-fadeStart)})`);
            const height = 20 - ((scrollY-fadeStart)/(fadeEnd-fadeStart))*10;
            setheightNav(`${height}%`);
        }
        else {
            setBackgroundColor("rgba(0, 0, 0, 1)");
            setheightNav("10%");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const handleScrollToAbout = () => {
        const section = document.getElementById("about-me");
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY - 150; // Scroll to the section but leave 150px space
            window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      };

      const handleScrollToProject = () => {
        const section = document.getElementById("ProjectSection");
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.scrollY - 150; // Scroll to the section but leave 150px space
            window.scrollTo({ top: topOffset, behavior: "smooth" });
        }
      };


    return(
        <div className="navbar" style={{backgroundColor: backgroundColor,height: heightNav}}>
            <img src = {Logo} alt="logo" id="logo"/>

            <div className="nav-links">
                <p onClick={handleScrollToAbout}>About Me</p>
                <p onClick={handleScrollToProject}>Projects</p>
                <p>Cool Stuff</p>
            </div>

        </div>
    )
}

export default NavBar;