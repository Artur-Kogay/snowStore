import { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import s from "./Layouts.module.scss";

const Layouts = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.main}>
      <div className={s.main_left}>
        <Aside />
      </div>
      <div className={s.main_right}>
        <Header />
        {children}
      </div>    
    </div>
  );
};

export default Layouts;
