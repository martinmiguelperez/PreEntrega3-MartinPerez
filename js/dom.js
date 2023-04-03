const imgCarrito = document.getElementById("imgCarritoCooltra")
const conteiner = document.getElementById("containerCard")
const inputSearch = document.querySelector("input#inputSearch")
const dropdown = document.querySelector('.dropdown');



imgCarrito.addEventListener("mousemove", () => {
    let totalProductos = carritoCooltra.length
    imgCarrito.title = `${totalProductos} productos en el carrito`
})


function cargarProductosHTML(array) {
    let contenidoEnHTML = ""
    if (array.length > 0) {
        array.forEach(vehiculo => {
            contenidoEnHTML += retornoCard(vehiculo)
        })
        conteiner.innerHTML = contenidoEnHTML
    } else {
        contenidoEnHTML = "<h2 class='error-cards'>Error al cargar productos.</h2>"
    }
}
cargarProductosHTML(vehiculos)


const botonesAgregar = document.querySelectorAll("button.btn.btnCardComprar")

function clickBotonesAgregar() {
    botonesAgregar.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = vehiculos.find(vehiculo => vehiculo.id === parseInt(btn.id))
            carritoCooltra.push(resultado)
            localStorage.setItem("miCarritoCooltra", JSON.stringify(carritoCooltra))
        })
    })
}
clickBotonesAgregar()

dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
});


function filtrarProductos() {
    let resultado = vehiculos.filter(vehiculo => vehiculo.tipo.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    resultado.length > 0 ? cargarProductosHTML(resultado) : alert("No se han encontró coincidencias. Ingresar: MOTOCICLETA | SCOOTER | BICICLETA")
}

inputSearch.addEventListener("search", () => {
    inputSearch.value.trim() !== "" ? filtrarProductos() : cargarProductosHTML(vehiculos)
})