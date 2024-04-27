import React, { useState } from "react";
import Menu from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./novedades.css";
import { useTranslation } from "react-i18next";

const Novedades = () => {
  const [items] = useState(Menu);
  const { t } = useTranslation();

  return (
    <section className="work container section" id="proyectos">
      <h2 className="section__title">{t("Novedades")}</h2>
      <span className="section__subtitle"></span>

      <Swiper
        className="work__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {items.map((elem) => {
          const { id, images, link } = elem;
          return (
            <SwiperSlide className="work__card" key={id}>
              <a href={link} target="_blank" rel="noreferrer">
                <img src={images} alt="" className="work__img" />
                <button className="btn">
                  <span>{t("VISITAR")}</span>
                </button>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Novedades;
