import React from 'react'

const Header = () => {
  return (
    <section className='grid grid-rows-2'>
      <div className='mt-[120px] w-[257px] h-[212px]'>
        <img className='animate-bounce3' src="/images/robo.png" alt="" />
      </div>

      <section>
        <h2 className='text-Violet1 font-bold text-3xl pb-6'>Hi! <span className='text-slate-700'>I’am a backend developed.</span></h2>
        <span className='t text-sm'>I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</span>
      </section>
    </section>
  )
}

export default Header