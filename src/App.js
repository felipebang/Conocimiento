import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Border from "./componentes/Borde/Border";
import Navbbar from "./componentes/Navbbar/Navbbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import Vehiculo from "./componentes/Vehiculo/Vehiculo";
import Mantenimiento from "./componentes/Mantenimiento/Mantenimiento";
import Segurida from "./componentes/Segurida/Segurida";
import Mision from "./componentes/Mision/Mision";
import Vision from "./componentes/Vision/Vision";
import Redes from "./componentes/Redes/Redes";
import { Propietario } from "./componentes/Propietario/Propietario";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function App() {
  return (
   
    <div className="cont-header">
      <Navbbar />
      <div className="body">

      <Routes>
        <Route path="Vehiculo" element={<Vehiculo />} />
        <Route path="Propietario" element={<Propietario />} />
        <Route path="Border" element={<Border />} />
        <Route path="Mantenimiento" element={<Mantenimiento />} />
        <Route path="Segurida" element={<Segurida />} />
        <Route path="Mision" element={<Mision />} />
        <Route path="Vision" element={<Vision />} />
        <Route path="Redes" element={<Redes />} />
      </Routes>
<br />
<br />
<br />
    
      <Button variant="secondary" size="lg">
        <Link className="letra" style={{ textDecoration: "none" }} to="Redes">
          Contáctenos
        </Link>
      </Button>

      
      <Footer />
    </div>
    </div>
  );
}

export default App;
