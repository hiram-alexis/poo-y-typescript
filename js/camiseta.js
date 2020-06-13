// Clase (molde del objeto)
//export 
var Camiseta = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColorUno = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColorDos = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("uno", "dos", "tres", "Cuatro", 1);
console.log(camiseta);
