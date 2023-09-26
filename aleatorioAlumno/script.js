let studentName = document.getElementById("studentName");
let boton = document.getElementById("boton");

let numero = 0;


let studentsArray = [
    "pepe",
    "alberto",
    "tonto"
]



function getRamdomStudent(){
    
    numero = Math.floor(Math.random() * studentsArray.length)

    studentName.innerText = studentsArray[numero];
}

boton.addEventListener("click", getRamdomStudent);