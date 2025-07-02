import React, { useState } from 'react';
import './styles.css';
import './stylesConvenio.css'
import CasillaVerificada from '../componentes/casilla-verificacion.jsx';


import Tutor from "../componentes/tutor-estudiante.jsx";
import Convenio from '../componentes/convenio.jsx';


function App() {
  const [checkboxState, setCheckboxState] = useState(false);
  const [datosTutor, setDatosTutor] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    direccion: '',
    ci: '',
    telefonoFijo: '',
    celular: '',
    celularReferencia: '',
    profesion: '',
    fechaNacimiento: '',
    correo: '',
    fechaInscripcion: '',
    fechaInicio: '',
    codigo: '',
    // ...otros campos
  });

  let estudiante1;
  if (!checkboxState){
    estudiante1=(     
      <>
        <p className="subtitulos tutorEstudiante" id="tutor">
          Estudiante 1
        </p>      
        <Tutor  nroEstudiante='E1' datosTutor={datosTutor} setDatosTutor={setDatosTutor}/>
      </>  
      );

     
      }

return (
  <div>
    <h1 className="titulo-principal">Registro de Estudiante</h1>

    <CasillaVerificada
      checkboxState={checkboxState}
      setCheckboxState={setCheckboxState}
    />

    <Tutor nroEstudiante='' datosTutor={datosTutor} setDatosTutor={setDatosTutor}/>
    {estudiante1}

    <Convenio datosTutor={datosTutor} />
  </div>
);
}


export default App
