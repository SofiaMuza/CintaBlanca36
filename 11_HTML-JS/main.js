let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let parrafo = document.getElementById("parrafo");
let input = document.getElementById("texto");
let textoUsuario = document.getElementById ("textoIN");
console.log(titulo);
titulo.innerHTML="Cambie el titulo";


console.log(parrafo);
titulo.innerHTML="Cambie mi parrafo";


const cambiar = () =>{

titulo.innerHTML="Cambie el titulo";
titulo.innerHTML="Cambie mi parrafo";
textoUsuario.innerHTML = input.value;
}

botton.addEventListener("Click", cambiar)