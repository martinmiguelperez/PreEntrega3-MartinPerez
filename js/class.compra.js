class Compra {
    constructor(carritoCooltra) {
        this.carritoCooltra = carritoCooltra
    }
    obtenerSubtotal() {
        if (carritoCooltra.length > 0) {
            return this.carritoCooltra.reduce((acc, vehiculo)=> acc + vehiculo.precio, 0).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado') {
            return `Confirmamos el pago de $ ${this.obtenerSubtotal()}. \n Muchas gracias por su compra!`
        } else {
            return `Error en la transacción.`
        }
    }
}