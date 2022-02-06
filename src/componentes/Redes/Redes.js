import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Redes() {
  return (
    <div className="felipe">

    
        <div className="body">
          <div className="Filip">
            <Carousel style={{ width: "28rem" }}>
              <Carousel.Item>
                <img
                  className="Filip"
                  src="pexels-artem-podrez-8985518.jpg"
                  alt="Elva dressed as a fairy"
                />
                <Carousel.Caption />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Filip"
                  src="car-1281640_640.jpg"
                  alt="Elva dressed as a fairy"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Filip"
                  src="mal.jpg"
                  alt="Elva dressed as a fairy"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <h1 className="section-h1"> REDES SOCIALES </h1>

          <p>
            <div className="exampleone">
              Soporte sitio, cualquier inconveniente se puede comunicar con
              estas redes sociales disponible. Te ayudaremos a resolver tus
              inconvenientes respectando la información administrada.
              <div>
                <a href="http://www.facebook.com/philip.flp/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                    alt=""
                    width="45px"
                  />
                </a>
                <a href="https://www.instagram.com/philip_bangue/?hl=es">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt=""
                    width="45px"
                  />
                </a>
                <a href="https://whatsapp.com/dl/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt=""
                    width="45px"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1635173090~hmac=2642d00616bc472b8afd3060d5bbcd1a"
                    alt=""
                    width="45px"
                  />
                </a>
                <br />
                <br />
                
              </div>
            </div>
          </p>
        </div>
     

 
    </div>
    
  );
}

export default Redes;
