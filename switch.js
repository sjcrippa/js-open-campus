// SENTENCIAS SWITCH

let nota = 5;

switch (nota) {
    case 5:
        console.log("gran trabajo, sobresaliente")
        break;
    case 4:
        console.log("buen trabajo, falto un poco")
        break;
    case 3:
        console.log("insuficiente")
        break;
    case 2:
        console.log("desaprobado")
        break;
    case 1:
        console.log("muy desaprobado")
        break;
    default:
        console.log ("Error.")
        break;
}

// BUENAS PRACTICAS PARA EL OPERADO SWITCH, HAY QUE DECLARAR UN CASO POR DEFECTO, QUE SERIA EL DEFAULT