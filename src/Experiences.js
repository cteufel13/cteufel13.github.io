import React from 'react'
import './Experiences.css'

const Experiences = () => {

    return(
        <div className='Experiences'>
            <h1 id="Experiences__Heading">Experiences</h1>
            <div id="Experiences__Content">
                <div className="Experiences__Languages">
                    <h1 className='subheader'>Some Technologies I've worked with</h1>
                    <div className="Experiences__Icons">
                        <div className='IconClass'>
                            <img src={require("./imgs/Python-logo.png")} alt="Python"/>
                            <img src={require("./imgs/cppLogo.png")} alt="Cpp"/>
                            <img src={require("./imgs/Pytorch Logo.png")} alt="Pytorch"/>
                            <img src={require("./imgs/gitLogo.png")} alt="Git"/>
                            <img src={require("./imgs/jaxLogo.png")} alt="Jax"/>
                        </div>
                        <div>
                            <img src={require("./imgs/JSLogo.webp")} alt="Javascript"/>
                            <img src={require("./imgs/htmlLogo.png")} alt="html"/>
                            <img src={require("./imgs/cssLogo.png")} alt="css"/>
                        </div>
                        <div>
                            <img src={require("./imgs/SiemensNXLogo.png")} alt="SiemensNX"/>
                            <img src={require("./imgs/abaqusLogo.png")} alt="Abaqus"/> 

                        </div> 
                            
                    </div>
                </div>    
                <div className="Experiences__Companies">
                    <h1 className='subheader'>Companies I've worked at </h1>
                        <div className='Experiences__Profile'>
                            <a href='https://www.marlabs.com/'> <img src={require("./imgs/Marlabs.png")} alt='Marlabs'/> </a>
                            <h3> SWE Internship</h3>
                        </div>
                        <div className='Experiences__Profile'>
                            <a href='https://www.bloomberg.com/company/'><img src={require("./imgs/Bloomberg.png")} alt="Bloomberg" /> </a>
                            <h3> Research Fellow</h3>

                        </div>

                </div>
            </div>
        </div>
    )
};


export default Experiences; 