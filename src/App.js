import "./App.scss";
import { Routes, Route } from "react-router-dom";

//pages
import Main from "./pages/main/main";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
