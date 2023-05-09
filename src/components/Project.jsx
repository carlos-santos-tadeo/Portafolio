import React from 'react'

const Project = () => {
    return (
        <main id='project' className='md:pt-14'>
            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]'>
                    <h3 className='text-Violet1 font-bold text-3xl lg:text-5xl mb-7'>Last landing <span className='text-slate-700'>and website projects</span></h3>
                    <span className='md:text-lg text-slate-700'>Lorem ipsum amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.</span>
                </div>
                <div className='my-7 max-w-[500px] mx-auto'>
                    <img className=' max-h-[320px]' src="/images/project.png" alt="" />
                </div>
            </section>

            <section className='mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 '>
                <div className='ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]'>
                    <h3 className='text-Violet1 font-bold text-3xl lg:text-5xl mb-7'>Build <span className='text-slate-700'> a whole new world</span></h3>
                    <span className='md:text-lg text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.</span>
                </div>
                <div className='my-7 max-w-[500px] mx-auto'>
                    <img className=' max-h-[320px]' src="/images/infoGalax.png" alt="" />
                </div>
            </section>


        </main>



    )
}

export default Project