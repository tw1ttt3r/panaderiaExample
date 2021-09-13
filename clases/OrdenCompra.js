class OrdenCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        const existe = this.productos.filter(
            valor => valor.tipo === producto.tipo && valor.tamano === producto.tamano);
        if (existe.length === 0) {
            this.productos.push({ tipo: producto.tipo, tamano: producto.tamano, cantidad: 1});
        } else {
            this.productos = this.productos.reduce( (acc, valor) => {
                if (valor.tipo === producto.tipo && valor.tamano === producto.tamano) {
                    valor.cantidad++;
                }
                acc.push(valor);
                return acc;
            }, []);
        }
    }

    quitarProducto(producto) {
        this.productos = this.productos.reduce( (acc, valor) => {
            if (valor.tipo === producto.tipo && valor.tamano === producto.tamano) {
                if (valor.cantidad > 1) {
                    valor.cantidad--;
                    acc.push(valor);
                }
            } else {
                acc.push(valor);
            }
            return acc;
        }, []);
        console.log(this.productos);
    }

    calcularTotal(inventario) {
        return this.productos.reduce((acc, producto) => {
            const registro = inventario.filter( valor => valor.tipo === producto.tipo && valor.tamano === producto.tamano)[0];
            acc += registro.precio * producto.cantidad;
            return acc
        },0);
    }

    getCantidadProducto(producto) {
        const productoOrden = this.productos.filter(
            valor => valor.tipo === producto.tipo && valor.tamano === producto.tamano
        );
        if (productoOrden.length === 0) {
            return 0;
        } else {
            productoOrden[0].cantidad;
        }
    }

    getDetalleOrden(inventario) {
        return {
            productos: this.productos.reduce((acc, valor) => acc += valor.cantidad, 0),
            detalle: this.productos,
            total: this.calcularTotal(inventario)
        };

    }

}