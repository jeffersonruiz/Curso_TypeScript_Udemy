/** 
let mensaje: string = "Hola mundo";
console.log(mensaje);
mensaje = "Cahnchito Feliz";
console.log(mensaje);
mensaje = "Chao mundo";
console.log(mensaje);

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;

let tupla: [number, string] = [1, "chanchito Feliz"];

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

console.log(Talla.ExtraGrande);

type Persona = {
    id: number;
    nombre: string;
    talla: Talla;
  }

const objeto: Persona  = { id: 1, nombre: "Chanchito Feliz", talla: Talla.ExtraGrande };

type Fibo = 0 | 1 | 2 | 3 | 5;
let noDeFibo: Fibo  = 3;

function gerUser(id:number) {
  if (id < 0) {
    return null
  }

  return {
    id: 1,
    name: "prueba",
    created_at: new Date()
  }
}

const usuario = gerUser(-1);

console.log(usuario?.created_at)




const dificultad: number | null = 0;
// const dificultad: number | null = null;

// nullish coalescin operator
const user = {
  id: 1,
  dificultad: dificultad ?? 1
}

// operador Or

const userII = {
  id: 1,
  dificultad: dificultad || 1
}

console.log("user", user)
console.log("userII", userII)
*/

class Personaje {
  profesion?: string; // propiedad opcional
  private static equipo: number = 0; //Pertenece a la misma clase mas no a las intancias de la clase (static)
  constructor(
    public readonly id: number, // propiedad de solo lectura
    public name: string,
    public nivel: number,
    private _hp: number
  ) {}

  subirNievel(): number {
    this.nivel++;
    return this.nivel;
  }

  subirHp(cantidad: number): number {
    this._hp = this._hp + cantidad;
    return this._hp;
  }

  static agregarPersonaje(): void {
    Personaje.equipo ++;
  }

  get hp(): number {
    return this._hp;
  }

  static get Equipo(): number {
    return Personaje.equipo;
  }

}

const superMan = new Personaje(1, "super man", 10, 100);

superMan.subirNievel();
superMan.subirHp(-10);
Personaje.agregarPersonaje();


const personaje = new Personaje(2, "Chanchito feliz", 10, 100);

Personaje.agregarPersonaje();

console.log(superMan);
console.log(Personaje.Equipo);

