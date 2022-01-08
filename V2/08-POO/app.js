/******************************************************
        MANEJO DE CLASES
********************************************************/
/* 
class Persona{
    //Primer metodo de la clase siempre es el constructor
    constructor(nombre,edad,trabajos = []){
        this.nombre = nombre;
        this.edad = edad;
        this.trabajos = trabajos;

    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad} `;

        this.trabajos.forEach((trabajo) => {
            biografia += `${trabajo}, `;
        })
        return biografia;
    }

}

const persona1 = new Persona('Pablo',30,['arquitecto, doctor']);
const persona2 = new Persona('Carlos',28,['ingeniero, destructor']);
const persona3 = new Persona('Ana',25,['secretaria']);

//console.log(typeof persona1);
console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia()); */

/******************************************************
        Subclases
********************************************************/
/* class Persona{
    //Primer metodo de la clase siempre es el constructor
    constructor(nombre,edad,profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;

    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad} `;

        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `;
        })
        return biografia;
    }

}

class Empleado extends Persona{
    //En la subclase tengo que llamar al constructor de la clase padre
    constructor(nombre,edad,profesiones = [],sueldo,puesto){
        super(nombre,edad,profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    
    }

    getBiografia(){
        //return `Nombre: ${this.nombre}, Puesto:${this.puesto}`;
        //Llamando al getBiografia de la clase padre
        return super.getBiografia() + `Puesto: ${this.puesto}, Salario: ${this.sueldo}`;
    }

};

const persona1 = new Empleado('Pablo',30,['arquitecto, doctor'],1500,'Gerente');
const persona2 = new Empleado('Carlos',28,['ingeniero, destructor'],1000,'RRHH');
const persona3 = new Empleado('Ana',25,['Administradora'],1000,'Administrador');

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia()); */

/******************************************************
        GETTER Y SETTER
********************************************************/
/* const datos = {
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}

datos.ubicacion = 'Buenos Aires';
console.log(datos.ubicacion);
console.log(datos); */

//Agregar los set y get en el sueldo para poder manipular la subclase
class Persona{
    //Primer metodo de la clase siempre es el constructor
    constructor(nombre,edad,profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;

    }
    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad} `;

        this.profesiones.forEach((profesion) => {
            biografia += `${profesion}, `;
        })
        return biografia;
    }

}

class Empleado extends Persona{
    //En la subclase tengo que llamar al constructor de la clase padre
    constructor(nombre,edad,profesiones = [],sueldo,puesto){
        super(nombre,edad,profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    
    }

    getBiografia(){
        //return `Nombre: ${this.nombre}, Puesto:${this.puesto}`;
        //Llamando al getBiografia de la clase padre
        return super.getBiografia() + `Puesto: ${this.puesto}, Salario: ${this.sueldo}`;
    }

    set sueldo(cantidad){
      
        this._sueldo = cantidad;

    }

    get sueldo(){
        return this._sueldo;
    }

};

const persona1 = new Empleado('Pablo',30,['arquitecto, doctor'],1500,'Gerente');
const persona2 = new Empleado('Carlos',28,['ingeniero, destructor'],1000,'RRHH');
const persona3 = new Empleado('Ana',25,['Administradora'],1000,'Administrador');

persona1.sueldo = 2000;

console.log(persona1.getBiografia());
console.log(persona1.sueldo);
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());