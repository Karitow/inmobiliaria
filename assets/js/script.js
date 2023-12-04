import propiedadesVenta from "./data/propiedades_venta.js";
import propiedadesAlquiler from "./data/propiedades_alquiler.js";


const mostrarPropiedades = (propiedades, containerId) => {
  const container = document.getElementById(containerID)

const algunasPropiedades = propiedades.slice(0.3)
algunasPropiedades.forEach((propiedad) =>{
    
  const card=document.createElement("div")
 
  
  const contenidoCard = `
  <article class="col-md-4 mb-4">
      <div class="card">
          <img src="${propiedad.src}" alt="${propiedad.tipo} "/>
          <div class="card-body">
              <h5 class="card-title">${propiedad.titulo}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("CLP")}</p>
              <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                <i class="${propiedad.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedad.smoke? "Se permite fumar" : "No se permite fumar"}
              </p>
              <p class="${propiedad.pets? "text-success" : "text-danger"}">
                <i class="${propiedad.pets? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedad.pets? "Se admiten mascotas" : "No se admiten mascotas"}
              </p>
            </div>
      </div>        
  </article>
  `
  containerCard.innerHTML = contenidoCard
  algunasPropiedades.appendChild(algunasPropiedades)
  
});
}

mostrarPropiedades(propiedadesVenta, "venta-container")
mostrarPropiedades(propiedadesAlquiler, "alquiler-container")