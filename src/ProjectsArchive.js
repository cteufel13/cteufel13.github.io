import React from "react";
import Logo from './imgs/logo.png';
import './ProjectsArchive.css';
import { Link,useNavigate} from 'react-router-dom';
import { all_projects,ProjectIcons } from "./Projects";

export const NavBarSmall = ({message}) => {
    const navigate = useNavigate();  // Create a navigate function

    // Function to handle back navigation
    const handleGoBack = () => {
    navigate(-1);  // This takes the user to the previous page in history
    };

    const handleGoHome = () => {
        navigate("/");  // This takes the user to the homepage
    }

    return (
        <div className="navbar">
            <img src={Logo} id="logo" onClick={handleGoHome}></img>

            <div className="nav-links">
            <h1 onClick={handleGoBack} id="backbutton">{message}!</h1>
            </div>
        </div>
    );
}

export const ProjectsArchive = () => {

    const HDSStyles = { imageStyle:
        {width: "100%",
        height: "auto"}
        };

    return (
        <div>
            < NavBarSmall message="Back to Homepage" />
            <div className="content"> 
                <h1 >Projects Archive</h1>
                <ProjectIcons projects={all_projects}/>

            </div>
            
        </div>
    );
}

// export default ProjectsArchive;