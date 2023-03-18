import "./cronograph.css";

export default function Crono() {
  return (
    <div className="col col-6">
      <div id="mainCircle" className="row">
        <div className="col col-12 d-flex justify-content-center">
          <div id="horas1"></div>
        </div>
        <div id="packHoras" className="col col-12">
          <div id="manecilla" className="row col col-12">
            <div id="parteRoja" className="col col-6"></div>
            <div id="parteTransparente" className="col col-6"></div>
          </div>
          <div id="horas3"></div>
          <div id="horas4"></div>
        </div>
        <div className="col col-12 d-flex justify-content-center">
          <div id="horas2"></div>
        </div>
      </div>
    </div>
  );
}
