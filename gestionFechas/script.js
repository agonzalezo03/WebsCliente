const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const containerDia = document.getElementById('containerDias');
const foto = document.getElementById('foto');
let body = document.getElementsByTagName("body")[0];
const sorpresa = document.getElementById('sorpresa');
const feliz = document.getElementById('feliz');

let currentDate = new Date();
let cumpleDate = new Date(2024, 11, 29, 17, 40); // Año, mes (enero==0), día, hora, minutos¡
let days, hours, mins, seconds, totalSeconds;

const primaveraDate = new Date(2024, 2, 27, 0, 0);
const veranoraDate = new Date(2023, 5, 27, 0, 0);
const otonoDate = new Date(2023, 8, 27, 0, 0)
const inviernoDate = new Date(2023, 11, 27, 0, 0)


let countdownInterval = setInterval(countdown, 1000);
countdown();

function countdown() {
    currentDate = new Date();
    totalSeconds = (cumpleDate - currentDate) / 1000;
  
    // Condición para comprobar si ha llegado la hora establecida
    if (Math.floor(totalSeconds) <= 0) {
      showProduct();
      secondsElement.innerHTML = 0;
      return;
    }

    if(currentDate >= veranoraDate && currentDate <= otonoDate){
        body.className = "veranoFondo";
        foto.setAttribute("src", "img/verano.jpg");
    }else if(currentDate >= otonoDate && currentDate <= inviernoDate){
        body.className = "otonoFondo";
        foto.setAttribute("src", "img/otoño.jpg");
    }else if(currentDate >= inviernoDate && currentDate <= primaveraDate){
        body.className = "inviernoFondo";
        foto.setAttribute("src", "img/invierno.jpg");
    }else {
        body.className = "primaveraFondo";
        foto.setAttribute("src", "img/primavera.jpg");
    }
  
    //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
    //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
    //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60
  
    days = Math.floor(totalSeconds / 3600 / 24);
    hours = Math.floor(totalSeconds / 3600) % 24;
    mins = Math.floor(totalSeconds / 60) % 60;
    seconds = Math.floor(totalSeconds) % 60;
  
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = mins;
    secondsElement.innerHTML = seconds;
  
  };

  function showProduct() {
    sorpresa.classList.remove('noVea');
    containerDia.className = "oculto";
    feliz.classList.remove('oculto');

    clearInterval(countdownInterval);
  }