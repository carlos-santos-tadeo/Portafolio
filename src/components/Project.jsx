import React from 'react'

const Project = () => {
    return (
        <main id='project' className='md:pt-14 pt-2'>
            {/* <h1 className='text-center text-slate-700 font-bold text-3xl sm:text-6xl pt-24 mb-10'>Project Portfolio</h1> */}

            <span className='text-Violet1 hover:text-violet-600 hover:font-bold hover:gap-2 sm:hover:gap-5 mt-20 mb-10 flex items-center justify-center text-2xl md:text-6xl duration-300'>{"<"}
                <h1 className='text-center text-slate-700 font-bold text-[30px] md:text-6xl'>Mis Proyectos</h1>{"/>"}
            </span>
            
            {/* ecommerce */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>E-commerce <span className='text-slate-700 group-hover:text-violet-600'>y algunos proyectos más.</span></h3>
                    <span className='md:text-lg text-slate-700'>Ecommerce interactivo utilizando HTML, CSS y JavaScript.. {<br />} Estilo y calidad... todo lo encuentras aquí en tu nueva tienda favorita..</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>HTML</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>CSS</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>JavaScript</span>
                    </div>
                </div>

                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/e-commerce.png" alt="" />
                        <div id='ecommerce_project' className={`absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://academlo-shop-carlos-santos.netlify.app/">Visualizar proyecto</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* infoGalax */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>Infogalax<span className='text-slate-700 group-hover:text-violet-600'> Conociendo el universo.</span></h3>
                    <span className='md:text-lg text-slate-700'>Página de entretenimiento que muestra frases aleatorias sobre curiosidades en el espacio, usando React con Vitejs, uso de componentes, props y estados.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Vitejs</span>
                    </div>
                </div>
                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/infoGalax.png" alt="" />
                        <div id='infoGalax' className='absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://entregable01-carlos-alberto-santos.netlify.app/">Visualizar proyecto</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRUD de usuarios */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>CRUD’s <span className='text-slate-700 group-hover:text-violet-600'>y métodos HTTP.</span></h3>
                    <span className='md:text-lg text-slate-700'>Aplicación que permite gestionar usuarios a través de un CRUD. Uso de API para consultar, crear, eliminar y actualizar usuarios.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Tailwind</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>JavaScript</span>
                    </div>
                </div>

                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/crudUsers.png" alt="" />
                        <div id='crudUsers' className='absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-slate-500 rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://crud-entregable04.netlify.app/">Visualizar proyecto</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pokedex */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>Pokedex<span className='text-slate-700 group-hover:text-violet-600'> con React router y Redux.</span></h3>
                    <span className='md:text-lg text-slate-700'>Aplicación que lista los pokemons traídos de la pokeapi. Tiene una selección para filtrar por tipo, número de pokemons a mostrar por página y la opción de buscar un pokemon por nombre.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Talwind</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Vitejs</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Figma</span>
                    </div>
                </div>
                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/pokedex.png" alt="" />
                        <div id='pokedex' className='absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://pokedex-carlos-santos.netlify.app">Visualizar proyecto</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>



    )
}

export default Project