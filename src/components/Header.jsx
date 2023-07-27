import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  // dark:bg-[url('/images/Ellipse.png')] bg-contain bg-no-repeat
  return (
    <main className="pb-20 sm:pt-16 lg:pt-32 z-30">
      <section className="flex flex-col pt-[110px] mx-auto px-3 sm:px-8 sm:flex-row-reverse sm:max-w-[1280px]">
        <div className="hover:animate-pulse max-w-[300px] mx-auto lg:max-w-[400px] ">
          <img className="animate-bounce3" src="/images/robo.png" alt="" />

          {/* Este es el primer ellipse */}
          <div className="absolute -z-0 left-[160px] top-10 sm:left-[550px] lg:left-[860px] opacity-0 dark:opacity-50">
            <img src="/images/Ellipse.png" alt="" />
          </div>
        </div>

        <section className="max-w-[500px] z-30 md:ml-[5%] mx-auto px-1">
          <h2 className="text-violet-600 z-30 dark:text-Violet1 font-bold text-[28px] lg:text-5xl mb-7 dark:hover:text-white hover:text-slate-700 duration-300 group">
            {t("headerHello")}
            <span className="text-slate-700 z-30 dark:text-white dark:group-hover:text-Violet1 group-hover:text-violet-600 duration-300">
              {t("headerTitle")}
            </span>
          </h2>
          <p className=" text-slate-700 z-30 dark:text-slate-300 text-sm md:text-lg text-justify font-semibold">
            {t("headerDescription")}
          </p>

          {/* Este es el segundo ellipse */}
          <div className=" bg-[url('/images/Ellipse.png')] bg-contain bg-no-repeat absolute lg:top-[450px] lg:-left-[350px] opacity-0 dark:opacity-[0.20] lg:h-[900px] lg:w-[900px] top-[400px] -left-[170px] w-[400px] h-[400px]"></div>
          {/* <div className="absolute top-60 -left-72 opacity-0 dark:opacity-50">
            <img src="/images/Ellipse.png" alt="" />
          </div> */}
        </section>
      </section>

      <section
        id="about_me"
        className="items-center flex flex-col mx-5 max-w-[1280px] sm:mx-auto md:pt-32 pt-40"
      >
        <span className="flex z-30 sm:hover:gap-5 text-lg hover:gap-1 hover:text-violet-600 md:mt-20 font-bold sm:text-5xl items-center text-Violet1 duration-500 ">
          {"<"}
          <h2 className="sm:text-3xl md:text-5xl text-slate-700 dark:text-slate-300">
            {t("headerMyName")}
          </h2>
          {"/>"}
        </span>
        <div className="max-w-[270px]  my-8">
          <img className="mx-auto p-5" src="/images/profile.png" alt="" />
        </div>

        <div className="sm:px-5 text-slate-700 dark:text-slate-300 font-semibold text-justify max-w-[800px] mx-auto sm:text-2xl">
          <h2>{t("headerAboutMe")}</h2>
        </div>
      </section>
    </main>
  );
};

export default Header;
