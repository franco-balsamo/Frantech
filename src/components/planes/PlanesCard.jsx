import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";


const PlanesCard = ({ product }) => { 
  const { t } = useTranslation();
  
  return (
      <div  className="productCard">
      <div className="imgC">
       <img src={product.image} alt={product.title} />
      </div>
      <div className="contentBx">  
      <h3>{t(product.title)}</h3>
      <p className="priceP">{t(product.description)}</p>
      <Link to="contact" smooth={true} duration={1000}>
      <button className="buyP">{t("Consultar")}</button>
      </Link>
      </div> 
      </div>
  );
};

export default PlanesCard;