
const Header = () => {
    return <div className="w-full h-3/32 justify-center flex px-5">
        <div className="h-full w-12/16  flex items-center ">
            <h1 className=" font-[Manrope] font-light ml-15">Carlo Teufel</h1>
        </div >

        <div className="h-full w-4/16 flex justify-between items-center">
            <a className="h-full flex items-center justify-center font-[Manrope]  w-1/3 text-center">About </a>
            <a className="h-full flex items-center justify-center font-[Manrope]  w-1/3 text-center"> Projects </a>
            <a className="h-full flex items-center justify-center font-[Manrope]  w-1/3 text-center"> CV</a>
        </div>
    </div>

};

export default Header;
