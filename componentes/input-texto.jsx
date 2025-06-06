import React from "react";

// Esta componente es para tener dentro del formulario el nombre y la casilla de texto de o que se debe llenar
// Se estandariza para que se ingrese los datos de ID, class, type, placeholder y required
function InputTexto(props){   //El prop es el parametro para el cual se va metiendo todos los valores

    return (
        <div className="division">
            <label className="subtitulo-ingreso-de-datos">{props.texto} </label> 
            <input id={props.id} className={props.className} type={props.type} placeholder={props.placeholder} required={props.required} />
            {/*Todos los valores son admitidos como parametros que se sacan de un Objeto "valores* que tiene toda la info*/}
        </div>
    );
}

export default InputTexto;
