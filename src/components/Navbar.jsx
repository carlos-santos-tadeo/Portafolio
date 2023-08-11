import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import CV from "/documents/CV_CarlosSantos_Desarrollador_FullStack.pdf";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState();

  if (localStorage.theme === "true") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDarkMode = useRef(document.documentElement.className === "dark");

  const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle("dark");
    toggleDarkMode.value
      ? localStorage.setItem("theme", "true")
      : localStorage.setItem("theme", "false");
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="flex justify-between py-4 px-2 text-2xl text-black dark:text-slate-300 items-center lg:px-4 lg:py-0 fixed top-0 left-0 w-full z-50 bg-slate-300 dark:bg-slate-900">
      <div>
        <img
          className="absolute max-w-[90px] left-3 top-[14px] sm:max-w-[120px]"
          src={
            !isDarkMode
              ? "/images/lightModeLogo.png"
              : "/images/darkModeLogo.png"
          }
          alt=""
        />
        <div className="absolute cursor-pointer hover:rotate-180 duration-1000 hover:w-[35px] w-[30px] right-10 top-4 lg:left-[150px] lg:top-5">
          <a id="languageButton" onClick={() => handleLanguageChange("es")}>
            <img
              src={
                !isDarkMode
                  ? "/images/changeLang.png"
                  : "/images/changeLangDark.png"
              }
              alt=""
              title={t("changeLanguage")}
            />
          </a>
        </div>
        <div className="absolute cursor-pointer w-[17px] right-[118px] top-[16px] lg:left-[240px] lg:top-[18px]">
          <a href={CV} target="_blank">
            <img
              src={!isDarkMode ? "/images/imgCv.png" : "/images/imgCvDark.png"}
              className={!isDarkMode ? "animate-pulse" : ""}
              title={t("downloadCv")}
            />
          </a>
        </div>

        <div className="absolute cursor-pointer w-5 right-[86px] lg:left-[194px] lg:top-4 top-[14px] hover:animate-pulse duration-700">
          <button onClick={changeDarkMode} title={t("changeTheme")}>
            <i
              className={`sm:text-[30px] bx bxs-brightness-half dark:text-slate-300 dark:animate-pulse`}
            ></i>
          </button>
        </div>
      </div>

      <i
        onClick={handleShowNav}
        className="bx bx-menu text-black dark:text-slate-300 text 2xl font-semibold cursor-pointer lg:hidden hover:bg-purple-700/80 hover:text-white hover:rounded-lg"
      ></i>

      <nav
        className={`bg-slate-300/95 dark:bg-slate-900/90 text-black dark:text-slate-300 absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-xl font-semibold lg:gap-2 duration-500 lg:text-xl lg:font-bold lg:static lg:flex lg:w-auto lg:mr-16`}
      >
        <span className="hover:bg-violet-600 flex justify-center hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#" onClick={handleShowNav}>
            {t("home")}
          </a>
          {"/>"}
        </span>
        <span className="hover:bg-violet-600 flex justify-center hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#about_me" onClick={handleShowNav}>
            {t("aboutMe")}
          </a>
          {"/>"}
        </span>
        <span className="hover:bg-violet-600 flex justify-center hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#project" onClick={handleShowNav}>
            {t("projects")}
          </a>
          {"/>"}
        </span>
        <span className=" hover:bg-violet-600 flex justify-center hover:text-white hover:rounded-md p-4 duration-200 pl-2">
          {"<"}
          <a href="#footer" onClick={handleShowNav}>
            {t("contact")}
          </a>
          {"/>"}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
