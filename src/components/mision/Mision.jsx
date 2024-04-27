import React from "react";
import { useTranslation } from "react-i18next";
import "./mision.css";

const Mision = () => {
  const { t } = useTranslation();

  return (
    <section className="mision section" id="about">
      <h2 className="mision-h2 section__title" style={{ color: "white"}}>{t("Nuestra Misión")}</h2>
      <span className="mision-span section__subtitle">
        {t(
          "En estudiocea nuestro principal objetivo es la conformidad y aprobación del cliente en cuanto al asesoramiento y el acompañamiento en cada etapa del desarrollo de la actividad, y que se sientan que trabajan en un equipo que lo contiene y que se compromete en la obtención de resultados, permitiendo una mejor utilización de los recursos de la empresa acompañado de una minimización de los gastos de tipo impositivo."
        )}
      </span>
    </section>
  );
};

export default Mision;
