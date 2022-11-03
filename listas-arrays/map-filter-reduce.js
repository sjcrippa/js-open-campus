// Trabajar con metodos mas avanzados
// .map() .filter() .reduce() muy utilizados en frameworks modernos como react, angular y vue.

// .MAP():

const array = ["Cordoba", "Santa Fe", "Mendoza", "Buenos Aires"];

const val = array.forEach(v => {
    console.log(v)
    return 4
});
console.log(val)

const newArray = array.map((valor, indice) => `${indice +1} - ${valor}`);
console.log(newArray);

// .FILTER():
// aca no estoy buscando un valor puntual, sino que quiero filtrar cierta caracteristica de todos los objetos.
const arrayObj = [
    { nombre: "Santi", edad: 25},
    { nombre: "Carlos", edad: 28},
    { nombre: "Fernando", edad: 24},
    { nombre: "Miguel", edad: 18},
    { nombre: "Pablo", edad: 35},
];
/* const personasMayores = arrayObj.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    };
})
console.log(personasMayores);  */ // ESTO ESTA BIEN Y ES VALIDO, PERO SE PUEDE HACER MAS OPTIMO Y PRACTICO: 
const personasMayores = arrayObj.filter(obj => obj.edad >30);
console.log(personasMayores);

//en el supuesto caso de que quiera buscar todas las personas menos a miguel, seria asi:
const nuevaLista = arrayObj.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);

// .REDUCE():
// sirve para obtener un valor o un objeto o cualquier cosa a partir de una lista (array)

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, curr, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(curr)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + curr
})
console.log(suma)