import React from "react";

import "../css/ProjectBox.css";

const ProjectBox = ({ content }) => {
  return (
    <div className="project-box">
      <img
        className="project-box-img"
        src={`${process.env.PUBLIC_URL}/img/${content.image}.png`}
        alt="프로젝트 이미지"
      />
      <div className="project-box-info">
        <span>{content.type}</span>
        <span className="project-box-info-title">{content.title}</span>
        <span>{content.desc}</span>
        <div className="project-box-info-stacks">
          {content.stack.map((e) => (
            <div className="project-box-info-stack">{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
