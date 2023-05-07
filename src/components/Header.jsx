import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col pt-[150px] mx-auto px-3 sm:px-8 sm:text-cyan-600 md:text-red-500 lg:text-green-500 sm:flex-row-reverse sm:max-w-[1280px]'>
      <div className='max-w-[300px] mx-auto lg:max-w-[400px]'>
        <img className='animate-bounce3' src="/images/robo.png" alt="" />
      </div>

      <section className='max-w-[500px] md:ml-[5%] mx-auto px-1'>
        <h2 className='text-Violet1 font-bold text-[28px] lg:text-5xl mb-7'>Hi! <span className='text-slate-700'>I’am a backend developed.</span></h2>
        <p className='text-sm md:text-lg text-justify'>I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
      </section>
    </section>
  )
}

export default Header