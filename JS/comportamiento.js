var objTextoIngresado = document.querySelector(".campo-texto");
objTextoIngresado.focus();

var botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.addEventListener("click", function(){
    var objTextoIngresado = document.querySelector(".campo-texto");
    var textoIngresado = objTextoIngresado.value;
    encriptar(textoIngresado);
})

var botonDesencriptar = document.querySelector(".boton-desencriptar");
botonDesencriptar.addEventListener("click", function(){
    var objTextoIngresado = document.querySelector(".campo-texto");
    var textoIngresado = objTextoIngresado.value;
    desencriptar(textoIngresado);
})

var botonCopiar = document.querySelector("#boton-copiar");
botonCopiar.addEventListener("click", function(){
    var areaTexto = document.querySelector(".input-desencriptado");
    var textoCopiado = areaTexto.value;
    navigator.clipboard.writeText(textoCopiado);
})

function encriptar(textoIngresado){
    textoIngresado = textoIngresado.replace(/e/g, "enter");
    textoIngresado = textoIngresado.replace(/i/g, "imes");
    textoIngresado = textoIngresado.replace(/a/g, "ai");
    textoIngresado = textoIngresado.replace(/o/g, "ober");
    textoIngresado = textoIngresado.replace(/u/g, "ufat");
    mostrarTexto(textoIngresado);
}

function desencriptar(texto){
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    mostrarTexto(texto);
}

function mostrarTexto(texto){
    if (texto == ""){
        mostrar_campo();
        return;
    }
    var areaDesencriptado = document.querySelector(".input-desencriptado");
    areaDesencriptado.removeAttribute("hidden");
    areaDesencriptado.value = texto;
    mostrar_boton_copiar();
    limpiar_campo();
}

function limpiar_campo(){
    var objImagen = document.querySelector("#img-munieco");
    objImagen.setAttribute("hidden", "");
    var objTxt = document.querySelector("#txt-msj");
    objTxt.setAttribute("hidden", "");
    var objTxt2 = document.querySelector("#txt-msj-2");
    objTxt2.setAttribute("hidden", "");
    
    var objTextoIngresado = document.querySelector(".campo-texto");
    objTextoIngresado.value = "";
}

function mostrar_boton_copiar(){
    var botonCopiar = document.querySelector("#boton-copiar");
    botonCopiar.removeAttribute("hidden");
}

function mostrar_campo(){
    var areaTxt = document.querySelector(".input-desencriptado");
    areaTxt.setAttribute("hidden", "");
    var objImagen = document.querySelector("#img-munieco");
    objImagen.removeAttribute("hidden");
    var objTxt = document.querySelector("#txt-msj");
    objTxt.removeAttribute("hidden");
    var objTxt2 = document.querySelector("#txt-msj-2");
    objTxt2.removeAttribute("hidden");
    var objTextoIngresado = document.querySelector(".campo-texto");
    objTextoIngresado.focus();
}