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



const header = document.querySelector('.main-header');
const sentinel = document.createElement('div');
sentinel.style.height = '1px';
document.body.prepend(sentinel);

const observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.top < 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}, {
    threshold: [0]
});

observer.observe(sentinel);

