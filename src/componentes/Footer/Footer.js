import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="cont-header">
      <div className="col">
        <Card 
        
         className="pie-pagina"   bg="dark" variant="dark">
        
          <Card.Header className="seee">
            <img className="pequeña" src="/LogoTV.png" />
            Servicsofts
          </Card.Header>
          <Card.Body>
         
            <div className="red-social"></div>
            <div className="medio">
              <a>
                <img src="/LogoTV.png" />
              </a>
            </div>
            <footer className="blockquote-footer">
              Todos derechos reservados de auto
              <cite title="Source Title"> FELIPE BANGUERO ARRECHEA</cite>
              <br /> correo electronico
              <cite title="Source Title"> fbanguero4@misena.edu.co</cite>
            </footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Footer;
