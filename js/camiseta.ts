// Clase (molde del objeto)
//export 
class Camiseta{
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
		public setColor(color){
			this.color =color;
		}
		public getColor (){
			return this.color
		}
}
