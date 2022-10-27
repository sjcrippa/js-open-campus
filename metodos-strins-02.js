// Metodos de cadenas de texto (parte 2)

let input = "Geminis";
let db = "geminis";

console.log (input === db); // esto es porque no reconoce las mayusculas como caracteres iguales.

// toLoweCase() - toUpperCase()

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleUpperCase()) //esto es para lenguajes que tienen otro comportamiento. 
console.log(input.toLowerCase() === db.toLowerCase())

// Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena. ";
let str_2 = "Hola soy la segunda cadena.";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`)

// se recomienda utilizar la primer opcion ya que el + tambien se usa para los numeros

// Eliminar espacios al inicio y al final

let str_3 = "  Hola, soy un string con espacios al final.    "
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion

let str_4 = "Hola, soy el string nro 4";
console.log(str_4.charAt(4));
console.log(str_4[4]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy Santi y me gusta el fulbo."
console.log(str_5.indexOf("Santi")) // devuelve la posicion de la primera letra dentro de la cadena de caracteres. Si no encuentra nos devuelve un -1.
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Santi"));