import React, { PropsWithChildren } from "react";
import s from "./SettingCard.module.scss";
import MyButton from "../MUI/MyButton/MyButton";
import MyLabel from "../MUI/MyLabel/MyLabel";

interface SettingCardProps {
  title: string;
}

const SettingCard: React.FC<PropsWithChildren<SettingCardProps>> = ({
  children,
  title,
}) => {
  return (
    <div className={s.setting__card}>
      <h1 className={s.card__title}>{title}</h1>
      <div className={s.card__content}>{children}</div>
    </div>
  );
};

export default SettingCard;
