//ciclos

// for(let i = 0;i <= 10; i = i+1){
//     console.log(i)
// }

// for(let i=0; i<= 40; i++){
//     console.log(i)
// }

// //**que empiece en 5, que termine en 250 y que aumente de 1 en 1

// for(let i = 5;i <= 250;i++){
//     console.log(i)
// }

// // **que empiece en 99 y termine en -99 de 3 en 3

// for(let i = 99;i >= -99; i= i-3){
//     console.log(i)
// }

// //---que empiece en -15 y termine en 25 de 5 en 5

// for(let i = -15;i <= 25;i = i+5){
//     console.log(i)
// }

//challenge
//---imprimir en consola números del 1 al 100

// let numero=10;
// if(numero%2===0) 

// for(let i = 1;i <= 100; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i + "FizzBuzz")
//     }else if(i%5===0){
//         console.log(i + "Buzz")
//     }else if(i%3===0){
//         console.log(i + "Fizz")
//     }else{
//         console.log(i)
//     }
// }

//---challenge
// let inicio= Number(prompt ("Indica el numero de inicio de ciclo"));
// let final= Number(prompt ("Indica el numero de final de ciclo"));
// let incremento= Number(prompt("Indica el incremento"));

// for(let i = inicio; i <= final;i=i+incremento){
//     console.log(i)
// }


//--challenge final
//imprimir en consola las tablas de multiplicar del 1 al 100

for(let a=1; a<=10;a++){
    for(let b=1;b<=10;b++){
        let multiplicacion= a*b
        console.log(a + "x" + b + "=" + multiplicacion)
    }
}