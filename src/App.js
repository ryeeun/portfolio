import "./App.css";
import { useRef } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  const scrollRef = useRef([]);
  return (
    <div className="App">
      <Header scrollRef={scrollRef} />
      <About ref={scrollRef} />
      <Skills ref={scrollRef} />
      <Project ref={scrollRef} />
    </div>
  );
}

export default App;
