import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import { Data } from "./data";
import PlanesCard from "./PlanesCard";
import { useTranslation } from "react-i18next";
import "./planes.css";

const Planes = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { t } = useTranslation();

  
  return (
    <section id="planes">
      <h2 style={{ color: darkMode && "#fff" }} className="section__title">
       {t("Nuestros servicios")}
      </h2>
      <div className="products">
        {Data &&
          Data.map((product, i) => <PlanesCard key={i} product={product} />)}
      </div>
    </section>
  );
};

export default Planes;
