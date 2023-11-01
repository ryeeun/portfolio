import React, { forwardRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/Project.css";
import ProjectBox from "./ProjectBox";

const projectArr = [
  {
    id: 1,
    image: "pinning",
    type: "Android App",
    title: "Pinning",
    desc: "나만의 추억을 기록하는 맵 다이어리 애플리케이션",
    stack: ["Java", "Android Studio", "Firebase", "Kakao Map API"],
  },
  {
    id: 2,
    image: "metaverse",
    type: "Metaverse",
    title: "냉장고동 행복센터",
    desc: "취미 공유 인공지능 매칭 메타버스 플랫폼",
    stack: ["C#", "Unity", "Photon"],
  },
  {
    id: 3,
    image: "tecono",
    type: "Web",
    title: "T-ECONO",
    desc: "개발 기술 공유 블로그",
    stack: ["React", "JavaScript", "CSS", "HTML", "GraphQL"],
  },
  {
    id: 4,
    image: "Farmer",
    type: "Web",
    title: "Farmer",
    desc: "AI를 활용한 수확 예측 홈 파밍 애플리케이션",
    stack: ["React", "JavaScript", "CSS", "HTML", "PWA"],
  },
];

const Project = forwardRef((props, ref) => {
  // const [currIdx, setCurrIdx] = useState(0);
  const location = useLocation();
  const id = location.state !== null ? location.state.id : null;

  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    initialSlide : id === null ? 0 : id - 1,
    slidesToShow: 1,
    arrows: true,
    speed: 700,
    centerPadding: "25%",
  };

  return (
    <section
      ref={(projectRef) => (ref.current[2] = projectRef)}
      className="project"
    >
      <div className="project-top">
        <div className="project-bar" />
        <span className="project-title">Project</span>
      </div>
      <span>{id}</span>
      <Slider {...settings}>
        {projectArr.map((e) => (
          <ProjectBox id={e.id} content={e} />
        ))}
      </Slider>
    </section>
  );
});

export default Project;
