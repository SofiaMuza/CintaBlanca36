//---Funciones---Son acciones que ejecutan una tarea especifica

// alert()
// prompt()
// console.log()
// Number()
// typeof()

// let mult = (num1 = 0, num2 = 0, num3 = 0) => {
//     console.log("el resultado de la multiplicacion es:" + num1 * num2 * num3)
// }

// mult(3,6,9);


// let saludo = (usuario= "invitado") => {
//     console.log("bienvenido/a" + usuario);
// }
// saludo("Sofía");
// saludo();

// let tablasmultiplicar = () => {
//     for(let a=1; a<=10;a++){
//         for(let b=1;b<=10;b++){
//             let multiplicacion= a*b
//             console.log(a + "x" + b + "=" + multiplicacion)
//         }
//     }
// }

// tablasmultiplicar();

//Usar const para que tu variable no se pueda redefinir y afecte a la función

//Crear una funcion que calcule el area de un triangulo cualquiera

//Crear una funcion que calcule el perimetro de un cuadrilatero


const area=(num1 = 0, num2 = 0) =>{
    console.log("El area del triangulo es " + num1*num2/2);
}
area(5,4);


const perimetro=(lad1 = 0, lad2 = 0, lad3 = 0, lad4 = 0) =>{
    let suma= (lad1 + lad2 + lad3 + lad4)
    console.log("El perimetro del cuadrilatero es " + suma);
}

perimetro(3,3,3,3);
