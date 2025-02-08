import image from '../../assets/images/IMG_3806.webp'

const Home = () => {
    return (
        <>
            <main className=" text-white flex flex-col justify-center p-8 py-20 bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.8),rgba(00,00,00,0.9)),url('./assets/images/IMG_3807.webp')]">
                <div className="w-full max-w-[1600px] mx-auto">
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

            <section className="p-8 py-12 text-white max-w-[1600px] mx-auto">
                <div className="h-full flex flex-col justify-center">
                    <h3 className="italic text-lg uppercase text-lime-500">Lorem, ipsum dolor.</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold italic">PLANIFICACIONES</h2>
                    <hr className="my-8 border-lime-500 w-[100px]" />

                    <p className="my-4 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugit doloremque? Molestias debitis earum vero voluptas in eaque et omnis. Necessitatibus beatae voluptates dicta reprehenderit in quae cum quidem nihil!</p>

                    <div className='flex flex-wrap gap-8 py-8'>
                        <div className="flex flex-col w-[350px] p-8 py-12 aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.8),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between">
                            <h4 className='text-5xl font-extrabold italic'>
                                PLAN <br />
                                <span className='bg-lime-500 text-black text-4xl px-2'>GRATUITO</span>
                            </h4>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                            </div>
                        </div>

                        <div className="flex flex-col w-[350px] p-8 py-12 aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.8),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between">
                            <h4 className='text-5xl font-extrabold italic'>
                                PLAN <br />
                                <span className='bg-lime-500 text-black text-4xl px-2'>30 DÍAS</span>
                            </h4>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aperiam.</p>

                            </div>
                        </div>

                        <div className="flex flex-col w-[350px] p-8 py-12 aspect-[3/4] bg-cover bg-center bg-[linear-gradient(to_bottom,rgba(00,00,00,0.8),rgba(00,00,00,1)),url('./assets/images/IMG_3807.webp')] cursor-pointer border border-lime-800 justify-between">
                            <h4 className='text-5xl font-extrabold italic'>
                                PLAN <br />
                                <span className='bg-lime-500 text-black text-4xl px-2'>90 DÍAS</span>
                            </h4>
                            <div className='flex items-end w-full'>
                                <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, aperiam.</p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;