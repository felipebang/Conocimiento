import React, { PureComponent, useState } from "react";
import { Field, Formik } from "formik";
import Table from "react-bootstrap/Table";
import { Form } from "formik";
import "./vehiculo.css";
import Button from "react-bootstrap/Button";
const baseUrl = "http://localhost:8090/vehiculo/";
const arreglo = [];
const labelButton = "Insertar Registro";
const rows = 0;
export default class Vehiculo extends PureComponent {
  //metodo constructor para inicializar
  constructor(props) {
    super(props);
    this.state = {
      vehiculo: [],
      form: {
        vehiculoId: "",
        propietarioId: "",
        noMotor: "",
        placa: "",
        color: "",
      },
    };
  }

  //metodo para insertar o actualizar un registro
  insertar = () => {
    let dataFormulario = { ...this.state.form };
    console.log("dfddfd" + dataFormulario);
    let url = "";
    let metho = "";
    if (typeof dataFormulario.vehiculoId === "undefined") {
      url = baseUrl + "crear";
      metho = "POST";

      console.log("insertar " + dataFormulario.vehiculoId);
    } else {
      console.log("act");
      url = baseUrl + "" + dataFormulario.vehiculoId;
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
      .then((vehiculo) => this.setState({ vehiculo }));
  };

  //metodo para borrar un registro
  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.vehiculoId
    );
    if (opcion == true) {
      const formData = new FormData();
      formData.append("vehiculoId", dato.vehiculoId);

      fetch(baseUrl + dato.vehiculoId, {
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
            validate={(valores) => {
              if (!valores.nombre) console.log("por favor un nombre");
              let errores = {};

              //validacion
              //nombre

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
              
                <div>
                  <div>
                    <h1 className="section-h1">Vehiculo</h1>
                  </div>

                  <label>
                    Dueño de vehiculo:
                    <select
                      name="propietarioId"
                      type="numero"
                      id="propietarioId"
                      placeholder="propietarioId"
                      onChange={this.handleChange}
                      Value={this.state.form.propietarioId}
                    >
                      <option value="grapefruit">1</option>
                      <option value="lime">2</option>
                      <option value="coconut">3</option>
                      <option value="mango">4</option>
                      <option value="mango">5</option>
                      <option value="mango">6</option>
                      <option value="mango">7</option>
                      <option value="mango">8</option>
                      <option value="mango">9</option>
                      <option value="mango">10</option>
                    </select>
                  </label>

                  <input
                   className="form-control"
                    type="numero"
                    id="propietarioId"
                    name="propietarioIdr"
                    placeholder="nombre de motor"
                    onChange={this.handleChange}
                    Value={this.state.form.noMotor}
                  />
                  {touched.noMotor && errors.noMotor && (
                    <div className="error">{errors.noMotor}</div>
                  )}
                </div>
                {
                  //placa
                }
                <div>
                  <input
                    className="form-control"
                    type="placa"
                    id="placa"
                    name="placa"
                    placeholder=" placa"
                    onChange={this.handleChange}
                    Value={this.state.form.placa}
                  />
                  {touched.placa && errors.placa && (
                    <div className="error">{errors.placa}</div>
                  )}
                </div>
                {
                  //color
                }
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="color"
                    name="color"
                    placeholder="color"
                    onChange={this.handleChange}
                    Value={this.state.form.color}
                  />
                  {touched.color && errors.color && (
                    <div className="error">{errors.color}</div>
                  )}
                </div>
                <Button
                  className="btn  btn-sm"
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Guardar
                </Button>
                Datos Ingresados
                <Table className="table" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>
                        <h4>vehiculoId</h4>
                      </th>
                      <th>
                        <h4>propietarioId</h4>
                      </th>
                      <th>
                        <h4>nombre de Motor</h4>
                      </th>
                      <th>
                        <h4>color</h4>
                      </th>
                      <th>
                        <h4>placa</h4>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.vehiculo.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.vehiculoId}</td>
                          <td>{item.propietarioId}</td>
                          <td>{item.noMotor}</td>
                          <td>{item.placa}</td>
                          <td>{item.color}</td>

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
