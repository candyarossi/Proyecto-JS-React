// AJAX: Significa JavaScript asincrónico y XML (Asynchronous JavaScript and XML).
// Es un conjunto de técnicas de desarrollo que permiten que las aplicaciones web 
// funcionen de forma asincrónica, pudiendo procesar tareas en segundo plano.
// Un proceso asíncrono tiene la característica de no generar tiempo de espera 
// por la respuesta. Como resultado, cualquier app o web que use AJAX puede enviar 
// y recibir datos del servidor sin la necesidad de volver a cargar toda la página.

// Método GETJSON
$('body').append('<button id="btnJson">GET JSON</button><br>');

$('#btnJson').click(() => {
    $.getJSON("datos.json", function(respuesta, estado) {
        if (estado === "success") {
            $("body").append(`<p>Nombre: ${respuesta.name}, Edad: ${respuesta.age}</p>`);
        }
    });
});

// API: Application Programming Interfaces, es un conjunto de reglas y especificaciones 
// que las aplicaciones pueden seguir para comunicarse entre ellas.
// De esta manera, podemos garantizar el intercambio de mensajes o datos en formato estándar.

// Método GET 
$('body').append('<button id="btnGet">GET AJAX</button>');

const urlBase = "https://api.themoviedb.org/3/";
const endpoint = "movie/";
const idPeli = "26774";
const apiKey = "api_key=f20416aa14acdc6b2cd1af3feb7633a6";
const language = "language=en-US";

$('#btnGet').click(() => {
    $.ajax({
        method: "GET",
        url: urlBase + endpoint + idPeli + "?" + apiKey + "&" + language,
        success: function(respuesta) {
            console.log(respuesta);
            $('body').append(`<p>Película: ${respuesta.original_title}</p>`);
        }
    });
});

// Método POST
$('body').append('<button id="btnPost">POST AJAX</button>');

const rate = { "value": 8.5 };

$('#btnPost').click(() => {
    $.ajax({
        method: "POST",
        url: urlBase + endpoint + idPeli + "/rating?" + apiKey,
        data: rate,
        success: function(respuesta) {
            console.log(respuesta);
        }
    });
});

// SPA
$('body').append('<br><br><a href="spa/index.html">Ir a SPA</a>');