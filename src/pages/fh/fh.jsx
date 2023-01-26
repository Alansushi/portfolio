import Spline from "@splinetool/react-spline";
import logofh from "./fh.jpg";
import img1 from "./Foto2.jpg";
import img2 from "./Foto21.jpg";
import img3 from "./Foto28.jpg";
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
            <div className="linkb">
              <svg
                className="icon"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path
                  className="uwu"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <svg
                className="icon"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  className="uwu"
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        id="landingInfo"
        className="row d-flex justify-content-center align-items-center"
      >
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

      <div className="examples container">
        <div className="imgcard">
          <img
            loading="lazy"
            src={img1}
            className="imgexamples"
            alt="myPhoto"
          />
          <h5 className="imgTitles">Revelado y escaneado</h5>
          <p className="services">
            Procesos C-41, blanco y negro, E-6, ECN-2. Escaneamos en Noritsu y
            Frontier.
          </p>
        </div>
        <div className="imgcard">
          <img
            loading="lazy"
            src={img2}
            className="imgexamples"
            alt="myPhoto"
          />
          <h5 className="imgTitles">Venta de film y equipo análogo</h5>
          <p className="services">
            Amplio stock de rollos de 35 y 120 color y B&W. Si no encuentras el
            que quieres, te lo conseguimos.
          </p>
        </div>
        <div className="imgcard">
          <img
            loading="lazy"
            src={img3}
            className="imgexamples"
            alt="myPhoto"
          />
          <h5 className="imgTitles">Reparación de equipo</h5>
          <p className="services">
            Contamos con servicio de mantenimiento preventivo y correctivo para
            mantener tus dispositivos.
          </p>
        </div>
      </div>
      <footer>
        <p>Foto Hércules 2023 ©</p>
        <p>fotoherculeslab@gmail.com</p>
        <p>
          Av. Colonia Del Valle 316, int 1, Colonia Del Valle, Benito Juárez,
          Ciudad de México.
        </p>
        <p>Horarios de servicio:</p>
        <p> Lunes - Viernes: 11 - 18 hrs. Sábado: 11-15 hrs.</p>
      </footer>
    </div>
  );
}
