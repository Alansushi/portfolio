import Spline from "@splinetool/react-spline";
import "./projects.css";

export default function Projects() {
  return (
    <div id="father">
      <div className="row">
        <h4 className="titles">Diseñamos tus espacios</h4>
        <div id="spline">
          <Spline scene="https://prod.spline.design/z4tvbUbQ88wsVNDQ/scene.splinecode" />
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
