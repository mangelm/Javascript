/* function bienvenido(){
    console.log('Hola Bienvenido a la sección de funciones');
}

bienvenido();
 */
/* function bienvenido(){
    return 'Hola Bienvenido a la sección de funciones';
}

var mensaje = bienvenido();
console.log(mensaje);  */

//Partes de una función
//entradas (Parámetros/argumento), código, salida(return)

/* function cuadradoNumero(num){
  //console.log(num);
  var resultado = num*num;
  return resultado;
} */

/* var num = 3;
cuadradoNumero(num); */
//cuadradoNumero(3)

/* var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));
 */
//Función que convierte de grados a Fahrenheit a Celsius
// 32F = 0C, 68F = 20C,
// C = (F -32) * 5/9

/* function convertirFAHaCelsius(gradoFah){
    var Celsius = (gradoFah - 32) * 5/9;
    return Celsius;
}

var tempUno = convertirFAHaCelsius(32);
var tempDos = convertirFAHaCelsius(68);
console.log(tempUno);
console.log(tempDos); */

/* function calcularEdad(yearNacimiento){
    return 2021 - yearNacimiento;
} */

/* var edad = calcularEdad(1995);
var edad2 = calcularEdad(1985);
var edad3 = calcularEdad(1975);

console.log(edad);
console.log(edad2);
console.log(edad3);  */

/****
 * Ejercicio de codificacion 3
 * 
 * Calcular cuantos años le falta a una persona que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 */

//Mi metodo
/* function cuantoJubilacion(yearNacimiento,nombre){
    
    var yearActual = 2021;
    var edadActual = yearActual - yearNacimiento;
    var tiempoJubilacion = 65 - edadActual;

    return 'A ' + nombre + ' le quedan para jubilarse ' + tiempoJubilacion + ' años';

}

var jubilacion = cuantoJubilacion(1995,'Angel');
console.log(jubilacion); */

//Metodo Glover
/* function calcularTiempoJubilacion(yearNacimiento,nombre){
    var edad = calcularEdad(yearNacimiento);
    var yearJubilacion = 65 - edad;
    console.log(nombre + ' le faltan ' + yearJubilacion + ' años para su jubilación');
}

calcularTiempoJubilacion(1990,'Pablo');
calcularTiempoJubilacion(1978,'Jose'); */

//Funciones como expresiones
/* var prueba = function(){
    console.log('Prueba');
} */

/* var prueba = function(){
    return 'Mensaje de Prueba';
} */

/* var prueba = function(nombre){
    return 'Hola ' + nombre;
}
 */
// prueba();
// console.log(prueba());
// console.log(prueba('Pablo'));

//Argumentos no definidos
/* var nombre;
var prueba = function(n){
    return 'Hola ' + n;
}

console.log(prueba(nombre)); */

/* var nombre;
var prueba = function(n){
    return 'Hola ' + n;
}

nombre = 'Pablo';
console.log(prueba(nombre)); */

