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
function showSection(sectionId) {
  document.querySelectorAll("main > section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(sectionId).classList.remove("hidden");
  event.target.classList.add("active");
}
function changeLanguage(lang) {
  const translations = {
    pt: {
      home: "Home",
      gallery: "Galeria",
      posts: "Posts",
      presentation: "Texto de apresentação pessoal aqui...",
      cameraType1: "Tipo de Câmera 1",
      cameraType2: "Tipo de Câmera 2",
      postTitle1: "Título do Post 1",
      postTitle2: "Título do Post 2",
      postContent: "Conteúdo do post renderizado do Markdown...",
      footer: "Site criado por {meu nome}",
    },
    en: {
      home: "Home",
      gallery: "Gallery",
      posts: "Posts",
      presentation: "Personal presentation text here...",
      cameraType1: "Camera Type 1",
      cameraType2: "Camera Type 2",
      postTitle1: "Post Title 1",
      postTitle2: "Post Title 2",
      postContent: "Post content rendered from Markdown...",
      footer: "Site created by {my name}",
    },
    es: {
      home: "Inicio",
      gallery: "Galería",
      posts: "Publicaciones",
      presentation: "Texto de apresentação personal aquí...",
      cameraType1: "Tipo de Cámara 1",
      cameraType2: "Tipo de Cámara 2",
      postTitle1: "Título de Publicación 1",
      postTitle2: "Título de Publicación 2",
      postContent: "Contenido de la publicación renderizado desde Markdown...",
      footer: "Sitio creado por {mi nombre}",
    },
    fr: {
      home: "Accueil",
      gallery: "Galerie",
      posts: "Articles",
      presentation: "Texte de présentation personnelle ici...",
      cameraType1: "Type d'Appareil 1",
      cameraType2: "Type d'Appareil 2",
      postTitle1: "Titre de l'Article 1",
      postTitle2: "Titre de l'Article 2",
      postContent: "Contenu de l'article rendu depuis Markdown...",
      footer: "Site créé par {mon nom}",
    },
    ja: {
      home: "ホーム",
      gallery: "ギャラリー",
      posts: "投稿",
      presentation: "個人紹介文がここに...",
      cameraType1: "カメラタイプ1",
      cameraType2: "カメラタイプ2",
      postTitle1: "投稿タイトル1",
      postTitle2: "投稿タイトル2",
      postContent: "Markdownからレンダリングされた投稿内容...",
      footer: "{私の名前}によって作成されたサイト",
    },
  };
  const currentLang = translations[lang];
  document.querySelectorAll(".nav-button").forEach((button, index) => {
    const sections = ["home", "gallery", "posts"];
    button.textContent = currentLang[sections[index]];
  });
  document.querySelector(".presentation").textContent =
    currentLang.presentation;
  document.querySelectorAll(".category-title").forEach((title, index) => {
    title.textContent = currentLang[`cameraType${index + 1}`];
  });
  document.querySelectorAll(".post-title").forEach((title, index) => {
    title.textContent = currentLang[`postTitle${index + 1}`];
  });
  document.querySelectorAll(".post-content").forEach((content) => {
    content.textContent = currentLang.postContent;
  });
  document.querySelector(".footer-text").textContent = currentLang.footer;
  document.getElementById("langMenu").classList.remove("active");
}
document.addEventListener("click", function (event) {
  const langMenu = document.getElementById("langMenu");
  const langToggle = document.querySelector(".lang-toggle");
  if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
    langMenu.classList.remove("active");
  }
});
