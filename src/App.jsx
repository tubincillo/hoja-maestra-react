import React from "react";
//import './App.css';
import './styles.css';
import Boton from '../componentes/boton.jsx';


import CasillaVerificada from "../componentes/casilla-verificacion.jsx";

import LlevarDatosTutor from "../componentes/input-texto.jsx";
import LlevarDatosTutorCascada from "../componentes/input-cascada.jsx";



function App() {
return (
  <div>
    <h1 className="titulo-principal">Registro de Estudiante</h1>
    <div className="main">

      <CasillaVerificada />

      <div className='Datos-Personales' >
        <LlevarDatosTutor itemDeObjeto ='nombre' />
        <LlevarDatosTutor itemDeObjeto ='apellido' />
        <LlevarDatosTutor itemDeObjeto ='direccion' />
        <LlevarDatosTutor itemDeObjeto ='ci' />
        <LlevarDatosTutorCascada itemDeObjeto = "expedido" cascada ='ciudades' />
      </div>        

      <div className="Datos-Adicionales"> 
        <LlevarDatosTutor itemDeObjeto ='telefonoFijo' />        
        <LlevarDatosTutor itemDeObjeto ='celular' />
        <LlevarDatosTutor itemDeObjeto ='celularReferencia' />
        <LlevarDatosTutor itemDeObjeto ='profesion' />
        <LlevarDatosTutor itemDeObjeto ='fechaNacimiento' />
        
        <LlevarDatosTutorCascada itemDeObjeto = "ciudadResidencia" cascada ='ciudades'/>
        <LlevarDatosTutorCascada itemDeObjeto = "turno" cascada ='turno'/>

        
        <LlevarDatosTutor itemDeObjeto ='correo' />
        <LlevarDatosTutor itemDeObjeto ='fechaInscripcion' />
        <LlevarDatosTutor itemDeObjeto ='fechaInicio' />
        <LlevarDatosTutor itemDeObjeto ='codigo' />

        
        <LlevarDatosTutorCascada itemDeObjeto = "plan" cascada ='planes'/>
        <LlevarDatosTutorCascada itemDeObjeto = "estadoCivil" cascada ='estados'/>        
        <LlevarDatosTutorCascada itemDeObjeto = "genero" cascada ='generos'/>

      </div>
    </div>
  <button type="submit"> boton</button>
  </div>
);
}


export default App
