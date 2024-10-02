import React from 'react';
import './AboutMe.css';
import BackgroundImg from './imgs/about-me__background.png';

const AboutMe = () => {

    return (
        <div>
            <div className="about-me" id="about-me">
                    <h1 id="about-me-heading"> About me: </h1>
                    <p id="about-me-content"> 
                    Hi, I'm Carlo. I recently graduated from <a href="https://ethz.ch" id = "about-me-link">ETH Zurich</a> with a Bachelor's degree in Mechanical Engineering, focusing on robotics, machine learning, and control systems. My main interests lie aerospace and robotics which is currently the main driver of my motivation. I aspire to build a career in creating things—whether it be hardware, software, or a combination of both. I thrive in fast-paced environments and am always seeking new challenges.              
                    </p>
                    <p id="about-me-content">
                        Outside of school, I enjoy listening to music and doing sports (especially swimming and ultimate frisbee).
                    </p>
                    <h2 className='about-me__tldr_header'> TLDR: <em>My interests are...</em></h2>
                    <div className="about-me__tldr">
                        
                        <div className='about-me__iconContainer'>                       
                            <img src={require("./imgs/rocketicon.png")} alt="Rocket Icon" className="about-me__icon" />
                            <h2 className='about-me__iconCaption'> Aerospace</h2>
                        </div>
                        <div className='about-me__iconContainer'>
                        <img src={require("./imgs/roboticon.png")} alt="Robot Icon" className="about-me__icon" />
                            <h2 className='about-me__iconCaption'> Robotics</h2>
                        </div>
                        <div className='about-me__iconContainer'>
                        <img src={require("./imgs/swimmingicon.png")} alt="Swimming Icon" className="about-me__icon" />
                            <h2 className='about-me__iconCaption'> Swimming</h2>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default AboutMe;