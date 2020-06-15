class Producto {
    static cont = 0;
    constructor(nocuenta,nombre,curp,nestudios,plantel) {
      this.nocuenta = nocuenta;
      this.nombre = nombre;
      this.curp = curp;
      this.nestudios = nestudios;
      this.plantel = plantel;
      this.siguiente = null;
      this.anterior = null;
    }
    showInfo() {
      return {
        nocuenta: this.nocuenta,
        nombre: this.nombre,
        curp: this.curp,
        nestudios: this.nestudios,
        plantel: this.plantel
      };
    }
  }