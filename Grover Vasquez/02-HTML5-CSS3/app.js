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

var edad;
//edad = 0;
//edad = 10;
//edad = '';

if(edad){
    console.log('Variable esta definida');
}else{
    console.log('Variable no definida');
}

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