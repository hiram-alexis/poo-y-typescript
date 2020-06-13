// String
var cadena = "alexospears.com";
cadena = 44;
// Number
var numero = 12;
// Boleano
var verdadero_falso = true;
// Any
var cualquiera = "hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"]; // Definir la variable como "var" la vuelve global
var years = ["Doce", 12, 13, 14]; // Definir la variable como "let" la vuelve local
// Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2_1 = 55;
    console.log(numero1_1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
