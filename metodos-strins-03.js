// Metodos de cadenas de texto (parte 3)
// https://regexr.com para aprender como funcionan las expresiones regulares.

let texto_largo = "Esto es un texto largo en el cual figuran cierta cantidad de caracteres de la mano de un teclado electronico para preparar una respuesta rapida ante el evento de las teclas apretadas."

console.log(texto_largo.match(/el/g));
// de esta manera localizas la palabra que quieras dentro del texto. 

// Existe la palabra dentro del texto??
console.log(texto_largo.includes("hola"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("asd"));

// Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("apretadas."));


