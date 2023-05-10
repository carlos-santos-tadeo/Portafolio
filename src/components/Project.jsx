import React from 'react'

const Project = () => {
    return (
        <main id='project' className='md:pt-14 pt-2'>
            {/* <h1 className='text-center text-slate-700 font-bold text-3xl sm:text-6xl pt-24 mb-10'>Project Portfolio</h1> */}

            <span className='text-Violet1 hover:text-violet-600 hover:font-bold hover:gap-2 sm:hover:gap-5 mt-20 mb-10 flex items-center justify-center text-2xl md:text-6xl duration-300'>{"<"}
                <h1 className='text-center text-slate-700 font-bold text-[30px] md:text-6xl'>Project Portfolio</h1>{"/>"}
            </span>

            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>E-commerce <span className='text-slate-700 group-hover:text-violet-600'>and some more projects</span></h3>
                    <span className='md:text-lg text-slate-700'>Interactive e-commerce using HTML, CSS and JavaScript. {<br />} Style and quality... you find everything here in your new favorite store.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>HTML</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>CSS</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>JavaScript</span>
                    </div>
                </div>
                <div className='my-7 max-w-[500px] mx-auto'>
                    <img className=' max-h-[320px]' src="/images/e-commerce.png" alt="" />
                </div>
            </section>

            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 duration-500'>Infogalax<span className='text-slate-700 group-hover:text-violet-600'> knowing the universe</span></h3>
                    <span className='md:text-lg text-slate-700'>Entertainment page that shows random phrases about curiosities in space, using React with Vitejs, use of components, props and states.</span>
                    <div className='flex gap-3 text-slate-600 pt-2'>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>React</span>
                        <span className='border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700'>Vitejs</span>
                    </div>
                </div>
                <div className='my-7 max-w-[500px] mx-auto'>
                    <img className=' max-h-[320px]' src="/images/infoGalax.png" alt="" />
                </div>

            </section>


        </main>



    )
}

export default Project