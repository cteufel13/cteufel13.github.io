import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import './project_utils.css';

export const Gallery = ({images},customStyle={}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const HandlePrevious = () => {
        setCurrentImage((prevIndex) =>prevIndex===0 ? images.length -1 : prevIndex -1);
    }
    const HandleNext = () => {
        setCurrentImage((prevIndex) =>prevIndex===images.length -1 ? 0 : prevIndex +1);
    }


    return (
        <div className="image-gallery" style={customStyle}>
        <button className="nav-button left" onClick={HandlePrevious}>
            <FaArrowLeft />
        </button>
        <div className="image-container" >
            <img src={images[currentImage]} alt={`Slide ${currentImage}`} />
        </div>
        <button className="nav-button right" onClick={HandleNext}>
            <FaArrowRight />
        </button>
    </div>
    );
};