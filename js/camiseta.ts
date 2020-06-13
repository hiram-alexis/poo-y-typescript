// Clase (molde del objeto)
class Camiseta{
	// Propiedades (caracteristicas del objeto)
	private color: string;	
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;
		// Metodos (Funciones o acciones del objeto)
		public setColor(color){
			this.color =color;
		}
		public getColor (){
			return this.color
		}
}

var camiseta = new Camiseta();
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

console.log(camiseta, playera);