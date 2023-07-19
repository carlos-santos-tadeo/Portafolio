import React from 'react'

const Header = () => {
  return (
    <main className='pb-20 sm:pt-16 md:pt-32'>
      <section className='flex flex-col pt-[150px] mx-auto px-3 sm:px-8 sm:text-cyan-600 md:text-red-500 lg:text-green-500 sm:flex-row-reverse sm:max-w-[1280px]'>
        <div className='max-w-[300px] mx-auto lg:max-w-[400px]'>
          <img className='animate-bounce3' src="/images/robo.png" alt="" />
        </div>

        <section className='max-w-[500px] md:ml-[5%] mx-auto px-1'>
          <h2 className='text-violet-600 font-bold text-[28px] lg:text-5xl mb-7 hover:text-slate-700 duration-300'>Hola soy Carlos! <span className='text-slate-700 hover:text-violet-600 duration-300'>Un desarrollador Full Stack</span></h2>
          <p className=' text-slate-700 text-sm md:text-lg text-justify'>Probablemente soy el desarrollador más apasionado con el que trabajarás. Si tienes un gran proyecto que necesita algunas habilidades increíbles, soy la persona que necesitas..</p>
        </section>
      </section >

      <section id='about_me' className='items-center flex flex-col mx-5 max-w-[1280px] sm:mx-auto md:pt-32 pt-40'>      
        <span className='flex sm:hover:gap-5 text-lg hover:gap-1 hover:text-violet-600 md:mt-20 font-bold sm:text-5xl items-center text-Violet1 duration-500'>
          {'<'}<h2 className='sm:text-3xl md:text-5xl text-slate-700'>Mi nombre es Carlos Santos</h2>{'/>'}
        </span>
        <div className='max-w-[270px]  my-8' >
          <img className='mx-auto p-5' src="/images/profile.png" alt="" />
        </div>

        <div className='sm:px-5 text-slate-700 font-semibold text-justify max-w-[800px] mx-auto sm:text-2xl'>
          <h2>Un placer conocerlo. Me apasiona brindar soluciones a los usuarios creando productos accesibles e intuitivos. Me considero curioso por naturaleza y trabajo arduamente para mejorar mis habilidades.</h2>
        </div>
      </section>
    </main>
  )
}

export default Header