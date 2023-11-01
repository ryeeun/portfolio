import React from "react";

import "../css/ProjectDetails.css";

const ProjectDetails = ({ details }) => {
  return (
    <div className="project-details">
      <span className="project-details-type">프로젝트 소개</span>
      <span className="project-details-content">{details.desc}</span>
      <span className="project-details-type">수행기간</span>
      <span className="project-details-content">{details.period}</span>
      <span className="project-details-type">기술스택</span>
      <span className="project-details-stacks">
        {details.stack.map((e) => (
          <div className="project-details-stack">{e}</div>
        ))}
      </span>
      <span className="project-details-type">팀 구성</span>
      <span className="project-details-content">{details.team}</span>
      <span className="project-details-type">링크</span>
      <a
        className="project-details-content"
        href={details.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {details.link}
      </a>
    </div>
  );
};

export default ProjectDetails;
