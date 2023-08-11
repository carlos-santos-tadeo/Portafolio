import React from "react";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <main id="project" className="md:pt-14 pt-2">
      <span className="text-Violet1 hover:text-violet-600 hover:font-bold hover:gap-2 sm:hover:gap-5 mt-20 mb-10 flex items-center justify-center text-2xl md:text-6xl duration-300">
        {"<"}
        <h1 className="text-center z-30 text-slate-700 dark:text-slate-300 font-bold text-[30px] md:text-6xl">
          {t("projectTitle")}
        </h1>
        {"/>"}
      </span>

      {/* ecommerce */}
      <section className="mx-auto z-30 sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 ">
        <div className="ml-3 mb-5 sm:max-w-[45%] z-30 sm:mr-[6%]">
          <h3 className="text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group dark:hover:text-slate-300 hover:text-slate-700 duration-500">
            E-commerce{" "}
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-violet-600">
              {t("ecommerceTitle")}
            </span>
          </h3>
          <span className="md:text-lg text-slate-700 dark:text-slate-300">
            {t("ecommerceDetails")}
          </span>
          <div className="flex gap-3 text-slate-600 dark:text-slate-300 pt-2">
            <span className="border-[1px] rounded-sm border-Violet1 px-1 dark:hover:text-Violet1 hover:text-violet-600 hover:border-slate-700 dark:hover:border-slate-300">
              HTML
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 dark:hover:text-Violet1 hover:text-violet-600 hover:border-slate-700 dark:hover:border-slate-300">
              CSS
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 dark:hover:text-Violet1 hover:text-violet-600 hover:border-slate-700 dark:hover:border-slate-300">
              JavaScript
            </span>
          </div>
        </div>

        <div className="my-7 max-w-[500px] mx-auto group h-fit">
          <div className="relative overflow-hidden">
            <img
              className=" max-h-[320px]"
              src="/images/e-commerce.png"
              alt=""
            />
            <div
              id="ecommerce_project"
              className={`absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`}
            >
              <a
                className="hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5"
                target="_blank"
                href="https://academlo-shop-carlos-santos.netlify.app/"
              >
                {t("goToProject")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* infoGalax */}
      <section className="mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 ">
        <div className="ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]">
          <h3 className="text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group dark:hover:text-slate-300 hover:text-slate-700 duration-500">
            {t("projectInfogalax")}
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-violet-600">
              {t("infogalaxTitle")}
            </span>
          </h3>
          <span className="md:text-lg text-slate-700 dark:text-slate-300">
            {t("infogalaxDetails")}
          </span>
          <div className="flex gap-3 text-slate-600 pt-2">
            <span className="border-[1px] rounded-sm border-Violet1 px-1 dark:hover:border-slate-300 hover:text-violet-600 dark:hover:text-Violet1 hover:border-slate-700 dark:text-slate-300 ">
              React
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 dark:hover:border-slate-300 hover:text-violet-600 dark:hover:text-Violet1 hover:border-slate-700 dark:text-slate-300 ">
              Vitejs
            </span>
          </div>
        </div>
        <div className="my-7 max-w-[500px] mx-auto group h-fit">
          <div className="relative overflow-hidden">
            <img
              className=" max-h-[320px]"
              src="/images/infoGalax.png"
              alt=""
            />
            <div
              id="infoGalax"
              className="absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
            >
              <a
                className="hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5"
                target="_blank"
                href="https://infogalax.netlify.app/"
              >
                {t("goToProjects")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CRUD de usuarios */}
      <section className="mx-auto sm:items-center sm:gap-12 sm:flex-row-reverse flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 ">
        <div className="ml-3 mb-5 sm:max-w-[45%] sm:mr-[6%]">
          <h3 className="text-violet-600 font-bold text-3xl lg:text-5xl mb-7 group dark:hover:text-slate-300 hover:text-slate-700 duration-500">
            CRUD’s
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-violet-600">
              {t("crudTitle")}
            </span>
          </h3>
          <span className="md:text-lg text-slate-700 dark:text-slate-300">
            {t("crudDetails")}
          </span>
          <div className="flex gap-3 text-slate-600 pt-2">
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              Tailwind
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              React
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              JavaScript
            </span>
          </div>
        </div>

        <div className="my-7 max-w-[500px] mx-auto group h-fit">
          <div className="relative overflow-hidden">
            <img
              className=" max-h-[320px]"
              src="/images/crudUsers.png"
              alt=""
            />
            <div
              id="crudUsers"
              className="absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
            >
              <a
                className="hover:bg-slate-500 rounded-md bg-violet-400 text-white py-2 px-5"
                target="_blank"
                href="https://crud-usuarios-carlos.netlify.app/"
              >
                {t("goToProjects")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pokedex */}
      <section className="mx-auto sm:items-center sm:gap-12 sm:flex-row flex flex-col gap-5 px-3 py-[20px] sm:max-w-[1280px] sm:px-8 ">
        <div className="ml-3 sm:ml-[10%] mb-5 sm:max-w-[45%]">
          <h3 className="text-violet-600 dark:text-Violet1 font-bold text-3xl lg:text-5xl mb-7 group hover:text-slate-700 dark:hover:text-slate-300 duration-500">
            Pokedex
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-Violet1">
              {t("pokedexTitle")}
            </span>
          </h3>
          <span className="md:text-lg text-slate-700 dark:text-slate-300">
            {t("pokedexDetails")}
          </span>
          <div className="flex gap-3 text-slate-600 pt-2">
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              React
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              Talwind
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              Vitejs
            </span>
            <span className="border-[1px] rounded-sm border-Violet1 px-1 hover:text-violet-600 hover:border-slate-700 dark:text-slate-300 dark:hover:text-Violet1 dark:hover:border-slate-300">
              Figma
            </span>
          </div>
        </div>
        <div className="my-7 max-w-[500px] mx-auto group h-fit">
          <div className="relative overflow-hidden">
            <img className=" max-h-[320px]" src="/images/pokedex.png" alt="" />
            <div
              id="pokedex"
              className="absolute h-full w-full bg-cover flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
            >
              <a
                className="hover:bg-black rounded-md bg-violet-400 text-white py-2 px-5"
                target="_blank"
                href="https://pokedex-carlos-santos.netlify.app"
              >
                {t("goToProjects")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
