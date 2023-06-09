import React from 'react'

const Experience = () => {
    return (
        <section className='px-7'>

            <span className='py-10 flex-row flex items-center md:w-[500px] mx-auto justify-center text-4xl gap-1 text-Violet1 hover:gap-5 hover:text-violet-600 duration-500 sm:text-6xl'>
                {"<"}<h3 className='text-slate-700 font-bold text-4xl sm:text-6xl'>SKILLS</h3>{"/>"}
            </span>

            <div className='flex flex-col sm:max-w-[1034px] max-w-[280px] items-center gap-5 bg-slate-500/50 rounded-lg py-6 my-12 mx-auto sm:flex-row sm:justify-center sm:px-3 lg:mx-auto'>

                <div className='hover:shadow-violet-400 hover:shadow-lg flex flex-col justify-center text-center gap-7 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <span className='font-bold text-xl rounded-2xl'>Languages</span>
                    <div className='grid grid-cols-3 '>
                        <img className='mx-auto hover:animate-bounce w-10' src="/images/HTML5.png" alt="" />
                        <img className='mx-auto hover:animate-bounce w-10' src="/images/CSS.png" alt="" />
                        <img className='mx-auto hover:animate-bounce w-10' src="/images/JavaScript.png" alt="" />
                    </div>
                    <span className='rounded-2xl' >Take your developments to another level.</span>
                </div>
                <div className='hover:shadow-violet-400 hover:shadow-lg flex flex-col justify-center text-center gap-6 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <span className='font-bold text-xl rounded-2xl'>Library</span>
                    <img className='mx-auto hover:animate-spin  w-10' src="/images/React.png" alt="" />
                    <span className='rounded-2xl'>Create really amazing user interfaces</span>
                </div>
                <div className='hover:shadow-violet-400 hover:shadow-lg flex flex-col justify-center text-center gap-3 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <span className='font-bold text-xl rounded-2xl'>Framework</span>
                    <img className='mx-auto w-[100px] hover:animate-pulse' src="/images/tailwind.png" alt="" />
                    <span className='rounded-2xl'>CSS framework based on predefined classes</span>
                </div>
                <div className='hover:shadow-violet-400 hover:shadow-lg flex flex-col justify-center gap-4 text-center bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <span className='font-bold text-xl rounded-2xl'>More tools</span>
                    <div className='grid grid-cols-3 items-center'>
                        <img className='mx-auto w-10 hover:animate-bounce' src="/images/gitHubb.png" alt="" />
                        <img className='mx-auto w-max-w h-[35px] hover:animate-bounce' src="/images/netlify.png" alt="" />
                        <img className='mx-auto w-10 hover:animate-bounce' src="/images/figmaa.png" alt="" />
                    </div>
                    <span className='rounded-2xl'>GitHub, Netlify and Figma</span>
                </div>
            </div>
        </section>
    )
}

export default Experience