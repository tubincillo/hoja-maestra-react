//Este componentes es para seleccion de cascadas, se debe pasar un valor array para las opciones.
import React from "react";

function InputCascada(props){

    return (
        <div className="division">
        <label className="subtitulo-ingreso-de-datos">{props.texto}</label>
        <select id={props.id} className={props.className} placeholder={props.placeholder} required={props.required}>
        {/* Se pasan en parametros los atributos que lleva el "select"*/}
            {props.valoresCascada.map(valor =>{
                return <option value={valor} > {valor} </option>
                }               
            )}
            {/*Se realiza un map por todos los valores que tiene el array de las opciones para ponerlos en html como <option></option>*/}
        </select>
        </div>
    );
}

export default InputCascada;


