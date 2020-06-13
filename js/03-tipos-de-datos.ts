type alfanumerico = string | number;

// String

let cadena: alfanumerico = "alexospears.com";

cadena = 44;

// Number

let numero : number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any

let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"]; // Definir la variable como "var" la vuelve global

let years: any[] = ["Doce",12,13,14]; // Definir la variable como "let" la vuelve local

// Let vs var
var numero1=10;
var numero2=12;

if(numero1 ==10){
	let numero1 =44;
	let numero2 =55;
	console.log("Variables locales = "numero1," , ",numero2);
}
console.log("Variables globales = "numero1," , ",numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);