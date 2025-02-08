import { useEffect } from 'react';

import image from '../../assets/images/IMG_3806.webp'
import cambio_1 from '../../assets/images/Cambio-fisico-Facu.webp'
import cambio_2 from '../../assets/images/Cambio-fisico-manu.webp'
import cambio_3 from '../../assets/images/Santi-cambio-fisico.webp'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {

    useEffect(() => {
        const hash = location.hash.slice(1)
        setTimeout(() => {
            if (hash) document.getElementById(hash)?.scrollIntoView();
        }, 500);
    })

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

                        <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">PRUEBA GRATIS</button>

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
                        <a href='#' className=''><FaInstagram /></a>
                        <a href='#' className=''><FaFacebookF /></a>
                        <a href='#' className=''><FaWhatsapp /></a>
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

                    <p className="my-4 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit doloremque? Molestias debitis earum vero voluptas in eaque et omnis. Necessitatibus beatae voluptates dicta reprehenderit in quae cum quidem nihil!</p>
                    <p className="my-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptatem obcaecati ipsam perspiciatis soluta unde dolor ex, temporibus in animi consequuntur veniam enim impedit? Id tempora magnam mollitia inventore, aut cumque. Veritatis necessitatibus perspiciatis, sunt sit distinctio similique odio voluptates?</p>

                    <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">PRUEBA GRATIS</button>
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
                        <div className="flex flex-col w-[350px] p-8 py-12 relative aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.7),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10">
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-5xl font-extrabold italic'>
                                    PLAN <br />
                                    <span className='bg-lime-500 text-black text-4xl px-2'>GRATUITO</span>
                                </h4>
                                <h5 className='text-3xl font-bold italic'>$0</h5>
                            </div>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                            </div>
                        </div>

                        <div className="flex flex-col w-[350px] p-8 py-12 relative aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.7),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10">
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-5xl font-extrabold italic'>
                                    PLAN <br />
                                    <span className='bg-lime-500 text-black text-4xl px-2'>30 DÍAS</span>
                                </h4>
                                <h5 className='text-3xl font-bold italic'>$5.200</h5>
                            </div>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aperiam.</p>

                            </div>
                        </div>

                        <div className="flex flex-col w-[350px] p-8 py-12 relative aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.7),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10">
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-5xl font-extrabold italic'>
                                    PLAN <br />
                                    <span className='bg-lime-500 text-black text-4xl px-2'>90 DÍAS</span>
                                </h4>
                                <h5 className='text-3xl font-bold italic'>$8.500</h5>
                            </div>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aperiam.</p>

                            </div>
                        </div>

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
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_1} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_2} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_3} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_3} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_3} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                        <div className='w-full h-full relative after:absolute after:w-full after:h-full after:bg-lime-500 after:-top-2 after:-right-2 after:-z-10'>
                            <img src={cambio_2} alt="" className='w-full h-full object-cover relative border border-lime-500' />
                        </div>
                    </div>

                    <button className="px-3 mt-6 py-2 bg-lime-500 text-black font-extrabold text-lg italic cursor-pointer hover:bg-lime-600 transition-colors w-fit">PRUEBA GRATIS</button>
                </div>
            </section>

            <hr className='border-lime-500' />
        </>
    )
}

export default Home;