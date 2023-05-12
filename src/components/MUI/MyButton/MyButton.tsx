import React, { PropsWithChildren } from "react";
import s from "./MyButton.module.scss";

const MyButton = ({ children }: PropsWithChildren) => {
  return <button className={s.myButton}>{children}</button>;
};

export default MyButton;
