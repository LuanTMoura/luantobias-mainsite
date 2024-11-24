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
async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/LuanTMoura/repos"
    );
    const repos = await response.json();
    const projectsSection = document.querySelector(".projects-section");
    projectsSection.innerHTML = "";
    const displayedRepos = repos.slice(0, 5);
    displayedRepos.forEach((repo) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `<h3 class="project-title">${
        repo.name
      }</h3><p class="project-description">${
        repo.description || "No description available"
      }</p><div class="project-links"><a href="${
        repo.html_url
      }" class="project-link" target="_blank"><i class="fab fa-github"></i> Repository</a>${
        repo.homepage
          ? `<a href="${repo.homepage}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>`
          : ""
      }</div>`;
      projectsSection.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    const projectsSection = document.querySelector(".projects-section");
    projectsSection.innerHTML = `<div class="project-card"><h3 class="project-title">Error</h3><p class="project-description">Unable to load GitHub repositories. Please try again later.</p></div>`;
  }
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
  if (sectionId === "projects") {
    fetchGitHubRepos();
  }
}
function changeLanguage(lang) {
  const translations = {
    pt: {
      posts: "Posts",
      skills: "Skills",
      projects: "Projetos",
      info: "Info",
      postTitle: "Título do Post",
      postContent: "Conteúdo do post em formato de texto...",
      skillJsTitle: "JavaScript",
      skillJsDesc:
        "Aplicação prática em desenvolvimento de interfaces interativas, manipulação de DOM e integração com APIs.",
      skillReactTitle: "React",
      skillReactDesc:
        "Desenvolvimento de componentes reutilizáveis, gerenciamento de estado e criação de interfaces responsivas.",
      projectTitle: "Projeto 1",
      projectDesc: "Descrição do projeto e tecnologias utilizadas.",
      repository: "Repositório",
      noDescription: "Sem descrição disponível",
      presentation:
        "Sou um desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento web e mobile. Focado em criar soluções eficientes e escaláveis, sempre buscando aprender e aplicar novas tecnologias.",
      exp1Title: "Desenvolvedor Full Stack - Empresa XYZ",
      exp1Period: "Jan 2022 - Presente",
      exp1Desc:
        "Desenvolvimento de aplicações web utilizando React, Node.js e MongoDB. Implementação de features e manutenção de sistemas existentes.",
      exp2Title: "Desenvolvedor Frontend - Empresa ABC",
      exp2Period: "Jun 2020 - Dez 2021",
      exp2Desc:
        "Desenvolvimento de interfaces responsivas e componentes reutilizáveis utilizando React e TypeScript.",
      footerText: "Site criado por {meu nome}",
    },
    en: {
      posts: "Posts",
      skills: "Skills",
      projects: "Projects",
      info: "Info",
      postTitle: "Post Title",
      postContent: "Post content in text format...",
      skillJsTitle: "JavaScript",
      skillJsDesc:
        "Practical application in interactive interface development, DOM manipulation and API integration.",
      skillReactTitle: "React",
      skillReactDesc:
        "Development of reusable components, state management and responsive interface creation.",
      repository: "Repository",
      noDescription: "No description available",
      presentation:
        "I am a technology-passionate developer with experience in web and mobile development. Focused on creating efficient and scalable solutions, always seeking to learn and apply new technologies.",
      exp1Title: "Full Stack Developer - XYZ Company",
      exp1Period: "Jan 2022 - Present",
      exp1Desc:
        "Web application development using React, Node.js and MongoDB. Feature implementation and maintenance of existing systems.",
      exp2Title: "Frontend Developer - ABC Company",
      exp2Period: "Jun 2020 - Dec 2021",
      exp2Desc:
        "Development of responsive interfaces and reusable components using React and TypeScript.",
      footerText: "Site created by {my name}",
    },
    es: {
      posts: "Publicaciones",
      skills: "Habilidades",
      projects: "Proyectos",
      info: "Información",
      postTitle: "Título de la Publicación",
      postContent: "Contenido de la publicación en formato texto...",
      skillJsTitle: "JavaScript",
      skillJsDesc:
        "Aplicación práctica en desarrollo de interfaces interactivas, manipulación del DOM e integración con APIs.",
      skillReactTitle: "React",
      skillReactDesc:
        "Desarrollo de componentes reutilizables, gestión de estado y creación de interfaces responsivas.",
      repository: "Repositorio",
      noDescription: "Sin descripción disponible",
      presentation:
        "Soy un desarrollador apasionado por la tecnología con experiencia en desarrollo web y móvil. Enfocado en crear soluciones eficientes y escalables, siempre buscando aprender y aplicar nuevas tecnologías.",
      exp1Title: "Desarrollador Full Stack - Empresa XYZ",
      exp1Period: "Ene 2022 - Presente",
      exp1Desc:
        "Desarrollo de aplicaciones web utilizando React, Node.js y MongoDB. Implementación de funcionalidades y mantenimiento de sistemas existentes.",
      exp2Title: "Desarrollador Frontend - Empresa ABC",
      exp2Period: "Jun 2020 - Dic 2021",
      exp2Desc:
        "Desarrollo de interfaces responsivas y componentes reutilizables utilizando React y TypeScript.",
      footerText: "Sitio creado por {mi nombre}",
    },
    fr: {
      posts: "Articles",
      skills: "Compétences",
      projects: "Projets",
      info: "Info",
      postTitle: "Titre de l'Article",
      postContent: "Contenu de l'article au format texte...",
      skillJsTitle: "JavaScript",
      skillJsDesc:
        "Application pratique dans le développement d'interfaces interactives, la manipulation du DOM et l'intégration d'API.",
      skillReactTitle: "React",
      skillReactDesc:
        "Développement de composants réutilisables, gestion d'état et création d'interfaces responsives.",
      repository: "Dépôt",
      noDescription: "Aucune description disponible",
      presentation:
        "Je suis un développeur passionné par la technologie avec une expérience en développement web et mobile. Concentré sur la création de solutions efficaces et évolutives, toujours en quête d'apprentissage et d'application de nouvelles technologies.",
      exp1Title: "Développeur Full Stack - Entreprise XYZ",
      exp1Period: "Jan 2022 - Présent",
      exp1Desc:
        "Développement d'applications web utilisant React, Node.js et MongoDB. Implémentation de fonctionnalités et maintenance des systèmes existants.",
      exp2Title: "Développeur Frontend - Entreprise ABC",
      exp2Period: "Juin 2020 - Déc 2021",
      exp2Desc:
        "Développement d'interfaces responsives et de composants réutilisables utilisant React et TypeScript.",
      footerText: "Site créé par {mon nom}",
    },
    ja: {
      posts: "投稿",
      skills: "スキル",
      projects: "プロジェクト",
      info: "情報",
      postTitle: "投稿タイトル",
      postContent: "テキスト形式の投稿内容...",
      skillJsTitle: "JavaScript",
      skillJsDesc:
        "インタラクティブなインターフェース開発、DOM操作、APIとの統合における実践的な応用。",
      skillReactTitle: "React",
      skillReactDesc:
        "再利用可能なコンポーネントの開発、状態管理、レスポンシブなインターフェースの作成。",
      repository: "リポジトリ",
      noDescription: "説明がありません",
      presentation:
        "私はウェブとモバイル開発の経験を持つ技術愛好家の開発者です。効率的でスケーラブルなソリューションの作成に焦点を当て、常に新しい技術を学び、適用することを目指しています。",
      exp1Title: "フルスタック開発者 - XYZ会社",
      exp1Period: "2022年1月 - 現在",
      exp1Desc:
        "React、Node.js、MongoDBを使用したウェブアプリケーションの開発。機能の実装と既存システムのメンテナンス。",
      exp2Title: "フロントエンド開発者 - ABC会社",
      exp2Period: "2020年6月 - 2021年12月",
      exp2Desc:
        "ReactとTypeScriptを使用したレスポンシブなインターフェースと再利用可能なコンポーネントの開発。",
      footerText: "{私の名前}が作成したサイト",
    },
  };
  const currentLang = translations[lang];
  document.querySelectorAll(".nav-button").forEach((button, index) => {
    const sections = ["posts", "skills", "projects", "info"];
    button.textContent = currentLang[sections[index]];
  });
  document.querySelector(".post-title").textContent = currentLang.postTitle;
  document.querySelector(".post-content").textContent = currentLang.postContent;
  document.querySelectorAll(".skill-card").forEach((card, index) => {
    if (index === 0) {
      card.querySelector(".skill-title").textContent = currentLang.skillJsTitle;
      card.querySelector(".skill-description").textContent =
        currentLang.skillJsDesc;
    } else if (index === 1) {
      card.querySelector(".skill-title").textContent =
        currentLang.skillReactTitle;
      card.querySelector(".skill-description").textContent =
        currentLang.skillReactDesc;
    }
  });
  document.querySelector(".project-title").textContent =
    currentLang.projectTitle;
  document.querySelector(".project-description").textContent =
    currentLang.projectDesc;
  document.querySelector(".project-link").textContent =
    " " + currentLang.repository;
  document.querySelector(".presentation").textContent =
    currentLang.presentation;
  const expItems = document.querySelectorAll(".experience-item");
  expItems[0].querySelector(".experience-title").textContent =
    currentLang.exp1Title;
  expItems[0].querySelector(".experience-period").textContent =
    currentLang.exp1Period;
  expItems[0].querySelector("p").textContent = currentLang.exp1Desc;
  expItems[1].querySelector(".experience-title").textContent =
    currentLang.exp2Title;
  expItems[1].querySelector(".experience-period").textContent =
    currentLang.exp2Period;
  expItems[1].querySelector("p").textContent = currentLang.exp2Desc;
  document.querySelector(".footer-text").textContent = currentLang.footerText;
  document.getElementById("langMenu").classList.remove("active");
}
document.addEventListener("click", function (event) {
  const langMenu = document.getElementById("langMenu");
  const langToggle = document.querySelector(".lang-toggle");
  if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
    langMenu.classList.remove("active");
  }
});
