import React, { FC } from "react";
import s from "./Orders.module.scss";
import Order from "../Order/Order";
import Image from "next/image";

import imageFirst from "../../../public/Mark.svg";
import imageSecond from "../../../public/Mark.svg";
import imageThree from "../../../public/Mark.svg";

export interface Data {
  title: string;
  fullname: string;
  date: string;
  price: string;
  imageFirst: string;
  imageSecond: string;
}

const Orders: FC = () => {
  const data: Data[] = [
    {
      title: "Cute Cube Cool",
      fullname: "John Abraham",
      date: "2 Hours 1 min 30s	",
      price: "0.0025 ETH",
      imageFirst: require("../../../public/NFT.png"),
      imageSecond: require("../../../public/order.png"),
    },
    // {
    //   title: "Liquid Wave",
    //   fullname: "John Abraham",
    //   date: "2 Hours 1 min 30s	",
    //   price: 0.0025,
    //   image: "../../../public/NFT (1).png",
    // },
    // {
    //   title: "Cute Cube Cool",
    //   fullname: "John Abraham",
    //   date: "2 Hours 1 min 30s	",
    //   price: 0.0025,
    //   image: "../../../public/NFT (2).png",
    // },
    // {
    //   title: "Liquid Wave",
    //   fullname: "John Abraham",
    //   date: "2 Hours 1 min 30s	",
    //   price: 0.0025,
    //   image: "../../../public/NFT (3).png",
    // },
    // {
    //   title: "Liquid Wave",
    //   fullname: "John Abraham",
    //   date: "2 Hours 1 min 30s	",
    //   price: 0.0025,
    //   image: "../../../public/NFT (4).png",
    // },
  ];

  return (
    <div className={s.basket}>

      <div className={s.bids}>

        <h1>Bids</h1>
        <h2>Welcome Bids Page</h2>

       <div className={s.bidsCards}>
       <div className={s.bidsCard}>
          <Image src={imageFirst} alt="Mark" />
          <div className={s.bidsCard__text}>
            <h1>24K</h1>
            <p>Artworks</p>
          </div>
        </div>

        <div className={s.bidsCard}>
          <Image src={imageFirst} alt="Mark" />
          <div className={s.bidsCard__text}>
            <h1>24K</h1>
            <p>Artworks</p>
          </div>
        </div>

        <div className={s.bidsCard}>
          <Image src={imageFirst} alt="Mark" />
          <div className={s.bidsCard__text}>
            <h1>24K</h1>
            <p>Artworks</p>
          </div>
        </div>

        <div className={s.bidsCard}>
          <Image src={imageFirst} alt="Mark" />
          <div className={s.bidsCard__text}>
            <h1>24K</h1>
            <p>Artworks</p>
          </div>
        </div>
       </div>

      </div>

      <div className={s.orders}>
        <h1 className={s.orders__title}>Active Bids</h1>
        <div>
          <ul className={s.orders__description}>
            <input type="checkbox" />
            <li>Item List</li>
            <li>Open Price</li>
            <li>Recent Offer</li>
            <li>Time Left</li>
            <li>Action</li>
          </ul>
          {data.map((item: Data) => {
            return <Order order={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
