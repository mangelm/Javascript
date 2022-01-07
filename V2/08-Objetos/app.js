/******************************************************
                Objetos - Lo básico
********************************************************/

/* let miLibroA = {
    titulo: 'El libro de JavasScript',
    autor: 'Angel Moreno',
    paginas: 400,
    publicado: false
} */

// console.log(miLibroA);
// console.log(miLibroA.titulo);
// console.log(miLibroA.autor);

// console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
// miLibroA.paginas = 500;
// console.log(miLibroA.paginas);

/******************************************************
                Ejercicio codificacion
********************************************************/

//Ejercicio, crear un objeto persona que tenga las siguientes prop:
//nombre,edad,ciudad
//cambiar la edad
//Mostrar datos de la persona

/* let persona = {
    nombre: 'Angel',
    edad: 26,
    ciudad: 'Sevilla'
} */

// Persona.edad = 15;
// console.log('${persona.nombre} tiene ${persona.edad} edad y vive en la ciudad de ${persona.ciudad}');

/******************************************************
                Objetos - Funciones
********************************************************/
/* let miLibroA = {
    titulo: 'El libro de JavasScript',
    autor: 'Angel Moreno',
    paginas: 400,
    publicado: false
}  

let miLibroB = {
    titulo: 'Programacion en PHP',
    autor: 'Angel Moreno',
    paginas: 700,
    publicado: true
}  

let getResumen = (libro) => {
    return {
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
    }
} 

libroAResumen = getResumen(miLibroA);
libroBResumen = getResumen(miLibroB); 

console.log(libroBResumen.resumen);
console.log(libroBResumen.resumenPaginas);

console.log(libroAResumen.resumen);
console.log(libroAResumen.resumenPaginas); */

/******************************************************
                Objetos - Referencias
********************************************************/
/* let persona = {
    nombre: 'Pablo',
    edad: '30',
    sueldo: 1200
}

let otraPersona = persona;
otraPersona.sueldo = 1500;
console.log(otraPersona);

let cambiarSueldo = (person,aumento) => {
    person.sueldo = person.sueldo + aumento;
    //console.log(person);
}

cambiarSueldo(persona,500);
console.log(otraPersona);
console.log(persona); */

/******************************************************
                Objetos - Metodos
********************************************************/
/* let persona = {
    nombre: 'Pablo',
    edad: '30',
    sueldo: 1200,
    metodoPrueba: function(){
        //console.log('Escribiendo desde el método prueba');
        return 'Resultado desde prueba';
    }
}

//persona.metodoPrueba();
let result = personas.metodoPrueba();
console.log(result); */

/******************************************************
                Objetos - Uso del This
********************************************************/
/* let persona = {
    nombre: 'Pablo',
    edad: 30,
    sueldo: 1200,
    metodoPrueba: function(){
        //console.log('Escribiendo desde el método prueba');
        return 'Resultado desde prueba';
    },
   /*  cambiarEdad: function(e){
        this.edad = this.edad + e;
    } */
    /*cambiarEdad: function(edad){
        this.edad = this.edad + edad;
    } 
        
}

//persona.metodoPrueba();
let result = personas.metodoPrueba();
console.log(result); 
persona.cambiarEdad(3);
console.log(persona.edad); */

/******************************************************
                Objetos - String
********************************************************/
/* let nombre = ' Angel Moreno ';
let clave = '12309clave567.e'

console.log(nombre.length);
console.log(nombre.toUpperCase());
console.log(nombre.toLocaleLowerCase());
console.log(nombre.trim());

console.log(clave.includes('clave',7));
console.log(clave.includes('clave'));
console.log(clave.includes('clave',5)); */

/******************************************************
        Destructuracion de objetos
********************************************************/
/* const respuesta = {
    codigo: 200,
    data:{
        persona : {
            nombre: 'Pablo',
            direccion: {
                ciudad: 'Lima',
                pais: 'Perú'
            }
        }
    }
} */

//let {codigo} = respuesta;
// let {codigo : status, data : {persona : {nombre : nom}}} = respuesta;

// console.log(nom);

/* const getPersonaDatos = () => {
    const respuesta = 
        {
            codigo: 200,
            data:{
                persona : {
                    nombre: 'Pablo',
                    direccion: {
                        ciudad: 'Lima',
                        pais: 'Perú'
                        }
                    }
                }
        }
    return respuesta;
}

let {codigo : status, data : {persona : {nombre : nom}}} = getPersonaDatos();
console.log(nom); */

/* const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data:{
                persona : {
                    nombre: 'Pablo',
                    direccion: {
                        ciudad: 'Lima',
                        pais: 'Perú'
                        }
                    }
                }
        },
        {
            codigo: 300,
            data:{
                persona : {
                    nombre: 'Ana',
                    direccion: {
                        ciudad: 'Santiago',
                        pais: 'Chile'
                        }
                    }
                }
        },
        {
            codigo: 400,
            data:{
                persona : {
                    nombre: 'Jose',
                    direccion: {
                        ciudad: 'Bogota',
                        pais: 'Colombia'
                        }
                    }
                }
        }
    ]  
    return respuesta;
} */

//let {codigo : status, data : {persona : {nombre : nom}}} = getPersonaDatos()[0];
//console.log(nom);

/* for (const {codigo : status, data : {persona : {nombre : nom}}} of getPersonaDatos()){
    console.log(nom);
} */
