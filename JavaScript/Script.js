// Ricerca articoli
function search() {
    const parola = document.getElementById("search").value.toLowerCase();

    // Seleziona tutti gli article nelle sezioni di notizie
    const articoli = document.querySelectorAll(".flash-news article, .Secondary-news article");

    articoli.forEach(articolo => {
        const testo = articolo.textContent.toLowerCase();
        articolo.style.display = testo.includes(parola) ? "block" : "none";
    });
}

// Menu a tendina al click
const toggleMenu = document.getElementById("toggleMenu");
const menuTendina = document.getElementById("menuTendina");

toggleMenu.addEventListener("click", function (e) {
    e.preventDefault();
    menuTendina.classList.toggle("show");

    // Gestione della posizione per evitare conflitti
    const currentPosition = menuTendina.style.position || window.getComputedStyle(menuTendina).position;

    if (menuTendina.classList.contains("show")) {
        // Mostra il menu
        menuTendina.style.position = "absolute";
        menuTendina.style.display = "block";
    } else {
        // Nascondi il menu
        menuTendina.style.display = "none";
    }
});

// Chiudi se clicchi fuori dal menu
document.addEventListener("click", function (e) {
    if (!toggleMenu.contains(e.target) && !menuTendina.contains(e.target)) {
        menuTendina.classList.remove("show");
        menuTendina.style.display = "none"; // Assicurati che venga nascosto quando clicchi fuori
    }
});



let lastScrollTop = 0;
const header = document.querySelector('.main-header');
let ticking = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('shrink');
            } else {
                header.classList.remove('shrink');
            }
            lastScrollTop = Math.max(0, scrollTop); // evita valori negativi
            ticking = false;
        });
        ticking = true;
    }
});
