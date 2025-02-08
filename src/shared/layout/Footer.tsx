const Footer = () => {
    return (
        <footer className="p-8 py-12 text-white bg-[#080808]">
            <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-center items-center gap-4">
                <a href="#" className="font-extrabold text-lg uppercase italic flex gap-1 items-center w-fit">
                    PAS<span className="text-black bg-lime-500 px-1">TRAINER</span>
                </a>
                <p className="text-xs text-gray-300">© 2025 PASTRAINER, Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;