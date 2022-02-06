import React from "react";
import "./Border.css";
import Carousel from "react-bootstrap/Carousel";

function Border() {
  return (

    
    <div >
        
      <div className="felipe">
        <div className="Filip">
          <Carousel style={{ width: "28rem" }}>
            <Carousel.Item>
              <img className="Filip" src="istockphoto-1157179147-612x612.jpg"  alt="Elva dressed as a fairy" />
              <Carousel.Caption />
            </Carousel.Item>
            <Carousel.Item>
              <img className="Filip" src="pexels-daniel-queiroz-10061763.jpg"  alt="Elva dressed as a fairy" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="Filip"
                src="pexels-george-sultan-1409999.jpg"  alt="Elva dressed as a fairy"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <h1 className="ready"> BIENVENIDOS </h1>
      
          <h1 className="section-h1"> Servicsofts </h1>
          <div className="exampleo">
            Bienvenidos nuestro Servicio de Servicsoft, en esta oportunidad presentaremos informes de vehiculos.
            </div>
         
          <p className="exampleone" >
          <div>
             El mejor rendimiento de  su vehiculo es la seguridad, 
              administra los datos para su efectiva información .
              
              </div>
              </p>
            
              
            </div>
            </div>
        
         
      
      


  );
}

export default Border;
