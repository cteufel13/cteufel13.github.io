import Bernoulli from './assets/Bernoulli.png';
import RP4B from './assets/RP4B.png';
import SPD from './assets/SPD.png';

import Python from './assets/Python.svg';
import Cpp from './assets/CPlusPlus.svg';


const imageMap = {
    Bernoulli,
    RP4B,
    SPD,
};

const tagIcons = {

    python: Python,
    "c++": Cpp,
    // add more here
};

const Icon = ({ title }) => {
    const key = title.toLowerCase();
    const iconSrc = tagIcons[key];

    return (<div className='flex items-center gap-1 px-2 py-1 transition duration-300 filter grayscale text-[#9c9c9c] hover:grayscale-0 hover:text-black '>
        <img src={iconSrc} alt={title} className="w-3 h-3 mt-1" />
        <p className='font-[Manrope] text-[14px] leading-[18px] font-normal'> {title}</p>
    </div >);
};

const Project = ({ title, link, tags }) => (
    <div className="w-full aspect-[1/1.25]">
        <img src={imageMap[link]} className=" w-full h-90/100 filter object-cover grayscale contrast-125 brightness-90" />
        <div className='w-full h=10/100'>
            <p className="font-[Manrope] text-[14px] text-[#2b2b2b] mt-3"> {title}</p>
            <div className="flex flex-wrap gap-1 font-[Manrope] text-[14px] leading-[18px] font-normal items-center filter grayscale text-[#9c9c9c] hover:grayscale-0 hover:text-black">
                ↳ {tags.map((tag, i) => (
                    <Icon key={i} title={tag} />
                ))}
            </div>
        </div>
    </div>
);


const Projects = () => {
    return <div className="flex  flex-col h-full px-5 ">
        <p className=" font-normal font-[Manrope] text-[18px] leading-[22px] mx-15 my-5">
            My Projects
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  mx-15 h-full">
            <Project title="Project Bernoulli" link="Bernoulli" tags={["python", "c++"]}></Project>
            <Project title="RP4B" link="RP4B" tags={["c++"]}></Project>
            <Project title="Financial Regime Clustering" link="SPD" tags={["python"]}></Project>

        </div>

    </div>
};

export default Projects;