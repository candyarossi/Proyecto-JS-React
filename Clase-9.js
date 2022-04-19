// EVENTOS
// Controlar las acciones de los usuarios, y definir un comportamiento de la página 
// o aplicación cuando se produzcan.

// OPCION 1
var boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", respuestaClick);

function respuestaClick() {
    console.log("Respuesta evento");
}

// OPCION 2
var boton = document.getElementById("btnPrincipal");
// Las propiedades se identifican con el nombre del evento y el prefijo ON.
boton.onclick = () => { console.log("Respuesta 2") };

// OPCION 3
// <input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />

// EVENTOS MÁS COMUNES

// MOUSE
//      * mousedown/mouseup: Se oprime/suelta el botón del ratón sobre un elemento.
//      * mouseover/mouseout:  El puntero del mouse se mueve sobre/sale del elemento.
//      * mousemove: El movimiento del mouse sobre el elemento activa el evento.
//      * click: Se activa después de mousedown o mouseup sobre un elemento válido.

// TECLADO
//      * keydown: Cuando se presiona.
//      * keyup: Cuando se suelta una tecla.

// CAMBIOS
//      * change: Se activa cuando se detecta un cambio en el valor del elemento. 

// ENVÍO
//      * submit: Se activa cuando el formulario es enviado, normalmente se utiliza 
//        para validar el formulario antes de ser enviado al servidor o bien para 
//        abortar el envío y procesarlo con JavaScript.

// Más eventos en: https://developer.mozilla.org/en-US/docs/Web/Events

// INFO DLE EVENTO
// Obtenemos información contextual del evento para poder realizar acciones, para
// prevenir un comportamiento usamos el objeto EVENT.
// Se crea de forma automática un parámetro que se pasa a la función manejadora.

// Ejemplo:
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(evento) {
    //Cancelamos el comportamiento del evento
    evento.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = evento.target;
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value);
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);
}