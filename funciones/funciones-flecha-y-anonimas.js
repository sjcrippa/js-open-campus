// Funciones de tipo flecha - funciones anonimas
// nacen a partir de ES6

const array = [1,5,6,2,7,12,8,92]

const array2 = array.map((valor) => valor * 2) // esto es una funcion anonima, porque no la estamos asignando a ningun nombre, aunque esta definida en este mapa.

console.log(array2);

/* const dobleDelValor = valor => {
    return valor *2
} */

// o, de otra manera

const dobleDelValor = valor => valor * 2

console.log(doble(6))

const array3 = array.map(dobleDelValor)
console.log(array3) // lo cual es lo mismo que arriba

function doble(valor) {
    return valor * 2
}
// a las funciones tipo flecha solo se pueden acceder despues de que hayan sido inicializadas
// siempre es recomendable definir todas las variables y funciones arriba de todo, al principio del codigo.

