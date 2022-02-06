import React, { PureComponent } from "react";
import { useState } from "react";
import { Field, Formik } from "formik";
import Table from "react-bootstrap/Table";
import { Form } from "formik";
import "./Mantenimiento.css";
import Button from "react-bootstrap/Button";

const baseUrl = "http://localhost:8090/mantenimiento/";
const arreglo = [];
const labelButton = "Insertar Registro";
const rows = 0;
export default class Mantenimiento extends PureComponent {
  //metodo constructor para inicializar
  constructor(props) {
    super(props);
    this.state = {
      mantenimiento: [],
      form: {
        vehiculoId: "",
        mantenimientoId: "",
        nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
      },
    };
  }

  //metodo para insertar o actualizar un registro
  insertar = () => {
    let dataFormulario = { ...this.state.form };
    console.log("dfddfd" + dataFormulario);
    let url = "";
    let metho = "";
    if (typeof dataFormulario.mantenimientoId === "undefined") {
      url = baseUrl + "crear";
      metho = "POST";

      console.log("insertar " + dataFormulario.mantenimientoId);
    } else {
      console.log("act");
      url = baseUrl + "" + dataFormulario.mantenimientoId;
      metho = "PUT";
    }

    //hacemos que sea dinamico menos codigo en la app
    fetch(url, {
      method: metho, // or 'PUT'
      body: JSON.stringify(dataFormulario), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));

    alert("Registro creado/modificado");
    this.peticionGet();
    this.cerrarModalInsertar();
    console.log(dataFormulario);

    this.rows = 0;
  };

  //peticion get consultar registros
  peticionGet = () => {
    this.rows = 0;
    fetch(baseUrl + "listar")
      .then((respuesta) => respuesta.json())
      .then((mantenimiento) => this.setState({mantenimiento }));
  };

  //metodo para borrar un registro
  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.mantenimientoId
    );
    if (opcion == true) {
      const formData = new FormData();
      formData.append("mantenimientoId", dato.mantenimientoId);

      fetch(baseUrl + dato.mantenimientoId, {
        method: "DELETE",
        body: formData,
      })
        //  .then(res => res.json()) // or res.json()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    this.peticionGet();
    setTimeout(this.peticionGet, 1000);
  };

  async componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (

      <div className="felipe">
         <div className="body">
        <Formik
          initialValues={{
            vehiculoId: "",
            mantenimiento: "",
            fechaManto: "",
            descripManto: ""
          }}
          validate={(valores) => {
            if (!valores.nombre) console.log("por favor un nombre");
            let errores = {};

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <Form className="formulario" onSubmit={handleSubmit}>
              {console.log(errors)}
              {
                //vehiculo
              }
              <h1 className="section-h1">Mantenimiento</h1>
              <div>
                <input
                 className="form-control"
                  type="text"
                  id="vehiculo"
                  name="vehiculo"
                  placeholder="vehiculo"
                  value={values.vehiculo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.vehiculo && errors.vehiculo && (
                  <div className="error">{errors.vehiculo}</div>
                )}
              </div>
              {
                //fecha_manto
              }
              <div>
                <input
                 className="form-control"
                  type="text"
                  id="fechaManto"
                  name="fechaManto"
                  placeholder="fecha de mantenimiento"
                  value={values.fechaManto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.fechaManto && errors.fechaManto && (
                  <div className="error">{errors.fechaManto}</div>
                )}
              </div>
              {
                //fecha_manto
              }
              <br />
              <div>
                <textarea
                 className="form-control"
                  name="descripManto"
                  type="text"
                  id="descrip_manto"
                  placeholder="Descripcion"
                  value={values.descripManto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <button type="submit">Enviar</button>
              Datos Ingresados
              <Table className="tabla" striped bordered hover variant="dark">
                <thead>
                  <tr>
                  <th>
                      <h4>mantenimientoId</h4>
                    </th>
                    <th>
                      <h4>vehiculo</h4>
                    </th>
                    <th>
                      <h4>fecha_manto</h4>
                    </th>
                    <th>
                      <h4>descrip_manto</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.mantenimiento.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.mantenimientoId}</td>
                          <td>{item.vehiculoId}</td>
                          <td>{item.fechaManto}</td>
                          <td>{item. descripManto}</td>
                         

              
                          <td>
                            --
                            <Button
                              style={{ cursor: "pointer" }}
                              className="btn  btn-sm"
                              color="danger"
                              onClick={() => this.eliminar(item)}
                            >
                              Eliminar
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
              </Table>
              <li>
                <em> Felipe Banguero Arrechea</em>
              </li>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    );
  }
}
