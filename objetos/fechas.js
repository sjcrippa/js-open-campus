// Trabajando con fechas
// asi se definen:
const fecha = new Date();
console.log(fecha);

//los meses inicializan en cero, es de decir 0 es enero y 11 es diciembre.
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date (-10000000000) // milisegundos
console.log(fecha3);

const fecha4 = new Date("october 13, 1979 12:15:15")
console.log(fecha4);

// Comparando fechas

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2 === fecha5); // ERROR, ASI NO SE COMPARAN FECHAS

console.log(fecha2.getTime() === fecha5.getTime());
// ESTO SI ES CORRECTO

// Como obtener el dia, el mes y el año de una fecha
// obtener el dia .getDate()
console.log(fecha2.getDate());

//obtener el mes .getMonth() +1 porque enero es 0 y diciembre 11
console.log(fecha2.getMonth() +1 );

// obtener el año .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2) // esto es poco
// en cambio vamos a usar
// .toLocaleDateString
console.log(fecha2.toLocaleDateString());

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocalDateString
