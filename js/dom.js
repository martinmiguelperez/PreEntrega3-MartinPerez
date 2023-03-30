const imgCarrito = document.getElementById("imgCarritoCooltra")
const conteiner = document.getElementById("containerCard")
const inputSearch = document.querySelector("input#inputSearch")


/* NAV*/
document.addEventListener('DOMContentLoaded', () => {

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});


imgCarrito.addEventListener("mousemove", () => {
    let totalProductos = carritoCooltra.length
    imgCarrito.title = `${totalProductos} productos en el carrito`
})


function cargarProductos(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(vehiculo => {
            contenido += retornoCard(vehiculo)
        })
        conteiner.innerHTML = contenido
    } else {
        contenido = "<h2 class='error-cards'>Error al cargar productos.</h2>"
    }
}
cargarProductos(vehiculos)


const botonesAdd = document.querySelectorAll("button.btn.btnCardComprar")

function activarClickBotones() {
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = vehiculos.find(vehiculo => vehiculo.id === parseInt(btn.id))
            carritoCooltra.push(resultado)
            localStorage.setItem("miCarritoCooltra", JSON.stringify(carritoCooltra))
            // toast(`'${resultado.nombre}' se agregó al carrito`, 'orange')
        })
    })
}
activarClickBotones()

function filtrarProductos() {
    let resultado = vehiculos.filter(vehiculo => vehiculo.tipo.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    resultado.length > 0 ? cargarProductos(resultado) : alert("No se han encontró coincidencias. Ingresar: MOTOCICLETA | SCOOTER | TRICICLO | BICICLETA")
}

inputSearch.addEventListener("search", () => {
    inputSearch.value.trim() !== "" ? filtrarProductos() : cargarProductos(vehiculos)
})

function verCarrito() {
    if (carritoCooltra.length > 0) {
        const shopping = new Compra(carritoCooltra)
        alert(`El costo total es de $ ${shopping.obtenerSubtotal()}`)
    } else {
        alert("El carrito está vacío!")
    }
}

btnVerCarrito.addEventListener("click", verCarrito)
