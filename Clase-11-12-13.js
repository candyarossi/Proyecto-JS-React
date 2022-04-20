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
// Selecciona el último <p> de la página
$("p:last");
// Selecciona todos los <li> que son primeros hijos
$("li:first-child");
// Selecciona todos los <li> que son últimos hijos 
$("li:last-child");
// Selecciona todos los <li> que sean hijos únicos
$("li:only-child");
// Selecciona todos los <li> que sean el 3er elemento 
$("li:nth-child(3)");
// Selecciona todos los <tr> que sean impares
$("tr:nth-child(odd)");
// Selecciona todos los <tr> que sean pares
$("tr:nth-child(even)");
// Selecciona cada tercer elemento <div> 
$("div:nth-child(3n)");


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
// .SHOW(): Muestra un elemento del DOM, suponiendo 
// que se encuentre oculto mediante css (display:none).
$('body').append('<p id="p1" style="display: none">Este es un párrafo.</p>');
$('#p1').show();

// .HIDE(): Es el proceso inverso de .show().
$('#p1').hide();

// .FADEIN(): El elemento empieza a aparecer de forma gradual, 
// hasta que esté completamente visible.
// Puede recibir velocidad en milisegundos o las palabras 'slow' y 'fast'.
$('body').append('<p id="p2" style="display: none">Este es un párrafo 2.</p>');
$('#p2').fadeIn('slow');

// .FADEOUT(): El elemento empieza a desaparecer de forma gradual, 
// hasta  que esté completamente invisible.
// Puede recibir velocidad en milisegundos o las palabras 'slow' y 'fast'.
$('#p2').fadeOut('slow');

// CALLBACK DEL FADE
// Tanto para fadeOut()como fadeIn() se le puede enviar un segundo parámetro 
// opcional para indicar una función que se ejecutará cuando la animación termine.

$('body').append('<p id="p3" style="display: none">Este es un párrafo 3.</p>');
$('#p3').fadeIn(5000, function() {
    $('#p3').fadeOut(5000);
});

// .SLIDEDOWN(): Hace aparecer al elemento haciendo una transición hacia abajo.
// Se puede enviar los mismos parámetros de velocidad y callback que en fadeIn y fadeOut.
$('div').slideDown('slow');

// .SLIDEUP(): Hace desaparecer al elemento haciendo una transición hacia arriba.
// Se puede enviar los mismos parámetros de velocidad y callback que en fadeIn y fadeOut.
$('div').slideUp('slow');

// .TOGGLE(): En función de que el elemento esté visible o no, ejecuta slideUp, o slideDown.
$('#toggle').click(function() {
    $('div').toggle('slow');
});

// MODIFICAR CSS CON JQUERY
// Llamando a css() podemos indicar la propiedad a modificar del elemento seleccionado.
// La sintaxis funciona así: selector.css("propiedad-css","valor");
$('h2').css({ 'font-size': '30px', 'color': 'red' });

// ANIMATE(): Permite crear efectos de animación sobre cualquier propiedad CSS numérica.
$("body").prepend('<h1 class="titulo">Bienvenidos!</h1>');
// Animamos las propiedades predeterminadas del h1 con animate.
/*$(".titulo").animate({
        'opacity': '0.5',
        'font-size': '40px'
    }, //1er parámetro propiedades
    "slow", //2do parámetro duración 
    function() { //3er parámetro callback
        console.log("final de animación");
});*/

// ENCADENAR ANIMACIONES
// .DELAY(): Puede utilizarse para establecer un tiempo de espera en milisegundos 
// entre una animación y la siguiente.
$('.titulo').css({ 'color': 'red' }).slideUp(5000).delay(5000).slideDown(5000);