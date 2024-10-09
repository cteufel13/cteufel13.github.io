import React from 'react';
import { NavBarSmall } from '../ProjectsArchive';
import './projectdetail.css';

import { Gallery } from './project_utils';

const Project_Bernoulli = () => {

    const images = [
        require('./project_imgs/Bernoulli_1.png'),
        require('./project_imgs/Bernoulli_2.png'),
        require('./project_imgs/Bernoulli_3.png'),
        require('./project_imgs/Bernoulli_4.png'),
      ];

    return (
        <div >
            < NavBarSmall message="Back" />
            <div className='Content'>
                <div className='Header'>
                    <h1 id="Title">Project Bernoulli</h1>
                    <h3 id="Subtitle"> Sept. 2022- Nov. 2023</h3>
                    <div id='Skills'>
                        <h4 className='Skill'>Siemens NX (CAD)</h4>
                        <h4 className='Skill'>Abaqus (FEA)</h4>
                    </div>

                </div>
                <div className='MainContent'>
                    <p className="Description">
                        Project Bernoulli can be summarized into three words: <b>motivated, innovative and ambitious </b>. Our plan was to make a student manufactured and inhouse built rocket that had a hybrid rocket engine and a guided recovery system. Previous projects like Periphas and Helvetia set the stage for an intense year of designing,building,rethinking and making it just in time. 
                    </p>
                    <p className='Description'>
                        During this year, I participated as the team leader of the structures subteam. Our subteam's job was to design the parts and general structure of a rocket and validate those designs using FEA analysis and similar tools. 
                        The main difficulty that faced us was the very tight timeline and great uncertainty from the other subteams. 
                        Only with constant communication with the other subteams and constant checking of the different interfaces was it possible to reach a final design at the end of the design period in December 2022. 
                        After finalizing the designs the next steps were to manufacture the parts and components. 
                        For some metal parts with very tight tolerances we didn't have the technological capabilities. 
                        The solution: Contact outside sponsors that have the machinery and know-how and collaborate with them. 
                        Besides the metal parts, the rocket structure itself was also largely made of carbon fiber parts which were manufactured by us in our workshop at ETH Zurich.
                    </p>
                    <p className='Description'>
                        After months of manufacturing and testing, the rocket was finally manufactured and ready in September. In October of 2023 our whole team traveled to the European Rocketry Challenge (EUROC) in Portugal. Despite the months of effort and the great team spirit, the weather didn't allow us to launch our rocket. 
                        In the end this project was a great learning experience for me. I learned how to lead a team, how to deal with uncertainty and how to deal with faliure despite having done everything possible.
                    </p>
                    <p className='Description'>
                        This is the quick summary of the project. If you want to know more about the project, feel free to contact me. 🚀
                    </p>
                    <p className='Description'>
                        Below you can see some pictures of the project and the rocket.
                    </p>
                    <Gallery images={images} />
                </div>
            </div>
        </div>
    );
    }

export default Project_Bernoulli;