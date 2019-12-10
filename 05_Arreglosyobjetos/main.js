// --arrays--
let personas=["Osvaldo","Ricardo","Toto","Euni","Blah"];

console.log(personas);
// --Extraer una posicion en especifico--
console.log(personas[4]);
personas[6]="Raul";
console.log(personas)

//--.push()--
personas.push("Lalo");
personas.push("Luis");
let colores=["rojo","azul","blanco"];

//--.pop()--
personas.pop();

//--.splice()--
colores.splice(0,1)

console.log("Una persona llamada " + personas [3] + "usa una playera color" + colores [1]);
