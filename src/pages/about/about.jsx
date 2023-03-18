import { Button } from "react-bootstrap";
import BB from "../resourcesbyme/backbutton";
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <div className="row ">
        <div className="row col col-12 d-flex justify-content-center align-items-center ">
          <BB id="bckBtn" className="col col-3"></BB>
          <h4 className="projectTitles col col-9">ABOUT</h4>
        </div>

        <div id="projectsContainer" className="row col col-12">
          <p>
            Hi, i'm Alan and i like to work on fullstack projects. I'm working
            as a application support analyst in a company related to finance and
            insurance.
            <br></br>
            I've worked on some projects like: web pages, web apps and supoort.
            I started doing frontend, but i hope to be working as a Fullstack
            dev.
            <br></br>
            <br></br> Some of the technologies i work with:
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>CSS 3</li>
            <li>HTML 5</li>
            <li>REACT</li>
            <li>GIT / GITHUB</li>
            <li>UNQORK</li>
          </p>
          <p>
            I have a bachelor's degree in architecture, most of my career and
            professional path worked in Arch viz, so my skills also are good in
            3D modelling, graphics, 3D web technologies as Spline.{" "}
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
