import React, { forwardRef, useState } from "react";

import "../css/Skills.css";
import SkillBox from "./SkillBox";

const Skills = forwardRef((props, ref) => {
  const [navArr, setArr] = useState([
    {
      id: 1,
      name: "Languages",
      active: true,
      stacks: [
        {
          name: "JavaScript",
          percent: 80,
        },
        {
          name: "HTML",
          percent: 70,
        },
        {
          name: "CSS",
          percent: 70,
        },
        {
          name: "JAVA",
          percent: 80,
        },
        {
          name: "C#",
          percent: 30,
        },
      ],
    },
    {
      id: 2,
      name: "Frontend",
      active: false,
      stacks: [
        {
          name: "React.js",
          percent: 80,
        },
        {
          name: "GraphQL",
          percent: 50,
        },
        {
          name: "Unity",
          percent: 30,
        },
        {
          name: "Android Studio",
          percent: 30,
        },
      ],
    },
    {
      id: 3,
      name: "etc.",
      active: false,
      stacks: [
        {
          name: "Git",
          percent: 70,
        },
        {
          name: "Slack",
          percent: 70,
        },
        {
          name: "Notion",
          percent: 70,
        },
        {
          name: "Figma",
          percent: 70,
        },
        {
          name: "Firebase",
          percent: 30,
        },
        {
          name: "MySQL",
          percent: 30,
        },
      ],
    },
  ]);

  const [stackArr, setStackArr] = useState(navArr[0].stacks);
  const onClick = (id) => {
    setArr(
      navArr.map((item) => {
        const elem = item;
        if (elem.id === id) {
          elem.active = true;
          setStackArr(elem.stacks);
        } else {
          elem.active = false;
        }
        return elem;
      })
    );
  };
  return (
    <section ref={(skillRef) => (ref.current[1] = skillRef)} className="skills">
      <div className="skills-title">Skills</div>
      <div className="skills-nav">
        {navArr.map((elem) => (
          <div>
            <button
              key={elem.id}
              type="button"
              className={
                elem.active
                  ? "skills__nav-item skills__nav-item--active"
                  : "skills__nav-item"
              }
              onClick={() => onClick(elem.id)}
            >
              <span>{elem.name}</span>
              <div className="skills__nav-item-bar" />
            </button>
          </div>
        ))}
      </div>
      <div className="skills-contents">
        {stackArr.map((item, index) => (
          <SkillBox id={index} skill={item} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
