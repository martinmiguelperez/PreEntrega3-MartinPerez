const confirmarCompra = document.querySelector('#confirmarCompra');
const tbody = document.querySelector("tbody")
const vaciarCarrito = document.querySelector('#vaciarCarrito');


function recuperarCarritoLocalStorage() {
  let tablaHTML = ""

  if (carritoCooltra.length > 0) {
    carritoCooltra.forEach(moto => {
      tablaHTML += armarTablaCarrito(moto)
    })
    tbody.innerHTML = tablaHTML
    calcularTotalHTML()
  } else {
    tbody.innerHTML = tablaHTML
    calcularTotalHTML(0)
  }
}
recuperarCarritoLocalStorage()

function activarBotonesEliminar() {
  const buttonsEliminar = document.querySelectorAll("button.delete.is-medium.button-delete")
  buttonsEliminar.forEach(btn => {
    btn.addEventListener("click", () => {
      let posicion = carritoCooltra.findIndex(vehiculo => vehiculo.id === parseInt(btn.id))
      if (posicion > -1) {
        carritoCooltra.splice(posicion, 1)
        localStorage.setItem("miCarritoCooltra", JSON.stringify(carritoCooltra));
        recuperarCarritoLocalStorage()
        activarBotonesEliminar()
      }
    })
  })
}
activarBotonesEliminar()


function calcularTotalHTML() {
  let total = document.querySelector("h4#total")
  let totalCarrito = carritoCooltra.reduce((acc, vehiculo) => acc + vehiculo.precio, 0)
  total.innerText = `Total: € ${totalCarrito.toLocaleString()}`
}




confirmarCompra.addEventListener("click", confirmarBtnCompra)

function confirmarBtnCompra() {
  if (carritoCooltra.length !== 0) {
    carritoCooltra.length = 0;
    alert('Gracias por su compra')
    localStorage.setItem("miCarritoCooltra", JSON.stringify(carritoCooltra));
    recuperarCarritoLocalStorage()

  } else {
    alert('NO hay productos para comprar')
  }

}

vaciarCarrito.addEventListener("click", borrarCarrito)

function borrarCarrito() {

  if (carritoCooltra.length !== 0) {
    carritoCooltra.length = 0;
    alert('Su carrito quedó vacio')
    localStorage.setItem("miCarritoCooltra", JSON.stringify(carritoCooltra));
    recuperarCarritoLocalStorage()

  } else {
    alert('NO hay productos en su carrito')
  }
}
