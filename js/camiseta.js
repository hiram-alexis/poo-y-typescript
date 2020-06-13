// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "Manga Larga", "Nike", "L", 14);
camiseta.setColor("Rojo");
//camiseta.getColor();
/*
camiseta.color ="Rojo";
camiseta.modelo = "Manga Larga";
camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;
*/
var playera = new Camiseta();
playera.setColor("Azul");
/*
playera.color ="Azul";
playera.modelo = "Manga Corta";
playera.marca = "Adidas";
playera.talla = "L";
playera.precio = 15;
*/
console.log(camiseta);
