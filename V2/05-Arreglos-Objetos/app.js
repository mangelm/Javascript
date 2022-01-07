/******************************
 * Arreglos en JavasSCript
 ****************************/

/*var nombre = ['Pablo','Carlos','Ana','Teresa'];
var vegetales = new Array('Tomante','Lechuga','Zanahoría');

console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetales[1]);
console.log(vegetales[2]);

nombre[1] = 'José';
console.log(nombre[1]);
vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombre.length); */

/****************************
 * Operaciones con arreglos
 *****************************/

/* var frutas = ['pera','manzana','uva','sandia'];
console.log(frutas);

/* for(var i=0; i<=frutas.length - 1; i++){
    console.log(frutas[i]);
} */
//Parecido al for
/* frutas.forEach(function(elemento, indice, array){
    console.log(elemento,indice);
}); */


/*frutas.push('naranja'); //Añadir elemento al final
console.log(frutas);
frutas.unshift('fresa'); //Añadir al principio
console.log(frutas);
frutas.pop(); //Elimina el ultimo elemento de la lista
console.log(frutas);
frutas.shift(); //Elimina el primer elemento de la lista
console.log(frutas);


var pos = frutas.indexOf('uva'); //Posicion de un elemento en concreto
console.log(pos);

frutas.splice(1,2); //Indicamos desde que indice queremos eliminar y cuantos
console.log(frutas); */

//Arreglo con elementos de diferentes tipos

/* var persona = ['Pablo','Vazquez',34,'999999999',1.75];
console.log(persona); */

/*********************
 * Objetos Literales
 *********************/

/* var persona = {
    nombre: 'Pablo',
    apellido: 'Vásquez',
    gustos:['futboll','peliculas','ingles'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona);
console.log(persona.apellido);
console.log(persona['trabajo']);

//Cambio de datos sin metodos
persona.esCasado = false;
console.log(persona.esCasado); */

/************
 * Objetos con la sintaxis Object
 */

/* var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'Pinedo';
persona2['trabajo']='Webdeveloper';
console.log(persona2); */

//Objetos y Métodos

var persona = {
    //Propiedades
    nombre: 'Pablo',
    apellido: 'Vásquez',
    gustos:['futboll','peliculas','ingles'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento: 1985,

    //Metodos
    /*
    //Sin añadir this ni variable yearNacimiento
    calcularEdad: function(yearNacimiento){
        return 2021 - yearNacimiento;
    }
    */
    calcularEdad: function(){
        this.edad = 2021 - this.yearNacimiento;
    }

};

persona.calcularEdad();
console.log(persona);
//var edad = persona.calcularEdad(1985);
//console.log(edad);
