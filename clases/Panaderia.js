class Panaderia {
    constructor(nombre, operador) {
        this.nombre = nombre;
        this.operador = operador;
        this.ordenes = [];
        this.inventario = [];
    }

    cargaExistencias(productos) {
        this.inventario = productos.map(
            (value) => new Producto(value.precio, value.tamano, value.tipo, value.existencia)
        );
    }

    registrarVenta() {
        this.ordenes.push(new OrdenCompra());
        console.log(this.ordenes);
    }

    getVentaActiva() {
        return this.ordenes[this.ordenes.length - 1];
    }

    cerrarVenta() {
        if (this.getVentaActiva().productos.length === 0) {
            this.ordenes.pop();
            return 0;
        } else {
            return this.getVentaActiva().calcularTotal(this.inventario);
        }
    }

    actualizarInventario(tipo, tamano, accion) {
        this.inventario = this.inventario.reduce( (acc, producto) => {
            if (producto.tipo === tipo && producto.tamano === tamano) {
                producto.actualizarExistencia(accion);
            }
            acc.push(producto);
            return acc;
        }, []);
    }

    verVentas() {
        return this.ordenes;
    }
}