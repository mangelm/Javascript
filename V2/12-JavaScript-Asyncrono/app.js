/******************************************************
            La funcion setTimeout
********************************************************/
/* setTimeout(function(){
    console.log('Esto aparece después de 3 segundos');
},3000); */

// setTimeout(() => console.log('Esto aparece después de 3 segundos'),3000);

/******************************************************
            JavaScript Asíncrono
********************************************************/
//Sincrono
/* const segundo = () => {
        console.log('Llamada a segundo');
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('Fin de primero');
}

primero(); */

//Asincrono
/* const segundo = () => {
    setTimeout(() => {
        console.log('Llamada a segundo');
    },2000);
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('Fin de primero');
}

primero(); */

/* const getUsuario = () => {
    setTimeout(() => {
        const userIDs = [101,102,103,105];
        console.log(userIDs);

        setTimeout((id) => {
            const usuario = {
                email: 'silver@mail.com',
                nombre: 'silver'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

            setTimeout((idPermiso) => {
                const permisos = ['admin','creador'];
                console.log(permisos);
            
            },1500,userIDs[2]);
        },1500,userIDs[1]);
    },1500)
}

getUsuario(); */

/******************************************************
                        Promesas
********************************************************/

//Ejemplo 1
/* let promesa = new Promise((resolve, reject) => {
    if(true){
        resolve('La operación fue exitosa');
    }else{
        reject('Hubo un error');
    }
})

promesa.then(response => {
    console.log('Response:' + response);
}).catch( error => {
    console.log('Error:' + error);
})

//Ejemplo 2
var miPromesa = Promise.resolve('Comida');
miPromesa.then(resp => console.log(resp));

//Ejemplo3
var miPromesa2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve(4),2000);

})

miPromesa2.then(resp =>{
    resp += 5;
    console.log(resp);
}) */

/******************************************************
            De Callback a Promesa
********************************************************/
/* const getUsuarioIDs = new Promise((response,reject) => {
    setTimeout(() => {
        response([101,102,103,105]); 
    },1500);
});

const getUsuario = userID => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'silver@mail.com',
                nombre: 'silver'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        },1500, userID);
    });
}

const getPermisos = id => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const permiso = ['admin','creador'];
            resolve(permiso);
        },1500,id);
    })
}

getUsuarioIDs
.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[3]);
})
.then(usuario => {
    console.log(usuario);
    return getPermisos(usuario.id);
})
.then(permisos => {
    console.log(permisos);
})
.catch(() => {
    console.log('Error');
}) */
/**************************************************************************
De promesa a Async/Await (para hacer mas eficiente la lectura de promesas)
***************************************************************************/
/* const getUsuarioIDs = new Promise((response,reject) => {
    setTimeout(() => {
        response([101,102,103,105]); 
    },1500);
});

const getUsuario = userID => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'silver@mail.com',
                nombre: 'silver'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        },1500, userID);
    });
}

const getPermisos = id => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const permiso = ['admin','creador'];
            resolve(permiso);
        },1500,id);
    })
}

//Funcion con Async/Await
async function getUsuarioAW(){
    const IDs = await getUsuarioIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos);
}

getUsuarioAW(); */

/**************************************************************************
                FUNCION ASYNC AMPLIADA
***************************************************************************/
/* const getUsuarioIDs = new Promise((response,reject) => {
    setTimeout(() => {
        response([101,102,103,105]); 
    },1500);
});

const getUsuario = userID => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'silver@mail.com',
                nombre: 'silver'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        },1500, userID);
    });
}

const getPermisos = id => {
    return new Promise((resolve,reject) => {
        setTimeout(id => {
            const permiso = ['admin','creador'];
            resolve(permiso);
        },1500,id);
    })
}

//Funcion con Async/Await
async function getUsuarioAW(){
    const IDs = await getUsuarioIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos);
    return usuario;
}

//const usuario = getUsuarioAW();
//console.log(usuario);

getUsuarioAW().then(resultado => console.log(`${resultado} es un usuario.`)); */

/**************************************************************************
                Llamada AJAX con HTTP Request
***************************************************************************/
const request = new XMLHttpRequest();

//Para ver el estado del obejeto request
request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
} )

request.open('GET','https://jsonplaceholder.typicode.com/users');
request.send();
