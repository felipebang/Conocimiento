import React, { Component, useState } from "react";
import { Field, Formik } from "formik";
import Table from "react-bootstrap/Table";
import { Form } from "formik";
import "./Propietario.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8090/propietarios/";
const arreglo = [];
const labelButton = "Insertar Registro";
const rows = 0;

export class Propietario extends Component {
  //metodo constructor para inicializar
  constructor(props) {
    super(props);
    this.state = {
      propietarios: [],
      form: {
        propietarioId: "",
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
    if (typeof dataFormulario.propietarioId === "undefined") {
      url = baseUrl + "crear";
      metho = "POST";

      console.log("insertar" + dataFormulario.propietarioId.formularioEnviado);
    } else {
      console.log("act");
      url = baseUrl + "" + dataFormulario.propietarioId;
      metho = "PUT";
    }

    //consultar registro por id
    this.insertar = (dato) => {
      this.labelButton = "Actualizar Registro";
      fetch(baseUrl + dato.propietarioId, { method: "GET" })
        .then((res) => res.json())
        .then((response) => {
          this.rows = 0;
          //this.state.nombre =response.nombre
          arreglo.propietarioId = response.propietarioId;
          arreglo.nombre = response.nombre;
          arreglo.apellidos = response.apellidos;
          arreglo.cedula = response.cedula;
          arreglo.direccion = response.direccion;
          arreglo.telefono = response.telefono;
          arreglo.celular = response.celular;
          arreglo.email = response.email;
          arreglo.id = response.id;
          this.setState({
            form: arreglo,
          });
        });

      this.setState({ modalInsertar: true });
    };

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
      .then((propietarios) => this.setState({ propietarios }));
  };

  //metodo para borrar un registro
  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.propietarioId
    );
    if (opcion == true) {
      const formData = new FormData();
      formData.append("propietarioId", dato.propietarioId);

      fetch(baseUrl + dato.propietarioId, {
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
              propietarioId: "",
              nombre: "",
              apellidos: "",
              cedula: "",
              telefono: "",
              celular: "",
              correo: "",
              direccion: "",
              usuario: "",
            }}
            validate={(valores) => {
              if (!valores.nombre) console.log("por favor un nombre");
              let errores = {};

              //validacion
              //nombre

              if (!valores.nombre) {
                errores.nombre = "por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = "el nombre solo puede tener letra y espacio";
              }

              //telefono
              if (!valores.celular) {
                errores.celular = "por favor ingresa tu numero telefonico";
              } else if (!/^\d{7,14}$/.test(valores.celular)) {
                errores.celular = "ingrese su numero telefonico";
              }

              //correo
              if (!valores.correo) {
                errores.correo = "por favor ingresa un correo electronico";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.correo
                )
              ) {
                errores.correo =
                  "El nombre solo puede contener letras y espacios";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              console.log("Formulario enviado");

              setTimeout();
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
              <Form className="formulario2" onSubmit={handleSubmit}>
                {console.log(errors)}
                {
                  //nombre
                }
                <div>
                  <div>
                    <h1 className="section-h1">Propietario</h1>
                  </div>
                </div>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.nombre && errors.nombre && (
                    <div className="error">{errors.nombre}</div>
                  )}
                </div>
                {
                  //apellidos
                }
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={values.apellidos}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.apellidos && errors.apellidos && (
                    <div className="error">{errors.apellidos}</div>
                  )}
                </div>
                {
                  //Cedula
                }
                <div>
                  <input
                    className="form-control"
                    type="numero"
                    id="Cedula"
                    name="Cedula"
                    placeholder="Cedula"
                    value={values.Cedula}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Cedula && errors.Cedula && (
                    <div className="error">{errors.Cedula}</div>
                  )}
                </div>
                {
                  //telefono
                }
                <div>
                  <input
                    className="form-control"
                    type="numero"
                    id="telefono"
                    name="telefono"
                    placeholder="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.telefono && errors.telefono && (
                    <div className="error">{errors.telefono}</div>
                  )}
                </div>
                {
                  //celular
                }
                <div>
                  <input
                    className="form-control"
                    type="celular"
                    id="celular"
                    name="celular"
                    placeholder="celular"
                    value={values.celular}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.celular && errors.celular && (
                    <div className="error">{errors.celular}</div>
                  )}
                </div>
                {
                  //correo
                }
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.correo && errors.correo && (
                    <div className="error">{errors.correo}</div>
                  )}
                </div>
                {
                  //correo
                }
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="direccion"
                    name="direccion"
                    placeholder="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.direccion && errors.direccion && (
                    <div className="error">{errors.direccion}</div>
                  )}
                </div>
                {
                  //usuario
                }
                <div>
                  <input
                    className="form-control"
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="usuario"
                    value={values.usuario}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.usuario && errors.usuarion && (
                    <div className="error">{errors.usuario}</div>
                  )}
                </div>
                <Button
                  
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Guardar
                </Button>
                Datos Ingresados
                <div class="table-responsive-sm">
                <Table class="table" striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>
                        <h4>propietarioId</h4>
                      </th>
                      <th>
                        <h4>nombre</h4>
                      </th>
                      <th>
                        <h4>apellidos</h4>
                      </th>
                      <th>
                        <h4>cedula</h4>
                      </th>
                      <th>
                        <h4>direccion</h4>
                      </th>
                      <th>
                        <h4>telefono</h4>
                      </th>
                      <th>
                        <h4>Cedula</h4>
                      </th>
                      <th>
                        <h4>email</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.propietarios.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.propietarioId}</td>
                          <td>{item.nombre}</td>
                          <td>{item.apellidos}</td>
                          <td>{item.cedula}</td>
                          <td>{item.direccion}</td>
                          <td>{item.telefono}</td>
                          <td>{item.celular}</td>
                          <td>{item.email}</td>
                          <td>
                            <Button
                              style={{ cursor: "pointer" }}
                              className="btn  btn-sm"
                              color="success"
                              onClick={() => this.insertar(item)}
                            >
                              Editar
                            </Button>
                            &nbsp; &nbsp; --
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
                </div>
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
