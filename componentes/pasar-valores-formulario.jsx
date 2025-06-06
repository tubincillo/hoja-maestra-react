//Este componente se utiliza junto a Input Text con la finalidad de que solo se ponga el nombre del objeto para que todas las llaves necesarias sean sacadas


import valores from "./datosFormulario"
import InputTexto from '../componentes/input-texto.jsx'
import InputCascada from "./input-cascada.jsx";

export const LlevarDatosTutor =(props) =>{
    const dato= valores[props.itemDeObjeto]; {/*Se usa props pues se pasara como parametro el objeto principal Ejemplo; Nombre y con InputTexto se va poniendo los atributos que corresponden, todos estan en el objeto "valores" */}
    return(
    <InputTexto texto= {dato['texto']} id={dato['id']} placeholder={dato['placeholder']} className={dato['className']} type={dato['type']}  />
    );
};


//En el export de las cascadas se toma en cuenta un parametro adicional "cascada" este debe hacer referencia al valor array que contiene los valores de la cascada
export const LlevarDatosTutorCascada =(props) =>{
    const datitos= valores[props.itemDeObjeto];
    return(
    <InputCascada texto= {datitos['texto']} id={datitos['id']} placeholder={datitos['placeholder']} className={datitos['className']} type={datitos['type']} valoresCascada={datitos[props.cascada]} />
    );
};


//export { LlevarDatosTutor, LlevarDatosTutorCascada };
