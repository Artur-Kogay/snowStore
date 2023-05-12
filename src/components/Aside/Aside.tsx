import React from "react";
import Link from "next/link";
import s from "./Aside.module.scss";
import { useRouter } from "next/router";

const Aside = () => {
  const route = useRouter();

  return (
    <div className={s.main}>
      <div className={s.main_aside}>
        <div className={s.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={s.main_aside_navigation_top}>
          <Link href="/">
            {route.pathname === "/" ? (
              <img src="/dashBoardActive.svg" alt="image" />
            ) : (
              <img src="/dashBoard.svg" alt="image" />
            )}
          </Link>
          <Link href="/orders/orders">
            {route.pathname === "/orders/orders" ? (
              <img src="/orderActive.svg" alt="image" />
            ) : (
              <img src="/order.svg" alt="image" />
            )}
          </Link>
          <Link href="#">
            <img src="/heart.svg" alt="image" />
          </Link>
          <Link href="#">
            <img src="/collection.svg" alt="image" />
          </Link>
          <Link href="/setting/setting">
            {route.pathname === "/setting/setting" ? (
              <img src="/profileActive.svg" alt="image" />
            ) : (
              <img src="/profile.svg" alt="image" />
            )}
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
