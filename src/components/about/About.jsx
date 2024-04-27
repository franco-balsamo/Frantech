import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import mq from "../../assets/logoFinance2.png";
import { useTranslation } from "react-i18next";
import "./about.css";
import Info from "./Info";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
        {t("Nuestra Visión.")}
      </h2>
      <span className="section__subtitle">
        {t(
          "En un contexto cambiante en el que la intervención del estado a través de su organismo recaudador y en su necesidad de financiamiento mediante la aplicación de tributos, vemos la importancia de estar asesorado al desarrollar una actividad ya que la misma involucra inversión de capital, trabajo y análisis de distintas variables, que permitirán tomar decisiones apuntando a maximizar los recursos de la empresa."
        )}
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="img_finance2" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            {t(
              "Creemos que el asesoramiento al cliente como también su compromiso en adquirir nuevos conocimientos ayudan a mejorar la dinámica de la actividad desarrollada y a una mejor comunicación cliente–contador."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
