import LlevarDatosTutor from "./input-texto.jsx";
import LlevarDatosTutorCascada from "./input-cascada.jsx";


function Tutor(props) {
      const numeroEstudiante= props.nroEstudiante;
return (  
  <div className="main">

    <div className='Datos-Personales'>
      <LlevarDatosTutor itemDeObjeto ='nombre' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='apellido' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='direccion' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='ci' estudiante={numeroEstudiante}/>
      <LlevarDatosTutorCascada itemDeObjeto = "expedido" cascada ='ciudades' />
    </div>        

    <div className="Datos-Adicionales"> 
      <LlevarDatosTutor itemDeObjeto ='telefonoFijo' estudiante={numeroEstudiante} />        
      <LlevarDatosTutor itemDeObjeto ='celular' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='celularReferencia' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='profesion' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='fechaNacimiento' estudiante={numeroEstudiante} />
      
      <LlevarDatosTutorCascada itemDeObjeto = "ciudadResidencia" cascada ='ciudades'/>
      <LlevarDatosTutorCascada itemDeObjeto = "turno" cascada ='turno'/>

      
      <LlevarDatosTutor itemDeObjeto ='correo' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='fechaInscripcion' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='fechaInicio' estudiante={numeroEstudiante} />
      <LlevarDatosTutor itemDeObjeto ='codigo' estudiante={numeroEstudiante} />

      
      <LlevarDatosTutorCascada itemDeObjeto = "plan" cascada ='planes'/>
      <LlevarDatosTutorCascada itemDeObjeto = "estadoCivil" cascada ='estados'/>        
      <LlevarDatosTutorCascada itemDeObjeto = "genero" cascada ='generos'/>

    </div>
  </div>

);
}


export default Tutor;