import React, { useState } from 'react';
import LlevarDatosTutor from "./input-texto.jsx";
import LlevarDatosTutorCascada from "./input-cascada.jsx";


function Tutor({ datosTutor, setDatosTutor, numeroEstudiante }) {
  const handleInputChange = (campo) => (valor) => {
    setDatosTutor(prev => ({
      ...prev,
      [campo]: valor
    }));
  };
return (  
  <div className="main">

    <div className='Datos-Personales'>
      <LlevarDatosTutor itemDeObjeto ='nombre'   estudiante={numeroEstudiante} inputValue={datosTutor.nombre} setInputValue={handleInputChange('nombre')}/>
      <LlevarDatosTutor itemDeObjeto ='apellido' estudiante={numeroEstudiante} inputValue={datosTutor.apellido} setInputValue={handleInputChange('apellido')}/>
      <LlevarDatosTutor itemDeObjeto ='direccion'estudiante={numeroEstudiante} inputValue={datosTutor.direccion} setInputValue={handleInputChange('direccion')}/>
      <LlevarDatosTutor itemDeObjeto ='ci'       estudiante={numeroEstudiante} inputValue={datosTutor.ci} setInputValue={handleInputChange('ci')}/>
      <LlevarDatosTutorCascada itemDeObjeto = "expedido" cascada ='ciudades' />
    </div>        

    <div className="Datos-Adicionales"> 
      <LlevarDatosTutor itemDeObjeto ='telefonoFijo'      estudiante={numeroEstudiante} inputValue={datosTutor.telefonoFijo} setInputValue={handleInputChange('telefonoFijo')}/>        
      <LlevarDatosTutor itemDeObjeto ='celular'           estudiante={numeroEstudiante} inputValue={datosTutor.celular} setInputValue={handleInputChange('celular')}/>
      <LlevarDatosTutor itemDeObjeto ='celularReferencia' estudiante={numeroEstudiante} inputValue={datosTutor.celularReferencia} setInputValue={handleInputChange('celularReferencia')}/>
      <LlevarDatosTutor itemDeObjeto ='profesion'         estudiante={numeroEstudiante} inputValue={datosTutor.profesion} setInputValue={handleInputChange('profesion')}/>
      <LlevarDatosTutor itemDeObjeto ='fechaNacimiento'   estudiante={numeroEstudiante} inputValue={datosTutor.fechaNacimiento} setInputValue={handleInputChange('fechaNacimiento')}/>
      
      <LlevarDatosTutorCascada itemDeObjeto = "ciudadResidencia" cascada ='ciudades'/>
      <LlevarDatosTutorCascada itemDeObjeto = "turno" cascada ='turno'/>

      
      <LlevarDatosTutor itemDeObjeto ='correo'            estudiante={numeroEstudiante} inputValue={datosTutor.correo} setInputValue={handleInputChange('correo')}/>
      <LlevarDatosTutor itemDeObjeto ='fechaInscripcion'  estudiante={numeroEstudiante} inputValue={datosTutor.fechaInscripcion} setInputValue={handleInputChange('fechaInscripcion')}/>
      <LlevarDatosTutor itemDeObjeto ='fechaInicio'       estudiante={numeroEstudiante} inputValue={datosTutor.fechaInicio} setInputValue={handleInputChange('fechaInicio')}/>
      <LlevarDatosTutor itemDeObjeto ='codigo'            estudiante={numeroEstudiante} inputValue={datosTutor.codigo} setInputValue={handleInputChange('codigo')}/>

      
      <LlevarDatosTutorCascada itemDeObjeto = "plan" cascada ='planes'/>
      <LlevarDatosTutorCascada itemDeObjeto = "estadoCivil" cascada ='estados'/>        
      <LlevarDatosTutorCascada itemDeObjeto = "genero" cascada ='generos'/>

    </div>
  </div>

);
}


export default Tutor;