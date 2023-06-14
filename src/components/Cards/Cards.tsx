import React from "react";
import s from "./Cards.module.scss";
import { cardsData } from "@/data/cards";



const Cards = () => {
  return (
    <>
      {cardsData.map((card) => {
        return (
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
        );
      })}
    </>
  );
};

export default Cards;
