import React, { PropsWithChildren } from "react";
import s from "./MyLabel.module.scss";

const MyLabel = ({ children }: PropsWithChildren) => {
  return (
    <label className={s.myLabel}>
      {children}
      <input className={s.myInput}></input>
    </label>
  );
};

export default MyLabel;
