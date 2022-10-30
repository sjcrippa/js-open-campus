// ITERAR (realizar cierta accion varias veces) LOS VALORES DE UN ARRAY

const array = ["hola", 1, 2, 90, true, null]

// forma antigua, poco eficiente

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma moderna ES6 (mas eficiente) .forEach
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma);

// Busqueda de un valor dentro de un aray
// quiero buscar el elemento 90

const variable = array.find(valor => {
    if (valor === 90) {
        return true
    };
});
console.log(variable);

const listaObjetos = [
    { nombre: "Santi", edad: 25},
    { nombre: "Carlos", edad: 28},
    { nombre: "Fernando", edad: 24},
    { nombre: "Miguel", edad: 18},
    { nombre: "Pablo", edad: 35},
]

/* const objeto = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
}) */
//const objeto = listaObjetos.find(o => {
//    return o.nombre === "Miguel" //nos pasa un true si el nombre del objeto es miguel y un false si no lo es.
//});
//console.log(objeto);
//console.log(objeto.edad);
// La funcion flecha permite que nos ahorremos las llaves y el return, por lo tanto, quedaria asi:

const objeto = listaObjetos.find (o => o.nombre === "Miguel")
console.log(objeto.edad)
// lo de arriba tambien da bien, solo que es mas codigo.

// MANERA MAS AFICIENTE

const { edad } = listaObjetos.find (o => o.nombre === "Pablo");

console.log(edad); 