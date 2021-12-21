//Examinando el DOM
//console.dir(document); //Muestra la información del objeto
/* console.log(document.URL);
console.log(document.title);
document.title = 'Prueba';
console.log(document.title);
console.log(document.head);
console.log(document.body); */
//console.log(document.all);
//console.log(document.all[5]);
//console.log(document.all[6]);
/* console.log(document.all[10]);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.images);
console.log(document.links); */

//getElementbyId() Unico elemento
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//Cambio el texto que contiene el elemento
// headerTitle.textContent = 'Hola';
// headerTitle.innerHTML = 'Adios';
// //Cambio el codigo html que contiene el elemento
// header.innerHTML = '<h3>Prueba</h3>';

//getElementsByClassName Varios elementos
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[0]);
// console.log(items[3]);
// items[0].textContent = 'Prueba';

//getElementsByTagName
var items = document.getElementsByTagName('li');
items[0].textContent = 'Prueba 02';
