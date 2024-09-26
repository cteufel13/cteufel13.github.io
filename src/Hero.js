import React, { useState, useEffect } from 'react';
import './Hero.css';

const HeroBackground = () => {
    const [displayedText, setDisplayedText] = useState(''); // State for the main text
    const [displayedSubText, setDisplayedSubText] = useState(''); // State for the subtitle
    const fullText = "Hi, \n I'm Carlo."; // The main text that will be typed out
    const subText = "and welcome to my website!"; // The subtitle text that will be typed out
    const [index, setIndex] = useState(0); // To track the main text typing index
    const [subIndex, setSubIndex] = useState(0); // To track the subtitle text typing index
  
    const getRandomDelay = (min, max) => {
      return Math.random() * (max - min) + min;
    };
  
    // Effect for typing out the main text
    useEffect(() => {
      if (index < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullText.charAt(index)); // Append next character
          setIndex(prevIndex => prevIndex + 1); // Increment index
        }, getRandomDelay(100, 300)); // Random delay between 100ms and 300ms for the main text
  
        return () => clearTimeout(timeout); // Clean up the timeout
      }
    }, [index, fullText]);
  
    // Effect for typing out the subtitle
    useEffect(() => {
      // Start typing subtitle only when the fullText is fully typed
      if (index === fullText.length && subIndex < subText.length) {
        const timeout = setTimeout(() => {
          setDisplayedSubText(prev => prev + subText.charAt(subIndex)); // Append next character
          setSubIndex(prevSubIndex => prevSubIndex + 1); // Increment index for subtitle
        }, getRandomDelay(20, 80)); // Faster random delay between 50ms and 150ms for the subtitle
  
        return () => clearTimeout(timeout); // Clean up the timeout
      }
    }, [subIndex, subText, index, fullText]);
  
    return (
      <div>
        <div className="hero">
          <div className="hero-content">
            <h1 id="hero__statement">
              {/* Split text into lines and apply <br /> for new lines */}
              {displayedText.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <h2 id="hero__subtitle">{displayedSubText}</h2> {/* Subtitle that gets typed */}
          </div>
        </div>
      </div>
    );
};
  
export default HeroBackground;