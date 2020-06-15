class Estructura {
    constructor() {
      this.inicio = null;
      this.totalNodes = 0;
    }

    agregar(nuevo) {
      if (this.inicio === null) this.inicio = nuevo;
      else {
        let temp = this.inicio;
        while (temp.siguiente != null) {
          temp = temp.siguiente;
        }
        temp.siguiente = nuevo;
      }
      this.totalNodes++;
    }
    agregarInicio(nuevo) {

      nuevo.siguiente = this.inicio;
      this.inicio = nuevo;
    }
    buscar(info) {
      let nodoB = null;
      let temp = this.inicio;
      while (temp != null && nodoB === null) {
        if (temp.nocuenta == info) nodoB = temp;
        temp = temp.siguiente;
      }

      return nodoB;
    }

    }