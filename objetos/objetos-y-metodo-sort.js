// Trabajando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    libros_favoritos: ["El codigo DaVinci"],
    "4-juegos": [1, 2, 3, 4],
};
// como obtener los valores del objeto.
console.log(obj.id);
console.log(obj["4-juegos"]);

const propiedad = "isDeveloper"
console.log(obj[propiedad]);
// estamos accediendo a propiedades a traves de variables, lo cual es muy util.

// para replicar el objeto:
const obj2 = obj; //aca no solo estamos copiando el objeto, sino que tambien estamos copiando la referencia en memoria
console.log(obj2);

obj2.nombre = "Carlos"
console.log(obj2.nombre);

console.log(obj.nombre); // o sea que cambia el nombre del objeto original aunque no se lo hayamos dicho

// Esto con nros normales o valores primitivos no pasa, pero si pasa con objetos. En lugar de copiar solo el valor y hacer un duplicado, lo que hace es unificar ambas direcciones de memoria de ambos objetos, es decir que cuando haga un cambio en uno, se vera reflejado en el otro, porque ambos ocupan la misma direccion de memoria. 

let valor1 = 4;
let valor2 = valor1;

valor2 = 6;
console.log(valor1);
console.log(valor2);

// aca si que hace una copia y lo almacena en otro espacio de memoria. 

/////////////////////////////////////////

// QUE PASA SI QUIERO COPIAR Y DUPLICAR UN OBJETO DENTRO DE OTRO
// vamos a usar el operador de spreed ... 

const obj3 = { ...obj };

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Santi";

console.log(obj.nombre);
console.log(obj3.nombre);

/////////////////////////////////////////

// COMO ORDENAR ARRAYS DE OBJETOS EN FUNCION DE UNA PROPIEDAD
// (muy usado)

const listaPeliculas = [
    { titulo: "lo que el viento se llevo", año: 1937},
    { titulo: "Titanic", año: 1997},
    { titulo: "Moana", año: 2016},
    { titulo: "El efecto mariposa", año: 2004},
    { titulo: "TED", año: 2012}
];
console.log(listaPeliculas);

// para ordenarlas, vamos a utilizar el metodo .sort(), recordar que este metodo MUTA EL VALOR DEL ARRAY ORIGINAL.

listaPeliculas.sort((a,b) => a.año - b.año);
console.log(listaPeliculas);

// esto sirve para el caso de que quieras ordenar cierta lista en base a cierto valor, utilizando framewortks como react por ejemplo.