window.onload = function(){
    document.onkeypress = teclas;
}


function teclas(event){
    let codigo = event.keyCode;
    console.log(codigo)
}