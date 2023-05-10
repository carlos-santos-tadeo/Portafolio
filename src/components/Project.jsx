import React from 'react'

const Project = () => {
    return (
        <main id='project' className='md:pt-14 pt-2'>
            {/* <h1 className='text-center text-slate-700 font-bold text-3xl sm:text-6xl pt-24 mb-10'>Project Portfolio</h1> */}

            <span className='text-Violet1 hover:text-violet-600 hover:font-bold hover:gap-2 sm:hover:gap-5 mt-20 mb-10 flex items-center justify-center text-2xl md:text-6xl duration-300'>{"<"}
                <h1 className='text-center text-slate-700 font-bold text-[30px] md:text-6xl'>Project Portfolio</h1>{"/>"}
            </span>
            
            {/* ecommerce */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>E-commerce <span className='text-slate-700 group-hover:text-violet-600'>and some more projects.</span></h3>
                    <span className='md:text-lg text-slate-700'>Interactive e-commerce using HTML, CSS and JavaScript. {<br />} Style and quality... you find everything here in your new favorite store.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>HTML</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>CSS</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>JavaScript</span>
                    </div>
                </div>

                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/e-commerce.png" alt="" />
                        <div className='absolute h-full w-full bg-cover bg-[url("images/e-commerce2.png")] flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="">Visit project</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* infoGalax */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>Infogalax<span className='text-slate-700 group-hover:text-violet-600'> knowing the universe.</span></h3>
                    <span className='md:text-lg text-slate-700'>Entertainment page that shows random phrases about curiosities in space, using React with Vitejs, use of components, props and states.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Vitejs</span>
                    </div>
                </div>
                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/infoGalax.png" alt="" />
                        <div className='absolute h-full w-full bg-cover bg-[url("images/infoGalax2.png")] flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://entregable01-carlos-alberto-santos.netlify.app/">Visit project</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRUD de usuarios */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>CRUD’s <span className='text-slate-700 group-hover:text-violet-600'>and HTTP methods.</span></h3>
                    <span className='md:text-lg text-slate-700'>Application that allows you to manage users through a CRUD.
                        Using API to query, create, delete and
                        update users.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Tailwind</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>JavaScript</span>
                    </div>
                </div>

                <div className='my-7 max-w-[500px] mx-auto group h-fit'>
                    <div className='relative overflow-hidden'>
                        <img className=' max-h-[320px]' src="/images/crudUsers.png" alt="" />
                        <div className='absolute h-full w-full bg-cover bg-[url("images/crudUsers2.png")] flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-slate-500 rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://crud-entregable04.netlify.app/">Visit project</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pokedex */}
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>Pokedex<span className='text-slate-700 group-hover:text-violet-600'> with React router and Redux.</span></h3>
                    <span className='md:text-lg text-slate-700'>Application that lists the pokemons brought from the pokeapi. It has a select to filter by type, number of pokemons to show per page and the option to search for a pokemon by name</span>
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
                        <div className='absolute h-full w-full bg-cover bg-[url("images/pokedex2.png")] flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl'>
                            <a className='hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5' target='_blank' href="https://pokedex-carlos-santos.netlify.app">Visit project</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>



    )
}

export default Project