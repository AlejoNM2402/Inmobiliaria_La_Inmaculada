// ════════════════════════════════════════════════════
//  DATOS DE LOS PROYECTOS
//  ⚠️ EDITA AQUÍ las URLs reales de Supabase
// ════════════════════════════════════════════════════

const proyectos = [
  {
    id: 1,
    titulo: "Estadio Metropolitano de Barranquilla",
    ubicacion: "Barranquilla, Atlántico",
    // anio: 2023,
    tipo: "Infraestructura Deportiva",
    // area: "45,000m²",
    // duracion: "24 meses",
    descripcion: "Remodelación y adecuación del estadio Metropolitano de Barranquilla. Trabajos incluyen renovación de graderías, instalación de nuevas sillas, mejora de sistemas eléctricos, adecuación de camerinos, renovación de césped y modernización de sistemas de sonido e iluminación. Capacidad para 46,000 espectadores.",
    imagenes: [
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/EstadioBarranquilla/05-vista-general-estadio.jpeg",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/EstadioBarranquilla/01.png",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/EstadioBarranquilla/02.png",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/EstadioBarranquilla/03.png",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/EstadioBarranquilla/04.png"
    ]
  },
  {
    id: 2,
    titulo: "Metro de Bogotá - Línea 1",
    ubicacion: "Bogotá D.C.",
    // anio: 2024,
    tipo: "Infraestructura de Transporte",
    // area: "23.5 km",
    // duracion: "36 meses",
    descripcion: "Construcción de tramos de la Línea 1 del Metro de Bogotá. Incluye obras civiles, excavación de túneles, construcción de estaciones elevadas, sistemas de ventilación, instalaciones eléctricas y de señalización. Proyecto de transporte masivo que beneficiará a más de 800,000 pasajeros diarios.",
    imagenes: [
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/MetroBogota/01-excavaciones.jpeg",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/MetroBogota/02-instalacion-armdura-acero-11.jpeg",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/MetroBogota/03-instalacion-armadura-acero-18.jpeg",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/MetroBogota/05-vista-aerea.jpeg",
      "https://rmbwyjohwioamuduwtad.supabase.co/storage/v1/object/public/ObrasConstructora/MetroBogota/04-fundida-viga.jpeg"
    ]
  }
];

// ════════════════════════════════════════════════════
//  GENERAR TARJETAS
// ════════════════════════════════════════════════════

function generarTarjetas() {
  const grid = document.getElementById('proyectosGrid');
  
  if (!grid) return;
  
  grid.innerHTML = '';
  
  proyectos.forEach((proyecto, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'proyecto-card';
    tarjeta.onclick = () => abrirModal(proyecto);
    
    const portada = proyecto.imagenes[0] || 'assets/placeholder.jpg';
    const numero = String(index + 1).padStart(2, '0');
    
    tarjeta.innerHTML = `
      <div class="proyecto-card-imagen">
        <img src="${portada}" alt="${proyecto.titulo}" loading="lazy">
        <div class="proyecto-card-badge">${proyecto.tipo}</div>
        <div class="proyecto-numero">${numero}</div>
      </div>
      <div class="proyecto-card-info">
        <h3>${proyecto.titulo}</h3>
        <p class="proyecto-ubicacion">
          <i class="fas fa-map-marker-alt"></i> ${proyecto.ubicacion}
        </p>
        <div class="proyecto-meta">
          <span><i class="fas fa-ruler-combined"></i> ${proyecto.area}</span>
          <span><i class="fas fa-calendar"></i> ${proyecto.anio}</span>
          <span><i class="fas fa-clock"></i> ${proyecto.duracion}</span>
        </div>
        <button class="btn-ver-mas">
          Ver detalles <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;
    
    grid.appendChild(tarjeta);
  });
}

// ════════════════════════════════════════════════════
//  MODAL
// ════════════════════════════════════════════════════

function abrirModal(proyecto) {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  
  if (!modalOverlay || !modalBody) return;
  
  const galeriaHTML = proyecto.imagenes.map((img, index) => `
    <div class="modal-imagen-item">
      <img src="${img}" alt="${proyecto.titulo} - Vista ${index + 1}" onclick="zoomImagen(this)">
    </div>
  `).join('');
  
  modalBody.innerHTML = `
    <div class="modal-header">
      <span class="modal-tipo">${proyecto.tipo}</span>
      <h2>${proyecto.titulo}</h2>
      <p class="modal-ubicacion">
        <i class="fas fa-map-marker-alt"></i> ${proyecto.ubicacion} • ${proyecto.anio}
      </p>
    </div>
    
    <div class="modal-galeria">
      ${galeriaHTML}
    </div>
    
    <div class="modal-info">
      <div class="modal-detalles">
        <div class="detalle-item">
          <i class="fas fa-ruler-combined"></i>
          <div>
            <strong>Área</strong>
            <span>${proyecto.area}</span>
          </div>
        </div>
        <div class="detalle-item">
          <i class="fas fa-clock"></i>
          <div>
            <strong>Duración</strong>
            <span>${proyecto.duracion}</span>
          </div>
        </div>
        <div class="detalle-item">
          <i class="fas fa-calendar-check"></i>
          <div>
            <strong>Año</strong>
            <span>${proyecto.anio}</span>
          </div>
        </div>
      </div>
      
      <div class="modal-descripcion">
        <h3>Descripción del Proyecto</h3>
        <p>${proyecto.descripcion}</p>
      </div>
      
      <a href="https://wa.me/573156376306?text=Hola,%20me%20interesa%20información%20sobre%20el%20proyecto:%20${encodeURIComponent(proyecto.titulo)}" 
         target="_blank" 
         class="btn-whatsapp-modal">
        <i class="fab fa-whatsapp"></i>
        Consultar proyecto
      </a>
    </div>
  `;
  
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (!modalOverlay) return;
  
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function zoomImagen(img) {
  img.classList.toggle('zoomed');
}

// ════════════════════════════════════════════════════
//  EVENT LISTENERS
// ════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  generarTarjetas();
  
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (modalClose) {
    modalClose.addEventListener('click', cerrarModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        cerrarModal();
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
});