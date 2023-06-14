import React, { useState } from "react";
import s from "./Collection.module.scss";
import Link from "next/link";
import Cards from "@/components/Cards/Cards";
import { cardsData } from "@/data/cards";
const index = () => {
  const [selectedType, setSelectedType] = useState("All");

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const filteredCardsData =
    selectedType === "All"
      ? cardsData
      : cardsData.filter((card) => card.type === selectedType);
  return (
    <section className={s.collection}>
      <div className={s.title}>
        <div className={s.title_desc}>
          <h4>Сайты для покупки</h4>
          <p>Welcome Collections Page</p>
        </div>
        <div className={s.setting__routing}>
          <Link href={"/"}>Home</Link>
          &gt;
          <Link href={"/collection"}>Collections</Link>
        </div>
      </div>
      <div className={s.button}>
      <p onClick={() => handleTypeClick('All')}>All</p>
        <p onClick={() => handleTypeClick('Artwork')}>Artwork</p>
        <p onClick={() => handleTypeClick('Book')}>Book</p>
      </div>
      <div className={s.cards}>
        <Cards />
      </div>
    </section>
  );
};

export default index;
