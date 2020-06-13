//Interface
interface CamisetaBase{
	setColor(color);
	getColor();
}

// Clase (molde del objeto)
//export 
class Camiseta implements CamisetaBase{
	// Propiedades (caracteristicas del objeto)
	private color: string;	
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;
		// Metodos (Funciones o acciones del objeto)
		constructor(color,modelo, marca,talla, precio){
			this.color = color;
			this.modelo = modelo;
			this.marca = marca;
			this.talla = talla;
			this. precio = precio;

		}
		public setColorUno(color){
			this.color =color;
		}
		public getColorDos (){
			return this.color
		}
}

var camiseta = new Camiseta("uno", "dos", "tres", "Cuatro", 1);
console.log(camiseta);