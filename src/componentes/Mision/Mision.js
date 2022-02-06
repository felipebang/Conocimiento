import React from "react";
import "./Mision.css";
function Mision() {
  return (
    <div>
      {/**section */}
      <main>
        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="mision">
              Mision
            </h1>
            <p>
              La misión empresarial es el conjunto de objetivos generales y
              principios de trabajos para avanzar en una organización.
            </p>
          </div>
          <div className="container-img">
            <img
              src="BMW_Individual_8-Series_2019_M850i_XDrive_Night_559958_600x337.jpg"
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="vision">
              Vision
            </h1>
            <p>
              La visión de una empresa describe el objetivo que espera lograr en
              un futuro. 
            </p>
          </div>
          <div className="container-img">
            <img
              src="489255_prev_490_489255.jpg"
              className="img-svg"
            />
          </div>
        </section>

        <section className="container-section">
          <div className="container-titulo1">
            <h1 className="section-h1" id="historia">
              Historia
            </h1>
            <p>
              La historia de la empresa es Brindarle la mejor herramientas y asesoría al nuestro cliente. Con la ayuda de servicsoft lograremos proyectos, que nos ayudarlas facilita y utilizar nuestras consulta. 
            </p>
          </div>
          <div className="container-img">
            <img
              src="413490_prev_414_413490.jpg"
              className="img-svg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Mision;
