class Producto {
    constructor(precio, tamano, tipo, existencia) {
        this.precio = precio;
        this.tamano = tamano;
        this.tipo = tipo;
        this.existencia = existencia;
    }

    actualizarExistencia(accion) {
        accion === 'salida' ? this.existencia-- : this.existencia++;
    }
}