
import { useNavigate } from 'react-router-dom';
import { useParams,Link } from 'react-router-dom';
import Project_Bernoulli  from './projects/Project_Bernoulli.js'
import Project_Bachelors_Thesis  from './projects/Project_Bachelors_Thesis.js'
import Project_HDS  from './projects/Project_HDS.js'
import Project_ThisWebsite  from './projects/Project_ThisWebsite.js'

import './Projects.css';


export const all_projects = [
    { id: 1, name: 'Project Bernoulli',func_name: 'Project_Bernoulli' ,icon: './imgs/Bernoulli.png', customstyle:{}, },
    { id: 2, name: 'Bachelors Thesis',func_name:"Project_Bachelors_Thesis" ,icon: './imgs/BachelorsThesis.png', customstyle:{}},
    { id: 3, name: 'HDS',func_name:"Project_HDS" ,icon: './imgs/HDS.png', customstyle:{width: "100%",
        height: "auto"} },
    { id: 4, name: 'This Website',func_name:"Project_ThisWebsite" ,icon: './imgs/logo_black.png', customstyle:{} , },
    // { id: 2, name: 'project-two', icon: 'path/to/icon2.png' },
    // Add more projects here as needed
  ];

const projectfunctions = {Project_Bernoulli,Project_Bachelors_Thesis,Project_HDS,Project_ThisWebsite};

export const ProjectIcons = ({projects}) => {
    const navigate = useNavigate();

    const handleIconClick = (projectName) => {
      navigate(`/projects/${projectName}`);
    };

    return (
        <div className='Projects__Containers'> 
            {projects.map((project) => (
                <div key={project.id} onClick={() => handleIconClick(project.func_name)} className="Project__Icon__Container" >
                    <img src ={require(`${project.icon}`)} alt={`${project.icon} Icon`} className="Project__Icon__Image" style={project.customstyle}/> 
                    <div className="Project__Icon__MagGlas__Container"> 
                        <img src={require('./imgs/MagnifyingGlass.png')} alt="MagGlas" className="Project__Icon__MagGlas"/>
                    </div>
                    <p className="Project__Icon__Text"> {project.name}</p>

                </div>
            ))}
        </div>
    );
};

// This is the Section for Projects

export const ProjectDetails = () => {
    const projectfunctions = {Project_Bernoulli,Project_Bachelors_Thesis,Project_HDS,Project_ThisWebsite};

    const callFunction = (func_name) => {
        const func = projectfunctions[func_name];
        if (func) {
            return func();
        } else {
            return <h1>Project not found</h1>;
        };
    };

    const { projectName } = useParams();
    const project = all_projects.find(project => project.func_name === projectName);
    return (
        <div className="Project__Details__Container">
            {/* <h1 className="Project__Details__Header">{project.name}</h1> */}
            {callFunction(project.func_name)}
        </div>
    );
};

export const ProjectsSection = () => {

    const featuredProjects = all_projects.filter(project => project.id >= 1 && project.id <= 3);
    const otherProjects = all_projects.filter(project => project.id > 3);

    return (
        <div className="Project__Section__Container">
            <h1 className="Project__Section__Header">Projects I've worked on</h1>
            <h2 className="Project__Section__SubHeader" >Featured Projects</h2>

            <div className="Projects__List">
                <ProjectIcons projects={featuredProjects}/>
            </div>
            <h2 className="Project__Section__SubHeader">Other Projects</h2>
            <div className="Projects__List">
                <ProjectIcons projects={otherProjects}/>
            </div>
            <Link to="/projects" className='projects__Link__Container'>
                <div className='projects__Link' >
                    <h1>Project Archive</h1>
                </div>
            </Link>

        </div>
    );
};
