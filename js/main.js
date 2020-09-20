var bombo = document.getElementById("btn_bombo");
var tomAereo = document.getElementById("btn_tom_aereo");
var platidoIz = document.getElementById("btn_platillo_izquierdo")
var caja = document.getElementById("btn_caja");
var hit = document.getElementById("btn_hit");
var ride = document.getElementById("btn_ride");
var suelo = document.getElementById("btn_suelo")
var platidoDe = document.getElementById("btn_derecho");

var audioBombo = new Audio('../recursos/sounds/bombo.mp3');
var audioTomAereo = new Audio('../recursos/sounds/tom-aereo.mp3');
var audioPlaIz = new Audio('../recursos/sounds/platillo-crash-izquierdo.mp3');
var audioCaja = new Audio("../recursos/sounds/caja.mp3");
var audioHit = new Audio("../recursos/sounds/hit-hat.mp3");
var audioRide = new Audio("../recursos/sounds/platillo-ride.mp3");
var audioSuelo = new Audio("../recursos/sounds/tom-suelo.mp3");
var audioPlaDe = new Audio("../recursos/sounds/platillo-crash-derecho2.mp3");

window.onload = function(){
    document.onkeypress = teclas;
}

/* ------------------------ Eventos de Click a los botones ----------------*/

bombo.addEventListener("click", () => {
    sonidoBombo(bombo.value);
    sonidoBombo(audioBombo.play())
    sonidoBombo(bombo.classList.toggle("bomboColor"))
});

tomAereo.addEventListener("click", () => {
    sonidoTom(tomAereo.value)
    sonidoTom(audioTomAereo.play())
    sonidoTom(tomAereo.classList.toggle("tomColor"))
});

platidoIz.addEventListener("click", () =>{
    sonidoPlaIz(platidoIz.value);
    sonidoPlaIz(audioPlaIz.play());
    sonidoPlaIz(platidoIz.classList.toggle("colorPlaIz"))
});

caja.addEventListener("click", () =>{
    sonidoCaja(caja.value);
    sonidoCaja(audioCaja.play());
    sonidoCaja(caja.classList.toggle("colorCaja"))
});

hit.addEventListener("click", () =>{
    sonidoHit(hit.value);
    sonidoHit(audioHit.play())
    sonidoHit(hit.classList.toggle("colorHit"))
});

ride.addEventListener("click", () =>{
    sonidoRide(ride.value);
    sonidoRide(audioRide.play())
    sonidoRide(ride.classList.toggle("colorRide"))
});

suelo.addEventListener("click", () =>{
    sonidoSuelo(suelo.value);
    sonidoSuelo(audioSuelo.play())
    sonidoSuelo(suelo.classList.toggle("colorSuelo"))
});

platidoDe.addEventListener("click", () =>{
    sonidoDerecho(platidoDe.value);
    sonidoDerecho(audioPlaDe.play())
    sonidoDerecho(platidoDe.classList.toggle("colorPlaDe"))
});



/* -------------------------------------------------------------------------------*/

/* Funciones que se ejecutan en los Eventos Click */

function sonidoBombo(bom){
    let userBombo = bom;
    console.log(userBombo);
}

function sonidoTom(tom){
    userTom = tom;
    console.log(userTom);
}

function sonidoPlaIz(plaIz){
    userPlaIz = plaIz;
    console.log(userPlaIz);
}

function sonidoCaja(ca){
    usCaja = ca;
    console.log(usCaja)
}

function sonidoHit(h){
    usHit = h;
    console.log(usHit)
}

function sonidoRide(ri){
    usRide = ri;
    console.log(usRide);
}

function sonidoSuelo(su){
    usSuelo = su;
    console.log(usSuelo)
}

function sonidoDerecho(de){
    usDerecho = de;
    console.log(usDerecho)
}

/*------------------------------------------------------*/

/* Funcion de las teclas*/
function teclas(event){
    let codigo = event.keyCode;
    console.log(codigo)
    console.log(String.fromCharCode(event.keyCode))
    if (codigo === 113) {
        audioPlaIz.play();
        sonidoPlaIz(platidoIz.classList.toggle("colorPlaIz"))
    }
    if (codigo === 119) {
        audioTomAereo.play();
        sonidoTom(tomAereo.classList.toggle("tomColor"))
    }
    if (codigo === 101) {
        audioRide.play();
        sonidoRide(ride.classList.toggle("colorRide"))
    }
    if (codigo === 97) {
        audioHit.play();
        sonidoHit(hit.classList.toggle("colorHit"))
    }
    if (codigo === 115) {
        audioCaja.play();
        sonidoCaja(caja.classList.toggle("colorCaja"))
    }
    if (codigo === 100) {
        audioSuelo.play();
        sonidoSuelo(suelo.classList.toggle("colorSuelo"))
    }
    if (codigo === 102) {
        audioPlaDe.play();
        sonidoDerecho(platidoDe.classList.toggle("colorPlaDe"))
    }
    if (codigo === 32) {
        audioBombo.play();
        sonidoBombo(bombo.classList.toggle("bomboColor"));
    }

    /*--------------------------------------------------------------*/

}


