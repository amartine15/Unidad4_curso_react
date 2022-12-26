import React, { Component } from 'react';
import Datos_registro from './Datos_registro';

class Seccion_registro extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="seccion-registro">
                <Datos_registro></Datos_registro>
                <p><strong>Nota:</strong> "Si esta en el formulario complete los datos, selecciones Cancelar para borrar los datos <br />o selecciones registrar para cargar los datos, <br />Tenga en cuenta que no hay validaciones en el formulario solo algunas validaciones en html. <br /> Si se registro marque volver a registrarse para probar nuevamente."</p>
            </div>
        )
    }

}

export default Seccion_registro