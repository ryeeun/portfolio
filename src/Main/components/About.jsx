import React, { forwardRef } from "react";

import "../css/About.css";

const About = forwardRef((props, ref) => {
  const charArr = "Portfolio".split("");
  return (
    <div className="about">
      <div className="about-background">
        <div className="about-text-box">
          <div className="about-text-big">
            {charArr.map((ch, index) => (
              <span
                className="about-text-big-ch"
                style={{
                  animation: `change 500ms ${500 + index * 50}ms forwards`,
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f2f2f2"
          fill-opacity="1"
          d="M0,128L80,122.7C160,117,320,107,480,122.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <section
        ref={(aboutRef) => (ref.current[0] = aboutRef)}
        className="about-me"
      >
        <div className="about-me-left">
          <span className="about-me-name">LEE HYE EUN</span>
          <p className="about-me-frontend">FRONTEND DEVELOPER</p>
        </div>
        <div className="about-me-img"></div>
        <div className="about-me-text">
          <div className="about-me-box about-me-box-left">
            <span>Email</span>
            <span>Education</span>
            <span>Github</span>
            <span>Blog</span>
          </div>
          <div className="about-me-box about-me-box-right">
            <span>iiryeun@gmail.com</span>
            <span>
              전남대학교 졸업 (산업공학 전공 / 소프트웨어공학 복수전공)
            </span>
            <a
              href="https://github.com/ryeeun"
              target="_blank"
              rel="noopener noreferrer"
            >
              ryeeun
            </a>
            <a
              href="https://flfpdms753.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tistory
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
