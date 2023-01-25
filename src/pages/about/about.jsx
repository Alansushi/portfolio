import { Button } from "react-bootstrap";
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <div className="row ">
        <h4 className="projectTitles d-flex justify-content-center align-items-center">
          ABOUT
        </h4>
        <div id="projectsContainer" className="row col col-12">
          <p>
            Hola, me llamo Alan me gusta trabajar en el desarrollo fullstack.
            Actualmente trabajo como analista de soporte de aplicaciones en una
            empresa del giro de seguro.<br></br> He participado en algunos
            proyectos de páginas web para comercios. Empecé con front end, y en
            unos meses espero estar trabajando como fullstack developer.
            <br></br>
            <br></br> Los conocimientos que tengo de esta área son:
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>CSS 3</li>
            <li>HTML 5</li>
            <li>REACT</li>
            <li>GIT / GITHUB</li>
            <li>UNQORK</li>
          </p>
        </div>
        <Button
          className="d-flex justify-content-center align-items-center"
          id="cv"
        >
          C.V.
        </Button>
      </div>
    </div>
  );
}
