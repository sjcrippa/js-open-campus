// .some()
// saber si solo algunos elementos de un array cumplen con X condicion
// igual que el every pero te devuelve true cuando alguno lo cumple
const array = [3, 7, 2, 59, 723, 24, -2];

const res = array.some(valor => valor < -10);

console.log(res);

const existe = array.some(valor => valor === 9);

console.log(existe);

const arrayObj = [
    { nombre: "Santi", edad: 25},
    { nombre: "Carlos", edad: 28},
    { nombre: "Fernando", edad: 24},
    { nombre: "Miguel", edad: 18},
    { nombre: "Pablo", edad: 35},
];

const existeMiguel = arrayObj.some(persona => persona.nombre === "Miguel");

console.log(existeMiguel);

// Como obtener un array a partir de un objeto iterable

const str = "hola soy santi";
console.log(str[5])

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set ([2, 3, "hola, 4"])
const ar_set = Array.from(set)
console.log(ar_set);


///////////////

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);