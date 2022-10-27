// BUCLES WHILE 

let i = 0;
let max = 10;

while (i < max) {
    console.log (i);
    i++
} // este bucle se va a ejecutar infinitamente ya que i siempre va a valer 0 y max siempre va a ser mayor. Esto se corrige realizando la actualizacion de la variable dentro.
// TENER CUIDADO CON LOS WHILE PORQUE A VECES LAS CONDICIONES NO SE ACTUALIZAN POR MAS DE QUE ESTEN CORREGIDAS. 

i = 15;

// DO... WHILE

do {
    console.log ("estoy en el do while")
} while (i < max);