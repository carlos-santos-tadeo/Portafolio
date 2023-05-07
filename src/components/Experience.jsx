import React from 'react'

const Experience = () => {
    return (
        <section className='px-7'>

            <div className='flex flex-col sm:max-w-[1034px] max-w-[280px] items-center gap-5 bg-slate-500/50 rounded-lg py-6 my-12 mx-auto sm:flex-row sm:justify-center sm:px-3 lg:mx-auto'>

                <div className='flex flex-col justify-center text-center gap-10 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <img className='mx-auto' src="/images/Group.png" alt="" />
                    <span  >Experience the world through VR glasses</span>
                </div>
                <div className='flex flex-col justify-center text-center gap-10 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <img className='mx-auto' src="/images/360.png" alt="" />
                    <span>View all your surrounding with 360</span>
                </div>
                <div className='flex flex-col justify-center text-center gap-10 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <img className='mx-auto' src="/images/Vector.png" alt="" />
                    <span>Incredible gaming experience</span>
                </div>
                <div className='flex flex-col justify-center text-center gap-10 bg-slate-500/80 rounded-lg aspect-square w-[200px]'>
                    <img className='mx-auto' src="/images/Db.png" alt="" />
                    <span>Making meetings and tours easier</span>
                </div>
            </div>
        </section>
    )
}

export default Experience