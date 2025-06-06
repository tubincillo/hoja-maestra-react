//Casilla de verificacion para ver si cambia el titulo de la seccion
import React, { useState } from 'react';

function CasillaVerificada() {
  const [checkboxState, setCheckboxState] = useState(false);

  const handleOnChange = (event) => {
    setCheckboxState(event.target.checked);
  };

  return (
    <>
        <p className="subtitulos tutor" id="tutor">{checkboxState ? 'TUTOR Y ESTUDIANTE:' : 'TUTOR:'} </p>
        <div className="division tutorYOEstudiante">
            <label for="tutorYOEstudiante" class="checkboxText">El Tutor es el mismo estudiante</label>
            <input type="checkbox" name="tutorYOEstudiante" id="tutorYOEstudiante" className="checkbox1" onChange={handleOnChange}/>
        </div>
    </>
  );
}

export default CasillaVerificada;