import React from 'react';
import './Inbetween.css';
import Resumes from './files/CarloTeufelCV.pdf';
export const Resume = () => {

    return (
        <div className='Inbetween__Container'>
            <div className='Resume__Content'>
                <h1><a href={Resumes} download="Carlo Teufel CV.pdf" id="CVLink">Take a look at my Resume 🚀</a></h1>
            </div>
        </div>
    )
}

export const ReachOut = () => {
    
    return(
        <div className='Container'>
            <h2> If you have any questions or just want to chat, feel free to send me a mail!</h2>

            <a href="mailto:carloleonteufel@gmail.com" id="mailto">

                <div className="Content">
                    <h1> Reach out to me!</h1>
                    <img src={require("./imgs/PaperAirplaneIcon.png")} alt="email"/>
                </div>
            </a>
        </div>
    )
}


// export ReachOut;