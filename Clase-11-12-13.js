// JQUERY

// SELECTORES -> $("nombreDelSelector")
// Acceso equivalente: document.getElementById("item1");
$("#item1");
// Acceso equivalente: document.getElementsByClassName("item");
$(".item");
// Acceso equivalente: document.getElementsByTagName("li");
$("li");

// COMBINACIÓN DE SELECTORES
// Selecciona todos los <li> de la página
$("li");
// Selecciona todos los <li>, y los <input>	
$("li, input");
// Selecciona todo <li> con clase "item", y que tengan un hijo con ID "item1"	
$("li.item #item1");

// SELECTORES AVANZADOS
$("p:last"); //Selecciona el último <p> de la página
$("li:first-child"); //Selecciona todos los <li> que son primeros hijos
$("li:last-child"); //Selecciona todos los <li> que son últimos hijos
$("li:only-child"); //Selecciona todos los <li> que sean hijos únicos
$("li:nth-child(3)"); //Selecciona todos los <li> que sean el 3er elemento 
$("tr:nth-child(odd)"); //Selecciona todos los <tr> que sean impares
$("tr:nth-child(even)"); //Selecciona todos los <tr> que sean pares
$("div:nth-child(3n)"); //Selecciona cada tercer elemento <div>


// SELECTORES PARA FORMULARIOS
$(":text");
$(":checkbox");
$(":radio");
$(":image");
$(":submit");
$(":reset");
$(":password");
$(":file");
// Selecciona los elementos input, textarea, select y button
$(":input");
// Selecciona los elementos button e input con atributo type="button"
$(":button");
// Selecciona los elementos del formulario activados 	
$(":enabled");
// Selecciona los elementos del formulario desactivados	
$(":disabled");
// Selecciona los radio buttons y checkboxes que están pulsados
$(":checked");
// Selecciona los elementos de una lista de opciones que estén seleccionados
$(":selected");

// AGREGAR ELEMENTOS
// .append(string); -> Se inserta como último hijo del elemento.
$('#lista').append('<li>Item JQuery Append</li>');

// .prepend(string); -> Se inserta como primer hijo del elemento.
$('#lista').prepend('<li>Item JQuery Prepend</li>');

// EVENTOS
// READY() y LOAD()
// Se emplea para detectar que el DOM está listo para usarse.
// A diferencia del evento load(), no espera a que se carguen todas las imágenes 
// y recursos externo en la ventana para ejecutarse. El evento ready ocurre antes que load.
$(document).ready(function() {
    console.log("El DOM esta listo para usarse");
});

$(document).on('load', function() {
    console.log("El DOM logró cargar todos los recursos");
});

//Forma corta de ready()
$(function() {
    //console.log('El DOM esta listo');
});
//Forma corta con arrow function
$(() => {
    //console.log('El DOM esta listo');
});


// Es el equivalente de:
window.addEventListener('DOMContentLoaded', function() {
    //console.log('El DOM esta listo');
});

// ON()
// Asigna eventos a elementos del DOM. Es una opción al método addEventListener() 
// de JS Vanilla cuando usamos jQuery.
$(document).ready(function() {
    $('body').append('<button id="boton">Haz Click Aquí</button>');
    $('#boton').on('click', () => {
        alert("Hola!");
    });
});

// MÉTODOS SHORTCUT
// .CLICK(): Atajo para .on("click", manejador).  
// Asociamos el evento click para boton
$("#boton").click(function(e) {
    console.log("Hola!");
});

// .CHANGE(): Atajo para .on("change", manejador).  
$("#text").change(function(e) {
    console.log(e.target.value);
    //console.log(this.value);
});

// .SUBMIT(): Es un atajo para .on("submit", manejador). 
// Sólo disponible para elementos <form>.
$('form').submit(function(e) {
    // Evitamos la recarga
    e.preventDefault();
    let inputs = $(e.target).children();
    for (const aux of inputs) {
        console.log(aux.value);
    }
});

// EFECTOS Y ANIMACIONES