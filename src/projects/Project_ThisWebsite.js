import React from 'react';
import { NavBarSmall } from '../ProjectsArchive';
import './projectdetail.css';


const Project_ThisWebsite = () => {
    return (
        <div>
            < NavBarSmall message="Back" />
            <div className='Content'>
                <div className='Header'>
                    <h1 id="Title">Personal Website</h1>
                    <h3 id="Subtitle"> September 2024 </h3>
                    <div id='Skills'>
                        <h4 className='Skill'> HTML</h4>
                        <h4 className='Skill'> CSS</h4>
                        <h4 className='Skill'> JS</h4>
                    </div>

                </div>
                <div className='MainContent'>
                    <p className="Description">
                        In September 2024 I started working on this personal website. I felt like it is the best way to portray my skills and projects in a visual manner and it allowed me to learn something new. I began touching on CSS and HTML as the framework before then later expanding to JS later on. One thing that I wanted to have for this is a foundation for future testing -  in other words - I wanted to have something that I could always work on and change and improve the further I go in my career. If you have any tips and tricks for me, please contact me!
                    </p>
                </div>
            </div>
        </div>
    );
    }

export default Project_ThisWebsite;