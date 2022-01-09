/******************************************************
                    Arreglos en ES6+
********************************************************/

/* const ceviche = ['pescado','mariscos','cebolla'];

console.log(ceviche);

ceviche[0] = 'papas';
console.log(ceviche);
console.log(ceviche[2]);
console.log(ceviche[5]);
console.log(ceviche[ceviche.length - 1]); */

/******************************************************
            AGREGAR/QUITAR ELEMENTOS INICIO/FINAL
********************************************************/
/* const ceviche = ['pescado','mariscos','cebolla'];

//Al final
ceviche.pop();
//console.log(ceviche.pop());
ceviche.push('limón');

console.log(ceviche);

//Al principio
ceviche.shift();
//console.log(ceviche.shift());
ceviche.unshift('papas');

console.log(ceviche); */

/******************************************************
        AGREGAR/QUITAR ELEMENTOS CON SPlICE
********************************************************/
/* const ceviche = ['pescado','mariscos','cebolla'];

//ceviche.splice(1,1);
ceviche.splice(1,0,'limón');
console.log(ceviche); */

/******************************************************
                BUCLE SOBRE MATRICES
********************************************************/
/* const ceviche = ['pescado','mariscos','cebolla'];

ceviche.splice(1,0,'limón');
console.log(ceviche);

ceviche.forEach(function(item,index){
    console.log(index);
    console.log(item);
});
 */
/******************************************************
                RECORRER UN ARREGLO
********************************************************/
/* const ceviche = ['pescado','mariscos','cebolla'];

ceviche.splice(1,0,'limón');
console.log(ceviche);

for(let i=0; i < ceviche.length;i++){
    console.log(`Indice ${i}: ${ceviche[i]}`);
} */

/******************************************************
                BUSQUEDA
********************************************************/

/* const ceviche = [
     {
         codigo: 1,
        titulo: 'pescado'
     },
     {
         codigo: 2,
         titulo: 'mariscos'
     },
    {
        codigo: 3,
        titulo: 'cebolla'
     }
];

 //console.log(ceviche.indexOf('cebolla')); //Si no encuentra devuelve -1 o false
const index = ceviche.findIndex(function(ing,index){
    //console.log(ing);
    return ing.titulo === 'cebolla';
})

console.log(index); */

/******************************************************
                AMPLIANDO LA BUSQUEDA
********************************************************/ 
/* 
const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos',
        tipo: 'frescos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

const buscarIngrediente = function(ceviche,titulo){
    const index = ceviche.findIndex(function(ing,index){
        return ing.titulo === titulo;
    })
    return index;

}

console.log(ceviche[buscarIngrediente(ceviche,'pescado')]); */

/******************************************************
                Filtrado
********************************************************/ 
/* const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos',
        tipo: 'frescos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

const filtrarIngredientes = ceviche.filter(function(ing){
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
})

console.log(filtrarIngredientes);*/



/* const paises = ['Colombia','Ecuador','Perú','España','México'];
console.log(paises.filter(pais => pais.includes('o')));
console.log(paises.filter(pais => pais.includes('Es'))); */

/******************************************************
                    Ordenacion de Arreglos
********************************************************/ 
const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos',
        tipo: 'frescos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

ceviche.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < b.titulo){
        return -1;
    }
    return 0;

})

console.log(ceviche);