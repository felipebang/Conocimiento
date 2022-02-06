import React from "react";

import { Card } from "react-bootstrap";
import './Segurida.css'

function Segurida() {
  return (
    <div className="body">
      
      
      
    
 
        <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="dashboard-3510327_640.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Seguridad activa y pasiva del vehículo</Card.Title>
            <Card.Text>
            Funcionan en los vehículos con el fin de proteger la vida del conductor.
            </Card.Text>
            <div className="cont-btn">
              
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="Maserati_Salons_Steering_wheel_Leather_588724_599x450.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Seguridad activa</Card.Title>
            <Card.Text>
 contribuyen a proporcionar una mayor eficacia y estabilidad al vehículo en marcha.
            </Card.Text>
            <div className="cont-btn">
          
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="pexels-pixabay-248747.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Seguridad pasiva</Card.Title>
            <Card.Text>
            Son los elementos que reducen al mínimo los daños que se pueden producir.
            </Card.Text>
            <div className="cont-btn">
             
            </div>
          </Card.Body>
        </Card>
        
      </div>    
      <br />    
   
      
        </div>
    
   
  );
}

export default Segurida;
