const carritoCooltra = JSON.parse(localStorage.getItem("miCarritoCooltra")) || []

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

function retornoCard(vehiculo) {
    return `                
    <div class="tarjeta id="${vehiculo.id}">
        <div class="contenidosCard">
            <div class="ladoIzq">
                <h1 class="tituloCard">${vehiculo.nombre}</h1>
                <h2 class="tituloPrecio">${vehiculo.precio} €</h2>
                <div class="cuerpo">
                    <p>${vehiculo.tipo} || ${vehiculo.cilindrada} </p>
                </div>
                    <button type="button" class="btn btnCardComprar" id="${vehiculo.id}" title="Click para agregar '${vehiculo.nombre}' al carrito">Añadir</button>
            </div>
            <div class="ladoDer">
                <img src="${vehiculo.images}" alt="${vehiculo.nombre}" />
            </div>
        </div>
    </div>
    `
}

function armarTablaCarrito(vehiculo) {
    return `
                <tr>
                    <td class="">${vehiculo.nombre}</td>
                    <td>${vehiculo.precio} €</td>
                    <td><button type="button" class="delete is-medium button-delete" id="${vehiculo.id}" title="Quitar del carrito"></button></td>
                </tr>
                
            `
}
