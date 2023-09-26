let texto = prompt("Mensaje a cifrar");
const body = document.getElementsByTagName("body")[0];

texto = texto.toLocaleUpperCase();

console.log(texto);

let abecedarioArray = 
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
let numeroArray = 
    ["0","1","2","3","4","5","6","7","8","9"]


    let texto1 = document.createElement("p")



texto1.textContent = cifrarMensaje(texto);
texto1.className = "texto"
let newDiv = document.createElement("div");
let imageCandado = document.createElement("img")
imageCandado.src = "candado.png"
let imageLlave = document.createElement("img")
imageLlave.src = "llave.png"
newDiv.appendChild(texto1);
newDiv.appendChild(imageCandado);
newDiv.appendChild(imageLlave);
newDiv.className = "contenedor";
imageLlave.className = "oculta";
imageCandado.className = "candado";
body.appendChild(newDiv);

imageCandado.addEventListener("click", cambiarImg);
imageLlave.addEventListener("click", cambiarImg);

function cambiarImg(){
    if (imageCandado.classList.contains("oculta")) {
        
        imageCandado.classList.remove("oculta");
        imageCandado.classList.add("mostrada");
        imageLlave.classList.remove("mostrada");
        imageLlave.classList.add("oculta");
    } else {
        
        imageCandado.classList.remove("mostrada");
        imageCandado.classList.add("oculta");
        imageLlave.classList.remove("oculta");
        imageLlave.classList.add("mostrada");
    }
}





function cifrarMensaje(texto){
    let textoCifrar = new String(texto) ;
    console.log(textoCifrar)
    let textoCifrado = new String();

    for(let i=0;i < textoCifrar.length;i++){

        if(textoCifrar.charAt(i) == " "){
            textoCifrado += " ";
       
        }else if(abecedarioArray.includes(textoCifrar.charAt(i))){
            if(textoCifrar.charAt(i) != "Z"){
                for(let x=0;x<abecedarioArray.length;x++){
                    if(textoCifrar.charAt(i) == abecedarioArray[x]){
                        textoCifrado += abecedarioArray[x+1]
                    }
                }
                
            }else{
                textoCifrado += "A";
            }
            
        }else{
            for(let z=0; z < numeroArray.length;z++){
                if(textoCifrar.charAt(i) == numeroArray[z]){
                    if(textoCifrar.charAt(i) != 9){
                        textoCifrado += numeroArray[z+1];
                    }else{
                        textoCifrado += 0;
                    }
                    

                }//if
            }//forz
        }//else
       
    }//fori
    console.log(textoCifrado);
    return textoCifrado;
}//funcion


