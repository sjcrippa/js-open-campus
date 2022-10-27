// BUCLES FOR

/* for (inicializacion; condicion; actualizacion) {
    // esto es el bucle
} */

/*  Contador i en tres maneras, todas significan lo mismo
    i = i +1
    i += 1
    i++
*/

for (let i = 0; i < 10; i++) {
    // esto es un bucle
    console.log (i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
    console.log (lista[i] * 2)
}

// ESTRUCTURA FOR ... OF

for (let valor of lista) {
    console.log (valor)
}

// ESTRUCTURA forEach

lista.forEach (valor => {
    console.log (valor)
}) //esto es lo que se llama una funcion flecha, ingresada en el egmascript 6, de manera que sea mas eficiente. 

// ESTRUCTURA FOR... IN

let persona = {
    nombre: "Santiago",
    apellido: "Crippa",
    edad: 25,
    isDeveloper: true
}
console.log (persona.nombre)

let prop = "edad";
console.log (persona[prop])

for (let propiedad in persona) {
    console.log (propiedad);
    console.log (persona[propiedad])
}