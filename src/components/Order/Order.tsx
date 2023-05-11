import React, { FC } from "react";
import s from "./Order.module.scss";
import Image from "next/image";
import { Data } from "../Orders/Orders";

interface OrderProps {
  order: Data;
}

const Order: FC<OrderProps> = ({ order }) => {
  console.log(order);

  return (
    <div className={s.order}>
      <input type="checkbox" />
      <div className={s.order__info}>
        <Image
          className={s.order__image}
          src={order.imageFirst}
          alt="order image"
        />
        <div>
          <h1>{order.title}</h1>
          <h2>{order.fullname}</h2>
        </div>
      </div>
      <p>{order.price}</p>
      <div className={s.order__info}>
        <Image src={order.imageSecond} alt="order image" />
        <p>{order.price}</p>
      </div>
      <span>{order.date}</span>
      <span>X</span>
    </div>
  );
};

export default Order;
