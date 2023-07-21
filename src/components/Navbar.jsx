import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const { t, i18n } = useTranslation();

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="flex justify-between py-4 px-2 text-2xl text-black items-center lg:px-4 lg:py-0 fixed top-0 left-0 w-full z-30 bg-slate-300 ">
      <div>
        <img
          className="absolute max-w-[90px] left-3 top-5 sm:top-3 sm:max-w-[120px]"
          src="/images/lightModeLogo.png"
          alt=""
        />

        <div className="absolute cursor-pointer hover:rotate-180 duration-1000 hover:w-[35px] w-[30px] right-10 top-4 lg:left-[180px] lg:top-5">
          <a id="languageButton" onClick={() => handleLanguageChange("es")}>
            <img
              src="/images/changeLang.png"
              alt=""
              title={t("changeLanguage")}
            />
          </a>
        </div>
      </div>

      <i
        onClick={handleShowNav}
        className="bx bx-menu text-black text 2xl font-semibold cursor-pointer lg:hidden hover:bg-purple-700/80 hover:text-white hover:rounded-lg"
      ></i>

      <nav
        className={`bg-slate-300/95 text-black absolute top-full ${
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
        <span className="hover:bg-violet-600 flex justify-center hover:text-white hover:rounded-md p-4 duration-200 pl-2">
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
