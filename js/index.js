function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle i");
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
}
function toggleLangMenu() {
  document.getElementById("langMenu").classList.toggle("active");
}
function changeLanguage(lang) {
  const translations = {
    pt: {
      welcome: "Bem-vindo ao meu Portfólio",
      professional: "Profissional",
      personal: "Pessoal",
      creator: "Site criado por",
    },
    en: {
      welcome: "Welcome to my Portfolio",
      professional: "Professional",
      personal: "Personal",
      creator: "Site created by",
    },
    es: {
      welcome: "Bienvenido a mi Portafolio",
      professional: "Profesional",
      personal: "Personal",
      creator: "Sitio creado por",
    },
    fr: {
      welcome: "Bienvenue sur mon Portfolio",
      professional: "Professionnel",
      personal: "Personnel",
      creator: "Site créé par",
    },
    ja: {
      welcome: "ポートフォリオへようこそ",
      professional: "プロフェッショナル",
      personal: "個人",
      creator: "制作者：",
    },
  };
  document.querySelector(".welcome").textContent = translations[lang].welcome;
  document.querySelectorAll(".nav-button")[0].textContent =
    translations[lang].professional;
  document.querySelectorAll(".nav-button")[1].textContent =
    translations[lang].personal;
  document.querySelector(
    ".creator span"
  ).textContent = `${translations[lang].creator} Seu Nome`;
  document.getElementById("langMenu").classList.remove("active");
}
document.addEventListener("click", function (event) {
  const langMenu = document.getElementById("langMenu");
  const langToggle = document.querySelector(".lang-toggle");
  if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
    langMenu.classList.remove("active");
  }
});
