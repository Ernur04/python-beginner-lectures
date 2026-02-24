async function loadTranslations(lang) {
    try {
        // Detectar la ruta correcta - si estamos en /pages/, usar ../locales/
        const currentPath = window.location.pathname;
        const isInPages = currentPath.includes('/pages/');
        const localesPath = isInPages ? '../locales/' : 'locales/';

        const response = await fetch(`${localesPath}${lang}.json`);
        if (!response.ok) throw new Error("Не удалось загрузить файл перевода");
        return await response.json();
    } catch (err) {
        console.error("Ошибка загрузки перевода:", err);
        return {};
    }
}

async function applyTranslations(lang) {
    const translations = await loadTranslations(lang);
    document.querySelectorAll('[data-i18]').forEach(el => {
        const key = el.getAttribute('data-i18');
        const text = translations[key];
        if (typeof text !== 'undefined') {
            el.innerHTML = text;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const langButtons = document.querySelectorAll('.lang-button');
    const savedLang = localStorage.getItem('language') || 'ru';

    function setLanguage(lang) {
        langButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        localStorage.setItem('language', lang);
        applyTranslations(lang);
    }

    setLanguage(savedLang);

    langButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
