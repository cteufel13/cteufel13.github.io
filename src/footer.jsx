import Linkedin from './assets/logo/Linkedin.png';
import Github from './assets/logo/Github.png';
import Spotify from './assets/logo/Spotify.png';

const Footer = () => {
    return (

        <div className="w-full   px-5  py-15 border-t border-black/5 mt-12 ">
            <div className="mx-15 flex flex-col   items-center justify-center gap-y-10 ">
                <div>
                    <h1 className="font-[Manrope] font-light text-2xl text-center ">Carlo Teufel</h1>
                    <h2 className='font-[Manrope] font-light text-1xl text-center  '> Robotics and Data Science</h2>
                </div>
                <div className='flex flex-row gap-5 font-[Manrope]'>
                    <a> About</a>
                    <a> Projects</a>
                    <a> Contact </a>
                </div>

                <div className='flex flex-row h=1/2  gap-14'>
                    <a href="https://www.linkedin.com/in/carlo-teufel-839b75214/">
                        <img src={Linkedin} alt="Linkedin Logo" className='invert w-[48px] h-[48px]'  ></img>
                    </a>
                    <a href="https://github.com/cteufel13">
                        <img src={Github} alt="Github Logo" className='invert w-[48px] h-[48px]' ></img>
                    </a>
                    <a href="https://open.spotify.com/user/chewbacagames?si=ee36e0ed65674686">
                        <img src={Spotify} alt="Spotify Logo" className='invert w-[48px] h-[48px]' ></img>
                    </a>

                </div>
            </div>
        </div >
    )
}

export default Footer;