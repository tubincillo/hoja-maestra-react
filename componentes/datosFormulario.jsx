//Aqui se tiene un objeto "VALORES" que contiene todos los campos necesarios que se llenan en el formulario
//incluye en sus llaves el texto a mostrar, id, class y otros.

const ciudadesBolivia=['Oruro','Santa Cruz','La Paz','Cochabamba','Sucre','Potosi','Tarija','Beni','Pando'];
const valores = {
    nombre: 
        {
        texto: 'Nombre: ',
        id: 'nombre',
        placeholder:'Ej. Juan',
        className: 'input nombre',
        type: 'text',
        required: 'Required'
        },
    
    apellido: {
        texto: 'Apellido: ',
        id: 'apellido',
        placeholder:'Ej. Ordoñez',
        className: 'input apellido',
        type: 'text',
        required: 'true'
        },
    direccion:
        {
        texto: 'Dirección: ',
        id: 'direccion',
        placeholder:'Ej: Sucre y Presidente Montes',
        className: 'input direccion',  
        type: 'text',
        required: 'false'
        },
    ci:
        {
        texto: 'C.I.: ',
        id: 'ci',
        placeholder:'Ej: 5508956',
        className: 'input ci',
        type: 'number',
        required: true
        },
    expedido:
        {
        texto: 'Expedido: ',
        id: 'expedido',
        placeholder:'Ej: Oruro',
        className: 'input expedido',
        type: 'text',
        ciudades: ciudadesBolivia,
        required: 'Required'
        },
    telefonoFijo:
        {
        texto: 'Telefono Fijo: ',
        id: 'telefono',
        placeholder:'Ej: 25254993',
        className: 'input telefono',
        type: 'number',
        required: 'Required'    
        },
    celular:
        {
        texto: 'Celular: ',
        id: 'celular',
        placeholder:'Ej: 72459087',
        className: 'input celular',
        type: 'number',
        required: 'Required'    
        },
    celularReferencia:
        {
        texto: 'Celular de Referencia: ',
        id: 'celularReferencia',
        placeholder:'Ej: 73818569',
        className: 'input celularreferencia',
        type: 'number',
        required: 'Required'    
        },
    profesion:
        {
        texto: 'Profesión: ',
        id: 'profesion',
        placeholder:'Ej: Ingeniero Industrial',
        className: 'input profesion',
        type: 'texto',
        required: 'Required'    
        },
    fechaNacimiento:
        {
        texto: 'Fecha de nacimiento: ',
        id: 'fechaNacimiento',
        placeholder:'Ej: 02/08/1988',
        className: 'input fechaDeNacimiento',
        type: 'date',
        required: 'Required'    
        },
    ciudadResidencia:
        {
        texto: 'Ciudad donde reside: ',
        id: 'inputCiudad',
        placeholder:'Ej: Cochabamba',
        className: 'input ciudad',
        type: 'text',
        ciudades: ciudadesBolivia,
        required: 'Required' //REVISAR    
        },
    turno:
        {
        texto: 'Turno: ',
        id: 'turno  ',
        placeholder:'Ej: Mañana',
        className: 'input turno',
        type: '',
        turno:['mañana','tarde','noche'],
        required: 'Required'    
        },
    correo:
        {
        texto: 'Correo Electronico: ',
        id: 'email',
        placeholder:'Ej: javi@gmail.com',
        className: 'input email',
        type: 'mail',
        required: 'Required' //VER    
        },
    fechaInscripcion:
        {
        texto: 'Fecha de Inscripción: ',
        id: 'fechaInscripcion',
        placeholder:'Ej: 03/05/2026',
        className: 'input fechaDeInscripcion',
        type: 'date',
        required: 'Required'    
        },
    fechaInicio:
        {
        texto: 'Fecha de Inicio: ',
        id: 'fechaInicio',
        placeholder:'Ej: 06/05/2026',
        className: 'input fechaDeInicio',
        type: 'date',
        required: 'Required'    
        },
    codigo:
        {
        texto: 'Código: ',
        id: 'codigo',
        placeholder:'Ej: 2052',
        className: 'input codigo',
        type: 'number',
        required: 'Required'    
        },
    plan:
        {
        texto: 'Plan: ',
        id: 'plan',
        placeholder:'Ej: Módulo A',
        className: 'input Modulo',
        type: '',
        planes: ['Módulo','Completo','Semi-Intensivo 2H Modular','Semi-Intensivo 2H Completo','Intensivo 3H Modular','Intensivo 3H Completo','Promoción'],
        required: 'Required'    
        },
    estadoCivil:
        {
        texto: 'Estado Civil: ',
        id: 'estadoCivil',
        placeholder:'Ej: casado',
        className: 'input estado',
        type: '',
        estados: ['Casado','Soltero','Divorciado'],
        required: 'Required'    
        },
    genero:
        {
        texto: 'Genero: ',
        id: 'genero',
        placeholder:'Ej: Másculino',
        className: 'input genero',
        type: '',
        generos:['Masculino','Femenino'],
        required: 'Required'
        },
    modulos:
        {
        texto: 'Módulos: ',
        id: 'modulo',
        placeholder:'Ej: Modulo A',
        className: 'input modulo',
        type: '',
        required: 'Required'    
        },
    tutorTomaPrograma:
        { // 20
        texto: 'Tutor toma el Programa: ',
        id: 'tutorEstudiantes',
        placeholder:'Ej: Si',
        className: 'input tutorPrograma',
        type: '',
        required: 'Required'    //REVISAR
        }
}

//export default textos;
export default valores;