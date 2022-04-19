// VARIABLES
// Scope: ámbito de definición, pueden ser locales o globales.
// Tipos de Variables
// VAR Se puede volver a declarar y actualizar cuantas veces quieras.
var variable1 = 0;

// LET Se puede declarar una sola vez, y actualizar las veces que quieras.
let variable2 = 1;

// CONST Se puede declarar y asignar un valor una sola vez (constante).
const variable3 = 2;

// Tipos de valores 
// Números
var variableNumero = 25;

// Strings
var variableTexto = "Candela";

// Operaciones Aritméticas
// +, -, *, /, %, etc...
let resultado = variable1 + variableNumero;

// Operaciones con Strings
// + (concatenación)
let resultado2 = variableTexto + "Yarossi";

// PROMPT: Cuadro de diálogo para que el usuario ingrese un dato (Se le puede pasar un mensaje).
// Devuelve el dato ingresado como una cadena.
//let textoIngregado = prompt("Ingrese su nombre:");

// CONSOLE.LOG: Muestra un msj pasado por parámetro a la consola del navegador.
//console.log("¡Hola " + textoIngregado + "!");

// ALERT: Muestra una ventana con el texto que se le pase por parámetro.
//alert("¡Hola " + textoIngregado + "! ¿Cómo estás?");

// EJEMPLOS
let nombre = prompt("¡Hola! Ingresa tu nombre: ");
let numero = prompt(nombre + ", ingresa un número para saber su siguiente: ");
// -- Parseo el numero --
var siguiente = parseInt(numero, 10) + 1;
alert("El siguiente de " + numero + " es " + siguiente + ".");

// CONDICIONALES
// BOOLEANOS true o false
// OPERADORES COMPARATIVOS Y LÓGICOS
// ==               Es igual
// ===              Es estrictamente igual
// !=               Es distinto
// !==              Es estrictamente distinto
// <, <=, >=, >     Es menor, menor o igual, mayor o igual, mayor
// &&               Operador AND (y)
// ||               Operador OR (o)
// !                Operador NOT (no)
let variableBooleana = false;
let color = "Rojo";

if (color === "Rojo" && variableBooleana) {
    console.log("Es color Rojo.");
} else if (color === "Verde") {
    console.log("Es color Verde.");
} else {
    console.log("Es color Azul, ponele que era RGB(?.");
}

// ¿Cuál es la diferencia entre =, == y ===?
// ●	El operador (=) es para asignar un valor a una variable. (a = “valor”)
// ●	El operador (==) es para comparar si dos valores son iguales, sin importar 
//      su tipo de dato. (1 == “1”) es verdadero porque es el mismo valor independientemente 
//      de si el dato es numérico o string.
// ●	El operador (===) es para comparar si dos elementos son iguales, tanto en valor 
//      como en tipo de dato. (1 === 1) es verdadero (1 === “1”) es falso.

// CICLOS
// FOR
for (let i = 0; i <= 5; i++) {
    alert(i);
}

// SENTENCIA BREAK: Interrumpir el ciclo.
for (let i = 0; i <= 5; i++) {
    alert(i);
    if (i == 3) {
        break;
    }
}

// SENTENCIA CONTINUE: Saltear una iteración y seguir con la próxima.
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    alert(i);
}

// WHILE
let j = 0;
while (j <= 3) {
    alert(j);
    j++;
}

// DO..WHILE
let k = 0;
do {
    alert(k);
    k++;
} while (k <= 3);

// SWITCH
let opcion = parseInt(prompt("Ingrese un número: "));
switch (opcion) {
    case 1:
        alert("Opción número 1.");
        break;
    case 2:
        alert("Opción número 2.");
        break;
    default:
        alert("Opción default.");
        break;
}

// FUNCIONES
// Creación
// Sin parámetros
function saludar() {
    console.log("Hola!");
}
// Con parámetros
function saludarConNombre(nombre) {
    console.log("Hola " + nombre + "!");
}
// Llamado
saludar();
saludarConNombre("Cande");

// FUNCIONES ANÓNIMAS: 
// Función que se define sin nombre y se utiliza para ser pasadas como parámetros 
// o asignada a variable. En el caso de asignarla a una variable, pueden llamar 
// usando el identificador de la variable declarada
const suma = function(a, b) { return a + b };
console.log(suma(15, 20));

// FUNCIONES FLECHA:
// Identificamos a las funciones flechas como funciones anónimas de sintaxis 
// simplificada.
const suma2 = (a, b) => { return a + b };
console.log(suma2(15, 20));