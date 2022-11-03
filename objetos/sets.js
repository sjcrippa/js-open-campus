// SETS o CONJUNTOS 
// aparecieron a partir de ES6, son una especie de array pero con un compartamiento diferente

const array = [1, 2, 3, 4, 5, 1, 5, 6, "hola", { id: 5}, { id: 5}, "hola" ]; // conjunto ordenado de valores y objetos

console.log({ id: 5} === { id: 5});

console.log(array);

const miSet = new Set(array); // conjunto DESORDENADO de valores o elementos unicos. No permiten agregar valores que ya existen. 

console.log(miSet)

// Existen metodos para añadir y quitar valores
// .add()

miSet.add(9);
console.log(miSet);
miSet.add(4)
console.log(miSet); // el 4 no lo agrega porque esta repetido.

// Podemos eliminar valores dentro de nuestros conjuntos
// .delete()

miSet.delete("hola");
console.log(miSet)

// Podemos vaciar el set tambien usando .clear()
// miSet.clear()

// Como saber si mi set contiene un valor
// .has()

console.log(miSet.has(30));

// Como saber el tamaño del set (en cuanto a valores UNICOS), utilizando la propiedad:
// .size

console.log(miSet.size);

// Como hacer una iteracion dentro de los valores del set

miSet.forEach(valor => {
    console.log(valor)
});

const it_miSet = miSet.values()
console.log(it_miSet)

// para volver a convertir este set en un array usamos el factor de propagacion

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[0]);
