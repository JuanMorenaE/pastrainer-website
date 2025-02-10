import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'react-router';

import image from '../../assets/images/IMG_3806.webp'
import cambio_1 from '../../assets/images/Cambio-fisico-Facu.webp'
import cambio_2 from '../../assets/images/Cambio-fisico-manu.webp'
import cambio_3 from '../../assets/images/Santi-cambio-fisico.webp'

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";


const Home = () => {

    const navigate = useNavigate()
    const locationR = useLocation()
    const { id } = useParams()

    const [modal, setModal] = useState(false)
    const [plan, setPlan] = useState(0)
    const [copy, setCopy] = useState(false)

    const Plans = [
        {
            id: "1mes",
            name: "1 MES",
            description: "Programa Básico",
            price: 1700,
            includes: [
                "Planificación personalizada acorde a tus objetivos.",
                "Videos explicativos de los ejercicios y técnicas de realización.",
                "Videos y entrenamiento de core y abdomen.",
                "Ejercicios de movilidad pre entrenamiento y post entrenamiento.",
                "Acceso a grupo privado de wpp.",
                "Soporte 24/7 para sacar cualquier duda.",
                "Seguimiento y motivación semanal.",
            ],
            preview: "IMG_3810.webp",
            link: "https://wa.link/pfqz9r",
        },
        {
            id: "3meses",
            name: "3 MESES",
            description: "Programa Completo",
            price: 5000,
            includes: [
                "Planificación personalizada acorde a tus objetivos.",
                "Calculadora de macronutrientes.",
                "Videos explicativos de los ejercicios y técnicas de realización.",
                "Videos y entrenamiento de core (zona media y abdominales).",
                "Guia de alimentacion.",
                "Ejercicios de movilidad pre entrenamiento y post entrenamiento.",
                "Documentos y videos para aprender a entrenar.",
                "Acceso a grupo privado de wpp.",
                "Soporte 24/7 para sacar cualquier duda.",
                "Seguimiento y motivación semanal.",
                "Llamadas y reportes semanales.",
            ],
            preview: "IMG_3809.webp",
            link: "https://wa.link/pfqz9r",
        },
        {
            id: "6meses",
            name: "6 MESES",
            description: "Programa Completo",
            price: 9000,
            includes: [
                "Planificación personalizada acorde a tus objetivos.",
                "Calculadora de macronutrientes.",
                "Videos explicativos de los ejercicios y técnicas de realización.",
                "Videos y entrenamiento de core (zona media y abdominales).",
                "Guia de alimentacion.",
                "Ejercicios de movilidad pre entrenamiento y post entrenamiento.",
                "Documentos y videos para aprender a entrenar.",
                "Acceso a grupo privado de wpp.",
                "Soporte 24/7 para sacar cualquier duda.",
                "Seguimiento y motivación semanal.",
                "Llamadas y reportes semanales.",
            ],
            preview: "IMG_3824.webp",
            link: "https://wa.link/pfqz9r",
        },
    ]

    const testimonials = [cambio_1, cambio_2, cambio_3]

    const setPlansModal = (plan: number) => {
        setPlan(plan)
        setModal(true)
    }

    const copyLink = () => {
        setCopy(true)
        navigator.clipboard.writeText(location.href);

        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }

    const closeModal = () => navigate("/", { replace: true })

    useEffect(() => {
        const hash = locationR.hash.slice(1)
        setTimeout(() => {
            if (hash) document.getElementById(hash)?.scrollIntoView();
        }, 300);
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (locationR.pathname.startsWith('/plan/'))
            Plans.forEach((p, i) => {
                if (p.id == id) {
                    setPlansModal(i)
                }
            })
        else setModal(false)
    }, [locationR])

    return (
        <>
            <main className=" text-white flex flex-col justify-center p-8 py-20 bg-cover bg-center bg-[linear-gradient(to_bottom_right,rgba(00,00,00,0.8),rgba(00,00,00,0.9)),url('./assets/images/IMG_3807.webp')]">
                <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 lg:flex-row justify-between">
                    <div className="max-w-[700px]">
                        <h2 className="italic text-xl">¿ESTAS LISTO?</h2>
                        <h1 className="text-4xl leading-12 sm:text-5xl font-extrabold italic sm:leading-14">
                            TRANSFORMA TU CUERPO, <br />
                            <span className="bg-lime-500 text-black">TRANSFORMA TU VIDA.</span>
                        </h1>
                        <hr className="my-8 w-[100px]" />

                        <p className="text-gray-300 my-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo quae distinctio, voluptates voluptatem facere architecto laudantium repudiandae. Recusandae, numquam!</p>

                        <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit" onClick={() => navigate("/plan/free")}>PRUEBA GRATIS</button>

                        <div className="mt-8 flex flex-wrap gap-8 gap-x-16">
                            <div className="flex flex-col gap-2">
                                <strong className="text-5xl font-extrabold italic">10<span className="text-4xl">+</span></strong>
                                <p className="text-sm text-gray-300">Clientes Satisfechos</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <strong className="text-5xl font-extrabold italic">30</strong>
                                <p className="text-sm text-gray-300">Días para cambiar tu cuerpo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex items-center my-auto gap-4 lg:gap-12 text-2xl flex-row lg:flex-col'>
                        <hr className='hidden lg:block h-[50px] border-l border-y-0 border-lime-500 w-[1px]' />
                        <a href='https://www.instagram.com/rami__pastrana/' target='_BLANK' className='hover:text-lime-500 transition-colors'><FaInstagram /></a>
                        <a href='http://wa.me/+59892002729' target='_BLANK' className='hover:text-lime-500 transition-colors'><FaWhatsapp /></a>
                        <hr className='hidden lg:block h-[50px] border-l border-y-0 border-lime-500 w-[1px]' />
                    </div>
                </div>
            </main>

            <hr className='border-lime-500' />

            <section className="p-8 py-12 text-white max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12" id='about'>
                <div className="h-full flex flex-col justify-center">
                    <h3 className="italic text-lg uppercase text-lime-500">Lorem, ipsum dolor.</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic">ACERCA <span className='text-black bg-lime-500 px-2'>DE MI</span></h2>
                    <hr className="my-8 border-lime-500 w-[100px]" />

                    <p className="my-4 text-gray-300">Soy <span className='text-lime-500 italic'>Ramiro Pastrana</span>, desde mi infancia, siempre he sido un apasionado de los deportes. Desde el fútbol hasta la natación, he disfrutado de cualquier actividad física que se me cruzara en el camino.
                    </p>
                    <p className="my-4 text-gray-300">Hoy en día, soy <span className='text-lime-500 italic'>Licenciado en Educación física deporte y recreación</span>, entrenador personal y preparador físico. Disfruto cada momento de mi trabajo, donde tengo la oportunidad de ayudar a las personas a alcanzar sus metas y objetivos. Para mí, el entrenamiento va más allá de levantar pesas o correr en una cinta, es un estilo de vida que impulsa el bienestar físico, mental y emocional.
                    </p>
                    <p className="my-4 text-gray-300">Mi historia es un testimonio de cómo el compromiso y la pasión pueden llevar a grandes logros, tanto dentro como fuera del gimnasio.
                    </p>

                    <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit" onClick={() => navigate("/plan/1mes")}>PRUEBA GRATIS</button>
                </div>
                <div className='w-full relative'>
                    <div className='relative max-w-[500px] mx-auto'>
                        <img src={image} alt="" className='w-full' />
                        <span className='absolute w-full h-full block -top-3 -right-3 bg-lime-500 -z-10'></span>
                        <span className='absolute w-full h-full block -bottom-3 -left-3 border-2 border-lime-500 -z-10'></span>
                    </div>
                </div>
            </section>

            <hr className='border-lime-500' />

            <section className="p-8 py-12 text-white max-w-[1600px] mx-auto" id='plans'>
                <div className="h-full flex flex-col justify-center">
                    <h3 className="italic text-lg uppercase text-lime-500">Lorem, ipsum dolor.</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic">PLANIFICACIONES</h2>
                    <hr className="my-8 border-lime-500 w-[100px]" />

                    <p className="my-4 text-gray-300 max-w-[1000px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit doloremque? Molestias debitis earum vero voluptas in eaque et omnis. Necessitatibus beatae voluptates dicta reprehenderit in quae cum quidem nihil!</p>

                    <div className='flex flex-wrap gap-12 py-8'>
                        {Plans.map(plan => (
                            <div className={"flex flex-col w-[350px] p-8 py-12 relative aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.7),rgba(00,00,00,1)),url('./assets/images/" + plan.preview + "')] cursor-pointer border border-lime-800 justify-between after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10"} onClick={() => navigate("/plan/" + plan.id)}>
                                <div className='flex flex-col gap-4'>
                                    <h4 className='text-5xl font-extrabold italic'>
                                        PLAN <br />
                                        <span className='bg-lime-500 text-black text-4xl px-2'>{plan.name}</span>
                                    </h4>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <h5 className='text-4xl font-bold italic'>${plan.price.toLocaleString('es-UY')}</h5>
                                    <p className='text-gray-300'>{plan.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className='border-lime-500' />

            <section className="p-8 py-12 text-white max-w-[1600px] mx-auto" id='testimonials'>
                <div className="h-full flex flex-col justify-center">
                    <h3 className="italic text-lg uppercase text-lime-500">Lorem, ipsum dolor.</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic">TESTIMONIOS</h2>
                    <hr className="my-8 border-lime-500 w-[100px]" />

                    <p className="my-4 text-gray-300 max-w-[1000px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit doloremque? Molestias debitis earum vero voluptas in eaque et omnis. Necessitatibus beatae voluptates dicta reprehenderit in quae cum quidem nihil!</p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                        {testimonials.map(t => (
                            <div key={t} className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                                <img loading='lazy' src={t} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                            </div>
                        ))}
                    </div>

                    <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit" onClick={() => navigate("/plan/free")}>PRUEBA GRATIS</button>
                </div>
            </section>

            <hr className='border-lime-500' />

            <AnimatePresence>
                {modal && (
                    <motion.div
                        className="fixed w-full h-full top-0 left-0 grid grid-cols-1 items-center p-4 z-30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="max-w-[500px] w-full mx-auto flex flex-col gap-1 text-white p-12 bg-[#080808] border border-lime-500 relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10">
                            <button className="absolute top-2 right-2 z-10 text-xl p-2 flex justify-center items-center cursor-pointer" onClick={() => closeModal()}><IoMdClose /></button>
                            <div className='flex flex-wrap gap-2 justify-between items-center'>
                                <h4 className='text-5xl font-extrabold italic'>
                                    PLAN <br />
                                    <span className='bg-lime-500 text-black text-4xl px-2'>{Plans[plan].name}</span>
                                </h4>
                                <h5 className='text-4xl mt-2 font-bold italic'>${Plans[plan].price.toLocaleString('es-UY')}</h5>
                            </div>
                            <p className='italic mt-8 font-bold uppercase'>INCLUYE ({Plans[plan].includes.length}):</p>
                            <ul className='list-decimal pl-6 italic font-medium flex flex-col gap-3 mt-4 max-h-[230px] overflow-auto'>
                                {Plans[plan].includes.map(i => (
                                    <li className='text-gray-300 text-sm' key={i}>{i}</li>
                                ))}
                            </ul>
                            <div className='flex gap-3 mt-6'>
                                <a href={Plans[plan].link} target='_BLANK' className="px-3 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">CONSULTAR</a>
                                {copy ? (
                                    <button className='px-3 py-2 bg-lime-700 text-black flex gap-2 items-center uppercase font-extrabold italic cursor-pointer transition-colors'><FaCheck /></button>
                                ) : (
                                    <button className='px-3 py-2 bg-lime-500 text-black flex gap-2 items-center uppercase font-extrabold italic cursor-pointer transition-colors hover:bg-lime-600' onClick={() => copyLink()}><FaCopy /></button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Home;