let tabla = document.createElement("table");



const body = document.getElementsByTagName("body")[0];





    let fila = document.createElement("tr");
    
    for (x=1; x<3; x++){
        let columna = document.createElement("td");
        let texto = document.createElement("p")
        texto.textContent = "Columna " + x;

        columna.appendChild(texto);
        fila.appendChild(columna);
    }
    tabla.appendChild(fila);


body.appendChild(tabla);

tabla.className = "border";

let boton = document.createElement("button");
body.appendChild(boton);
boton.textContent = "Agregar filas"
boton.addEventListener("click", addFila);

function addFila(){

    let studentsArray = [
        "pepe",
        "alberto",
        "manuel"
    ]
    numero = Math.floor(Math.random() * studentsArray.length)

    let fila = document.createElement("tr");
    
   
        let columna1 = document.createElement("td");
        let texto1 = document.createElement("p")
        texto1.textContent = studentsArray[numero];
        columna1.appendChild(texto1);
        

        let columna2 = document.createElement("td");
        let texto2 = document.createElement("p")
        texto2.textContent =  Math.floor(Math.random() * 100 + 1);
        columna2.appendChild(texto2);
        fila.append(columna1, columna2);

    tabla.appendChild(fila);

}