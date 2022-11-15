// Que son las funciones, como se declaran y como se utilizan

// son bloques de codigo que se ejecuten con un fin especifico. 
const nom = "Miguel"

saludar("Santi");

function saludar(nombre){
    console.log(`Hola ${nombre}`)
};

////////

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

// esto sucede porque estoy pasando un valor primitivo como los strings, solo pasa el valor. Si en lugar de usar valores prmitivos uso objetos, cambia.

function despedir(nombre){
    nombre = "Diego"
    console.log(`Adios ${nombre}`)
}

let persona = {
    nombre: "Daniel",
    apellido: "Crippa"
}

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villar" // de esta manera se cambia el valor del objeto original ya que estamos trabajando con objetos. 
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

////////

function imprimeNumero(numero) { // parametros por defecto
    console.log(numero)
};

imprimeNumero(7)

////////

function imprimir (...parametros) { // usando el factor de propagacion, nos va a pasar por consola todos lso valores que le demos
    console.log(parametros)
}

imprimir(1, 3, 9, "hola", { id: 9})

/////// si queremos sumar todos los parametros, lo hacemos asi:

function suma(...nums) {
    return(nums.reduce((a,b) => a + b));
}
// esto lo toma como si fuese un array, y podemos usar el factor spreed (propagacion) para ver la totalidad. 

const s = suma(1,2,3,4,9,25,463)

console.log(s)
// esto pasa porque no esta devolviendo un valor, pero si sacamos el console.log y en su lugar ponemos un RETURN, nos devuelve el valor de la suma y no un undefined
// si queremos que una funcion nos devuelva algo, si o si tiene que tener un RETURN


/////////////

function multiplicar(a = 0, b = 0) {
    return a * b
};
// no puedo acceder a valores que se encuentran dentro de una funcion desde afuera, aunque si puedo acceder a un valor que se encuentra fuera de la funcion desde adentro de esta misma. Es decir, si declaro una variable fuera de una funcion y la llamo dentro de esta, voy a conseguir su valor, pero si declaro una variable dentro de una funcion y trato de llamarla desde afuera de esta misma, no voy a conseguir su valor.
console.log(multiplicar (4,9));