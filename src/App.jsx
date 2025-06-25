import React, { useState } from 'react';
import './styles.css';
import CasillaVerificada from '../componentes/casilla-verificacion.jsx';


import Tutor from "../componentes/tutor-estudiante.jsx";


function App() {
  const [checkboxState, setCheckboxState] = useState(false);
  let estudiante1;
  if (!checkboxState){
    estudiante1=(     
      <>
        <p className="subtitulos tutorEstudiante" id="tutor">
          Estudiante 1
        </p>      
        <Tutor  nroEstudiante='E1' />
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

    <Tutor nroEstudiante='' />
    {estudiante1}
  </div>
);
}


export default App
