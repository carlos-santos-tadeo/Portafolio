import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="footer" className="py-10 sm:flex sm:justify-center md:mt-20">
      <div className="grid gap-6 justify-items-center bg-slate-500/50 rounded-2xl mx-5 py-16 sm:py-3 max-w-[800px]">
        <h3 className="font-bold animate-bounce text-3xl md:text-5xl mt-6 hover:text-violet-600 duration-500 mb-7">
          {t("titleContact")} !
        </h3>
        <p className="px-3 text-center sm:px-16 lg:px-28 mb-5">
          {t("msjContact")}
        </p>
        <div className="mb-2 flex items-center gap-3 md:gap-12">
          <a
            className="w-20 md:w-28 hover:bg-slate-300 rounded-md duration-500"
            href="mailto:cast0277@gmail.com"
            target="_blank"
          >
            <img src="/images/gmail.png" alt="" />
          </a>

          <a
            className="w-20 md:w-28 hover:bg-slate-300 rounded-md duration-500"
            href="https://github.com/carlos-santos-tadeo"
            target="_blank"
          >
            <img src="/images/gitHub.png" alt="" />
          </a>

          <a
            className="w-20 md:w-28 hover:bg-slate-300 rounded-md duration-500"
            href="https://www.linkedin.com/in/carlosalbertosantostadeo/"
            target="_blank"
          >
            <img src="/images/linkedIn.png" alt="" />
          </a>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Footer;
