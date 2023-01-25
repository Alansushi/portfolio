import Spline from "@splinetool/react-spline";
import logofh from "./fh.jpg";
import "./fh.css";
export default function FH() {
  return (
    <div>
      <div className="bar">
        <div>
          <img loading="lazy" src={logofh} className="fhlogo" alt="myPhoto" />
          <h2 id="fhtitle">FOTO HÉRCULES</h2>
          <div id="navBar">
            <a className="link">Rev/Scan</a>
            <a className="link">Tienda</a>
            <a className="link">Nosotros</a>
            <a className="link">Tarjeta de regalo</a>
          </div>
        </div>
      </div>
      <div id="landingInfo">
        <h1 id="slogan">"Escribe tu historia"</h1>
        <h4 id="mainText">
          Trabajamos para ti. Creemos que nuestro lugar en el mundo es dentro
          del proceso de construcción de la imagen. Nos encanta ser parte de una
          forma de expresión de tantas y tantas personas.{" "}
        </h4>
        <button id="revBtn">Revela con Nosotros</button>
      </div>

      <Spline
        id="polaroid"
        scene="https://prod.spline.design/BrFbuTMF80ICo01p/scene.splinecode"
      />
      <footer>
        <p>Foto Hércules 2023 ©</p>
        <p>fotoherculeslab@gmail.com</p>
        <p>
          Av. Colonia Del Valle 316, int 1, Colonia Del Valle, Benito Juárez,
          Ciudad de México.
        </p>
        <p>
          Horarios de servicio: Lunes - Viernes: 11 - 18 hrs. Sábado: 11-15 hrs.
        </p>
      </footer>
    </div>
  );
}
