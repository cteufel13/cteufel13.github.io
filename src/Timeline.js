import React, { useState, useEffect, useRef } from 'react';
import "./Timeline.css";

function getImageUrl(project_name) {
    let imageUrl = require(`./imgs/${project_name}.png`)
    return (imageUrl);
};


function Project ({project_name,img_name,summary,project_caption}) {

    return (<div className="project">
                <h1 className="project_heading">{project_name}</h1>
                    <div className="project_content">

                        <div className="project_figure">
                            <img className = "project_picture" src= {getImageUrl(img_name)} alt={project_name} />
                            <figcaption className="project_caption">{project_caption}</figcaption>
                        </div>

                        <div className='project_right'>  
                            <p className='project_summary'>{summary}</p>
                        </div>

                </div>

            </div>);
};

function Occupation ({occupation_name,occupation_caption,occupation_date,company_name,summary,customStyles={}}) {

    const {
        headingStyle,
        subheadingStyle,
        summaryStyle,
      } = customStyles;

    const logo_name = company_name + "_logo";

    return (<div className="occupation">
        <div className="occupation_logo"> <img src={getImageUrl(company_name)}  alt={logo_name} /></div>
        <div className="occupation_content">
            <h1 className="occupation_heading" style={headingStyle}>{company_name}</h1>
            <h2 className="occupation_subheading" style={subheadingStyle}>{occupation_name} </h2>
            <h2 className="occupation_subheading" style={subheadingStyle}>{occupation_date} </h2>

            <div className="occupation_summary" style={summaryStyle}>{summary}</div>
        </div>
    </div>);
}

// <Project    project_name="Project Bernoulli" project_caption="Project Bernoulli" summary=" I was Team Lead of the Structures Team of Project Bernoulli It was our goal to successfully construct and launch a completely student built hybrid rocket engine to fly to 9000 meters. " img_name="Bernoulli"/>

const useScrollFadeIn = (WrappedComponent,fadeStartOffset = 0.9) => {
    const elementRef = useRef();
    const [opacity, setOpacity] = useState(0);  // Opacity state for each element
    const [hasFadedIn, setHasFadedIn] = useState(false);

    // I want a gradient that is in the same position on a webpage so taht when I scroll past a part it fades in
    useEffect ( () =>{
        const handleScroll = () => {;

            if (elementRef.current && !hasFadedIn) {
                const rect = elementRef.current.getBoundingClientRect();
                const elementTop = rect.top;  // Top of the element relative to viewport
                const elementHeight = rect.height;
                
                // Calculate fadeStart and fadeEnd based on scroll position

                const fadeStart = window.innerHeight * fadeStartOffset; // Start fading in when element enters this portion of viewport
                const fadeEnd = window.innerHeight *(fadeStartOffset -0.2)-elementHeight; // Fully visible when the element reaches 10% from the top

                // Adjust opacity as the element moves from fadeStart to fadeEnd
                if (elementTop > fadeStart) {
                    setOpacity(0);  // Before fadeStart
                } else if (elementTop < fadeEnd) {
                    setOpacity(1);  // After fadeEnd
                    setHasFadedIn(true);
                } else {
                    const fadeRange = fadeStart - fadeEnd;
                    const opacityValue = 1 - (elementTop - fadeEnd) / fadeRange;
                    setOpacity(opacityValue);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    },[fadeStartOffset, hasFadedIn]);

    return { ref: elementRef, opacity };
}

const ScrollFadeInElement = ({ children }) => {
    const { ref, opacity } = useScrollFadeIn();  // Use the hook for each element
  
    return (
      <div
        ref={ref}
        style={{
          opacity: opacity,
          maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) ${opacity * 100}%, rgba(0, 0, 0, 0) 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) ${opacity * 100}%, rgba(0, 0, 0, 0) 100%)`
        }}
        className="scroll-fade-in-gradient"
      >
        {children}
      </div>
    );
  };




const Timeline = () =>{ 

    return (<div className="timeline">
                <h1 className="timeline__Heading">Timeline</h1>
                    <ScrollFadeInElement>
                    <div className="timeline_Circle">2021</div>
                    </ScrollFadeInElement>

                    <ScrollFadeInElement>       
                        <div className="timeline_Line">
                            <Occupation occupation_name="BSc. Mechanical Engineering" 
                                        occupation_date="June 2021" 
                                        company_name="ETH Zürich" 
                                        summary="Relevant Courses: going Insane, Thermodynamics" 
                            />
                        </div>
                    </ScrollFadeInElement>

                    <ScrollFadeInElement>
                    <div className="timeline_Circle">2022</div>
                    </ScrollFadeInElement>

                    <ScrollFadeInElement>
                        <div className="timeline_Line">
                            <Project    project_name="Project Bernoulli" 
                                        project_caption="Project Bernoulli" 
                                        summary=" I was Team Lead of the Structures Team of Project Bernoulli It was our goal to successfully construct and launch a completely student built hybrid rocket engine to fly to 9000 meters. " 
                                        img_name="Bernoulli"
                            />
                        </div>
                    </ScrollFadeInElement>
                    
                    <ScrollFadeInElement>
                        <div className="timeline_Circle">2023</div>
                    </ScrollFadeInElement>
                    <ScrollFadeInElement>
                    <div className="timeline_Line"></div>
                    </ScrollFadeInElement>
                    <ScrollFadeInElement>
                    <div className="timeline_Circle">2024</div>
                    </ScrollFadeInElement>                   
            </div>);
}


export default Timeline;