import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className="container">
      <header className={s.header}>
        <div className={s.header_search}>
          <label>
            <img src="/Search.png" alt="search" />
            <input type="text" placeholder="Search here" />
          </label>
        </div>
        <div className={s.header_tools}>
          <img src="/mode.png" alt="image" />
          <img src="/bell.png" alt="image" />
          <div>
            <img src="/avatar.png" alt="image" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
