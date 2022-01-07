/******************************************************
                            ES5
********************************************************/
// var nombre5 ='Pablo';
// console.log(nombre5);
// var edad5 = 35;
// nombre5 = 'Carlos';
// console.log(nombre5);

/******************************************************
            ES6 VARIABLES (NUEVA FORMA DE DECLARAR)
********************************************************/
// const nombre6 = 'Pedro'; //El const es una variable que no se puede modificar
// console.log(nombre6); 
// let edad6 = 28;
// //nombre6 = 'Ana';
// //console.log(nombre6);
// edad6 = 30; 
// console.log(edad6); 

/******************************************************
            ES6 BLOQUES Y ALCANCES DE LAS VARIABLES
********************************************************/

//var test5;
// let test6;
// test6 = 10;
/* 
function prueba(){
    let test6; //Solo sierve dentro de este bloque
    test6 = 15;
} */
// prueba();
// console.log(test);

/*{
    //const a = 3;
    //let b = 4;
    //var c = 5;
}*/

//console.log(a + b);
//console.log(c);

/******************************************************
            ES6 PLANTILLA DE CADENAS AVANZADAS
********************************************************/
/******************************************************
                    TEMPLATE STRINGS
********************************************************/
// let nombre = 'Pablo';
// let apellido = 'Vásquez';
// const nacimiento = 1985;
// const ciudad = 'Lima';

/* function calcularEdad(year){
    return 2021 - year;
} */

//ES5
// console.log(nombre + ' ' + apellido + ' nacio en ' +  ciudad + ', y su edad es ' + calcularEdad(nacimiento));

//ES6
// console.log(`${nombre} ${apellido}, nacio en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`);

/******************************************************
            FUNCIONES DE CADENAS ES6
********************************************************/
// let nombre = 'Pablo';
// let apellido = 'Vásquez';

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5)); //repeat() Me repite un valor un numero de veces que yo le diga
// console.log(nombreCompleto.includes('blo ')); //verdadero o falso si existe
// console.log(nombreCompleto.startsWith('Pe')); //Comienza con
// console.log(nombreCompleto.endsWith('uez')); 

/******************************************************
            FUNCIONES FLECHAS ES6
********************************************************/
/******************************************************
                    EJEMPLO 1
********************************************************/
//const years = [2000,2005,2008,2012];

//ES5
/* var edad5 = years.map(function(el){
    return 2021 - el;
}) //.map me permite recorrer y hacer interraciones al mismo tiempo en el arreglo */
// console.log(edad5);

//ES6
// let edad6 = years.map(el => 2021 - el);
// console.log(edad6);

// edad6 = years.map((el,index) => `Edad ${index+1}: ${2021-el}`); //Si no pongo retorno es porque es simple
// console.log(edad6);

/* edad6 = years.map((el,index)=> {
    const yearActual = new Date().getFullYear(); //Funcion fecha + que te devuelva solo el año
    const edad = yearActual - el;
    return `Edad ${index+1}: ${edad}`;
} ); */
/* console.log(edad6); */

/******************************************************
                        EJEMPLO 2
********************************************************/
//ES5
/* function cuadrado(num){
    return num*num;
}; */
// console.log(cuadrado(5));

//ES6
/* const cuadrado = function(num){
    return num*num;
};
console.log(cuadrado(5)); */
//Funcion flecha
// const cuadrado = (num) => num*num;

// console.log(cuadrado(5));

/******************************************************
                        EJEMPLO 3
********************************************************/
/* const persona = [
    {
        nombre:'Pablo',
        edad:20
    },
    {
        nombre:'Ana',
        edad:25
    },
    {
        nombre:'Carlos',
        edad:30
    },
    {
        nombre:'Pepe',
        edad:35
    }
]; */
//Funcion normal
/* const menores30 = personas.filter(function(personas){
    return personas.edad < 30;
});
console.log(menores30); */
//Funcion Flecha
// const menores30 = persona.filter((persona) => persona.edad < 30);
// console.log(menores30); 

/******************************************************
            DESTRUCTURACIÓN O DESTRUCCIÓN
********************************************************/
//ES5
// var datos = ['Pablo',25];

// var nombre = datos[0];
// var edad = datos[1];

//ES6
// var [nombre,edad] = ['Pablo',25];
// console.log(nombre);
// console.log(edad);

/* const persona = {
    Nombre: 'Carlos',
    Edad: 30
} */

//destructuracion
// const {Nombre,Edad} = persona;
// console.log(Nombre);
// console.log(Edad);

// const {Nombre: n,Edad: e} = persona;
// console.log(n);
// console.log(e);

/******************************************************
            EJEMPLO DESTRUCTURACIÓN
********************************************************/
/* const calcMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad > 18 ? true : false;
    return [edad, mayoria];
} */
// const [edad2, mayoria] = calcMayoriaEdad;
// console.log(edad2);
// console.log(`Es mayorde edad: ${mayoria}`);

/******************************************************
                MAPAS ES6
********************************************************/

// const datos = new Map();

// datos.set('nombre','Angel');
// datos.set('edad',26);
// datos.set(1,'grover@gmail.com');
// datos.set(2,'grover@gmail.com');
// datos.set('movil',999999999);

// console.log(datos.get('nombre'));
// console.log(datos.get(2));
// console.log(datos.size);

// //datos.delete(2);
// //datos.clear();
// datos.forEach((value,key) => {
//     console.log(`${key} : ${value}`);
// })

/******************************************************
        OPERADOR DE PROPAGACION = SPREAD OPERATOR
********************************************************/
var suma = function(a,b,c,d){
    return a + b + c + d;
}

var oper1 = suma(10,20,30,40);
console.log(oper1);

var valores = [10,20,30,40]
const oper2 = suma(...valores);

console.log(oper2);

const rrhh = ['Pedro','Pablo','Ana'];
const contabilidad = ['Felipe','Carlos','Maria'];

const empresa = [...rrhh, ...contabilidad];

console.log(empresa);