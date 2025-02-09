import { useState } from "react";
import { useNavigate } from 'react-router';

import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router";

const Header = () => {

    const navigate = useNavigate()

    const [menuDisplay, setMenuDisplay] = useState(false);

    const openFreePlan = () => {
        setMenuDisplay(false)
        navigate("/plans/free")
    }

    return (
        <header className="p-8 text-white bg-[#080808] sticky top-0 z-30">
            <div className="w-full max-w-[1600px] mx-auto flex items-center gap-4">
                <div className="grow basis-0">
                    <Link to="/" className="font-extrabold text-lg uppercase italic flex gap-1 items-center w-fit">
                        PAS<span className="text-black bg-lime-500 px-1" translate="no">TRAINER</span>
                    </Link>
                </div>
                <nav className={"top-0 left-0 flex justify-center items-center w-full h-full xl:top-auto xl:left-auto xl:w-auto xl:h-auto bg-black xl:bg-transparent " + (menuDisplay ? "fixed xl:relative -z-10 xl:z-0" : "hidden xl:block")}>
                    <ul className="flex gap-8 uppercase text-sm flex-col text-center xl:flex-row">
                        <li>
                            <Link reloadDocument to="/#about" className="hover:text-lime-500 transition-colors menu-item" onClick={() => setMenuDisplay(false)}>Acerca de Mi</Link>
                        </li>
                        <li>
                            <Link reloadDocument to="/#plans" className="hover:text-lime-500 transition-colors menu-item" onClick={() => setMenuDisplay(false)}>Planificaciones</Link>
                        </li>
                        <li>
                            <Link reloadDocument to="/#testimonials" className="hover:text-lime-500 transition-colors menu-item" onClick={() => setMenuDisplay(false)}>Testimonios</Link>
                        </li>
                        <li>
                            <Link to="/calculator" className="hover:text-lime-500 transition-colors menu-item" onClick={() => setMenuDisplay(false)}>Calculadora Macros</Link>
                        </li>
                        <li>
                            <button className="flex sm:hidden px-3 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit menu-item" onClick={() => openFreePlan()}>PRUEBA GRATIS</button>
                        </li>
                    </ul>
                </nav>
                <div className="flex grow basis-0 items-center justify-end gap-8">
                    <button className="hidden sm:flex px-3 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit" onClick={() => openFreePlan()}>PRUEBA GRATIS</button>
                    {menuDisplay ? (
                        <button className="flex text-3xl xl:hidden" onClick={() => setMenuDisplay(false)}><IoMdClose /></button>
                    ) : (
                        <button className="flex text-3xl xl:hidden" onClick={() => setMenuDisplay(true)}><AiOutlineMenu /></button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;