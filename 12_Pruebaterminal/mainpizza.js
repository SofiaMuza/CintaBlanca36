let name = document.getElementById ("Name");
let add = document.getElementById ("Add");
let pizza = document.getElementById ("Pizza");

let textName = document.getElementById ("textName");
let textAd = document.getElementById ("textAdd");
let textPizza = document.getElementById ("textPizza");

let boton = document.getElementById ("boton");
let ordena = document.getElementById ("Ordena");

const ordenar = () => {
    textName.innerHTML = name.value;
    textAd.innerHTML= add.value;
    let resultFood = pizza.value.toUpperCase();

    if(resultFood=== "CON"){
        textPizza.innerHTML = "Te enviaremos pizza hawaiana";
    }else if(resultFood === "SIN"){
        textPizza.innerHTML = "Te enviaremos pizza de jamon";
    }else{
        textPizza.innerHTML = "No te entendi";
    }

}
boton.addEventListener("click", ordenar )
