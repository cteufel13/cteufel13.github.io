import React from 'react';
import { NavBarSmall } from '../ProjectsArchive';
import './projectdetail.css';
import { Gallery } from './project_utils';


const Project_Bachelors_Thesis = () => {
    const images = [
        require('./project_imgs/BT_1.png'),
        require('./project_imgs/BT_2.png'),
        require('./project_imgs/BT_3.png'),
      ];
    return (
        <div>
            < NavBarSmall message="Back" />
            <div className='Content'>
                <div className='Header'>
                    <h1 id="Title">Bachelor's Thesis</h1>
                    <h3 id="Subtitle"> March 2024-July 2024</h3>
                    <div id='Skills'>
                        <h4 className='Skill'> Python</h4>
                        <h4 className='Skill'> Jax (ML)</h4>
                    </div>

                </div>
                <div className='MainContent'>
                    <p className="Description">
                    The motivation for this project stemmed from a need to improve <em>how complex, real-world systems are modeled for control purposes</em>. Traditional system identification methods, while widely used, rely heavily on predefined models that require extensive parameterization and testing. These methods can be rigid, often failing to capture all the nuances of dynamic systems, particularly those that are less understood or highly variable. Given the limitations of these approaches, the project set out to explore more advanced, flexible alternatives that could better address the challenges of modern system identification.                    
                    </p>
                    <p className="Description">
                    State Space Models (SSMs) emerged as a promising solution due to their ability to efficiently handle long-range temporal relationships and maintain parameter efficiency, unlike dense neural networks, which often struggle with sequence length and contextual data. SSMs are well-suited for tasks requiring dynamic system modeling over time, particularly because of their strong foundation in control theory. The project focused on applying SSMs to model a parafoil system, a critical component in aerospace recovery technologies. Parafoils provide a fuel-efficient way to recover payloads, which is key to improving the reusability of launch systems and reducing operational costs for companies like SpaceX and Blue Origin.
                    </p>
                    <p className="Description">
                    The project unfolded in two key phases: first, we trained and evaluated the SSM model using clean simulation data to establish baseline performance. Then, we introduced noisy data to assess the model’s robustness in more realistic conditions. By comparing the performance of SSMs with traditional dense neural networks, it became clear that SSMs held a significant advantage in maintaining context over long sequences without a drastic increase in parameters. This project not only aimed to advance the capabilities of system identification for parafoil systems but also demonstrated the broader potential of SSMs in handling complex dynamic systems, with future applications extending beyond aerospace.                
                    </p>
                    <Gallery images={images} customStyle={{border: "10px solid red "}} />

                </div>
            </div>
        </div>
    );
    }

export default Project_Bachelors_Thesis;