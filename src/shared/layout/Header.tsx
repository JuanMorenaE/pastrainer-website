import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    return (
        <header className="p-8 text-white bg-[#080808] sticky top-0 z-30">
            <div className="w-full max-w-[1600px] mx-auto flex items-center gap-4">
                <div className="grow basis-0">
                    <a href="#" className="font-bold text-lg uppercase italic">
                        Pastrainer
                    </a>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-8 uppercase text-sm">
                        <li>
                            <a href="/#about" className="hover:text-lime-500 transition-colors">Acerca de Mi</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-lime-500 transition-colors">Planificaciones</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-lime-500 transition-colors">Testimonios</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex grow basis-0 items-center justify-end gap-8">
                    <button className="hidden sm:flex px-3 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">PRUEBA GRATIS</button>
                    <button className="flex text-3xl lg:hidden">
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;