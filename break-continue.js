// CASOS MUY ESPECIFICOS - BREAK, CONTINUE
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue; // en lugar de seguir con el bucle, va a volver arriba, salteando los otros pasos.
    }
    let j = 50;
    const k = 100;
    console.log (lista[i]);

    if (lista [i] > 5) {
        break; //el break se saltea todo lo que continua despues de la condicion.
    }
}

// UTILIZAR ESTO EN CASOS MUY MUY EXCEPCIONALES, SI LA ESTRUCTURA DE CONDICIONES ESTA BIEN ORGANIZADA, NO HARIA FALTA HACER LO ANTERIOR. EL CONTINUE Y EL BREAK NO SE CONSIDERAN COMO BUENAS PRACTIAS (DICHO POR EL PROFESOR) YA QUE DIFICULTE LA LECTURA DEL CODIGO. 




// CUAL ES EL AMBITO DE UN BUCLE
console.log(i) //no esta definido porque el i esta declarado dentro del bucle de arriba. 
console.log(j) 
console.log(k)