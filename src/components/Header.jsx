import React, { useEffect, useState } from "react";

import "../css/Header.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div
      className={
        scrollPosition < 100 ? "header header-top" : "header header-change"
      }
    >
      <ul className="header-ul">
        <li className="header-ul-item">ABOUT</li>
        <li className="header-ul-item">SKILL</li>
        <li className="header-ul-item">PROJECT</li>
      </ul>
    </div>
  );
};

export default Header;
