import React, { useRef, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { useTranslation } from "react-i18next";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      const customId = "Llene todos los campos!";

      toast("Llene todos los campos!", {
        toastId: customId,
        position: toast.POSITION.TOP_CENTER,
      });
    }
    emailjs.sendForm(
      "service_mx18ogi",
      "template_log9roy",
      form.current,
      "user_Bjg02JRPajM33GafR7bct"
    );
    toast.success("Formulario enviado correctamente 👍", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <ToastContainer />
      <h2 style={{ color: "#fff" }} className="section__title">
        {t("Contáctese con nosotros")}
      </h2>
      <span className="section__subtitle"></span>

      <div className="contact__container container grid">
        <div className="contact_content">
          <h3 style={{ color: "#fff" }} className="contact__title">
            {t("Háblenos")}
          </h3>

          <div className="contact__info">
            <div className="contact__card">
              <i
                className="bx bx-mail-send contact__card-icon"
                style={{ color: "red" }}
              ></i>

              <h3 className="contact__card-title">{t("Email")}</h3>
              <span
                style={{ color: darkMode && "rgb(34, 34, 34)" }}
                className="contact__card-data"
              >
                Avaloscarlos@estudiocea.com.ar
              </span>

              <a
                href="mailto:digitalagencyjg@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                {t("Escríbenos")}
                {""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i
                className="bx bx-mail-send contact__card-icon"
                style={{ color: "red" }}
              ></i>

              <h3 className="contact__card-title">{t("Email")}</h3>
              <span
                style={{ color: darkMode && "rgb(34, 34, 34)" }}
                className="contact__card-data"
              >
                Fernandez.walter@estudiocea.com.ar
              </span>

              <a
                href="https://walink.co/332257"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                {t("Escríbenos")}{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i
                className="bx bx-mail-send contact__card-icon"
                style={{ color: "red" }}
              ></i>

              <h3 className="contact__card-title">{t("Email")}</h3>
              <span
                style={{ color: darkMode && "rgb(34, 34, 34)" }}
                className="contact__card-data"
              >
                Olivera.raul@estudiocea.com.ar
              </span>

              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                {t("Escríbenos")}{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 style={{ color: "#fff" }} className="contact__title">
            {t("Escríba su consulta")}
          </h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label
                style={{ backgroundColor: darkMode && "rgb(34 34 34)" }}
                className="contact__form-tag"
              >
                {t("Nombre")}
              </label>
              <input
                style={{
                  border: darkMode && " 2px solid rgb(255 255 255 / 79%)",
                }}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder={t("Ponga su nombre")}
                required
              />
            </div>

            <div className="contact__form-div">
              <label
                style={{ backgroundColor: darkMode && "rgb(34 34 34)" }}
                className="contact__form-tag"
              >
                {t("Email")}
              </label>
              <input
                style={{
                  border: darkMode && " 2px solid rgb(255 255 255 / 79%)",
                }}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder={t("Ponga su email")}
                required
              />
            </div>

            <div className="contact__form-div">
              <label
                style={{ backgroundColor: darkMode && "rgb(34 34 34)" }}
                className="contact__form-tag"
              >
                {t("Teléfono")}
              </label>
              <input
                style={{
                  border: darkMode && " 2px solid rgb(255 255 255 / 79%)",
                }}
                type="text"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="contact__form-input"
                placeholder={t("Ponga su número de teléfono")}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label
                style={{ backgroundColor: darkMode && "rgb(34 34 34)" }}
                className="contact__form-tag"
              >
                {t("Consulta")}
              </label>
              <textarea
                style={{
                  border: darkMode && " 2px solid rgb(255 255 255 / 79%)",
                }}
                name="project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder={t("Ponga su consulta")}
                required
              ></textarea>
            </div>

            <button
              className="button button--flex"
              style={{ background: "hsl(217.88deg 92.75% 62.16%)" }}
            >
              {t("Enviar mensaje")}
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
