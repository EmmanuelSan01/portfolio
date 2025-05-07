// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado completamente")

  // Obtener el botón de cambio de idioma y la bandera
  const langButton = document.getElementById("lang-switch")
  const flagIcon = document.getElementById("flag-icon")

  console.log("Botón de idioma:", langButton)
  console.log("Icono de bandera:", flagIcon)

  if (!langButton || !flagIcon) {
    console.error("¡No se encontraron elementos necesarios!")
    return
  }

  // URLs de las banderas
  const FLAGS = {
    es: "https://em-content.zobj.net/source/twitter/408/flag-spain_1f1ea-1f1f8.png",
    en: "https://em-content.zobj.net/source/twitter/408/flag-united-kingdom_1f1ec-1f1e7.png",
  }

  // Definir traducciones básicas
  const translations = {
    es: {
      aboutTitle: "Sobre mí",
      aboutDesc:
        "Desarrollador de Software Junior con conocimientos en Python, HTML, CSS, JavaScript, Git, SQL, Java. Capaz de desarrollar soluciones eficientes de alta calidad, aplicando buenas prácticas de programación.",
      projectsTitle: "Proyectos",
      skillsTitle: "Habilidades",
      contactTitle: "Contacto",
      sendButton: "Enviar",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      messagePlaceholder: "Escribe aquí el mensaje",
      // Descripciones de proyectos
      projectDescs: {
        SISGESA:
          "Aplicación de consola para gestionar asistencia académica, con generación de informes sobre puntualidad y asistencia.",
        "Camila's Corner": "Sitio Web para presentar los servicios y gestionar las reservas del hotel Camila's Corner.",
        "Tablero Kanban": "Aplicación web para gestionar tareas para la Agencia de Eventos Momentum.",
        "Los Ambientales DB":
          "Base de datos que permite gestionar de manera eficiente operaciones relacionadas con los parques naturales de Colombia.",
      },
    },
    en: {
      aboutTitle: "About me",
      aboutDesc:
        "Junior Software Developer with knowledge in Python, HTML, CSS, JavaScript, Git, SQL, Java. Capable of developing efficient, high-quality solutions by applying good programming practices.",
      projectsTitle: "Projects",
      skillsTitle: "Skills",
      contactTitle: "Contact",
      sendButton: "Send",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Write your message here",
      // Project descriptions
      projectDescs: {
        SISGESA:
          "Console application to manage academic attendance, with report generation on punctuality and attendance.",
        "Camila's Corner": "Website to present services and manage reservations for Camila's Corner hotel.",
        "Tablero Kanban": "Web application to manage tasks for the Momentum Event Agency.",
        "Los Ambientales DB":
          "Database that allows efficient management of operations related to Colombia's natural parks.",
      },
    },
  }

  // Función para cambiar el idioma
  function changeLanguage(lang) {
    console.log("Cambiando idioma a:", lang)

    // Verificar que el idioma existe en nuestras traducciones
    if (!translations[lang]) {
      console.error("Idioma no soportado:", lang)
      return
    }

    // Actualizar el texto del botón y la bandera
    langButton.querySelector("span").textContent = lang.toUpperCase()
    flagIcon.src = FLAGS[lang]
    flagIcon.alt = lang === "es" ? "Bandera de España" : "Bandera del Reino Unido"

    // Obtener los elementos a traducir
    const aboutTitle = document.querySelector(".about h2")
    const aboutDesc = document.querySelector(".about-desc")
    const projectsTitle = document.querySelector(".projects h2")
    const skillsTitle = document.querySelector(".skills h2")
    const contactTitle = document.querySelector(".contact h2")
    const sendButton = document.querySelector("#contact-form button")
    const nameInput = document.querySelector('input[name="name"]')
    const emailInput = document.querySelector('input[name="email"]')
    const messageTextarea = document.querySelector('textarea[name="message"]')

    // Aplicar traducciones (con verificación de que el elemento existe)
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle
    if (aboutDesc) aboutDesc.textContent = translations[lang].aboutDesc
    if (projectsTitle) projectsTitle.textContent = translations[lang].projectsTitle
    if (skillsTitle) skillsTitle.textContent = translations[lang].skillsTitle
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle
    if (sendButton) sendButton.textContent = translations[lang].sendButton

    // Traducir placeholders
    if (nameInput) nameInput.placeholder = translations[lang].namePlaceholder
    if (emailInput) emailInput.placeholder = translations[lang].emailPlaceholder
    if (messageTextarea) messageTextarea.placeholder = translations[lang].messagePlaceholder

    // Traducir descripciones de proyectos
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card, index) => {
      const titleElement = card.querySelector(".project-title")
      const descElement = card.querySelector(".project-desc")

      if (titleElement && descElement) {
        // Extraer el título del proyecto (sin el año)
        const fullTitle = titleElement.textContent.trim()

        // Obtener el título sin el año
        let projectTitle = ""

        // Usar un enfoque más directo basado en el índice de la tarjeta
        switch (index) {
          case 0:
            projectTitle = "SISGESA"
            break
          case 1:
            projectTitle = "Camila's Corner"
            break
          case 2:
            projectTitle = "Tablero Kanban"
            break
          case 3:
            projectTitle = "Los Ambientales DB"
            break
          default:
            // Intentar extraer del texto como fallback
            projectTitle = fullTitle.split(" ")[0]
        }

        console.log(`Tarjeta ${index + 1}, título: ${projectTitle}`)

        // Verificar si tenemos traducción para este proyecto
        if (translations[lang].projectDescs[projectTitle]) {
          descElement.textContent = translations[lang].projectDescs[projectTitle]
        } else {
          console.warn(`No se encontró traducción para el proyecto: ${projectTitle}`)
        }
      }
    })

    // Guardar preferencia
    localStorage.setItem("lang", lang)
    console.log("Idioma guardado en localStorage:", lang)
  }

  // Inicializar con el idioma guardado o predeterminado
  let currentLang = localStorage.getItem("lang") || "es"
  console.log("Idioma inicial:", currentLang)
  changeLanguage(currentLang)

  // Configurar evento de clic en el botón
  langButton.addEventListener("click", () => {
    console.log("Botón de idioma clickeado")
    currentLang = currentLang === "es" ? "en" : "es"
    changeLanguage(currentLang)
  })

  console.log("Script de idioma inicializado correctamente")
})