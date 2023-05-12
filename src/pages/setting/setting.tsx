import React from "react";
import s from "./Setting.module.scss";

const Setting = () => {
  return (
    <div className={s.setting}>
      <div className={s.setting__title}>
        <h1>Setting</h1>
        <h2>Welcome Setting Page</h2>
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

      <div className={s.userProfile}>
        <h1>User profile</h1>
        <div className={s.userProfile__content}>
          <h1>Full Name</h1>

        </div>

      </div>
    </div>
  );
};

export default Setting;
