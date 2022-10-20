//LISTAS, ARRAYS O ARREGLOS

const lista = [1, "hola", true, undefined, null];
const lista2 = new Array (2, "hola", true, undefined, null);
const lista3 = new Array (3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log (lista);
console.log (lista2);
console.log (lista3);
console.log (lista4);

// OBJETOS

const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["asdasd", "asdasds", "Asdasdds"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
};

movil.anio = 2019;
movil.marca = "Samsung;"

console.log (movil)

// FECHAS
// Librerias de ayuda para fechas, "moment.js"

const ahora = new Date ();
console.log (ahora);

const fecha_milis = new Date (10) // se puede definir utilizando los milisegundos
console.log (fecha_milis)

const fecha_cadena = new Date ("march 25 2020");
console.log (fecha_cadena)

const fecha_valores = new Date (2022, 2, 15); // enero seria el cero, como los arrays, la primer posicion es CERO.
console.log (fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1 // el +1 es porque los meses empiezan desde cero, como se explico arriba. 
const anio = ahora.getFullYear()

console.log (dia, mes, anio)