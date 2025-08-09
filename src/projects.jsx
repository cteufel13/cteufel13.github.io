import { useState } from 'react';
import { Grid, List } from "lucide-react"; // icons

import Bernoulli from './assets/Bernoulli.png';
import RP4B from './assets/RP4B.png';
import SPD from './assets/SPD.png';
import Chains from './assets/Chains.png';
import ACEDB from './assets/acedb.png'

import Python from './assets/Python.svg';
import Cpp from './assets/CPlusPlus.svg';
import Cmake from './assets/CMake.svg';



const imageMap = {
    Bernoulli,
    RP4B,
    SPD,
    Chains,
    ACEDB,
};

const tagIcons = {

    python: Python,
    "c++": Cpp,
    cmake: Cmake,
    // add more here
};

function IconGrid(props) {
    return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
            <rect x="3" y="3" width="5" height="5" /><rect x="12" y="3" width="5" height="5" />
            <rect x="3" y="12" width="5" height="5" /><rect x="12" y="12" width="5" height="5" />
        </svg>
    );
}
function IconList(props) {
    return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
            <line x1="3" y1="5" x2="17" y2="5" /><line x1="3" y1="10" x2="17" y2="10" /><line x1="3" y1="15" x2="17" y2="15" />
        </svg>
    );
}

const Icon = ({ title }) => {
    const key = title.toLowerCase();
    const iconSrc = tagIcons[key];

    return (<div className='flex items-center gap-1  py-1 transition duration-300 filter grayscale text-[#9c9c9c] hover:grayscale-0 hover:text-black '>
        <p className='font-[Manrope] text-[14px] leading-[18px] font-light'> {title}</p>
    </div >);
};

const Project = ({ title, description, link, tags, view }) => {

    return (
        <>
            {view === "grid" ? (<div className="w-full aspect-[1/1.25]">
                <img src={imageMap[link]} className=" w-full h-90/100 filter object-cover grayscale contrast-125 brightness-90" />
                <div className='w-full h=10/100'>
                    <p className="font-[Manrope] text-[14px] text-[#2b2b2b] mt-3"> {title}</p>
                    <div className="flex flex-wrap gap-1 font-[Manrope] text-[14px] leading-[18px] font-normal items-center filter grayscale text-[#9c9c9c] hover:grayscale-0 hover:text-black">
                        ↳ {tags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-1">
                                <Icon title={tag} />
                                {i < tags.length - 1 && ","}
                            </span>
                        ))}
                    </div>
                </div>
            </div>)
                : (
                    <a href={link} className="group block">
                        <div className="grid  gap-6 py-6  pb-12 " > {/* grid-cols-[88px_1fr]*/}



                            <div className="flex min-h-[80px]">
                                <div className='flex flex-col w-3/10'>
                                    <h3 className=" font-[Manrope] text-2xl leading-tight group-hover:text-black">
                                        {title}
                                    </h3>

                                </div>

                                <p className=" font-[Manrope] flex-1 font-normal text-[rgb(51,51,51)] text-[16px] leading-[24px]">
                                    {description}
                                </p>
                                <div className=' w-2/10  flex justify-center'>
                                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                                        <img
                                            src={imageMap[link]}
                                            alt={title}
                                            className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </a>

                )}
        </>

    )

};


const Projects = () => {

    const [view, setView] = useState("list");



    return <div className="flex  flex-col  px-5 ">

        <div className='mx-15 my-5  flex justify-between items-center'>
            <p className=" font-normal font-[Manrope] text-[18px] leading-[22px]">
                My Projects
            </p>
            <div className='w-9/10 justify-end flex'>
                {["grid", "list"].map(v => (
                    <button
                        key={v}
                        onClick={() => setView(v)}
                        aria-pressed={view === v}
                        className={`p-1.5 rounded-full transition
                        ${view === v ? "bg-black text-white" : "text-black/70 hover:text-black"}
                    `}
                    >
                        {v === "grid"
                            ? <IconGrid className="h-4 w-4" />
                            : <IconList className="h-4 w-4" />}
                    </button>
                ))}
            </div>

        </div>

        <div className={`${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "flex flex-col divide-y divide-black/5 "}   mx-15 h-full`}>
            <Project title="Project Bernoulli" description="Project BERNOULLI is an ARIS student-built hybrid rocket combining three past systems into one, featuring autonomous recovery and a particle detector. It’s designed for the 9,000 m SRAD category at the 2023 European Rocketry Challenge." link="Bernoulli" tags={["python", "c++"]} view={view}></Project>
            <Project title="RP4B" link="RP4B" description="A C++ options trading platform designed for paper trading and strategy development. This modular system provides real-time data processing, options chain analysis, and automated trading capabilities through the Alpaca API."
                tags={["c++", "cmake"]} view={view}></Project>
            <Project title="Financial Regime Clustering" description="Regime‑Based Portfolio Classification - an ML approach" link="SPD" tags={["python"]} view={view}></Project>
            <Project title="Risk Neutral (Delta+) Hedging" description="A personal deep dive into the world of risk neutral hedging using options (delta/gamma/vega hedging)" link="Chains" tags={["python"]} view={view}></Project>
            <Project title="ACEDB" description="A lightweight CLI + Python wrapper to easily manage PostgreSQL database connections for Analytics Club ETH." link="ACEDB" tags={["python"]} view={view}></Project>
        </div>

    </div >
};

export default Projects;