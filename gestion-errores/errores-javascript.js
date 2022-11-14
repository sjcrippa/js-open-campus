// Gestion de errores

const miFuncion = val => {
    if (typeof val === "number") {
    return 2 * val
    }
    throw new Error("el valor debe ser de tipo numero")
}

/* const elDoble = miFuncion("a")*/

// que hacer como creador de software para preveer este tipo de errores, es decir que el val pueda no ser un valor numerico??:

// palabras claves TRY y CATCH
const numero = 8;

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose bien")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) { // el parametro E ayuda a gestionar nuestros errores de manera personalizada, devuelve lo que ponemos en el throw. Es un error customizado.
    // en caso de fallar, quiero que ejecutes
    console.error("ERROR")
} finally {
    console.log("Esto se va a ejecturar tanto si falla o no")
};

// hay que tratar de envolver nuestro codigo con try y catch. 

// tipos de errores:
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError

// InternalError: lo lanza el interprete cada vez que hay un error interno como por ejemplo la recursividad, una funcion que se llama a si misma de manera indefinida

// SintaxError: salta cada vez que hay un fallo de sintaxis, o sea que esta mal escrito el codigo

// TypeError: salta cuando una funcion que ya esta creada y esta esperando un numero, recibe un booleando por ejemplo, o cualquier otro tipo de dato qe no sea el que esta esperando

// RangeError: significa que estamos tratando de acceder a una posicion que no es posible a nivel de rango, por ejemplo tratar de acceder a la posicion 11 de un array que tiene 10.

// ReferenceError: cuando no existe la referencia que estamos tratando de llamar, por ejemplo si quiero acceder a palabras que no estan definidas. 



// TENER EN CUENTA LA PAGINA DE MDN MOZZILA SOBRE ERRORES DE JAVASCRIPT
