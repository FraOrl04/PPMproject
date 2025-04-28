
function search() {
    const parola = document.getElementById("search").value.toLowerCase();
    const articoli = document.querySelectorAll(".flash-news article, .Secondary-news article");

    articoli.forEach(articolo => {
        const testo = articolo.textContent.toLowerCase();
        articolo.style.display = testo.includes(parola) ? "block" : "none";
    });
}


const toggleMenu = document.getElementById("toggleMenu");
const menuTendina = document.getElementById("menuTendina");

toggleMenu.addEventListener("click", function (e) {
    e.preventDefault();
    menuTendina.classList.toggle("show");
    menuTendina.style.display = menuTendina.classList.contains("show") ? "block" : "none";
});

// Chiudi il menu se clicchi fuori
document.addEventListener("click", function (e) {
    if (!toggleMenu.contains(e.target) && !menuTendina.contains(e.target)) {
        menuTendina.classList.remove("show");
        menuTendina.style.display = "none";
    }
});

const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}, { passive: true });


