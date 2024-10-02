import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';


function getImageUrl(project_name) {
    let imageUrl = require(`./imgs/${project_name}.png`)
    return (imageUrl);
};

export function Project ({imgname, title, description, link, customStyles = {}}) {
    const {imageStyle} = customStyles;

    return(
        <div className='Project'>
            <img src= {getImageUrl(imgname)} alt="Project Image" className="Project__Image" style={imageStyle}/>
            <div className="Project__Darkening">
                
            </div>
            <div className="Project__MagGlas"> 
                <img src={require('./imgs/MagnifyingGlass.png')} alt="MagGlas" className="MagGlas"/>
            </div>
            <p className="Project__Text"> {title}</p>


        </div>
    );
};


export function ProjectBernoulli() {
   return( <Project imgname="Bernoulli" title="Project Bernoulli   " /> )
}
export function ProjectBachelorsThesis() {
    return(<Project imgname="Bachelors Thesis" title="Bachelor's Thesis" />)
}
export function ProjectHDS() {
    const HDSStyles = { imageStyle:
        {width: "100%",
        height: "auto"}
        };
    
    return (<Project imgname="HDS" customStyles={HDSStyles} title="HDS: Hyb. Diff. Simulation" />)
}
export function ProjectThisWebsite() {
    return(<Project imgname="logo_black" title="This Website" />)

}


const Projects = () => {

    

    return (
        <div className="projects__container">
            <h1>Projects I've worked on </h1>
            <h2>Featured Projects</h2>
            <div className="projects__list">
                <ProjectBernoulli/>
                <ProjectBachelorsThesis/>
                <ProjectHDS/>
            </div>
            <h2> Other Projects</h2>
            <div className="projects__list">
                <ProjectThisWebsite/>
            </div>
            <Link to="/projects" className='projects__Link__Container'>
                <div className='projects__Link' >
                    <h1>Project Archive</h1>
                </div>
            </Link>
        </div>  
    );
};


export default Projects;

