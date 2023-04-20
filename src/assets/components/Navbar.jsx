import React, { useState } from 'react'

const Navbar = () => {

  const [isShowNav, setIsShowNav] = useState(false)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)
  }

  return (
    <header className='flex justify-between lg:grid lg:grid-cols-3 py-4 px-2 text-2xl text-black items-center md:px-4 md:py-0 fixed top-0 left-0 w-full z-30'>
      <div className='flex gap-5'>
        <img className='absolute left-4 top-2 md:left-[25px] md:top-[8px]' src="/images/elpY.png" alt="" />
        <img className='absolute md:top-[20px]' src="/images/EllipseX.png" alt="" />
        <h1 className='pl-[60px] font-semibold'>Carlos S.</h1>
      </div>

      <i onClick={handleShowNav} className='bx bx-menu text-black text-3xl cursor-pointer md:hidden hover:bg-Blue1 hover:text-white hover:rounded-md'></i>

      <nav className={`text-black absolute top-full ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg gap-2 duration-200 md:static md:flex md:w-auto`}>
        <a className='hover:bg-Blue1 hover:text-white hover:rounded-md p-4 duration-200 pl-2' href="#">Home</a>
        <a className='hover:bg-Blue1 hover:text-white hover:rounded-md p-4 duration-200 pl-2' href="#">Project</a>
        <a className='hover:bg-Blue1 hover:text-white hover:rounded-md p-4 duration-200 pl-2' href="#">About me</a>
        <a className='hover:bg-Blue1 hover:text-white hover:rounded-md p-4 duration-200 pl-2' href="#">Contact me</a>
      </nav>
    </header>
  )
}

export default Navbar