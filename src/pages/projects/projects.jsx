import Spline from "@splinetool/react-spline";
import "./projects.css";
// import { useState } from "react";

export default function Projects() {
  // const [showText, setShowText] = useState("Hello.");
  // const handleMouseEnter = (e) => {
  //   e.target.style.background = "grey";
  //   setShowText("About");
  // };
  return (
    <div id="father" className="container">
      <div className="row">
        <h4 className="projectTitles d-flex justify-content-center align-items-center">
          PROJECTS
        </h4>
        <div id="projectsContainer" className="row col col-12">
          <div className="cards col col-3">
            <Spline
              loading="lazy"
              id="spline"
              scene="https://prod.spline.design/z4tvbUbQ88wsVNDQ/scene.splinecode"
            />
            <p className="projectName">Design on demand</p>
          </div>
          <div className="cards col col-3">
            <Spline
              loading="lazy"
              id="spline1"
              scene="https://prod.spline.design/izhmGZXlCUMYnOYe/scene.splinecode"
            />
            <p className="projectName">Old luxury watches</p>
          </div>
          <div className="cards col col-3">
            <Spline
              loading="lazy"
              id="spline2"
              scene="https://prod.spline.design/D14WzbVtaSb090vf/scene.splinecode"
            />
            <p className="projectName">Reduce waste of food </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Projects() {
//   return (
//     <div>
//       <div id="projectsBody" className="container">
//         <div>Hi projects</div>
//         <div className="row">
//           <Spline
//             id="proy1"
//             scene="https://prod.spline.design/z4tvbUbQ88wsVNDQ/scene.splinecode"
//           />
//           <div className="col col-4"></div>
//           <div className="col col-4">Proyecto 2</div>
//           <div className="col col-4">Proyecto 3</div>
//         </div>
//       </div>
//     </div>
//   );
// }
