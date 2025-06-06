import React from "react";

// Esta componente es para tener dentro del formulario el nombre y la casilla de texto de o que se debe llenar
import valores from "./datosFormulario"


//Este componente es para que en el modulo principal solo se haga referencia al objeto que se desea obtener datos con "[props.itemDeObjeto]" funciona con el siguiente componente: InputTexto
const LlevarDatosTutor =(props) =>{

    const dato= valores[props.itemDeObjeto]; {/*Se usa props pues se pasara como parametro el objeto principal Ejemplo; Nombre y con InputTexto se va poniendo los atributos que corresponden, todos estan en el objeto "valores" */}
    return(
    <InputTexto texto= {dato['texto']} id={dato['id']} placeholder={dato['placeholder']} className={dato['className']} type={dato['type']}  />
    );
};


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

export default LlevarDatosTutor;