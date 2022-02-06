import React from "react";
import "./navbbar.css";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function navbbar() {
  return (
    <div className="cont-header">
      <Navbar className="contai" expand="lg" variant="dark">
        <Container className="ul-container">
          <div>
            <img className="pequeña" src="/LogoTV.png" />{" "}
          </div>

          <Navbar.Brand  style={{ color: "white", margin: "0 50px 0 0" }}>
            Servicsofts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav className="me-auto">
              <NavDropdown title="Registros" id="collasible-nav-dropdown">
                <Link
                  className="letra"
                  style={{ textDecoration: "none" }}
                  to="Vehiculo"
                >
                  <NavDropdown.Item className="a" href="#action/3.2">
                    Vehiculo
                  </NavDropdown.Item>
                </Link>

                <Link
                  className="letra"
                  style={{ textDecoration: "none" }}
                  to="Propietario"
                >
                  <NavDropdown.Item className="a" href="#action/3.2">
                    Propietario
                  </NavDropdown.Item>
                </Link>

                <Link
                  className="letra"
                  style={{ textDecoration: "none" }}
                  to="Mantenimiento"
                >
                  <NavDropdown.Item className="a" href="#action/3.2">
                    Mantenimiento
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
              </NavDropdown>

              <Link
                className="letra"
                style={{ textDecoration: "none" }}
                to="Border"
              >
                <Nav.Link href="#action/3.2"> Inicio </Nav.Link>
              </Link>

              <NavDropdown title="informacion" id="collasible-nav-dropdown">
                <Link
                  className="letra"
                  style={{ textDecoration: "none" }}
                  to="Mision"
                >
                  <NavDropdown.Item className="a" href="#action/3.2">
                    Mision
                  </NavDropdown.Item>
                </Link>
                
                  <Link
                    className="letra"
                    style={{ textDecoration: "none" }}
                    to="Segurida"
                  >
                    <NavDropdown.Item className="a" href="#action/3.2">
                      Seguridad
                    </NavDropdown.Item>
                  </Link>
               

                <Link
                  className="letra"
                  style={{ textDecoration: "none" }}
                  to="Vision"
                >
                  <NavDropdown.Item className="a" href="#action/3.2">
                    Servicsofts
                  </NavDropdown.Item>
                </Link>

               
                  <Link
                    className="letra"
                    style={{ textDecoration: "none" }}
                    to="Redes"
                  >
                    <NavDropdown.Item className="a" href="#action/3.2"> Contáctenos  </NavDropdown.Item>
                  </Link>
               

                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>

            <Nav>
              <Link
                className="letra"
                style={{ textDecoration: "none" }}
                to="Vehiculo"
              >
                <Nav.Link href="#action/3.2">Vehiculo</Nav.Link>
              </Link>

              <Link
                className="letra"
                style={{ textDecoration: "none" }}
                to="Propietario"
              >
                <Nav.Link href="#action/3.2">Propietario</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbbar;
