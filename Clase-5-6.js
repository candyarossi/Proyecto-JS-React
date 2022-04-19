// OBJETOS: Un objeto es una colección de datos relacionados con funcionalidad.
let persona = { nombre: "Candela", edad: 25 };
// Acceso a datos
console.log(persona.nombre);
console.log(persona["edad"]);
// Modificación 
persona.nombre = "Facundo";
persona["edad"] = 23;

console.log(persona.nombre);
console.log(persona["edad"]);

// Archivo "Persona.js" Clases y Objetos

// ARRAYS -> pueden ser de un solo tipo o mixtos.
// Declaración
let array = [];
let array2 = [1, 2, 3, 4];

// LENGTH: Longitud
console.log(array2.length);

// TOSTRING: toString separando con comas
console.log(array2.toString());

// PUSH: Agrega un elemento
let nroNuevo = 5;
array2.push(nroNuevo);
console.log(array2.toString());

// JOIN: Une los elementos con un separador
console.log(array2.join("-"));

// CONCAT: Une dos arrays
let array3 = [6, 7, 8, 9];
let union = array2.concat(array3);
console.log(union.toString());

// SLICE: Recorta el array, empezando por inicio hasta fin (fin no incluído). 
// Devuelve una copia.
let nuevoRecorte = union.slice(3, 6);
console.log(nuevoRecorte.toString());

// Archivo "Persona.js"
import Persona from './Persona.js';

const persona1 = new Persona("Sol", 19);
const persona2 = new Persona("Candela", 25);
const persona3 = new Persona("Facundo", 23);

//const persona2 = new Persona({ nombre: "Cande", edad: 25 });

console.log(persona1.nombre);
console.log(persona1["edad"]);
console.log(persona1.toString());

// OPERADOR IN: Devuelve true si la propiedad especificada existe en el objeto.
console.log("nombre" in persona1);

// OPERADOR FOR..IN: Permite acceder a todas las propiedades del objeto, 
// obteniendo una propiedad por cada iteración.
for (const propiedad in persona1) {
    console.log(propiedad + ":" + persona1[propiedad]);
}

// ARRAYS
const arrayPersonas = [persona1, persona2, persona3];

// FOR..OF
for (const persona of arrayPersonas) {
    console.log(persona.toString());
}

// OPERADOR TYPEOF
let nro = 5;
let text = "F";
let bool = true;
let fc = () => { return "Hi!" };

console.log(typeof nro);
console.log(typeof text);
console.log(typeof bool);
console.log(typeof fc);
console.log(typeof persona1); // Devuelve "object"

// FIND: Devuelve el primer elemento que satisface la condición.
var rta = union.find(nro => nro < 5 && nro > 2);
console.log(rta.toString());

// FILTER: Devuelve un array con los elementos que satisfacen la condición.
rta = union.filter(nro => nro < 5 && nro > 2);
console.log(rta.toString());

// MAP: Crear un nuevo Array con todos los elementos del Array original transformados 
// según las operaciones de la función enviada por parámetro.
rta = union.map(nro => nro * 10 / 2);
console.log(rta.toString());