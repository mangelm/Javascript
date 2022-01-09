/******************************************************
            DEFINICION DE LAS CLASES
********************************************************/ 
class Libro{
    constructor(titulo,autor,isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
}

class UI{
    static mostrarLibros(){
        const libros = Datos.traerLibros();
        libros.forEach((libro)=>UI.agregarLibroLista(libro));

    }
    
    static agregarLibroLista(libro){
        const lista = document.querySelector('#libro_list');
        
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        lista.appendChild(fila);
    }

    static eliminarLibro(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }


    }

    static mostrarAlerta(mensaje,className){
        //Creando alerta
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        //Colocando donde mostrar alerta
        const container = document.querySelector('.container');
        const form = document.querySelector('#libro_form');
        container.insertBefore(div,form);

        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    }

    static limpiarCampos(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';

    }

}

class Datos{
    static traerLibros(){
        let libros;
        if(localStorage.getItem('libros') === null){
            libros = [];
        }else{
            libros = JSON.parse(localStorage.getItem('libros'));
            
        }
        return libros;
    }

    static agregarLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros));
    }

    static removerLibro(isbn){
       const libros = Datos.traerLibros();
       
       libros.forEach( (libro,index) => {
           if(libro.isbn === isbn){
               libros.splice(index,1);
           }
       })
       localStorage.setItem('libros',JSON.stringify(libros));
    }
}

/******************************************************
            Carga de la pagina
********************************************************/ 
document.addEventListener('DOMContentLoaded',UI.mostrarLibros());


/******************************************************
            Controlar el Evento Submit
********************************************************/ 
document.querySelector('#libro_form').addEventListener('submit',(e) => {
    e.preventDefault();
    
    //Obtener valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    //Validacion campos
    if(titulo === '' || autor === '' || isbn === ""){
        UI.mostrarAlerta('Por favor rellene todos los datos','danger');
    }else{
        const libro = new Libro(titulo,autor,isbn);
        Datos.agregarLibro(libro);
        UI.agregarLibroLista(libro);
        UI.mostrarAlerta('Libro agregado a la coleccion','success');
        UI.limpiarCampos();
    }
});

document.querySelector('#libro_list').addEventListener('click', (e) =>{
    UI.eliminarLibro(e.target);
    Datos.removerLibro(e.target.parentElement.previousElementSibling.textContent);
    UI.mostrarAlerta('Libro Eliminado','success');
});