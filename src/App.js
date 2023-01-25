import "./App.scss";
import { Routes, Route } from "react-router-dom";

//pages
import Main from "./pages/main/main";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import FH from "./pages/fh/fh";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="fotonenes" element={<FH />} />
        <Route path="/" element={<Main />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
