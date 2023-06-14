import React from "react";
import s from "./Main.module.scss";
import Cards from "@/components/Cards/Cards";
import CarouselOfCards from "@/components/CarouselOfCards/CarouselOfCards";
import Link from "next/link";
const Main = () => {
  return (
    <section className={s.main}>
      <div className={s.InfoBlock}>
      </div>
      <div className={s.desc_filter_of_cards}>
        <div className={s.title}>
          <h4>ВСЕ МАКЕТЫ</h4>
        </div>
        <div className={s.more}>
          <Link href='/collection'><h4>ПОСМОТРЕТЬ ЕЩЁ</h4></Link>
        </div>
      </div>
      <div className={s.cards}>
        <CarouselOfCards />
      </div>
    </section>
  );
};

export default Main;
