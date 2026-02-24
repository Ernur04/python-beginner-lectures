// Получаем элементы
var modal = document.getElementById("fileModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close-btn")[0];

// Проверяем наличие элементов перед добавлением обработчиков
if (btn && modal) {
    // Когда пользователь нажимает кнопку, открываем модальное окно 
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

if (span && modal) {
    // Когда пользователь нажимает на <span> (x), закрываем модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }
}

if (modal) {
    // Когда пользователь щелкает в любом месте за пределами модального окна, закрываем его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Показать кнопку при прокрутке вниз
window.addEventListener("scroll", function() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Прокрутка вверх при клике
document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});