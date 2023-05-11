import React, { FC, useState } from "react";
import s from "./Orders.module.scss";
import Order from "../Order/Order";
import Image from "next/image";

import imageFirst from "../../../public/markFirst.svg";
import imageSecond from "../../../public/markSecond.svg";
import imageThird from "../../../public/markThird.svg";
import imageFour from "../../../public/markFour.svg";
import { Data, data } from "@/data/orders";
import MyButton from "../MUI/MyButton/MyButton";

const Orders: FC = () => {
  // Состояние - данный заказов
  const [ordersData, setOrdersData] = useState(data);

  // Функция - для удаление карточек
  const removeOrder = (
    item: Data,
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOrdersData(ordersData.filter((current) => current.id !== item.id));
  };

  return (
    <div className={s.basket}>
      <div className={s.bids}>
        <div className={s.bids__title}>
          <div>
            <h1>Bids</h1>
            <h2>Welcome Bids Page</h2>
          </div>
          <div className={s.bids__routing}>
            <span>Bids </span>
            &gt;
            <span> Home</span>
          </div>
        </div>

        <div className={s.bidsCards}>
          <div className={s.bidsCard}>
            <Image src={imageFirst} alt="Mark" />
            <div className={s.bidsCard__text}>
              <h1>24K</h1>
              <p>Artworks</p>
            </div>
          </div>

          <div className={s.bidsCard}>
            <Image src={imageSecond} alt="Mark" />
            <div className={s.bidsCard__text}>
              <h1>24K</h1>
              <p>Artworks</p>
            </div>
          </div>

          <div className={s.bidsCard}>
            <Image src={imageThird} alt="Mark" />
            <div className={s.bidsCard__text}>
              <h1>24K</h1>
              <p>Artworks</p>
            </div>
          </div>

          <div className={s.bidsCard}>
            <Image src={imageFour} alt="Mark" />
            <div className={s.bidsCard__text}>
              <h1>24K</h1>
              <p>Artworks</p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.orders}>
        <div className={s.orders__title}>
          <h1>Active Bids</h1>
          <MyButton>Place a Bid</MyButton>
        </div>

        <ul className={s.orders__description}>
          <li>
            <input type="checkbox" />
          </li>
          <li>Item List</li>
          <li>Open Price</li>
          <li>Recent Offer</li>
          <li>Time Left</li>
          <li>Action</li>
        </ul>

        {ordersData.map((item: Data) => {
          return <Order key={item.id} order={item} removeOrder={removeOrder} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
