import React from 'react';
import { NavBarSmall } from '../ProjectsArchive';
import './projectdetail.css';
import { Gallery } from './project_utils';





const Project_HDS = () => {

    const images = [
        require('./project_imgs/HDS_1.png'),
        require('./project_imgs/HDS_2.png'),
        require('./project_imgs/HDS_3.png'),
      ];
    return (
        <div>
            < NavBarSmall message="Back" />
            <div className='Content'>

                <div className='Header'>
                        <h1 id="Title">Hybrid Differential Simulation </h1>
                        <h3 id="Subtitle"> March 2024 - June 2024</h3>
                        <div id='Skills'>
                            <h4 className='Skill'> Python</h4>
                            <h4 className='Skill'> Jax</h4>
                            <h4 className='Skill'> RL</h4>

                        </div>

                    </div>
                    <div className='MainContent'>
                        <p className="Description">
                        The motivation for this project arose from addressing a key issue in model-based reinforcement learning: the gap between simulation and real-world application. Differentiable Simulation Reinforcement Learning (DSRL) offers the advantage of superior sample efficiency by leveraging the analytic gradient of a differentiable simulation, which enables more efficient optimization. However, this method often struggles with issues such as convergence to local minima and instability in highly dynamic environments, which hinders its generalizability to real-world applications. These limitations, particularly in contact-rich environments, create a pressing need to explore methods that improve sim-to-real transfer and overall stability.
                        </p>
                        <p className="Description">
                        This project focused on exploring the potential of Hybrid Differentiable Simulation (HDS) to overcome these limitations by integrating real-world data with simulation environments. While existing approaches like Policy Optimization via Differentiable Simulation (PODS) demonstrated effectiveness in virtual setups, they often failed to generalize well when applied to real-life scenarios. By combining differentiable simulation with real-world data, HDS aims to reduce biases introduced by inaccuracies in simulation models, thereby enhancing both the stability and accuracy of policy learning. Additionally, we introduced stochastic policies to improve exploration capabilities, addressing one of the key weaknesses of deterministic approaches.
                        </p>
                        <p className="Description">
                        The project unfolded in two phases: first, we developed and implemented a high-quality, open-source version of PODS using the BRAX physics engine and JAX framework to create a parallelized, scalable solution. Then, we extended PODS into HDS by integrating real-world data, testing the hybrid method on a simulated testbed. Through these experiments, we demonstrated that HDS significantly reduces the sim-to-real gap and improves performance. Our findings suggest that incorporating real-world data as part of the training process helps smooth the loss landscape, acting as a regularizer and leading to more robust policies in dynamic environments. This hybrid approach offers a promising direction for future reinforcement learning applications in real-world robotics and control systems.
                        </p>
                        <Gallery images={images}/>
                    </div>
            </div>        
        </div>
    );
    }

export default Project_HDS;