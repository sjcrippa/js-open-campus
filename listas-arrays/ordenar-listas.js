// Como ordenar arrays
// .sort(), modifica el array
const array = [2, 5, 9, 8, 5, 4, 18, 12, 15];

console.log(array)
// hacemos un callback y es obligatorio que esta funcion retorne un valor numerico, si pasa un nro negativo, significa que a va A tener un indice menor que B; si retorna un 0, no va a haber cambios
array.sort((a, b) => {
    if (a < b) {
        return 14325235 // el valor da igual, lo que importa es si es positivo o negativo
    } else if (a > b){
        return -1
    } else { // a ===
        return 0
    }
});

console.log(array);

// Ordenar unicamente arrays numericos

const arrayNrico = [4, 1, 0, 2, 5, 8, 6, 3, 9, 7];

arrayNrico.sort((a,b) => b - a);

console.log(arrayNrico);

arrayNrico.sort((a,b) => a - b);

console.log(arrayNrico);

// Interesante en arrays de objetos

// si quiero ordenar de menor a mayor o biceversa esta lista de objetos, hago lo siguiente:

const listaObjetos = [
    { nombre: "Santi", edad: 25},
    { nombre: "Carlos", edad: 28},
    { nombre: "Fernando", edad: 24},
    { nombre: "Miguel", edad: 18},
    { nombre: "Pablo", edad: 35},
]

/* listaObjetos.sort ((a,b) => {
    if (a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad) {
        return +1
    } else {
        return 0
    }
}); */

// de una manera mas simple:

listaObjetos.sort ((a,b) => a.edad - b.edad); // si es positiva, B es menor que A y si es negativa A es menor que B

console.log(listaObjetos);
