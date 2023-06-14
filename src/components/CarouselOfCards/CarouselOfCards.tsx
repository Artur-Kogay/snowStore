import React from "react";
import s from "./CarouselOfCards.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { cardsData } from "@/data/cards";
import "swiper/css";
import Cards from "../Cards/Cards";
const CarouselOfCards: React.FC = () => {
  return (
    <div className={s.carouselOfCards}>
      <Swiper
        className="swiperCard"
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
           // when window width is >= 640px
           768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024:{
            slidesPerView:2,
            spaceBetween:20,
          },
          1366:{
            slidesPerView:2,
            spaceBetween:10,
          },
          1440:{
            slidesPerView:3,
            spaceBetween:20,
          }
        }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={s.card}>
              <div className={s.image}>
                <img src="./NFT.png" alt="img" />
              </div>
              <div className={s.discription}>
                <div className={s.info}>
                  <div className={s.left_side}>
                    <h3 style={{ color: "#ffffff" }} className={s.name}>
                      {card.name}
                    </h3>
                    <h4 style={{ color: "#ffffff" }}>{card.desc}</h4>
                    <p style={{ color: "#6C7AA0" }}>{card.hour}</p>
                  </div>
                  <div className={s.right_side}>
                    <p style={{ color: "#FFFFFF" }}>{card.type} page</p>
                    <p style={{ color: "#5584FD" }}>{card.eth} ETH</p>
                    <p style={{ color: "#6C7AA0" }}>0.15 ETH</p>
                  </div>
                </div>
              </div>
              <div className={s.btn}>
                <button>Place a Bid</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselOfCards;
