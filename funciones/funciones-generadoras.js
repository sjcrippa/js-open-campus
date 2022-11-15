// Funciones generadoras
function* generaId(){
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // el yield es una especie de return pero en lugar de salir de la funcion, se queda en su lugar esperando a que sea llamado de vuelta
    }
}

const gen = generaId();

console.log(gen)
// los objetos generator se utilizan de la siguiente manera:
// para obtener un valor:
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())