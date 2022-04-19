// STORAGE O ALMACENAMIENTO
// El objeto Storage (API de almacenamiento web) nos permite almacenar datos de manera 
// local en el navegador sin necesidad de realizar ninguna conexión con el servidor.
// 2 tipos: localStorage y sessionStorage. Uno es indefinido en el navegador (o hasta que 
// se borren los datos de navegación del browser), y otro es temporal, hasta cerrar la pestaña.

// LOCALSTORAGE
// Método ->  localStorage.setItem(key, value)
// KEY / Clave = nombre para identificar el elemento 
// VALUE / valor = valor/contenido del elemento
localStorage.setItem("name", "Candela");
localStorage.setItem("active", true);
localStorage.setItem("age", 25);

// Método ->  localStorage.getItem(key)
// KEY / Clave = nombre para identificar el elemento 
var nombre = localStorage.getItem("name");
var isActivo = localStorage.getItem("active");
var edad = localStorage.getItem("age");

console.log("Type of nombre: " + typeof nombre + ", Nombre: " + nombre);
console.log("Type of isActivo: " + typeof isActivo + ", isActivo: " + isActivo);
console.log("Type of edad: " + typeof edad + ", Edad: " + edad);

// Las claves y valores de Storage se guardan en formato de cadena de caracteres (DOMString).
// Así que hay que parsearlos.
isActivo = isActivo === "true" ? true : isActivo === "false" ? false : "no es un booleano";
edad = parseInt(edad);

console.log("Type of isActivo: " + typeof isActivo + ", isActivo: " + isActivo);
console.log("Type of edad: " + typeof edad + ", Edad: " + edad);

// SESSIONSTORAGE
// Método ->  sessionStorage.setItem(key, value)
// KEY / Clave = nombre para identificar el elemento 
// VALUE / valor = valor/contenido del elemento
sessionStorage.setItem("name", "Candela");
sessionStorage.setItem("active", true);
sessionStorage.setItem("age", 25);

// Método ->  sessionStorage.getItem(key)
// KEY / Clave = nombre para identificar el elemento 
var nombre = sessionStorage.getItem("name");
var isActivo = sessionStorage.getItem("active");
var edad = sessionStorage.getItem("age");

// Se comportan de la misma forma que los localStorage.

// Acceso Tipo Objeto (no recomendable)
localStorage.name = "Facundo";
alert(localStorage.name);

sessionStorage.age = 23;
alert(sessionStorage.age);

// Recorriendo el Storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + ", Valor: " + localStorage.getItem(clave));
}

// Eliminar datos del Storage
// .removeItem(key): Borra un valor según su key.
// .clear(): Borra todos los datos.
localStorage.removeItem("name");
sessionStorage.removeItem("age");
localStorage.clear();
sessionStorage.clear();

// Para almacenar OBJETOS, hay que convertirlos a JSON!
const persona1 = { name: "Candela", age: 25 };
localStorage.setItem("persona1", persona1);

// JSON
// stringify(object): acepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente.
// parse(JSONtext): recibe un texto JSON como parámetro, y devuelve el objeto JavaScript correspondiente.
console.log(typeof persona1 + ": ");
for (dato in persona1) {
    console.log(dato + ": " + persona1[dato]);
}

let objToJSON = JSON.stringify(persona1);
console.log(typeof objToJSON + ": " + objToJSON);

let JSONtoObj = JSON.parse(objToJSON);
console.log(typeof JSONtoObj + ": ");
for (dato in persona1) {
    console.log(dato + ": " + persona1[dato]);
}

// DOM (Modelo de Objetos del Documento)
// Es una estructura de objetos generada por el navegador, 
// la cual representa la página HTML actual.
// Con JavaScript la empleamos para acceder y modificar de forma dinámica 
// elementos de la interfaz.

// En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, 
// al que podemos llamar nodo. Las etiquetas anidadas son llamadas “nodos hijos” 
// de la etiqueta “ nodo padre” que las contiene.
// Todos estos objetos son accesibles empleando JavaScript mediante el objeto global DOCUMENT

// La transformación de las etiquetas HTML habituales genera dos nodos: el primero es el nodo 
// de tipo "Elemento" (correspondiente a la propia etiqueta XHTML) y el segundo es un nodo de
// tipo "Texto" que contiene el texto encerrado por esa etiqueta XHTML.
console.dir(document);
console.dir(document.head)
console.dir(document.body);

// El acceso a body usando la referencia document.body requiere que el script se 
// incluya luego de <head> en el HTML.

// La especificación completa de DOM define 12 tipos de nodos, aunque los más usados son:
//      * Document, nodo raíz del que derivan todos los demás nodos del árbol.
//      * Element, representa cada una de las etiquetas XHTML. Se trata del único 
//        nodo que puede contener atributos y el único del que pueden derivar otros nodos.
//      * Attr, se define un nodo de este tipo para representar cada uno de los atributos 
//        de las etiquetas HTML, es decir, uno por cada par atributo = valor.
//      * Text, nodo que contiene el texto encerrado por una etiqueta HTML.
//      * Comment, representa los comentarios incluidos en la página HTML.

// Acceder a NODOS
// .getElementById(): Con un ID. Se retornará el elemento.
// .getElementsByClassName(): Con una CLASS. Se retornará un Array de elementos con todas las coincidencias.
// .getElementsByTagName(): Con el nombre de la TAG. Se retornará un Array de elementos con todas las coincidencias.
let porId = document.getElementById("item1");
let porClass = document.getElementsByClassName("item");
let porTag = document.getElementsByTagName("li");

console.log("POR ID: ");
console.log(porId.innerHTML);

console.log("POR CLASS: ");
for (elemento of porClass) {
    console.log(elemento.innerHTML);
}

console.log("POR TAG: ");
for (elemento of porTag) {
    console.log(elemento.innerHTML);
}

// CREAR ELEMENTOS
// Crear
var nuevoElemento = document.createElement("li");
// Asignarle un valor
nuevoElemento.innerHTML = "Item 4";
// Ubicarlo
let elementoPadre = document.getElementById("lista");
elementoPadre.appendChild(nuevoElemento);

nuevoElemento = document.createElement("li");
nuevoElemento.innerHTML = "Item 5";
elementoPadre.appendChild(nuevoElemento);

// ELIMINAR ELEMENTOS
// Elemento único
nuevoElemento.parentNode.removeChild(nuevoElemento);

// Elemento de un array
let classItem = document.getElementsByClassName("item");
classItem[0].parentNode.removeChild(classItem[0]);

// Obteniendo datos de un input
let datoInput = document.getElementById("numero");
datoInput.addEventListener("focusout", function() {
    console.log(this.value);
})

// Modificar datos de un input
document.getElementById("numero").value = 25;

// Plantillas de texto
const persona2 = { name: "Facundo", age: 23 };
let arrayPersonas = [persona1, persona2];
for (persona of arrayPersonas) {
    let plantilla = `Nombre: ${persona.name}, Edad: ${persona.age}`;
    //console.log(plantilla);
    var nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = plantilla;
    elementoPadre.appendChild(nuevoItem);
}