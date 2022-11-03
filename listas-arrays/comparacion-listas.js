// Como comparar arrays
// .every()

const array = [4, 5, 2, 8, 6, 9, 2, 52, 47, 39, 18, 72, -22];
// de vuelta hacemos un call back con una funcion de tipo flecha

/* const resultado = array.every(valor => {
    if (typeof valor === "number") {
        return true
    } else {
        return false
    }
}) */

// ahora de manera mas simple:

const resultado = array.every(valor => valor > 0); // buenas practicas.

console.log(resultado);

// Comparacion de listas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); // porque las listas no se pueden comparar de esta manera

// el .lenght devuelve numeros y los numeros si se pueden comparar

const compararArray = (array_1, array_2) => {
    if (array_1.lenght !== array_2.lenght) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
};

console.log(compararArray(ar1, ar2));

const ar3 = [1, 2, 3, 6]

console.log(compararArray(ar1, ar3));