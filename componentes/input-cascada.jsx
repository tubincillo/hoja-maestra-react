//Este componentes es para seleccion de cascadas, se debe pasar un valor array para las opciones.
import valores from "./datosFormulario"


// En este componente se utiliza el componente InputCascada el cual tiene como parametros el texto,id y otros, pero este componente es para que en el modulo principal solo se pase como parametro el nombre del objeto del cual se sacan todos estos valores con la finalidad de que sea mas entendible.
const LlevarDatosTutorCascada =(props) =>{
    const datitos= valores[props.itemDeObjeto];
    return(
    <InputCascada texto= {datitos['texto']} id={datitos['id']} placeholder={datitos['placeholder']} className={datitos['className']} type={datitos['type']} valoresCascada={datitos[props.cascada]} />
    );
};


//En este componente se realiza la seleccion de atributos de "select" y tambien se pone en formula para que aparezcan los valores de cascada
function InputCascada(props){
    return (
        <div className="division">
        <label className="subtitulo-ingreso-de-datos">{props.texto}</label>
        <select id={props.id} className={props.className} placeholder={props.placeholder} required={props.required}>
        {/* Se pasan en parametros los atributos que lleva el "select" e*/}
            {props.valoresCascada.map(valor =>{
                return <option value={valor} > {valor} </option>
                }               
            )}
            {/*Se realiza un map por todos los valores que tiene el array de las opciones para ponerlos en html como <option></option>*/}
        </select>
        </div>
    );
}

export default LlevarDatosTutorCascada;