const FORMSPREE_ENDPOINT = "";
const WHATSAPP_NUMBER = "573104899379";
const GALLERY_BATCH_SIZE = 18;

let activeGalleryImages = [];
let activeGalleryTitle = "";
let visibleGalleryCount = GALLERY_BATCH_SIZE;

const events = [
  {
    id: 1,
    title: "Pintura al estilo barroco",
    category: "General",
    date: "15 de abril, 6:00 p.m.",
    image: "1.jpeg",
    gallery: [
      "1/DSC_0002.jpg",
      "1/DSC_0009.jpg",
      "1/DSC_0011.jpg",
      "1/DSC_0024.jpg",
      "1/DSC_0038.jpg",
      "1/DSC_0042.jpg",
      "1/DSC_0054.jpg",
      "1/DSC_0056.jpg",
      "1/DSC_0068.jpg",
      "1/DSC_0077.jpg",
      "1/DSC_0080.jpg",
      "1/DSC_0086.jpg",
      "1/DSC_0087.jpg",
      "1/DSC_0093.jpg",
      "1/DSC_0094.jpg",
      "1/DSC_0104.jpg",
      "1/DSC_0110.jpg",
      "1/DSC_0113.jpg",
      "1/DSC_0116.jpg",
      "1/DSC_0119.jpg",
      "1/DSC_0124.jpg",
      "1/DSC_0128.jpg",
      "1/DSC_0137.jpg",
      "1/DSC_0141.jpg",
      "1/DSC_0146.jpg",
      "1/DSC_0151.jpg",
      "1/DSC_0154.jpg",
      "1/DSC_0155.jpg",
      "1/DSC_0156.jpg",
      "1/DSC_0161.jpg",
      "1/DSC_0184.jpg",
      "1/DSC_0188.jpg",
      "1/DSC_0201.jpg",
      "1/DSC_0205.jpg",
      "1/DSC_0207.jpg",
      "1/DSC_0213.jpg",
      "1/DSC_0216.jpg",
      "1/DSC_0222.jpg",
      "1/DSC_0224.jpg",
      "1/DSC_0229.jpg",
      "1/DSC_0237.jpg",
      "1/DSC_0239.jpg",
      "1/DSC_0248.jpg",
      "1/DSC_0252.jpg",
      "1/DSC_0256.jpg",
      "1/DSC_0259.jpg",
      "1/DSC_0264.jpg",
      "1/DSC_0267.jpg",
      "1/DSC_0268.jpg",
      "1/DSC_0271.jpg",
      "1/DSC_0280.jpg",
      "1/DSC_0283.jpg",
      "1/DSC_0286.jpg",
      "1/DSC_0289.jpg",
      "1/DSC_0293.jpg",
      "1/DSC_0296.jpg",
      "1/DSC_0299.jpg",
      "1/DSC_0303.jpg",
      "1/DSC_0305.jpg",
      "1/DSC_0309.jpg",
      "1/DSC_0322.jpg",
      "1/DSC_0329.jpg",
      "1/DSC_0333.jpg",
      "1/DSC_0335.jpg",
      "1/DSC_0349.jpg",
      "1/DSC_0350.jpg",
      "1/DSC_0353.jpg",
      "1/DSC_0369.jpg",
      "1/DSC_0395.jpg",
      "1/DSC_0400.jpg",
      "1/DSC_0407.jpg",
      "1/DSC_0420.jpg",
      "1/DSC_0426.jpg",
      "1/DSC_0433.jpg"
    ],
    summary: "Pintura en vivo con modelo, musica en vivo y experiencia contemplativa.",
    description: "Evento de pintura al estilo barroco con modelo en vivo, saxofon y musica en vivo. Una experiencia para compartir, apreciar y apoyar la insonorizacion de Live."
  },
  {
    id: 2,
    title: "Body painting",
    category: "Especial",
    date: "29 de abril, 6:00 p.m.",
    image: "2.jpeg",
    summary: "Pintura en vivo con modelo, copa de vino, saxofon y musica en vivo.",
    description: "Evento contemplativo de body painting con artista en vivo. Una propuesta visual para sumergirse en el color, la expresion corporal y la musica."
  },
  {
    id: 3,
    title: "Fotografia Burlesque",
    category: "Especial",
    date: "13 de mayo, 6:00 p.m.",
    image: "3.jpeg",
    galleryFolder: "3",
    gallery: [
      "3/DSC_0002.jpg",
      "3/DSC_0004.jpg",
      "3/DSC_0006.jpg",
      "3/DSC_0007.jpg",
      "3/DSC_0015.jpg",
      "3/DSC_0018.jpg",
      "3/DSC_0063.jpg",
      "3/DSC_0069.jpg",
      "3/DSC_0076.jpg",
      "3/DSC_0079.jpg",
      "3/DSC_0080.jpg",
      "3/DSC_0084.jpg",
      "3/DSC_0089.jpg",
      "3/DSC_0098.jpg",
      "3/DSC_0105.jpg",
      "3/DSC_0114.jpg",
      "3/DSC_0123.jpg",
      "3/DSC_0125.jpg",
      "3/DSC_0126.jpg",
      "3/DSC_0130.jpg",
      "3/DSC_0133.jpg",
      "3/DSC_0135.jpg",
      "3/DSC_0137.jpg",
      "3/DSC_0140.jpg",
      "3/DSC_0142.jpg",
      "3/DSC_0152.jpg",
      "3/DSC_0155.jpg",
      "3/DSC_0163.jpg",
      "3/DSC_0164.jpg",
      "3/DSC_0165.jpg",
      "3/DSC_0170.jpg",
      "3/DSC_0187.jpg",
      "3/DSC_0193.jpg",
      "3/DSC_0215.jpg",
      "3/DSC_0217.jpg",
      "3/DSC_0225.jpg",
      "3/DSC_0228.jpg",
      "3/DSC_0239.jpg",
      "3/DSC_0245.jpg",
      "3/DSC_0251.jpg",
      "3/DSC_0255.jpg",
      "3/DSC_0257.jpg",
      "3/DSC_0264.jpg",
      "3/DSC_0266.jpg",
      "3/DSC_0272.jpg",
      "3/DSC_0284.jpg",
      "3/DSC_0301.jpg",
      "3/DSC_0303.jpg",
      "3/DSC_0307.jpg",
      "3/DSC_0315.jpg",
      "3/DSC_0323.jpg",
      "3/DSC_0325.jpg",
      "3/DSC_0327.jpg",
      "3/DSC_0330.jpg",
      "3/DSC_0334.jpg",
      "3/DSC_0338.jpg",
      "3/DSC_0349.jpg",
      "3/DSC_0355.jpg",
      "3/DSC_0361.jpg",
      "3/DSC_0363.jpg",
      "3/DSC_0368.jpg",
      "3/DSC_0372.jpg",
      "3/DSC_0374.jpg",
      "3/DSC_0375.jpg",
      "3/DSC_0389.jpg",
      "3/DSC_0392.jpg",
      "3/DSC_0396.jpg",
      "3/DSC_0400.jpg",
      "3/DSC_0410.jpg",
      "3/DSC_0412.jpg",
      "3/DSC_0431.jpg",
      "3/DSC_0446.jpg",
      "3/DSC_0455.jpg",
      "3/DSC_0484.jpg",
      "3/DSC_0509.jpg",
      "3/DSC_0515.jpg",
      "3/DSC_0519.jpg",
      "3/DSC_0526.jpg",
      "3/DSC_0530.jpg",
      "3/DSC_0542.jpg",
      "3/DSC_0551.jpg",
      "3/DSC_0558.jpg",
      "3/DSC_0559.jpg",
      "3/DSC_0569.jpg",
      "3/DSC_0575.jpg",
      "3/DSC_0594.jpg",
      "3/DSC_0604.jpg",
      "3/DSC_0614.jpg",
      "3/DSC_0619.jpg",
      "3/DSC_0637.jpg",
      "3/DSC_0644.jpg",
      "3/DSC_0647.jpg",
      "3/DSC_0649.jpg",
      "3/DSC_0654.jpg",
      "3/DSC_0657.jpg",
      "3/DSC_0673.jpg",
      "3/DSC_0682.jpg",
      "3/DSC_0685.jpg",
      "3/DSC_0686.jpg",
      "3/DSC_0692.jpg",
      "3/DSC_0709.jpg",
      "3/DSC_0711.jpg"
    ],
    summary: "Fotografia contemplativa y educativa con tematica burlesque y modelo en vivo.",
    description: "Experiencia de fotografia con modelo en vivo, tips fotograficos, musica y participacion abierta para vivir el evento como fotografo o modelo."
  },
  {
    id: 4,
    title: "Shibari, la restriccion erotica",
    category: "Registro",
    date: "20 de mayo, 6:00 p.m.",
    image: "4.jpeg",
    summary: "Charla y demostracion en vivo sobre shibari desde una mirada contemplativa y educativa.",
    description: "Evento de shibari con charla, demostracion en vivo, copa de vino y musica. Una experiencia educativa sobre cuerpo, control, sensibilidad y expresion."
  },
  {
    id: 5,
    title: "Miercoles Poesia",
    category: "General",
    date: "3 de junio, despues de las 6:00 p.m.",
    image: "5.jpeg",
    summary: "Lectura de poemas, poesia propia o de autor y palabras que conectan.",
    description: "Encuentro poetico para leer, escuchar y compartir poemas en un ambiente intimo y creativo. Una invitacion a conectar desde la palabra."
  },
  {
    id: 6,
    title: "Body Painting",
    category: "General",
    date: "10 de junio, 6:00 p.m.",
    image: "6.jpeg",
    summary: "Expresion, color y libertad con artistas en vivo, musica y comunidad.",
    description: "Evento contemplativo de body painting con artistas en vivo, modelo, musica y comunidad. Una experiencia enfocada en expresion, color y libertad."
  }
];

const eventsGrid = document.querySelector("#eventsGrid");
const detailSection = document.querySelector("#detalleEvento");
const detailImage = document.querySelector("#detailImage");
const detailNumber = document.querySelector("#detailNumber");
const detailCategory = document.querySelector("#detailCategory");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailDate = document.querySelector("#detailDate");
const photoGallery = document.querySelector("#photoGallery");
const backToEvents = document.querySelector("#backToEvents");
const filters = document.querySelectorAll(".filter");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const revealItems = document.querySelectorAll(".hero-content, .hero-card, .intro-panel, .section-heading, .events-grid, .contact-copy, .contact-form");

revealItems.forEach((item) => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

function renderEvents(category = "Todos") {
  const visibleEvents = category === "Todos"
    ? events
    : events.filter((event) => event.category === category);

  eventsGrid.innerHTML = visibleEvents.map((event) => `
    <button class="event-card" type="button" data-event-id="${event.id}" aria-label="Ver detalle de ${event.title}">
      <div class="event-image-wrap">
        <img class="event-image" src="${event.image}" alt="Flyer de ${event.title}" loading="lazy" decoding="async">
        <span class="event-number">${String(event.id).padStart(2, "0")}</span>
      </div>
      <div class="event-card-body">
        <p class="eyebrow">${event.category}</p>
        <h3>${event.title}</h3>
        <p>${event.summary}</p>
        <span>${event.date}</span>
      </div>
    </button>
  `).join("");
}

function findGalleryImages(folder) {
  if (!folder) return Promise.resolve([]);

  const extensions = ["jpeg", "jpg", "png", "webp"];
  const candidates = [];

  for (let index = 1; index <= 30; index += 1) {
    extensions.forEach((extension) => candidates.push(`${folder}/${index}.${extension}`));
  }

  const checks = candidates.map((src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = () => resolve(null);
    image.src = src;
  }));

  return Promise.all(checks).then((results) => results.filter(Boolean));
}

function renderGallery() {
  const visibleImages = activeGalleryImages.slice(0, visibleGalleryCount);
  const remainingImages = activeGalleryImages.length - visibleImages.length;

  photoGallery.innerHTML = visibleImages.map((photo, index) => `
    <img src="${photo}" alt="Registro fotografico ${index + 1} de ${activeGalleryTitle}" loading="lazy" decoding="async">
  `).join("");

  if (remainingImages > 0) {
    photoGallery.insertAdjacentHTML("beforeend", `
      <button class="load-more" type="button" id="loadMoreGallery">
        Ver mas fotos (${remainingImages})
      </button>
    `);
  }
}

async function openEventDetail(eventId) {
  const event = events.find((item) => item.id === Number(eventId));
  if (!event) return;

  detailImage.src = event.image;
  detailImage.alt = `Flyer de ${event.title}`;
  detailNumber.textContent = String(event.id).padStart(2, "0");
  detailCategory.textContent = event.category;
  detailTitle.textContent = event.title;
  detailDescription.textContent = event.description;
  detailDate.textContent = event.date;
  photoGallery.innerHTML = `
    <div class="empty-gallery">
      <strong>Cargando registro</strong>
      <p>Estamos buscando fotografias disponibles para este evento.</p>
    </div>
  `;

  const galleryImages = event.gallery || await findGalleryImages(event.galleryFolder);

  if (galleryImages.length > 0) {
    activeGalleryImages = galleryImages;
    activeGalleryTitle = event.title;
    visibleGalleryCount = GALLERY_BATCH_SIZE;
    renderGallery();
  } else {
  photoGallery.innerHTML = `
    <div class="empty-gallery">
      <strong>Registro pendiente</strong>
      <p>Para el evento 3, agrega las fotos en la carpeta 3 con nombres como 1.jpeg, 2.jpeg, 3.jpeg. Tambien se aceptan jpg, png y webp.</p>
    </div>
  `;
  }

  detailSection.hidden = false;
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

eventsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".event-card");
  if (!card) return;
  openEventDetail(card.dataset.eventId);
});

photoGallery.addEventListener("click", (event) => {
  if (!event.target.closest("#loadMoreGallery")) return;
  visibleGalleryCount += GALLERY_BATCH_SIZE;
  renderGallery();
});

backToEvents.addEventListener("click", () => {
  detailSection.hidden = true;
  document.querySelector("#eventos").scrollIntoView({ behavior: "smooth", block: "start" });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    renderEvents(filter.dataset.category);
    detailSection.hidden = true;
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const message = [
    "Hola, soy " + data.get("nombre"),
    "Correo: " + data.get("correo"),
    "Telefono: " + (data.get("telefono") || "No indicado"),
    "Mensaje: " + data.get("mensaje")
  ].join("%0A");

  if (FORMSPREE_ENDPOINT) {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        formNote.textContent = "Mensaje enviado por Formspree. Tambien abriremos WhatsApp por si quieres continuar la conversacion.";
        contactForm.reset();
      } else {
        formNote.textContent = "No se pudo enviar por Formspree. Abriremos WhatsApp con tu mensaje.";
      }
    } catch (error) {
      formNote.textContent = "No se pudo conectar con Formspree. Abriremos WhatsApp con tu mensaje.";
    }
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
});

renderEvents();
