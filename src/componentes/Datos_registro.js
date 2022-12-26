import React, { Component } from "react";
import Btn_reinicio from "./Btn_reinicio";
import Home from './Home';
import swal from 'sweetalert'; //importe la libreria SweetAlert para probar las alertas con el comado npm install sweetalert --save


class Datos_registro extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirma_password: '',
        estado: false
    };

    reset = () => {
        console.log("voy a reiniciar");
        this.setState({
            nombre: "",
            apellido: "",
            email: '',
            telefono: '',
            password: '',
            confirma_password: ''
        })
    }


    cambiar = () => {
        console.log('Llegaste a cambiar');
        this.setState({
            estado: true
        })
    }

    volveraregistrarse = () => {
        this.setState({
            estado: false
        })

        this.reset();
    }


    notificar_datos = () => {
        swal({
            title: "Bien hecho!",
            text: `Hola ${this.state.nombre} ${this.state.apellido} te acabas de registrar en la web \n con el siguiente email ${this.state.email}`,
            icon: "success",
            button: "Lista esa vaina",
          });

        this.cambiar();
    }

    m_modificacion = (target) => {
        if (target.name === "nombre") {
            this.setState({
                nombre: target.value
            })
        }
        if (target.name === "apellido") {
            this.setState({
                apellido: target.value
            })
        }

        if (target.name === "email") {
            this.setState({
                email: target.value
            })
        }

        if (target.name === "telefono") {
            this.setState({
                telefono: target.value
            })
        }

        if (target.name === "password") {
            this.setState({
                password: target.value
            })
        }

        if (target.name === "confirma_password") {
            this.setState({
                confirma_password: target.value
            })
        }
        console.log(target);
    }



    render() {
        return (
            <div className="contenedor">

                {this.state.estado === false &&
                    <div className="formulario">
                        {/* <pre> {JSON.stringify(this.state)}</pre> */}
                        <pre></pre>
                        <h2>Formulario de Registro</h2>

                        <div className="f-datos">
                            <label htmlFor="nombre"  >Nombre:</label>
                            <input type="text" required name="nombre" value={this.state.nombre} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="f-datos">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" required name="apellido" value={this.state.apellido} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="f-datos">
                            <label htmlFor="email">Email:</label>
                            <input type="mail" required name="email" value={this.state.email} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="f-datos">
                            <label htmlFor="telefono">Telefono:</label>
                            <input type="number" name="telefono" value={this.state.telefono} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="f-datos">
                            <label htmlFor="">Password:</label>
                            <input type="password" required name="password" value={this.state.password} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="f-datos">
                            <label htmlFor="">Confirma Password:</label>
                            <input type="password" required name="confirma_password" value={this.state.confirma_password} onChange={event => this.m_modificacion(event.target)} />
                        </div>

                        <div className="btns">
                            <button className="btn-primary" onClick={this.notificar_datos} >Registrar</button>
                            <Btn_reinicio reinicio={this.reset} ></Btn_reinicio>
                        </div>

                    </div>
                }


                {this.state.estado === true &&
                    <Home email={this.state.email} volveraregistrarse={this.volveraregistrarse}></Home>
                }

            </div>
        )
    }


}

export default Datos_registro