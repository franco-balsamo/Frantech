import React from "react";
import logo from "../../assets/logoHeader2.png";
import { useTranslation } from "react-i18next";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={logo} alt="logo" className="img_footer" />
        <h1 className="footer__title">ESTUDIOCEA</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              {t("Inicio")}
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
              {t("Servicios")}
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              {t("Nosotros")}
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              {t("Vision")}
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              {t("Contacto")}
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ceaconsultas/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram instagram"></i>
          </a>

          <a
            href="https://walink.co/ac5ec4"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp" style={{ color: "green" }}></i>
          </a>

          <a
            href="https://www.facebook.com/ceaconsultas"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i
              class="bx bxl-facebook-circle"
              style={{ color: "#0000ffb0" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
