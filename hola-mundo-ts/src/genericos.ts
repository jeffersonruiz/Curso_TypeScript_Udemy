function log<V, T>(a: V, b: T): T {
  console.log(a, b);

  return b;
}

log<string, string>("datos", "Chanchito Feliz");
log<string, number>("datos", 123);
log<string, Date>("datos", new Date());

type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
});
const programadorI = new Programador<string>("Hola Mundo");

programador.computador.apagar;
programadorI.computador.length;

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface Product {
  id: number;
  name: string;
}

function fetchProduct(): KeyValue<string, Product> {
  return {
    key: "producto",
    value: {
      id: 1,
      name: "Canchito Feliz",
    },
  };
}
function fetchStock(): KeyValue<string, number> {
  return {
    key: "producto",
    value: 400,
  };
}

// interface Usuario {
//   id: string;
// }

class Usuario {
  constructor(public id: string) {}
}

function print<T extends Usuario>(t: T): T {
  console.log(t);

  return t;
}

print({ id: "" });

class Estado<T> {
  protected data: T[] = [];

  agregar(t: T): void {
    this.data.push(t);
  }

  get estado(): T[] {
    return this.data;
  }
}

// Pasar generico
class EstadoPrueba<T> extends Estado<T> {}

type ObjectId = {
  id: string;
};

// Pasar geenrico con restriccion
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

// Pasar generico fijo
class EstadoUsuarios extends Estado<Usuario> {
  reiniciarPWD() {}
}

type Calendario = {
  id: number;
  fuente: string;
  dueno: string;
};

const calendario: Calendario = {
  id: 1,
  fuente: "Google",
  dueno: "Zeus",
};

function getProp<T>(objeto: T, propiedad: keyof T): unknown {
  return objeto[propiedad];
}

getProp<Calendario>(calendario, "fuente");

type Punto = {
  x: number;
  y: number;
  desc?: string;
};

//utility types
type PuntoOpcional = Partial<Punto>;
type PuntoRequerido = Required<Punto>;
type PuntoOmitir = Omit<Punto, "desc">;
type PuntoEscogerAtributos = Pick<Punto, "x" | "desc">


const keyVal: Record<string, number> = {
  id: 42,
};
