import React, { useState } from "react";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header className="flex justify-between py-4 px-2 text-2xl text-black items-center md:px-4 md:py-0 fixed top-0 left-0 w-full z-30 bg-slate-300 ">

      <div>
        <img
          className="absolute max-w-[90px] left-3 top-5 sm:top-3 sm:max-w-[120px]"
          src="/images/lightModeLogo.png"
          alt=""
        />
      </div>

      <i
        onClick={handleShowNav}
        className="bx bx-menu text-black text-3xl cursor-pointer md:hidden hover:bg-purple-700/80 hover:text-white hover:rounded-md"
      ></i>

      <nav
        className={`bg-slate-300/95 text-black absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg lg:gap-2 duration-500 md:text-xl md:font-bold md:static md:flex md:w-auto lg:mr-16`}
      >
        <span className="hover:bg-violet-600 flex hover:gap-3 hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#" onClick={handleShowNav}>
            Inicio
          </a>
          {"/>"}
        </span>
        <span className="hover:bg-violet-600 flex hover:gap-3 hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#about_me" onClick={handleShowNav}>
            Acerca de mi
          </a>
          {"/>"}
        </span>
        <span className="hover:bg-violet-600 flex hover:gap-3 hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#project" onClick={handleShowNav}>
            Proyectos
          </a>
          {"/>"}
        </span>
        <span className="hover:bg-violet-600 flex hover:gap-3 hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#footer" onClick={handleShowNav}>
            Contactame
          </a>
          {"/>"}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
