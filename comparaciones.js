// COMPARACIONES

//Igualdad
if (5 == 5) {
    console.log ("5 es igual a 5")
}
if (5 === 5) {
    console.log ("5 es muy igual a 5")
}

let a = 5;
console.log (typeof a)
let b = "5";
console.log (typeof b)

// == solo compara el valor
// === compara el valor y el tipo

if (a == b) {
    console.log ("a es igual a b - Debil")
} // CON EL DOBLE IGUAL, ENTRA ESTA PORQUE LA COMPARCION ES SOLO POR EL VALOR, ES DEBILMENTE IGUAL.

if (a === b) {
    console.log ("a es igual a b - Fuerte")
} // CON EL TRIPLE IGUAL, SE COMPARAN VALOR Y TIPO, POR LO TANTO NO ENTRA ESTE EJEMPLO.



//DESIGUALDAD

let c = 4;
let d = "4";

if (c != d) {
    console.log ("c es diferente a d - Debil")
} // IGUALES PERO SOLO EN VALOR

if (c !== d) {
    console.log ("c es diferente a d - Fuerte")
} // DESIGUALES PORQUE EL TIPO ES DIFERENTE.



// MAYORES Y MENORES que x

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")
}
if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}