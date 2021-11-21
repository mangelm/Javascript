/************************
 * Setenncia if / else
 ************************/

/* var nombre = 'Pablo';
var estadoCivil = 'soltero';
//var estaCasado = false;
var estaCasado = true;

/* if (estadoCivil === 'casado'){
    //si es verdadera la condicion
    console.log(nombre + ' esta casado');
}else{
    //si es falsa la condicion
    console.log(nombre + ' esta soltero');
} */

/* if (estaCasado){
    //si es verdadera la condicion
    console.log(nombre + ' esta casado');
}else{
    //si es falsa la condicion
    console.log(nombre + ' esta soltero');
}  */

/**************************
 * Setencias condicionales
 ***************************/
/* 
var nombre = 'Pablo';
var edad = 8;
 */
// edad < 12 es un niño
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60, es un anciano.

/* if (edad < 12){
    console.log(nombre + ' es un niño.');
}else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente.');
}else if ((edad < 17) && (edad <60)){
    console.log(nombre + ' es un adulto.');
}else{
    console.log(nombre + ' es un anciano.');
} */

/*****************
Operador ternario
 *****************/
/* var nombre = 'Pablo';
var edad = 16;

edad >= 18 ? console.log(nombre + ' es mayor de edad'): console.log(nombre + ' es adolescente'); */

/**************** 
Setencia Switch
******************/

/* var mes = 8;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    default: 
        console.log('Mes no considerado');
} */

/************************************
 * Sentencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 **************************************/

//Sentencia For
/* for (var i = 1; i <= 10; i++){
    console.log(i);
}

for (var i = 1; i <= 10; i+=2){
    console.log(i);
}

for (var i = 10; i >= 1; i--){
    console.log(i);
} */

//Sentencia while
/* var i = 1;
while(i <=10){
  console.log(i);
  i++;
}

var i = 1;
while( i <=10){ 
    console.log(i);
    i+=2;
}

var i = 10;
while(i >= 1){
  console.log(i);
  i--;
} */

//Sentecia Do..While
/* var i = 1;
do{
  console.log(i);
  i++;
}while(i <= 10)

var i = 1;
do{
    console.log(i);
    i+=2;
}while(i <= 10)

var i = 10;
do{
    console.log(i);
    i--;
}while(i >= 1) */

/******************************
* Valores verdaderos y falsos 
********************************/

//Valores falsos: undefined, null, 0, ''
//Valores verdaderos = NOT valores falses

//var edad;
//edad = 0;
//edad = 10;
//edad = '';

/* if(edad){
    console.log('Variable esta definida');
}else{
    console.log('Variable no definida');
} */

//operadores de igualdad
/* if(edad == 10){
    console.log('Variable con coersión');
}else{
    console.log('Variable sin coersión')
} */
/* if(edad === 10){
    console.log('Variable con coersión');
}else{
    console.log('Variable sin coersión')
} */

/***************************
 * Ejercicio de setencias
 ***************************/
 
/****************
 * Tienes dos alumnos, Pablo y Maria.
 * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8, 16.
 * Mária tiene las siguientes notas en el curso de mismo curso: 12,18,10.
 * 
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
 * superior, e indicar si el alumno esta aprobado, para ello su promedio
 * debe ser superior a 13.
 */

/*Mi metodo*/
/* 
//Promedios
var promedio_pablo = (14 + 8 + 16)/3;
var promedio_maria = (12 + 18 + 10)/3;

console.log('Promedio de Pablo: ' + promedio_pablo);
console.log('Promedio de Maria: ' + promedio_maria);

//Promedio Superior
if (promedio_maria > promedio_pablo){
    console.log('Maria tiene el promedio mas alto');
}else{
    console.log('Carlos tiene el promedio mas alto'); 
}

//Aprobados o no
if (promedio_maria > 13){
    console.log("Maria esta aprobada");
}else{
    console.log("Maria no esta aprobada");
}

if (promedio_pablo > 13){
    console.log("Pablo esta aprobada");
}else{
    console.log("Pablo no esta aprobada");
} */
    
/*Metodo Glover*/
var promedio_pablo = (14 + 8 + 16)/3;
var promedio_maria = (12 + 18 + 10)/3;

//Promedio superior
if (promedio_pablo > promedio_pablo){
    console.log('Pablo tiene el promedio superior');
}else if (promedio_maria > promedio_pablo){
    console.log('Maria tiene el promedio superior');
}else{
    console.log('Pablo y Maria tiene promedios iguales');
}

//Mostrar si estan aprobados
for (var i=1; i<= 2; i++){
    if(i === 1){
        if(promedio_pablo > 13){
            console.log('Pablo esta aprobado');
        }else{
            console.log('Pablo no esta aprobado');
        } 
    }else{
        if (promedio_maria > 13){
            console.log('Maria esta aprobada');
        }else{
            console.log('Maria no esta aprobada');
        }
    }
}