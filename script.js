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
    image: "optimized/flyers/1.jpg",
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
    summary: "Una noche de pintura en vivo inspirada en la estetica barroca, con modelo, vino y musica.",
    description: "Pintura al estilo barroco fue una experiencia contemplativa alrededor del retrato, la luz y la puesta en escena. El publico acompano el proceso de una obra en vivo con modelo, saxofon, musica y una copa de vino, en un ambiente intimo que mezclo elegancia, observacion y encuentro artistico. Al final, la pieza hizo parte de una dinamica de subasta entre los asistentes, reforzando la idea de Vive El Arte como vitrina para creadores locales."
  },
  {
    id: 2,
    title: "Body painting",
    category: "Especial",
    date: "29 de abril, 6:00 p.m.",
    image: "optimized/flyers/2.jpg",
    gallery: [
      "2/IMG-20260430-WA0004.jpg",
      "2/IMG-20260430-WA0185.jpg",
      "2/IMG-20260430-WA0187.jpg",
      "2/IMG-20260430-WA0195.jpg",
      "2/IMG-20260430-WA0198.jpg",
      "2/IMG-20260430-WA0200.jpg",
      "2/IMG-20260430-WA0202.jpg",
      "2/IMG-20260430-WA0204.jpg",
      "2/IMG-20260430-WA0208.jpg",
      "2/IMG-20260430-WA0210.jpg",
      "2/IMG-20260430-WA0214.jpg"
    ],
    summary: "Body painting contemplativo con modelo en vivo, color, musica y registro del proceso creativo.",
    description: "Este encuentro de body painting propuso el cuerpo como lienzo vivo y la pintura como una accion en tiempo real. La galeria registra el avance de la obra, los detalles del trazo, la relacion entre artista y modelo, y la energia del cafe bar durante la noche. Fue un evento para observar de cerca la transformacion del cuerpo mediante color, textura, musica en vivo y una atmosfera de contemplacion colectiva."
  },
  {
    id: 3,
    title: "Fotografia Burlesque",
    category: "Especial",
    date: "13 de mayo, 6:00 p.m.",
    image: "optimized/flyers/3.jpg",
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
      "3/DSC_0711.jpg",
      "3/IMG-20260513-WA0199.jpg",
      "3/IMG-20260513-WA0201.jpg",
      "3/IMG-20260513-WA0205.jpg",
      "3/IMG-20260513-WA0209.jpg",
      "3/IMG-20260513-WA0211.jpg"
    ],
    summary: "Sesion burlesque para explorar fotografia, direccion de modelo, luz y participacion del publico.",
    description: "Fotografia Burlesque reunio una puesta en escena sensual, teatral y educativa para vivir la fotografia desde ambos lados de la camara. El evento combino modelo en vivo, consejos fotograficos, musica y participacion abierta, permitiendo que asistentes experimentaran como fotografos, observadores o parte de la escena. Las imagenes documentan poses, gestos, detalles de vestuario y momentos de direccion creativa en un ambiente intimo."
  },
  {
    id: 4,
    title: "Shibari, la restriccion erotica",
    category: "Registro",
    date: "20 de mayo, 6:00 p.m.",
    image: "optimized/flyers/4.jpg",
    gallery: [
      "4/SHIBARI 019.jpg.jpeg",
      "4/SHIBARI 022.jpg.jpeg",
      "4/SHIBARI 026.jpg.jpeg",
      "4/SHIBARI 028.jpg.jpeg",
      "4/SHIBARI 029.jpg.jpeg",
      "4/SHIBARI 032.jpg.jpeg",
      "4/SHIBARI 033.jpg.jpeg",
      "4/SHIBARI 034.jpg.jpeg",
      "4/SHIBARI 035.jpg.jpeg",
      "4/SHIBARI 041.jpg.jpeg",
      "4/SHIBARI 042.jpg.jpeg",
      "4/SHIBARI 043.jpg.jpeg",
      "4/SHIBARI 044.jpg.jpeg",
      "4/SHIBARI 045.jpg.jpeg",
      "4/SHIBARI 049.jpg.jpeg",
      "4/SHIBARI 050.jpg.jpeg",
      "4/SHIBARI 051.jpg.jpeg",
      "4/SHIBARI 052.jpg.jpeg",
      "4/SHIBARI 066.jpg.jpeg",
      "4/SHIBARI 067.jpg.jpeg",
      "4/SHIBARI 068.jpg.jpeg",
      "4/SHIBARI 070.jpg.jpeg"
    ],
    summary: "Charla y demostracion de shibari como practica visual, corporal y educativa.",
    description: "Shibari, la restriccion erotica, abordo el cuerpo, la confianza y la tension desde una mirada contemplativa y pedagogica. La noche incluyo charla, demostracion en vivo, musica y copa de vino, creando un espacio para observar como la restriccion puede convertirse en lenguaje visual y sensorial. El registro fotografico destaca la composicion de las cuerdas, la relacion entre modelo y artista, y la fuerza estetica de una practica guiada con respeto y cuidado."
  },
  {
    id: 5,
    title: "Miercoles Poesia",
    category: "General",
    date: "3 de junio, 6:00 p.m.",
    image: "optimized/flyers/5.jpg",
    gallery: [
      "5/IMG-20260604-WA0004.jpg",
      "5/IMG-20260604-WA0017.jpg",
      "5/IMG-20260604-WA0038.jpg",
      "5/IMG-20260604-WA0047.jpg",
      "5/IMG-20260604-WA0060.jpg",
      "5/IMG-20260604-WA0065.jpg",
      "5/IMG-20260604-WA0068.jpg",
      "5/IMG-20260604-WA0082.jpg",
      "5/IMG-20260604-WA0084.jpg",
      "5/IMG-20260604-WA0086.jpg",
      "5/IMG-20260604-WA0091.jpg",
      "5/IMG-20260604-WA0093.jpg",
      "5/IMG-20260604-WA0099.jpg",
      "5/IMG-20260604-WA0101.jpg",
      "5/IMG-20260604-WA0105.jpg",
      "5/IMG-20260604-WA0106.jpg"
    ],
    summary: "Microfono poetico para compartir textos, escuchar voces locales y crear comunidad desde la palabra.",
    description: "Miercoles Poesia fue un encuentro abierto para leer, escuchar y compartir poemas propios o de autor. En un ambiente cercano, las palabras funcionaron como punto de reunion entre artistas, asistentes y amantes de la escritura. El registro del evento recoge momentos de lectura, conversacion y escucha, mostrando una experiencia mas intima donde la poesia se convierte en puente para conectar sensibilidades."
  },
  {
    id: 6,
    title: "Body Painting",
    category: "General",
    date: "10 de junio, 6:00 p.m.",
    image: "optimized/flyers/6.jpg",
    gallery: [
      "6/DSC_0160.jpg",
      "6/DSC_0169.jpg",
      "6/DSC_0172.jpg",
      "6/DSC_0180.jpg",
      "6/DSC_0182.jpg",
      "6/DSC_0184.jpg",
      "6/DSC_0200.jpg",
      "6/DSC_0203.jpg",
      "6/DSC_0211.jpg",
      "6/DSC_0222.jpg",
      "6/DSC_0229.jpg",
      "6/DSC_0230.jpg",
      "6/DSC_0231.jpg",
      "6/DSC_0237.jpg",
      "6/DSC_0242.jpg",
      "6/DSC_0246.jpg",
      "6/DSC_0255.jpg",
      "6/DSC_0261.jpg",
      "6/DSC_0271.jpg",
      "6/DSC_0276.jpg",
      "6/DSC_0294.jpg",
      "6/DSC_0308.jpg",
      "6/DSC_0324.jpg",
      "6/DSC_0335.jpg",
      "6/DSC_0360.jpg",
      "6/DSC_0368.jpg",
      "6/DSC_0399.jpg",
      "6/DSC_0412.jpg",
      "6/DSC_0413.jpg",
      "6/DSC_0430.jpg",
      "6/DSC_0440.jpg",
      "6/DSC_0451.jpg",
      "6/DSC_0455.jpg",
      "6/DSC_0464.jpg",
      "6/DSC_0468.jpg",
      "6/DSC_0486.jpg",
      "6/DSC_0490.jpg",
      "6/DSC_0541.jpg",
      "6/DSC_0550.jpg",
      "6/DSC_0552.jpg",
      "6/DSC_0557.jpg",
      "6/DSC_0563.jpg",
      "6/DSC_0574.jpg",
      "6/DSC_0587.jpg",
      "6/DSC_0615.jpg",
      "6/DSC_0623.jpg",
      "6/DSC_0638.jpg",
      "6/DSC_0640.jpg",
      "6/DSC_0644.jpg",
      "6/DSC_0654.jpg",
      "6/DSC_0662.jpg",
      "6/DSC_0676.jpg",
      "6/DSC_0683.jpg",
      "6/DSC_0688.jpg",
      "6/DSC_0691.jpg",
      "6/DSC_0697.jpg",
      "6/DSC_0713.jpg",
      "6/DSC_0722.jpg"
    ],
    summary: "Body painting de alto impacto visual con artistas en vivo, comunidad, fuego cromatico y musica.",
    description: "Body Painting fue una experiencia de expresion, color y libertad, centrada en el cuerpo como soporte artistico y en la pintura como acto performatico. La propuesta visual trabajo una paleta intensa, gestos organicos y una puesta en escena de gran fuerza cromatica. Las fotografias muestran el proceso, los detalles de la obra corporal, la interaccion con la comunidad y la energia de una noche pensada para contemplar el arte en vivo."
  }
];

const artists = [
  {
    id: 1,
    name: "Daniel Gallego",
    role: "Pintor",
    photo: "optimized/artists/the-sick/artist.jpg",
    description: "Daniel Gallego, conocido artisticamente como The Sick, es un artista visual enfocado en la pintura figurativa, el retrato y la creacion de obras en vivo. Su trabajo explora atmosferas expresivas, personajes de fuerte presencia y composiciones cargadas de gesto, color e intensidad visual. En Vive El Arte participo con una pieza en vivo inspirada en el estilo barroco.",
    works: [
      "optimized/artists/the-sick/obra-1.jpg",
      "optimized/artists/the-sick/obra-2.jpg",
      "optimized/artists/the-sick/obra-3.jpg",
      "optimized/artists/the-sick/obra-4.jpg"
    ],
    instagram: "https://www.instagram.com/danielthesick1/",
    contact: "https://wa.me/573053609685"
  },
  {
    id: 2,
    name: "Vigoro",
    role: "Body painting",
    photo: "",
    description: "Artista de body painting vinculado a una experiencia de pintura corporal en vivo. Su trabajo explora el cuerpo como lienzo, el color como lenguaje visual y la transformacion progresiva de la imagen frente al publico.",
    works: [],
    instagram: "",
    contact: ""
  },
  {
    id: 3,
    name: "Duvan Lasso",
    role: "Fotografo",
    photo: "optimized/artists/duvan-lasso/artist.jpg",
    description: "Duvan Lasso es un fotografo enfocado en la construccion de atmosferas visuales, el retrato y la direccion de imagen. Su trabajo combina sensibilidad por la luz, composicion y presencia escenica, creando registros que resaltan el caracter de cada modelo y la narrativa del momento. En Vive El Arte participa desde una mirada fotografica cercana, expresiva y cuidadosa del detalle.",
    works: [
      "optimized/artists/duvan-lasso/obra-1.jpg",
      "optimized/artists/duvan-lasso/obra-2.jpg",
      "optimized/artists/duvan-lasso/obra-3.jpg",
      "optimized/artists/duvan-lasso/obra-4.jpg"
    ],
    instagram: "https://www.instagram.com/ph_duvan.lasso/",
    contact: "https://wa.me/573103832865"
  },
  {
    id: 4,
    name: "Mao Escruceria",
    role: "Shibari",
    photo: "",
    description: "Artista invitado al evento Shibari, la restriccion erotica. Su practica aborda el cuerpo, la cuerda, la confianza y la composicion visual desde una mirada pedagogica, sensible y performativa.",
    works: [],
    instagram: "",
    contact: ""
  },
  {
    id: 5,
    name: "Anagrama Roma",
    role: "Poesia",
    photo: "",
    description: "Artista de la palabra invitado al encuentro Miercoles Poesia. Su participacion representa el lugar de la lectura, la escucha y la escritura como formas de encuentro creativo dentro de Vive El Arte.",
    works: [],
    instagram: "",
    contact: ""
  },
  {
    id: 6,
    name: "Natalia Rojas",
    role: "Body painting",
    photo: "",
    description: "Artista invitada al evento Body Painting. Su propuesta se relaciona con la expresion corporal, el color intenso y la creacion en vivo como experiencia visual compartida con la comunidad.",
    works: [],
    instagram: "",
    contact: ""
  }
];

const sponsors = [
  {
    name: "Duvan Lasso",
    logo: "optimized/sponsors/duvan-lasso.jpg",
    event: "Fotografia Burlesque",
    instagram: "https://www.instagram.com/ph_duvan.lasso/",
    whatsapp: "https://wa.me/573103832865"
  },
  {
    name: "Hechicera Arte Ancestral",
    logo: "optimized/sponsors/hechicera.jpg",
    event: "Fotografia Burlesque",
    instagram: "",
    whatsapp: ""
  },
  {
    name: "Veronica Fernandez",
    logo: "optimized/sponsors/veronica-fernandez.jpg",
    event: "Fotografia Burlesque",
    instagram: "",
    whatsapp: ""
  },
  {
    name: "Corzo",
    logo: "optimized/sponsors/corzo.jpg",
    event: "Fotografia Burlesque",
    instagram: "",
    whatsapp: ""
  },
  {
    name: "Lolas Sexshop",
    logo: "optimized/sponsors/lolas-sexshop.jpg",
    event: "Shibari, la restriccion erotica",
    instagram: "https://www.instagram.com/lolas_sexshop/",
    whatsapp: ""
  },
  {
    name: "Ekiuilu",
    logo: "optimized/sponsors/ekiuilu.jpg",
    event: "Body Painting: Expresion, color, libertad",
    instagram: "",
    whatsapp: ""
  }
];

const eventsGrid = document.querySelector("#eventsGrid");
const artistsGrid = document.querySelector("#artistsGrid");
const sponsorsGrid = document.querySelector("#sponsorsGrid");
const detailSection = document.querySelector("#detalleEvento");
const artistDetailSection = document.querySelector("#detalleArtista");
const detailImage = document.querySelector("#detailImage");
const detailNumber = document.querySelector("#detailNumber");
const detailTitle = document.querySelector("#detailTitle");
const detailDescription = document.querySelector("#detailDescription");
const detailDate = document.querySelector("#detailDate");
const artistPortrait = document.querySelector("#artistPortrait");
const artistRole = document.querySelector("#artistRole");
const artistName = document.querySelector("#artistName");
const artistDescription = document.querySelector("#artistDescription");
const artistLinks = document.querySelector("#artistLinks");
const artistArtGrid = document.querySelector("#artistArtGrid");
const photoGallery = document.querySelector("#photoGallery");
const backToEvents = document.querySelector("#backToEvents");
const backToArtists = document.querySelector("#backToArtists");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const themeToggle = document.querySelector("#themeToggle");
const themeToggleText = themeToggle?.querySelector(".theme-toggle-text");
const revealItems = document.querySelectorAll(".hero-content, .hero-card, .intro-panel, .section-heading, .contact-copy, .contact-form");

function getPreferredTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("viveElArteTheme");
  } catch (error) {}
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (!themeToggle) return;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Activar modo claro" : "Activar modo oscuro");
  if (themeToggleText) themeToggleText.textContent = isDark ? "Claro" : "Oscuro";
}

applyTheme(getPreferredTheme());

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("viveElArteTheme", nextTheme);
  } catch (error) {}
  applyTheme(nextTheme);
});

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

function renderEvents() {
  eventsGrid.innerHTML = events.map((event) => `
    <button class="event-card" type="button" data-event-id="${event.id}" aria-label="Ver detalle de ${event.title}">
      <div class="event-image-wrap">
        <img class="event-image" src="${event.image}" alt="Flyer de ${event.title}" loading="lazy" decoding="async">
      </div>
      <div class="event-card-body">
        <span class="event-index">${String(event.id).padStart(2, "0")}</span>
        <h3>${event.title}</h3>
        <p>${event.summary}</p>
        <span>${event.date}</span>
      </div>
    </button>
  `).join("");
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function renderArtists() {
  artistsGrid.innerHTML = artists.map((artist) => `
    <button class="artist-card" type="button" data-artist-id="${artist.id}" aria-label="Ver perfil de ${artist.name}">
      <div class="artist-photo">
        ${artist.photo ? `<img src="${artist.photo}" alt="Foto de ${artist.name}" loading="lazy" decoding="async">` : `<span>${getInitials(artist.name)}</span>`}
      </div>
      <div class="artist-card-body">
        <p>${artist.role}</p>
        <h3>${artist.name}</h3>
      </div>
    </button>
  `).join("");
}

function renderSponsors() {
  sponsorsGrid.innerHTML = sponsors.map((sponsor) => `
    <article class="sponsor-card">
      ${sponsor.instagram ? `<a class="sponsor-logo" href="${sponsor.instagram}" target="_blank" rel="noopener" aria-label="Ver Instagram de ${sponsor.name}">` : `<div class="sponsor-logo">`}
          <img src="${sponsor.logo}" alt="Logo de ${sponsor.name}" loading="lazy" decoding="async">
      ${sponsor.instagram ? `</a>` : `</div>`}
      <div class="sponsor-card-body">
        <p>${sponsor.event}</p>
        <h3>${sponsor.name}</h3>
        <div class="sponsor-links">
          ${sponsor.instagram ? `<a href="${sponsor.instagram}" target="_blank" rel="noopener">Instagram</a>` : ``}
          ${sponsor.whatsapp ? `<a href="${sponsor.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>` : ``}
          ${!sponsor.instagram && !sponsor.whatsapp ? `<span>Contacto por confirmar</span>` : ``}
        </div>
      </div>
    </article>
  `).join("");
}

function renderArtistWorks(artist) {
  const works = artist.works.length > 0 ? artist.works : Array.from({ length: 4 }, (_, index) => null);

  artistArtGrid.innerHTML = works.map((work, index) => `
    <div class="artist-work">
      ${work ? `<img src="${work}" alt="Obra ${index + 1} de ${artist.name}" loading="lazy" decoding="async">` : `<span>Obra ${index + 1}</span>`}
    </div>
  `).join("");
}

function openArtistDetail(artistId) {
  const artist = artists.find((item) => item.id === Number(artistId));
  if (!artist) return;

  artistPortrait.innerHTML = artist.photo
    ? `<img src="${artist.photo}" alt="Foto de ${artist.name}">`
    : `<span>${getInitials(artist.name)}</span>`;
  artistRole.textContent = artist.role;
  artistName.textContent = artist.name;
  artistDescription.textContent = artist.description;
  artistLinks.innerHTML = `
    ${artist.instagram ? `<a href="${artist.instagram}" target="_blank" rel="noopener">Instagram</a>` : `<span>Instagram pendiente</span>`}
    ${artist.contact ? `<a href="${artist.contact}" target="_blank" rel="noopener">Contacto</a>` : `<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">Contacto Vive El Arte</a>`}
  `;
  renderArtistWorks(artist);

  artistDetailSection.hidden = false;
  artistDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
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

function getOptimizedPhotoPath(photo) {
  return photo.replace(/^(1|2|3|4|5|6)\//, "optimized/$1/").replace(/\.jpg\.jpeg$/, ".jpg");
}

function hydrateGalleryImages() {
  photoGallery.querySelectorAll(".gallery-item img").forEach((image) => {
    const markLoaded = () => image.closest(".gallery-item")?.classList.add("is-loaded");
    if (image.complete) {
      markLoaded();
    } else {
      image.addEventListener("load", markLoaded, { once: true });
      image.addEventListener("error", markLoaded, { once: true });
    }
  });
}

function renderGallery() {
  const visibleImages = activeGalleryImages.slice(0, visibleGalleryCount);
  const remainingImages = activeGalleryImages.length - visibleImages.length;

  photoGallery.innerHTML = visibleImages.map((photo, index) => `
    <figure class="gallery-item">
      <span class="image-loader" aria-hidden="true"></span>
      <img src="${getOptimizedPhotoPath(photo)}" alt="Registro fotografico ${index + 1} de ${activeGalleryTitle}" loading="lazy" decoding="async">
    </figure>
  `).join("");

  if (remainingImages > 0) {
    photoGallery.insertAdjacentHTML("beforeend", `
      <button class="load-more" type="button" id="loadMoreGallery">
        Ver mas fotos (${remainingImages})
      </button>
    `);
  }

  hydrateGalleryImages();
}

async function openEventDetail(eventId) {
  const event = events.find((item) => item.id === Number(eventId));
  if (!event) return;

  detailImage.src = event.image;
  detailImage.alt = `Flyer de ${event.title}`;
  detailNumber.textContent = String(event.id).padStart(2, "0");
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

artistsGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".artist-card");
  if (!card) return;
  openArtistDetail(card.dataset.artistId);
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

backToArtists.addEventListener("click", () => {
  artistDetailSection.hidden = true;
  document.querySelector("#artistas").scrollIntoView({ behavior: "smooth", block: "start" });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const message = [
    "Hola, soy " + data.get("nombre"),
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
renderArtists();
renderSponsors();
