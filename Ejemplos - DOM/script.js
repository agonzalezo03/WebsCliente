/*
// Obtener un elemento del html por su id
const contenedor = document.getElementById("contenedor");
const espacioVacio = document.getElementById("vacio");

const parrafosClassname = document.getElementsByClassName("parrafos");
console.log(parrafosClassname);

// Obtener todos los elementos del html por una clase
const parrafosQuery = document.querySelectorAll(".parrafos");
console.log(parrafosQuery);

// Añadir texto al final del elemento html
parrafosClassname[1].append(" hola");


// Cambiar el contenido del elemento html
contenedor.innerHTML = "";


espacioVacio.innerHTML =
    `
    <div class="ejemploClase">
        <div>
            <p>Párrafo de ejemplo 1</p>
        </div>
        <div>
            <p id="parrafoFinal">Párrafo de ejemplo 2</p>
        </div>
    </div>
`;


const parrafoFinal = document.getElementById("parrafoFinal");


// Añadir una clase
parrafoFinal.classList.toggle("oculta");

// Eliminar una clase
parrafoFinal.classList.remove("oculta");
*/
// Para prácticar: Añadir en el contenedor, un div que contenga una imagen y un
// título, este título deberá tener una clase que le añada el color verde a las letras
// Podeis obtener una img de: https://source.unsplash.com/random/150x150

let newDiv = document.createElement("div");

let tituloVerde = document.createElement("h1");
tituloVerde.innerText = "Pedazo titulo";

tituloVerde.classList.toggle = "";

let imagen = document.createElement("img");
imagen.src = " https://source.unsplash.com/random/150x150";

newDiv.append(tituloVerde, imagen);

const contenedor = document.getElementById("contenedor");
contenedor.appendChild(newDiv);


/*
.
.
.
.
.
.
.
.
.
.


SOLUCIÓN

.
.
.
.
.
.
.
.
.
.

*/
/*

//1º Paso: Crear un elemento div
const div = document.createElement("div");

//2º Paso: Crear un elemento h3 y añadirle el texto y la clase
const titulo = document.createElement("h3");
titulo.textContent = "Foto";
titulo.className = "titulo-foto";

//3º Paso: Crear un elemento img y la url
const imagen = document.createElement("img");
imagen.setAttribute("src", "https://source.unsplash.com/random/150x150");

//4º Paso: Añadir el título y la imagen al elemento div
div.appendChild(titulo);
div.appendChild(imagen);

//5º Paso: Añadir el div al final del contenedor
contenedor.appendChild(div);

//Añadir por encima de un elemento
let parentContenedor = contenedor.parentNode;
parentContenedor.insertBefore(div, contenedor);

// Copiar un elemento
let contenedorCopia = contenedor.cloneNode(true);
document.body.appendChild(contenedorCopia);

*/






