const Aboutdetail = () => (
    <section id="About Me" className="scroll-mt-[12vh] border-b-1 border-b-gray-100 w-full px-5 my-20 pb-10">
        <div className="mx-15 ">
            <h2 className="font-[Manrope] text-[18px] leading-[22px] mb-12 ">About Me</h2>


            <div className=" grid gap-8 md:grid-cols-[2fr_1fr] items-start">
                <div className="flex flex-col font-[Manrope] text-[rgb(51,51,51)] gap-y-5">
                    <p>
                        I’m Carlo, based between New York and Zürich, pursuing a Master’s in Robotics, Systems, and Control at ETH Zürich.
                        I design and analyze intelligent systems at the intersection of robotics, control, and machine learning—building algorithms that help machines perceive, decide, and act in complex environments.
                        Lately, I’ve been applying these skills to quantitative finance and algorithmic trading, developing data-driven models as part of the Analytics Club ETH’s Quant Committee.
                        My past work spans research in dynamical systems, simulation-to-real transfer, and industry experience in software engineering and financial technology.

                    </p>
                    <p>
                        Outside of work, I’m a competitive swimmer and enjoy exploring challenges that connect performance, data, and design - whether in robotics, finance, or sport.
                    </p>

                </div>

                <div className="flex justify-center">
                    <ul className="font-[Manrope] text-[14px] leading-[20px] text-[#666] space-y-2 ">
                        <li>Interests: control, planning, ML , Data-Driven Decision Making</li>
                        <li>Programming: Python, C++, JavaScript (HTML/CSS)</li>
                        <li>ML/Optimization: PyTorch, scikit-learn, TensorFlow, CVXPY</li>
                        <li>Systems & Tools: ROS, SQL, Git, Docker, CMake</li>
                        {/* <li>Web Dev: React, TailwindCSS </li> */}
                    </ul>
                </div>
                {/* Optional quick facts card */}

            </div>
        </div>


    </section>
);

export default Aboutdetail;
