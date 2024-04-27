import React from 'react';
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-check-shield about__icon'></i>
            <h3 className="about__title">{t("Compromiso")}</h3>
        </div>

        <div className="about__box">
        <i class='bx bxs-hand about__icon' style={{color: "gray"}}></i>
            <h3 className="about__title">{t("Respeto")}</h3>
        </div>

        <div className="about__box">
        <i class='bx bx-lock-alt about__icon' style={{color: "gray"}}></i>
            <h3 className="about__title">{t("Confianza")}</h3>
        </div>
    </div>
  )
}

export default Info