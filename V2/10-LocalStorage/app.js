/******************************************************
            Guardar y leer datos
********************************************************/ 

/* localStorage.setItem('nombreUsuario','Grover');
localStorage.setItem('ubicación','Iquitos');

console.log(localStorage.getItem('nombreUsuario'));
console.log(localStorage.getItem('ubicación')); */

/******************************************************
            Removar y limpiar datos
********************************************************/ 
//localStorage.removeItem('nombreUsuario');
//localStorage.clear();

/******************************************************
                    NOTACION JSON
********************************************************/ 
/* const usuario = {
    nombre:'Grover',
    edad:'30'
}

const usuarioJSON = JSON.stringify(usuario); //Lo volvemos cadena
console.log(usuarioJSON);
const usuario2 = JSON.parse(usuarioJSON); //Vuelve a ser objeto
console.log(usuario2); */

/******************************************************
            Guardar y leer objetos 
********************************************************/ 
/* const usuario = {
    nombre:'Grover',
    edad:'30'
}

const usuarioJSON = JSON.stringify(usuario); //Lo volvemos cadena
localStorage.setItem('usuario',usuarioJSON);

const userJSON = localStorage.getItem('usuario');
const usuario2 = JSON.parse(userJSON); //Vuelve a ser objeto
console.log(`${usuario2.nombre}: ${usuario2.edad} `); */