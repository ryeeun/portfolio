import React, { forwardRef } from "react";

import "../css/AboutMe.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section
      ref={(aboutRef) => (ref.current[0] = aboutRef)}
      className="about-me"
    >
      <div className="about-me-left">
        <span className="about-me-name">LEE HYE EUN</span>
        <p className="about-me-frontend">FRONTEND DEVELOPER</p>
      </div>
      <img
        className="about-me-img"
        src={`${process.env.PUBLIC_URL}/img/me_.jpg`}
        alt="profile"
      />
      <div className="about-me-text">
        <div className="about-me-box about-me-box-left">
          <span>Email</span>
          <span>Education</span>
          <span>Github</span>
          <span>Blog</span>
        </div>
        <div className="about-me-box about-me-box-right">
          <span>iiryeun@gmail.com</span>
          <span>전남대학교 졸업 (산업공학 전공 / 소프트웨어공학 복수전공)</span>
          <a
            href="https://github.com/ryeeun"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/ryeeun
          </a>
          <a
            href="https://flfpdms753.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://flfpdms753.tistory.com/
          </a>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
