import { Link } from "react-router";

const CTA = () => {
    return (
        <Link reloadDocument to={'/#plans'} className="block px-3 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit menu-item">¡EMPIEZA HOY!</Link>
    )
}

export default CTA;