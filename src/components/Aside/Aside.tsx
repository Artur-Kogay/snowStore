import React from "react";
import Link from "next/link";
import s from "./Aside.module.scss";

const Aside = () => {
  return (
    <div className={s.main}>
      <div className={s.main_aside}>
        <div className={s.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={s.main_aside_navigation_top}>
          <Link href="#">
            <img src="/dashBoard.svg" alt="image" />
          </Link>
          <Link href="#">
            <img src="/heart.svg" alt="image" />
          </Link>
          <Link href="#">
            <img src="/Collection.svg" alt="image" />
          </Link>
          <Link href="#">
            <img src="/Profile.svg" alt="image" />
          </Link>
          <Link href="#">
            <img src="/setting.svg" alt="image" />
          </Link>
        </div>
        <div className={s.main_aside_navigation_bottom}>
          <Link href="#">
            <img src="/sign-out.svg" alt="image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aside;
