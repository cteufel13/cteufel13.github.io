import { useState, useRef, useEffect } from "react";



const Header = () => {

    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const onDown = (e) => {
            // if click is NOT on burger and NOT inside panel -> close
            if (
                !buttonRef.current?.contains(e.target) &&
                !panelRef.current?.contains(e.target)
            ) {
                setOpen(false);
            }
        };
        const onEsc = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onEsc);
        return () => {
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onEsc);
        };
    }, []);

    return <div className="w-full h-3/32 items-center flex px-5 fixed top-0 left-0 bg-white z-1000">
        <div className="h-full flex-1  flex items-center ">
            <a className=" font-[Manrope] font-light ml-15" href="https://cteufel13.github.io/">Carlo Teufel</a>
        </div >
        <div className="h-full w-[260px]">
            <nav className=" hidden md:flex h-full w-full justify-between items-center ">
                <a href="/#About Me" className="h-full scroll-smooth motion-reduce:scroll-auto flex items-center justify-center font-[Manrope] font-light w-1/3 text-center">About </a>
                <a href="/#Projects" className="h-full flex items-center justify-center font-[Manrope] font-light w-1/3 text-center"> Projects </a>
                <a className="h-full flex items-center justify-center font-[Manrope] font-light w-1/3 text-center"> CV</a>
            </nav>
            <div className="md:hidden h-full w-full flex ">
                <button
                    ref={buttonRef}
                    onClick={() => setOpen((v) => !v)}   // toggle on burger
                    className="p-2 rounded hover:bg-black/5 ml-auto my-auto"
                    aria-label="Menu"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {open && (
                <div
                    ref={panelRef}
                    className="md:hidden absolute right-0 top-14 w-44 rounded-xl  bg-white p-2"
                >
                    <a className="block px-3 py-2 rounded hover:bg-black/5 font-[Manrope] font-light">About</a>
                    <a className="block px-3 py-2 rounded hover:bg-black/5 font-[Manrope] font-light">Projects</a>
                    <a className="block px-3 py-2 rounded hover:bg-black/5 font-[Manrope] font-light">CV</a>
                </div>
            )}

        </div>

    </div>

};

export default Header;
