import React, { FC, useState } from "react";
import s from "./Order.module.scss";
import cn from "classnames";
import Image from "next/image";

import { Data } from "@/data/orders";

interface OrderProps {
  order: Data;
  removeOrder: (
    order: Data,
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
}

const Order: FC<OrderProps> = ({ order, removeOrder }) => {
  // ----------------------------------------------------------------
  // Для анимации когда чекбокс активна
  const [isChecked, setIsChecked] = useState<boolean | null>(null);  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={isChecked ? cn(s.order, s.orderActive) : s.order}>
      <input type="checkbox" onChange={handleCheckboxChange} />

      <div className={s.order__info}>
        <Image src={order.imageFirst} alt="order image" />
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

      <p>{order.date}</p>

      <span onClick={(event) => removeOrder(order, event)}>X</span>
    </div>
  );
};

export default Order;
