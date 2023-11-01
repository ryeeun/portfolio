import React, { useEffect, useState, useRef } from "react";

import "../css/Header.css";

const Header = ({ scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  return (
    <div
      className={
        scrollPosition < 100 ? "header header-top" : "header header-change"
      }
    >
      <ul className="header-ul">
        <li
          ref={(ref) => (navRef.current[0] = ref)}
          className="header-ul-item"
          onClick={() => setNavIndex(0)}
        >
          ABOUT
        </li>
        <li
          ref={(ref) => (navRef.current[1] = ref)}
          className="header-ul-item"
          onClick={() => setNavIndex(1)}
        >
          SKILL
        </li>
        <li
          ref={(ref) => (navRef.current[2] = ref)}
          className="header-ul-item"
          onClick={() => setNavIndex(2)}
        >
          PROJECT
        </li>
      </ul>
    </div>
  );
};

export default Header;
