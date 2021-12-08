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

//Argumentos Undefined
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


//Argumentos nulos

/* var a;
a = null;
var valorNulo = function(a){
   return a; 
}

console.log(valorNulo(a)); */

//Argumentos por default

/* var sumar = function(a = a, b = 3, c= 3){
    return a + b + c;
}

console.log(sumar(10,4,7));
console.log(sumar(10,4));
console.log(sumar(10, null, 4)); */

//Plantillas de cadenas (template string)
/* var nombre = 'Pablo';
console.log('El nombre es:' + nombre);
console.log(`El nombre es: ${nombre}`);

var a = 5;
var b = 10;
console.log('La suma es: ' + (a + b));
console.log(`La suma es: ${(a+b)}`); */

/***************
 * Ejercicio 4
 * Implentar una función que nos permita evaluar el
 * porcentaje de respuestas positivas y negativas en un examen
 * La función debe recibir el nombre, y la cantidad de
 * respuestas positivas y negativa
 * 
 * La función debe calcular el porcentaje que representa cada
 * tipo de repuesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(>90), B(70% -89%), C(45%-69%), D(45%)
 * */

//Mi solución
// function porcentajePositivas(nombre,positivas,negativas){
    
//    //Porcentajes negativas y positivas
//    var porcentajetotalPositivas = (positivas/100)*100;
//    var porcentajetotalNegativas = (negativas/100)*100;

//    //Evaluar con los diferentes casos y dar resultado
//    if(porcentajetotalPositivas>=90){
//        console.log(`El resultado de ${nombre} es una A con un total de ${porcentajetotalPositivas}% respuestas positivas y ${porcentajetotalNegativas}% negativas`);
//    }else if(porcentajetotalPositivas<=89 && porcentajetotalPositivas>=70){
//        console.log(`El resultado de ${nombre} es una B con un total de ${porcentajetotalPositivas}% respuestas positivas y ${porcentajetotalNegativas}% negativas`);
//    }else if(porcentajetotalPositivas<=69 && porcentajetotalPositivas>45){
//        console.log(`El resultado de ${nombre} es una C con un total de ${porcentajetotalPositivas}% respuestas positivas y ${porcentajetotalNegativas}% negativas`);
//    }else if(porcentajetotalPositivas<=45){
//        console.log(`El resultado de ${nombre} es una D con un total de ${porcentajetotalPositivas}% respuestas positivas y ${porcentajetotalNegativas}% negativas`);
//    }

// } 

//Solucion Grover

var calcularScore = function(nombre, pos, neg){
    var porPos = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;
    var score = '';

    if(porPos > 90){
        score = 'A';
    }else if(porPos >= 70){
        score = 'B';
    }else if (porPos >=45){
        score = 'C';
    }else{
        score = 'D';
    }
    return `${nombre} tiene el score ${score}, Positivas:${porPos}%, Negativas ${porNeg}`;
}

var resultado = calcularScore('Pablo', 75, 25);
console.log(resultado);

