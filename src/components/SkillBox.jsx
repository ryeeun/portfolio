import React from "react";

import "../css/SkillBox.css";

const SkillBox = ({ skill }) => {
  return (
    <div className="skill-box">
      <img
        className="skill-box-img"
        src={
          skill.name == "C#"
            ? `${process.env.PUBLIC_URL}/img/C샵.png`
            : `${process.env.PUBLIC_URL}/img/${skill.name}.png`
        }
        alt={skill.name}
      />
      <div className="skill-box-detail">
        <div className="skill-box-name">{skill.name}</div>
        <div className="skill-box-bar">
          <div
            className="skill-box-bar-percent"
            style={{
              width: `${skill.percent}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
