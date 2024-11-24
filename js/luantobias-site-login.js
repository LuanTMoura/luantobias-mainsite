const translations = {
    'pt-BR': {
      'login': 'Login',
      'username': 'Usuário',
      'password': 'Senha',
      'enter': 'Entrar',
      'or': 'ou',
      'google-continue': 'Continuar com Google',
      'register': 'Cadastrar',
      'help-message': 'Eu gostaria de saber quem está acessando minhas coisas pessoais por questões de segurança, então espero que respeitem essa decisão! :)'
    },
    'en-US': {
      'login': 'Login',
      'username': 'Username',
      'password': 'Password',
      'enter': 'Enter',
      'or': 'or',
      'google-continue': 'Continue with Google',
      'register': 'Register',
      'help-message': 'I would like to know who is accessing my personal things for security reasons, so I hope you respect this decision! :)'
    }
  };
  
  let currentLanguage = 'pt-BR';
  
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    updateTranslations();
  }
  
  function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[currentLanguage][key]) {
        element.textContent = translations[currentLanguage][key];
      }
    });
  }
  
  function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme');
      themeToggle.classList.remove('fa-sun');
      themeToggle.classList.add('fa-moon');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeToggle.classList.remove('fa-moon');
      themeToggle.classList.add('fa-sun');
    }
  }
  
  function toggleHelp() {
    const modal = document.getElementById('helpModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  }
  
  function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Add your login validation logic here
    // For demo purposes, we'll just redirect to the main page
    window.location.href = 'index.html';
  }
  
  function handleGoogleSignIn(response) {
    // Handle the Google Sign-In response
    const credential = response.credential;
    // Send the credential to your backend for verification
    console.log('Google Sign-In successful:', credential);
    // Redirect to main page after successful sign-in
    window.location.href = 'index.html';
  }
  
  function initializeGoogleSignIn() {
    // Trigger Google Sign-In
    google.accounts.id.prompt();
  }
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
  // Initialize translations
  updateTranslations();