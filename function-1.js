let colorDocumento = document.querySelector("link.tema");
let temaEstilo = colorDocumento.getAttribute('href'); // Corregido el uso del selector '#href'


let profile = document.querySelector("imageProfile");
profile.setAttribute("src", "user.png");

let botonApagado = document.querySelectorAll("i.bi.bi-circle");
let botonEncendido = document.querySelectorAll("i.bi.bi-circle-fill");



let botonRedInactivo = document.querySelector(".colorRed i.bi.bi-circle");
let botonRedActivo = document.querySelector(".colorRed i.bi.bi-circle-fill");

let botonYellowInactivo = document.querySelector(".colorYellow i.bi.bi-circle");
let botonYellowActivo = document.querySelector(".colorYellow i.bi.bi-circle-fill");

let botonBlueInactivo = document.querySelector(".colorBlue i.bi.bi-circle");
let botonBlueActivo = document.querySelector(".colorBlue i.bi.bi-circle-fill");



function colorRed() {
    let hojaEstilo = colorDocumento.getAttribute('href'); // Corregido el uso del selector '#href'
    switch (hojaEstilo) {
        case 'style.css':
            colorDocumento.setAttribute('href', 'styleRed.css');
            botonRedInactivo.style.display = "none";
            botonRedActivo.style.display = "block";
            break;
        case 'styleBlue.css':
            colorDocumento.setAttribute('href', 'styleBlue.css');
            botonBlueInactivo.style.display = "none";
            botonBlueActivo.style.display = "block";
            break;
        case 'styleYellow.css':
            colorDocumento.setAttribute('href', 'styleYellow.css');
            botonYellowInactivo.style.display = "none";
            botonYellowActivo.style.display = "block";
            break;
        case 'styleRed.css': // Añadido el 'break' faltante
            colorDocumento.setAttribute('href', 'styleRed.css');
            botonRedInactivo.style.display = "block";
            botonRedActivo.style.display = "none";
            break;
        default: // Añadido el 'default' para establecer el estilo predeterminado
        colorDocumento.setAttribute('href', 'style.css');
        botonRedInactivo.style.display = "block";
        botonRedActivo.style.display = "none";
        break;    
    }

    botonBlueInactivo.style.display = "block";
    botonBlueActivo.style.display = "none";
    botonYellowInactivo.style.display = "block";
    botonYellowActivo.style.display = "none";
}



function colorBlue() {
    let hojaEstilo = colorDocumento.getAttribute('href');
    switch (hojaEstilo) {
        case 'styleBlue.css':
            colorDocumento.setAttribute('href', 'styleBlue.css');
            botonBlueInactivo.style.display = "none";
            botonBlueActivo.style.display = "block";
            break;
        case 'styleRed.css':
            colorDocumento.setAttribute('href', 'styleRed.css');
            botonRedInactivo.style.display = "none";
            botonRedActivo.style.display = "block";
            break;
        case 'styleYellow.css':
            colorDocumento.setAttribute('href', 'styleYellow.css');
            botonYellowInactivo.style.display = "none";
            botonYellowActivo.style.display = "block";
            break;
        default: // Añadido el 'default' para establecer el estilo predeterminado
            colorDocumento.setAttribute('href', 'style.css');
            botonBlueInactivo.style.display = "block";
            botonBlueActivo.style.display = "none";
            break;
    }
    botonRedInactivo.style.display = "block";
    botonRedActivo.style.display = "none";
    botonYellowInactivo.style.display = "block";
    botonYellowActivo.style.display = "none";
}



function colorYellow() {
    let hojaEstilo = colorDocumento.getAttribute('href');
    switch (hojaEstilo) {
        case 'styleBlue.css':
            colorDocumento.setAttribute('href', 'styleBlue.css');
            botonBlueInactivo.style.display = "none";
            botonBlueActivo.style.display = "block";
            break;
        case 'styleRed.css':
            colorDocumento.setAttribute('href', 'styleRed.css');
            botonRedInactivo.style.display = "none";
            botonRedActivo.style.display = "block";
            break;
        case 'styleYellow.css':
            colorDocumento.setAttribute('href', 'styleYellow.css');
            botonYellowInactivo.style.display = "none";
            botonYellowActivo.style.display = "block";
            break;
        default:
            colorDocumento.setAttribute('href', 'style.css');
            botonYellowInactivo.style.display = "block";
            botonYellowActivo.style.display = "none";
            break;
    }
    botonRedInactivo.style.display = "block";
    botonRedActivo.style.display = "none";
    botonBlueInactivo.style.display = "block";
    botonBlueActivo.style.display = "none";
}
document.querySelector(".colorYellow").addEventListener("click", colorYellow);
document.querySelector(".colorBlue").addEventListener("click", colorBlue);
document.querySelector(".colorRed").addEventListener("click", colorRed); // Corregido el nombre de 'addEventListener'

