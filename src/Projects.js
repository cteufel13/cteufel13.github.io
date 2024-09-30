import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

function getImageUrl(project_name) {
    let imageUrl = require(`./imgs/${project_name}.png`)
    return (imageUrl);
};

function Project ({imgname, title, description, link, customStyles = {}}) {
    const {imageStyle} = customStyles;

    return(
        <div className='Project'>
            <img src= {getImageUrl(imgname)} alt="Project Image" className="Project__Image" style={imageStyle}/>
            <div className="Project__Text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>


        </div>
    );
};
        



const Projects = () => {

    const HDSStyles = { imageStyle:
        {width: "100%",
        height: "auto"}
        };

    return (
        <div className="projects__container">
            <h1>Projects I've worked on </h1>
            <h2>The Major</h2>
            <div className="projects__list">
                <Project imgname="Bernoulli" title="Project Bernoulli" />
                <Project imgname="Bachelors Thesis" title="Bachelor's Thesis" />
                <Project imgname="HDS" customStyles={HDSStyles} />
            </div>
        </div>
    );
};


export default Projects;