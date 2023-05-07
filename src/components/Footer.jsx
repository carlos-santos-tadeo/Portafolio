import React from 'react'

const Footer = () => {
  return (
    <section className='py-10 sm:flex sm:justify-center ' >
      <div className='grid gap-6 justify-items-center bg-slate-500/50 rounded-2xl mx-5 py-16 sm:py-3 max-w-[700px]'>
        <h3 className='font-bold text-3xl mt-10'>Contact me!</h3>
        <p className='px-3 text-center sm:px- lg:px-28'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.</p>
        <div className='mb-12'>
          <button className='border-[1px] rounded-md px1'>Click here</button>
        </div>
      </div>
      <br /><br />
    </section>
  )
}

export default Footer