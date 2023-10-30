import React, { useState } from "react";

import "../css/ProjectBox.css";
import ProjectInfo from "./ProjectInfo";

const ProjectBox = ({ content }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const onClick = () => {
    setOpenInfo((cur) => !cur);
  };
  return (
    <div className="project-box">
      <img
        className="project-box-img"
        src={`${process.env.PUBLIC_URL}/img/${content.image}.png`}
        alt="프로젝트 이미지"
      />
      <div className="project-box-info">
        <span className="project-box-intfo-type">{content.type}</span>
        <span className="project-box-info-title">{content.title}</span>
        <span className="project-box-info-desc">{content.desc}</span>
        <div className="project-box-info-stacks">
          {content.stack.map((e) => (
            <div className="project-box-info-stack">{e}</div>
          ))}
        </div>
      </div>
      <button className="project-box-open" onClick={() => onClick()}>
        +
      </button>
      {openInfo && <ProjectInfo />}
    </div>
  );
};

export default ProjectBox;
