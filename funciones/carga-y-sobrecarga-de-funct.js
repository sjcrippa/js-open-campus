// Carga y sobre carga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("hola, soy la funcion hola()")
}
saludar() //recien con esta linea se ejecuta el console.log()

// 1. Lo primero que hace el interpretador es cargar la funcion global()
// 2. Luego añade la funcion saludar() por encima de la funcion global(), es decir que va cargando en la memoria las funciones paso a paso
// 3. Cuando entra dentro de saludar, entiende que entra a la funcion hola(), lo cual quedaria asi: hola() - saludar() - global()
// 4. Cuando termina la funcion hola(), la quita y queda de vuelta saludar() - global()
// 5. Y luego lo mismo, quita saludar() y queda solo global()

// ESTO SE HACE PARA OPTIMIZAR LA UTILIZACION DE MEMORIA DE PARTE DE JS. POR ESO HASTA QUE NO ENCUENTRA LA LLAMADA A UNA FUNCION, NO LA CARGA DENTRO DE LA MEMORIA

// STACK OVERFLOW

function recursivo() {
    recursivo()
}; // esto es un error de concepto, porque esta funcion no va a tener fin, va a añadir hasta que haya una sobre carga.
recursivo()

