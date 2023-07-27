import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="px-7 relative">
      <span className="py-10 flex-row flex items-center md:w-[500px] mx-auto justify-center text-4xl gap-1 text-Violet1 hover:gap-5 hover:text-violet-600 duration-500 sm:text-6xl">
        {"<"}
        <h3 className="text-slate-700 z-30 dark:text-slate-300 font-bold text-4xl sm:text-6xl">
          {t("skills")}
        </h3>
        {"/>"}
      </span>

      <div className="flex flex-col sm:max-w-[1034px] max-w-[280px] items-center gap-5 bg-slate-500/50 dark:bg-slate-700/60 rounded-lg py-6 my-12 mx-auto sm:flex-row sm:justify-center sm:px-3 lg:mx-auto">
        {/* Este es el tercer ellipse */}
        <div className=" animate-bounce3 bg-[url('/images/Ellipse.png')] -z-[0] bg-contain bg-no-repeat absolute lg:top-[152px] right-0 opacity-0 dark:opacity-[0.3] lg:h-[900px] lg:w-[900px] -top-[150px] w-[400px] h-[400px]"></div>

        <div className="hover:shadow-violet-400 z-30 hover:shadow-lg flex flex-col justify-center text-center gap-7 bg-slate-500/80 dark:bg-slate-600/90 rounded-lg aspect-square w-[200px]">
          <span className="font-bold text-xl rounded-2xl">
            {t("languages")}
          </span>
          <div className="grid grid-cols-3 ">
            <img
              className="mx-auto hover:animate-bounce w-10"
              src="/images/HTML5.png"
              alt=""
            />
            <img
              className="mx-auto hover:animate-bounce w-10"
              src="/images/CSS.png"
              alt=""
            />
            <img
              className="mx-auto hover:animate-bounce w-10"
              src="/images/JavaScript.png"
              alt=""
            />
          </div>
          <span className="rounded-2xl">{t("languagesMsj")}</span>
        </div>
        <div className="hover:shadow-violet-400 z-30 hover:shadow-lg flex flex-col justify-center text-center gap-6 bg-slate-500/80 dark:bg-slate-600/90 rounded-lg aspect-square w-[200px]">
          <span className="font-bold text-xl rounded-2xl">
            {t("libraries")}
          </span>
          <img
            className="mx-auto hover:animate-spin  w-10"
            src="/images/React.png"
            alt=""
          />
          <span className="rounded-2xl">{t("librariesMsj")}</span>
        </div>
        <div className="hover:shadow-violet-400 z-30 hover:shadow-lg flex flex-col justify-center text-center gap-3 bg-slate-500/80 dark:bg-slate-600/90 rounded-lg aspect-square w-[200px]">
          <span className="font-bold text-xl rounded-2xl">
            {t("framework")}
          </span>
          <img
            className="mx-auto w-[100px] hover:animate-pulse"
            src="/images/tailwind.png"
            alt=""
          />
          <span className="rounded-2xl">{t("frameworkMsj")}</span>
        </div>
        <div className="hover:shadow-violet-400 z-30 hover:shadow-lg flex flex-col justify-center gap-4 text-center bg-slate-500/80 dark:bg-slate-600/90 rounded-lg aspect-square w-[200px]">
          <span className="font-bold text-xl rounded-2xl">{t("tools")}</span>
          <div className="grid grid-cols-3 items-center">
            <img
              className="mx-auto w-10 hover:animate-bounce"
              src="/images/gitHubb.png"
              alt=""
            />
            <img
              className="mx-auto w-max-w h-[35px] hover:animate-bounce"
              src="/images/netlify.png"
              alt=""
            />
            <img
              className="mx-auto w-10 hover:animate-bounce"
              src="/images/figmaa.png"
              alt=""
            />
          </div>
          <span className="rounded-2xl">{t("toolsMsj")}</span>
        </div>
        {/* <div className="absolute -z-0 opacity-0 left-[150px] top-[1370px] lg:top-[1200px] dark:opacity-20">
          <img src="/images/Ellipse.png" alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
