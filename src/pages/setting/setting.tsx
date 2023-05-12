import React from "react";
import s from "./setting.module.scss";
import setting from "../../../public/pick file.svg";

import MyLabel from "@/components/MUI/MyLabel/MyLabel";
import Image from "next/image";
import MyButton from "@/components/MUI/MyButton/MyButton";
import SettingCard from "@/components/SettingCard/SettingCard";
import Link from "next/link";

const Setting = () => {
  return (
    <div className={s.setting}>
      <div className={s.setting__title}>
        <div>
          <h1>Setting</h1>
          <h2>Welcome Setting Page</h2>
        </div>

        <div className={s.setting__routing}>
          <Link href={"/orders/orders"}>Bids</Link>
          &gt;
          <Link href={"/setting/setting"}>Setting</Link>
        </div>
      </div>

      <nav className={s.setting__nav}>
        <ul className={s.setting__list}>
          <li>Profile</li>
          <li>Application</li>
          <li>Security</li>
          <li>Activity</li>
          <li>Payment Method</li>
          <li>API</li>
        </ul>
      </nav>

      <div className={s.setting__cards}>
        <div className={s.setting__top}>
          <SettingCard title={"User profile"}>
            <MyLabel>Full Name</MyLabel>
            <div className={s.card__info}>
              <Image src={setting} alt="Setting image"></Image>

              <div className={s.card__fullname}>
                <h1>John Smith</h1>
                <h2>Welcome Setting Page</h2>
              </div>
            </div>
            <MyButton>Save</MyButton>
          </SettingCard>

          <SettingCard title={"Update Profile"}>
            <MyLabel>Email</MyLabel>
            <MyLabel>Password</MyLabel>
            <MyButton>Save</MyButton>
          </SettingCard>
        </div>

        <SettingCard title={"Personal Information"}>
          <div className={s.personal}>
            <div className={s.personal__item}>
              <MyLabel>Info</MyLabel>
              <MyLabel>Info</MyLabel>
              <MyLabel>Info</MyLabel>
            </div>

            <div className={s.personal__item}>
              <MyLabel>Info</MyLabel>
              <MyLabel>Info</MyLabel>
              <MyLabel>Info</MyLabel>
            </div>
          </div>
          <MyButton>Info</MyButton>
        </SettingCard>
      </div>
    </div>
  );
};

export default Setting;
