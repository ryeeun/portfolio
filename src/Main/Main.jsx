import React, { useRef } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";

const Main = () => {
  const scrollRef = useRef([]);
  return (
    <div className="main">
      <Header scrollRef={scrollRef} />
      <About />
      <AboutMe ref={scrollRef} />
      <Skills ref={scrollRef} />
      <Project ref={scrollRef} />
    </div>
  );
};

export default Main;
