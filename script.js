const langButton = document.getElementById('lang-switch');
const messageBar = document.querySelector('.message-bar');
const xpTitles = document.querySelectorAll('.experience h2');
const projectTitles = document.querySelectorAll('.projects h2');
const aboutTitles = document.querySelectorAll('.about h2');
const skillsTitles = document.querySelectorAll('.skills h2');
const contactTitles = document.querySelectorAll('.contact h2');
const contactForm = document.getElementById('contact-form');

const ES = {
  langBtn: 'ES',
  experiencia: 'Experiencia',
  proyectos: 'Proyectos',
  sobreMi: 'Sobre mí',
  habilidades: 'Habilidades',
  contacto: 'Contacto',
  nombre: 'Nombre',
  correo: 'Correo electrónico',
  mensaje: 'Escribe aquí el mensaje',
  enviar: 'Enviar',
};
const EN = {
  langBtn: 'EN',
  experiencia: 'Experience',
  proyectos: 'Projects',
  sobreMi: 'About me',
  habilidades: 'Skills',
  contacto: 'Contact',
  nombre: 'Name',
  correo: 'Email',
  mensaje: 'Write your message here',
  enviar: 'Send',
};

function setLang(lang) {
  const t = lang === 'EN' ? EN : ES;
  langButton.textContent = t.langBtn;
  if (messageBar) messageBar.textContent = t.message;
  if (xpTitles) xpTitles.forEaach(e => e.textContent = t.experiencia);
  if (projectTitles) projectTitles.forEach(e => e.textContent = t.proyectos);
  if (aboutTitles) aboutTitles.forEach(e => e.textContent = t.sobreMi);
  if (skillsTitles) skillsTitles.forEach(e => e.textContent = t.habilidades);
  if (contactTitles) contactTitles.forEach(e => e.textContent = t.contacto);
  if (contactForm) {
    contactForm.name.placeholder = t.nombre;
    contactForm.email.placeholder = t.correo;
    contactForm.message.placeholder = t.mensaje;
    contactForm.querySelector('button[type="submit"]').textContent = t.enviar;
  }
}

let lang = localStorage.getItem('lang') || 'ES';
setLang(lang);

langButton.addEventListener('click', function() {
  lang = lang === 'ES' ? 'EN' : 'ES';
  localStorage.setItem('lang', lang);
  setLang(lang);
});
