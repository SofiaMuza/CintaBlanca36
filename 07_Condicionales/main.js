// alert("hello");

// // if(condicion){
// //     Accion si cumple la condicion
// // }else{
// //     Accion si no se cumple
// // }
// //Operadores

// // let numero= "5"

// // if(numero==="5"){
// //     console.log("Es un numero");
// // }else{
// //     console.error("No es un numero");
// // }

// // let sofi= "agua"
// // if(sofi==="refresco"){
// //     console.log("Toma mucho refresco");
// // }else if(sofi==="cafe"){
// //     console.log("Toma mucho cafe");
// // }else if(sofi==="agua"){
// //     console.log("Es saludable");
// // }else{
// //     console.error("Toma aceite");
// // }

// // let contraseña=prompt("Indica tu contraseña")
// // let password="perritosalchicha123"
// // if(contraseña != password){
// //     console.error("Adios");
// // }else{
// //     console.log("Bienvenido");
// // }

// // let edad=Number(prompt("Ingresa tu edad"));

// // if(edad <= 15){
// //     console.log("Muy pequeño");
// // }else if(edad=== 16 || edad=== 17){
// //     console.log("Puedes sacar tu permiso");
// // }else if (edad>= 18 && edad<=80){
// //     console.log("Puedes sacar tu licencia");
// // }else if(edad>80){
// //     console.log("No puedes manejar por tu seguridad");
// // }else{
// //     console.error("Ingresa valores numericos");
// // }

// let player1=prompt("Player1 Indica si piedra,papel o tijera");
// let player2=prompt("Player2 Indica si piedra,papel o tijera");

// if(player1=== "piedra" && player2 === "piedra"){
//     console.log("Empate");
// }else if(player1=== "papel" && player2 === "papel"){
//     console.log("Empate");
// }else if(player1=== "tijera" && player2 === "tijera"){
//     console.log("Empate");
// }else if(player1=== "papel" && player2 === "piedra"){
//     console.log("Gana player1");
// }else if(player1=== "piedra" && player2 === "tijera"){
//     console.log("Gana player1");
// }else if(player1=== "tijera" && player2 === "papel"){
//     console.log("Gana player1");
// }else if(player1=== "papel" && player2 === "tijera"){
//     console.log("Gana player2");
// }else if(player1=== "piedra" && player2 === "papel"){
//     console.log("Gana player2");
// }else if(player1=== "tijera" && player2 === "piedra"){
//     console.log("Gana player2");
// }else{
//     console.error("Ingresa valor");
// }

let player1=prompt("Player1 Indica si piedra,papel o tijera");
let player2=prompt("Player2 Indica si piedra,papel o tijera");

if(player1==="piedra" && player2==="piedra" || player1==="papel" && player2==="papel"|| player1==="tijera" && player2==="tijera"){
    console.log("Empate!!");
}else if(player1=== "papel" && player2 === "piedra" || player1=== "piedra" && player2 === "tijera" || player1=== "tijera" && player2 === "papel"){
    console.log("Gana player1");
}else if(player2=== "papel" && player1 === "piedra" || player2=== "piedra" && player1 === "tijera" || player2=== "tijera" && player1 === "papel"){
    console.log("Gana player2");
}else{
    console.error("Ingresa valor");
}



