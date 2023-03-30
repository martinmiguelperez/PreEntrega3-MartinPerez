function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carritoCooltra = JSON.parse(localStorage.getItem("miCarritoCooltra")) 
  
    if (carritoCooltra.length > 0) {
      carritoCooltra.forEach(moto => tablaHTML += armarTablaCarrito(moto))
        tbody.innerHTML = tablaHTML
    }
  }
  recuperarCarrito()
  
  function activarClickBotones() {
    const buttonsDelete = document.querySelectorAll("delete btn btn-danger")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", ()=> {
            
            //buscar usando button.id el producto en el array carrito.
            //hay que utilizar findIndex() porque necesitamos el índice del producto
            //luego con el método splice(), elimino el índice recuperado del carrito.
            //debemos declarar carrito de forma GLOBAL.
        })
    })
  }