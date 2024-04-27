import React from "react";
import { useTranslation } from "react-i18next";
import "./parallax2.css";

const Parallax2 = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <section className="parallax-corte2 page-section">
        <div className="container text-center py-5">
          <h3 className="text-white titulos-seccion mt-3">
            <b>{t("QUIENES SOMOS")}</b>
          </h3>
          <p className="text_parallax2">
            {t(
              "Estudiocea esta conformado por un conjunto de profesionales con experiencia adquirida en empresas importantes y estudios contables de primer nivel, el mayor capital con el que contamos es el humano, ya que apuntamos a una interacción cliente profesional fluida y de confianza que nos permite trabajar de manera ordenada con el objeto principal de lograr la satisfacción del cliente en cada una de las actividades desarrolladas, de esta manera consideramos que cada cliente se convierte en un elemento fundamental y sus logros se conviertan en nuestros logros."
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Parallax2;
