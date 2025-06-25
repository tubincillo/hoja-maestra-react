//Casilla de verificacion para ver si cambia el titulo de la seccion
import React from 'react';

function CasillaVerificada({ checkboxState, setCheckboxState }) {
  const handleOnChange = (event) => {
    setCheckboxState(event.target.checked);
  };

  return (
    <>
      <p className="subtitulos tutorInicial" id="tutor">
        {checkboxState ? 'TUTOR Y ESTUDIANTE:' : 'TUTOR:'}
      </p>

      <div className="division tutorYOEstudiante">
        <label htmlFor="tutorYOEstudiante" className="checkboxText">
          El Tutor es el mismo estudiante
        </label>

        <input
          type="checkbox"
          name="tutorYOEstudiante"
          id="tutorYOEstudiante"
          className="checkbox1"
          onChange={handleOnChange}
          checked={checkboxState}
        />

      </div>
    </>
  );
}

export default CasillaVerificada;