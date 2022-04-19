// CLASE Persona
export default class Persona {

    nombre;
    edad;

    //Constructores
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    /* constructor(literal) {
        this.nombre = literal.nombre;
        this.edad = literal.edad;
    } */

    toString() {
        return "Nombre: " + this.nombre + ", Edad: " + this.edad;
    }
}