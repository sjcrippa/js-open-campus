// METODOS MAS UTILIZADOS CON CADENAS DE CARACTERES

// Como obtener la longitud de un string

let str = "hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// silce() substring() substr(este esta quedando obsoleto)

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str)//OBSOLETO

// REPLACE - Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Santi, Santi";
console.log(cadena);

console.log(cadena.replace("Santi", "Julian")); //por defecto, el metodo replace solo actua en la primer instancia de la palabra, si se repite mas adelante, no la reemplaza.

// al utilizar la expresion regular /g (global) reemplaza todas las instancias
console.log(cadena.replace(/Santi/g, "Julian"));