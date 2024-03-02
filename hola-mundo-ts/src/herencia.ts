abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected created_by: Number
  ) {}
  get fullYear(): number {
    return this.created_at.getFullYear();
  }

  get fullDesc(): string {
    return this.name + " " + this.desc;
  }

  abstract guardar(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: Number
  ) {
    super(name, desc, created_at, created_by);
  }

  override get fullDesc(): string {
    return "Producto: " + super.fullDesc;
  }

  override guardar(): void {
    console.log("Guardando Producto .....");
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: Number
  ) {
    super(name, desc, created_at, created_by);
  }
  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  override get fullDesc(): string {
    return "Categoria: " + super.fullDesc;
  }
  override guardar(): void {
    console.log("Guardando Categoria .....");
  }
}

let productoI = new Producto(
  1000,
  1233,
  "Samsung",
  "es un smartPhone",
  new Date(),
  1
);
let productoII = new Producto(
  1000,
  1233,
  "Iphone",
  "es un smartPhone",
  new Date(),
  2
);

let categoria = new Categoria(
  "Smartphone",
  "Listado de Smartphone",
  new Date(),
  12
);

categoria.agregarProducto(productoI);
categoria.agregarProducto(productoII);

console.log(productoI.fullDesc);
console.log(categoria);
console.log(categoria.fullDesc);
categoria.guardar();