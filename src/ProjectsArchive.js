import React from "react";
import Logo from './imgs/logo.png';
import './ProjectsArchive.css';
// import './NavBar.css';
import { Link } from 'react-router-dom';
import { ProjectBernoulli,ProjectBachelorsThesis,ProjectThisWebsite,ProjectHDS } from './Projects.js';

const ProjectsArchive = () => {

    const HDSStyles = { imageStyle:
        {width: "100%",
        height: "auto"}
        };

    return (
        <div>
            <div className="navbar">
                <img src={Logo} id="logo"></img>

                <div className="nav-links">
                <Link to="/">Back to Homepage!</Link>
                </div>
            </div>
            <div className="content"> 
                <h1 >Projects Archive</h1>
                <div className="projects" >
                    <ProjectBernoulli />
                    <ProjectBachelorsThesis />
                    <ProjectHDS />
                </div>
                <div className="projects" >
                    <ProjectThisWebsite />    
                </div>

            </div>
            
        </div>
    );
}

export default ProjectsArchive;