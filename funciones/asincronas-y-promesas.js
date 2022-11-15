// Funciones asincronas

// son funciones que al hacer llamadas a una base de datos externos, toma algo de tiempo, ya que no dependen de nuestra estructura

function miAsinc(){
    // funcion que hace una llamada a una base de datos externos
    // tiene varias posibilidades:
        // puede que tenga demora al no conocer el estado de la red y de la base de datos y su infraestructura
        // incluso es algo que puede darnos algun error
    // de esta manera usas javascript en todo su rango de actuacion, te esta permitiendo trabajar con recursos externos
    //todo esto se define a traves de las PROMESAS
}

// PROMESAS 
// como se declaran
// son funciones que pueden o no ejecturse de forma exitosa

const miPromesa = new Promise((resolve, reject) => { // la promesa admite un callback de una funcion que es una funcion ejectura
    const i = Math.floor(Math.random() *2)
    // si esta todo correcto:
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
}) 
// como podemos consumir estas promesas:
// 1) forma tradicional:
miPromesa
    .then(() => console.log("se ha ejecutado bien"))
    //para identificar y gestionar los errores dentro de nuestra promesa
    .catch(() => console.log('error'))
    .finally(() => console.log("yo me ejecuto siempre"));

// 2) async await
// continua en el proximo archivo.