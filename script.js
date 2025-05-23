function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-ja]").forEach(el => {
      el.innerHTML = lang === "ja" ? el.getAttribute("data-lang-ja") : el.getAttribute("data-lang-en");
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = navigator.language.startsWith("ja") ? "ja" : "en";
    setLanguage(defaultLang);
  
    let iconClicked = 0;
    const icon = document.querySelector('.profile-icon');
    icon.addEventListener('click', e => {
      if (++iconClicked >= 5) {
        iconClicked = 0;
        icon.classList.toggle('animate');
      }
    });
  });
  