// break y continue
// labels

let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log("el numero actual es: ${decenas}${unidades}")
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades
        }
    }
    decenas++
    if (decenas === 2) {
        console.log ("el numero actual es: ${decenas}${unidades}")
        break bucleDecenas
    }
}   