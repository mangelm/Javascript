/******************************************************
            Objeto Date()
********************************************************/
/* const ahora = new Date();
const fecha1 = new Date("December 17,1995 06:20:00");
console.log(ahora.toDateString());
console.log(fecha1.toISOString()); */

/******************************************************
            Obtener los datos de una fecha
********************************************************/
/* const ahora = new Date();

console.log(`Año: ${ahora.getFullYear()}`)
console.log(`Mes: ${ahora.getMonth()}`)
console.log(`Dia: ${ahora.getDate()}`)
console.log(`Dia de la semana: ${ahora.getDay()}`) */

/******************************************************
            Obtener los datos de la hora
********************************************************/
/* const fecha1 = new Date("December 17,1995 06:20:25");
console.log(`Hora: ${fecha1.getHours()}`);
console.log(`Minutos: ${fecha1.getMinutes()}`);
console.log(`Segundos: ${fecha1.getSeconds()}`); */

/******************************************************
            Timestamp o marca de tiempo
********************************************************/
//Unix Epoch - 01 Enero 1970 0:00:00 - 0
//const ahora = new Date(0);
/* const ahora = new Date();
const Timestamp = ahora.getTime();

const fechaActual = new Date(Timestamp);

console.log(ahora.toDateString());
console.log(Timestamp.toString());
console.log(fechaActual.getFullYear()); */


/******************************************************
            Ejercicio de comparación de fechas
********************************************************/
/*
Ejercicio de comparación de fechas.
Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
con la fecha actual, luego comparar ambos valores,
visualizar cual es la fecha menor a la otra
*/
const fechaActual = new Date();
const fechaRandom = new Date("December 29,2012 06:20:25");

const timestampfechaActual = fechaActual.getTime();
const timestampfechaRandom = fechaRandom.getTime();

if(timestampfechaActual < timestampfechaRandom){
    console.log(fechaActual.toString());
}else if(timestampfechaRandom < timestampfechaActual){
    console.log(fechaRandom.toString());
}


