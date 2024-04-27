import React, { useState } from 'react'
import logo from "../../assets/logoHeader2.png";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Languageoption from '../languageoption/Languageoption';
import "./navbar.css"

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();

    const handleClick = () => {
      setClicked(!clicked);
    };

  return (
    <nav>
        <Link to="main" className="logo"  smooth={true} duration={2000}>
            <img src={logo} alt="logo" className='img_finance'/>
        </Link>
        <span className='span_logo'>{t("ESTUDIOCEA conocimiento y experiencia aplicada")}</span>
        <span className='span_logo2'>ESTUDIOCEA</span>
        <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} style={{color: "gray"}}></i>
      </div>
        <input className='menu-btn' type="checkbox" id="menu-btn" />
         <ul className={clicked ? "menu active" : "menu"}>
            <li><Link to="main" smooth={true} duration={1000}>{t("Inicio")}</Link></li>
            <li><Link to="planes" smooth={true} duration={1000}>{t("Servicios")}</Link></li>
            <li><Link to="parallax" smooth={true} duration={1000}>{t("Nosotros")}</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>{t("Vision")}</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>{t("Contacto")}</Link></li>
         </ul>
         <Languageoption />
        </nav>
  )
}

export default Navbar