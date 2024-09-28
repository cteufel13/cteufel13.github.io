import React, { useState, useEffect, useRef } from 'react';
import "./Timeline.css";

function getImageUrl(project_name) {
    let imageUrl = require(`./imgs/${project_name}.png`)
    return (imageUrl);
};


function Project ({project_name,img_name,summary,project_caption,customStyles={}}) {
    const {projectStyle,
           headingStyle,
           contentStyle,
           figureStyle,
           imageStyle,
           captionStyle,
           rightStyle,
           summaryStyle} = customStyles;
    return (<div className="project" style = {projectStyle}>
                <h1 className="project_heading" style={headingStyle}>{project_name}</h1>
                    <div className="project_content" style={contentStyle}>

                        <div className="project_figure" style={figureStyle}>
                            <img className = "project_picture" src= {getImageUrl(img_name)} alt={project_name} style={imageStyle}/>
                            <figcaption className="project_caption" style={captionStyle}>{project_caption}</figcaption>
                        </div>

                        <div className='project_right' style={rightStyle}>  
                            <p className='project_summary' style={summaryStyle}>{summary}</p>
                        </div>

                </div>

            </div>);
};

function Occupation ({occupation_name,occupation_caption,occupation_date,company_name,summary,customStyles={}}) {

    const {
        occupationStyle,
        headingStyle,
        subheadingStyle,
        summaryStyle,
      } = customStyles;

    const logo_name = company_name + "_logo";

    return (<div className="occupation" style={occupationStyle}>
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
          WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1) ${opacity * 100}%, rgba(0, 0, 0, 0) 100%)`,
        }}
        className="scroll-fade-in-gradient"
      >
        {children}
      </div>
    );
  };




const Timeline = () =>{ 

    const ETHStyle = {
        occupationStyle: {top:"105px",
        },
        }
    
    const BloombergStyle = {
        occupationStyle: {top:"660px",
         right: "-30%",

        },
        // subheadingStyle: {whiteSpace: "nowrap"}
    };

    const MarlabsStyle = {
        occupationStyle: {top:"660px",
            right: "-30%",

        },
        // subheadingStyle: {whiteSpace: "nowrap"}
    };

    const BernoulliStyle = {
        projectStyle:{top:"400px"}
    };
    const BachelorThesisStyle = {
        projectStyle:{top:"500px"},
        figureStyle: {width: "100px"},
        imageStyle: {width: "100px"},
        captionStyle: {width: "100px"},

    };

    const HDSStyle = {
        projectStyle:{top:"500px"},
        figureStyle: {width: "200px"},
        imageStyle: {width: "200px"},
        captionStyle: {width: "200px"},
    }

    const LineStyle1 = {
        height: "80px",
        minHeight: "0px",
    }
    const LineStyle2 = {
        height: "400px",
        minHeight: "200px",
    }




    
    
    return (<div className="timeline">
                <h1 id="timeline__Heading">Timeline</h1>
                <div className="timeline_ColumnContainer">
                    <div className="timeline_Column left" >
                        <Occupation occupation_name="BSc. Mechanical Engineering" 
                                            occupation_date="June 2021" 
                                            company_name="ETH Zürich" 
                                            summary="Relevant Courses: going Insane, Thermodynamics" 
                                            customStyles={ETHStyle}
                        />

                        <Occupation occupation_name="Research Fellow" 
                                        occupation_date="September 2024" 
                                        company_name="Bloomberg" 
                                        summary="Text-2-SQL" 
                                        customStyles={BloombergStyle}
                        />
                        
                        <Occupation occupation_name="Software Engineering Intern"
                                        occupation_date="October 2024-December 2024"
                                        company_name="Marlabs"
                                        summary="tbd."
                                        customStyles={MarlabsStyle}
                        />
                    </div>
                    <div className="timeline_Column middle ">
                        <ScrollFadeInElement>
                            <div className="timeline_Circle"> 2021</div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Line"></div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Circle"> 2022</div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Line" style={LineStyle1}></div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Circle"> 2023</div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Line" style={LineStyle1}></div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Circle"> 2024</div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Line" style={LineStyle2}></div>
                        </ScrollFadeInElement>
                        <ScrollFadeInElement>
                            <div className="timeline_Circle"> 2025</div>
                        </ScrollFadeInElement>

                    </div>
                    <div className="timeline_Column right" >
                        
                        <Project    project_name="Project Bernoulli" 
                                    project_caption="Project Bernoulli" 
                                    summary=" I was Team Lead of the Structures Team of Project Bernoulli It was our goal to successfully construct and launch a completely student built hybrid rocket engine to fly to 9000 meters. " 
                                    img_name="Bernoulli"
                                    customStyles={BernoulliStyle}
                        />
                        <Project    project_name="Bachelor Thesis"
                                        
                                        summary="System Identification of Dynamical Systems using State Space Neural Networks."
                                        img_name="Bachelors Thesis"
                                        customStyles={BachelorThesisStyle}
                            />

                        <Project    project_name="HDS: Hybrid Diff. Simulation"
                                    project_caption="HDS Architecture"
                                    summary="Expanding on PODS (POlicy Optimization with Differentiable Simulations) to augment using Real World Data"
                                    img_name="HDS"
                                    customStyles={HDSStyle}
                        />
                    </div>
                </div>
                
            </div>);
}


export default Timeline;




{/* 
                             */}


{/*  */}