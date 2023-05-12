import React, { ChangeEvent, FC, useEffect, useState } from "react";
import s from "./Orders.module.scss";
import Image from "next/image";
import { Data, data } from "@/data/orders";
import imageFirst from "../../../public/markFirst.svg";
import imageSecond from "../../../public/markSecond.svg";
import imageThird from "../../../public/markThird.svg";
import imageFour from "../../../public/markFour.svg";

import Order from "../../components/Order/Order";
import MyButton from "../../components/MUI/MyButton/MyButton";

const Orders: FC = () => {
  // Состояние - данный заказов
  const [ordersData, setOrdersData] = useState<Data[]>(data);

  // Функция - для удаление карточек
  const removeOrder = (
    order: Data,
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setOrdersData(ordersData.filter((current) => current.id !== order.id));
  };

  // ----------------------------------------------------------------
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
    const result = ordersData.every((item) => item.checked === true);
    setIsChecked(result);
  }, [ordersData]);
 
  // Функция - для установки состояния всех чекбоксов
  const handleMainCheckboxChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    setOrdersData(
      ordersData.map((item) => {
        return {
          ...item,
          checked: target.checked,
        };
      })
    );
  };

  // Функция - для установки состояния отдельного чекбокса
  const handleCheckboxChange = (id: number) => {
    setOrdersData(
      ordersData.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
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
            <input type="checkbox" checked={isChecked} onChange={handleMainCheckboxChange} />
          </li>
          <li>Item List</li>
          <li>Open Price</li>
          <li>Recent Offer</li>
          <li>Time Left</li>
          <li>Action</li>
        </ul>

        {ordersData.map((item: Data) => {
          return (
            <Order
              key={item.id}
              order={item}
              handleCheckboxChange={handleCheckboxChange}
              removeOrder={removeOrder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
