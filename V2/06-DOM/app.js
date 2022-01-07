/****************************************************** 
                    Examinando el DOM
********************************************************/

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

/****************************************************** 
            Extrayendo y modificando elementos
********************************************************/
//getElementbyId() Unico elemento
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//Cambio el texto que contiene el elemento
// headerTitle.textContent = 'Hola';
// headerTitle.innerHTML = 'Adios';
//Cambio el codigo html que contiene el elemento
// header.innerHTML = '<h3>Prueba</h3>';

//getElementsByClassName Varios elementos
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[0]);
// console.log(items[3]);
// items[0].textContent = 'Prueba';

//getElementsByTagName
/* var items = document.getElementsByTagName('li');
items[0].textContent = 'Prueba 02'; */

//querySelector
/* var header = document.querySelector('#main-header');
//header.style.border = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hola Mundo';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; */

//querySelectorAll
// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'red';

// var titulos = document.querySelectorAll('.title');
// console.log(titulos);
// titulos[0].textContent = 'Prueba';

// var impar = document.querySelectorAll('li:nth-child(odd)'); //odd impar
// //impar[0].style.backgroundColor = '#ccc';
// var par = document.querySelectorAll('li:nth-child(even)'); //even incluso 

/* for(var i=0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
} */

/****************************************************** 
             Nodos padres, hijos y hermanos
********************************************************/

//ParentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// var main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentNode);


//ParentElement
//var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// var main = itemList.parentElement;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstChild/firstElementChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Prueba';

//lastChild/lastElementChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Prueba';


// //Elementos hermanos
// var itemList = document.querySelector('#items');

// //previousSibling
// console.log(itemList.previousSibling);


// //previousElementSibling
// console.log(itemList.previousElementSibling);

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

/****************************************************** 
            Creando elementos y nodos
********************************************************/
//createElement
//tageName

/* var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','Hola mundo');

//createTextNode
var nuevoNodoText = document.createTextNode('Hola mundo');
nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

//Agregar a la pagina web
var contendor = document.querySelector('header .container');
console.log(contendor);

var h1 = document.querySelector('h1');
console.log(h1);

contendor.insertBefore(nuevoDiv,h1); //Insertar antes de */

/****************************************************** 
                    Eventos
********************************************************/
//La forma recomendada de meter un evento es primero en el archivo de javascript y seleccionando 
//el elemento en cuestion 

//addEventListener para que escuche un evento hay dos formas de hacerlo:
/* document.getElementById('boton').addEventListener('click',function(){
    console.log('Click 2');
}); */

/* document.getElementById('boton').addEventListener('click',hacerClick);

function hacerClick(){
    //console.log('Usted hizo click');
    document.getElementById('header-title').textContent = 'Texto cambiado';
} */

/*********************************************************
 Agregar y eliminar elementos a una lista y evento submit 
**********************************************************/

var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit',agregarItem);

//Evento Click de la lista
lista.addEventListener('click',eliminarItem);

//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);


function agregarItem(e){
    e.preventDefault(); //Cancela el evento si es cancelable sin detener todo el evento
    //Pillo el objeto que quiero agregar del submit
    var newItem = document.getElementById("item").value;

    //Agregando elemento
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    //Boton de eliminar
    var botonDel = document.createElement('button');
    botonDel.className = "btn btn-danger btn-sm float-right eliminar";
    botonDel.appendChild(document.createTextNode('X'));
    
    //Agregamos el boton al li
    li.appendChild(botonDel);
    //Agregamos este li al grupo de lis
    lista.appendChild(li);
}

/******************************************************
        Funcion para eliminar un Item de la lista
********************************************************/
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}
/******************************************************
        Funcion que busque elemento en una lista
********************************************************/
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) !=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }     
    });
}


