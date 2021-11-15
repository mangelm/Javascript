/*************************************
 * Lección de definición de Variables
 *************************************/

//console.log("Hola a todo!!");

/* var primerNombre = 'Angel'; //Variable tipo String 
console.log(primerNombre);

var edad = 34;  //Tipo numerica
var sueldo = 1800.99;

console.log(edad);

var tieneTrabajo = true; //Tipo boolean
console.log(tieneTrabajo);

var puestoDeTrabajo; //Indefinida
console.log(puestoDeTrabajo);

tieneTrabajo = null; //Reasignando nuevo valor 
console.log(tieneTrabajo); 

var cajas;*/

// Conversión de tipos

/* var primerNombre, edad, sexo, esSoltero;
primerNombre = 'Angel';
edad = 26;
sexo = 'M';
esSoltero = false;

console.log('El nombre es: ' + primerNombre + ', y mi edad es: ' + edad + ',¿Esta soltero? ' + esSoltero);

edad = 'Veinte';

console.log(edad); */

/*****************************************
 * Operadores - Matemáticos (+,-,*,/)
 ***************************************/

/* var edadAngel, edadPablo, diferenciaEdad, sumaEdades, yearActual, yearAngel, yearPablo;

edadAngel = 26;
edadPablo = 28;
yearActual = 2021;

diferenciaEdad = edadAngel - edadPablo;
sumaEdades = edadAngel + edadPablo;

yearAngel = yearActual - edadAngel;
yearPablo = yearActual - edadPablo;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("Año en que nació Angel:" + yearAngel);
console.log("Año en que nació Pablo:" + yearPablo);
console.log(yearActual * 5);
console.log(yearActual / 2);  */

/********************* 
*Operadores Lógicos
*********************/

//var mayorAngel = edadPablo > edadPablo;
/* var mayorAngel = edadPablo == edadPablo;
console.log(mayorAngel); */

/********************* 
*Operadores typeof
*********************/
/* console.log(typeof edadAngel);
console.log(typeof edadPablo);
console.log(mayorAngel);
console.log(typeof 'Pablo es mayor que Angel'); */

/********************************************************* 
*Operadores Unarios Aritméticos (incremento y decremento)
**********************************************************/
//++ Incremento
//-- Decremento

/* var edadCarmen = 18;
var edadMaria = 14; */

//++edadCarmen;
//console.log(edadCarmen);

//edadCarmen++;
//console.log(edadCarmen);

/* console.log(edadCarmen++);
console.log(--edadCarmen); */

/**************************
*Operadores de Asignación
***************************/
//=

/* var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //devuelve el residuo de una división.
a %= b; */

//Ejercicio de codificación
//Se tiene los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 80;
var alturaCarlos = 1.75;

/*Utilizar la siguiente formula para calcular el IMC (Indice de masa corporal) de Luis y de Carlos,
IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indiciar si el IMC de Carlos 
es superior al de Luis. */

/***********
 * Mi forma
 * *********/
/* var imcLuis = pesoLuis/(alturaLuis*alturaLuis);
var imcCarlos = pesoCarlos/(alturaCarlos*alturaCarlos);

var imcAlto = imcCarlos > imcLuis;

console.log(imcCarlos);
console.log(imcLuis);

console.log(imcAlto);  */ 

/******************
 * Forma de Grover
 ******************/

/*  var imcLuis = pesoLuis/(alturaLuis*alturaLuis);
 var imcCarlos = pesoCarlos/(alturaCarlos*alturaCarlos);

 var comparacion = imcCarlos > imcLuis;

 console.log(imcLuis);
 console.log(imcCarlos);

 console.log('¿El IMC de Carlos es Superior al de Luis?:' + comparacion);
 */


