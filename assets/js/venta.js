import propiedadesVenta from "./data/propiedadVenta.js"

const ventas = document.querySelector("#ventas")
for (const propiedad of propiedadVenta) {
  let templateVenta = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="${propiedad.tipo} "
        />
        <div class="card-body">
          <h5 class="card-title">${propiedad.titulo}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
            <i class="fas> </i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class=" ${propiedad.pets ? "text-success" : "text-danger"}">
            <i class="fas${propiedad.pets ? }"></i> ${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>
  `
   }
  ventas.innerHTML += templateVenta;
