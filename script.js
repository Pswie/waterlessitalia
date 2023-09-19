// Seleziona gli elementi necessari dal DOM
const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.selector-button');
const indicator = document.querySelector('.slider-indicator');
const mobileImages = document.querySelectorAll('.carousel img');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Indice dell'immagine corrente

// Funzione per aggiornare la visualizzazione del carosello
function updateSlide() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Aggiorna gli indicatori
    buttons.forEach(button => {
        button.classList.remove('active', 'raised'); // Rimuovi sia 'active' che 'raised'
    });
    buttons[currentSlide].classList.add('active', 'raised'); // Aggiungi sia 'active' che 'raised' al bottone della slide corrente

    // Aggiorna le immagini mobile
    mobileImages.forEach((img, index) => {
        if (index === currentSlide) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}


document.querySelector('.carousel-arrow-left').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

document.querySelector('.carousel-arrow-right').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

// Aggiungi un listener d'evento a ogni bottone
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Ottieni l'indice della slide dal bottone cliccato
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));

        // Imposta l'indice corrente alla slide selezionata
        currentSlide = slideIndex;

        // Aggiorna la visualizzazione del carosello
        updateSlide();
    });
});

let startX = 0; // Posizione iniziale del tocco
let endX = 0; // Posizione finale del tocco

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50) { // Swipe verso sinistra
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (endX - startX > 50) { // Swipe verso destra
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    updateSlide();
}


// Aggiorna la posizione iniziale dell'indicatore
updateSlide();



/*
// Funzione per lo scorrimento automatico delle immagini
setInterval(() => {
    currentSlide = (currentSlide + 1) % 5; // Incrementa l'indice dell'immagine corrente e torna a 0 dopo aver raggiunto l'ultima immagine
    updateSlide(); // Aggiorna la visualizzazione del carosello
}, 7000); // Cambia immagine ogni 7 secondi
*/


// Transizioni
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location = link.href;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('main-nav');

    burger.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('main-nav');
    
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');

    if (nav.classList.contains("is-open")) {
        document.body.classList.add('no-scroll'); // Aggiungi la classe no-scroll
    } else {
        document.body.classList.remove('no-scroll'); // Rimuovi la classe no-scroll
    }
};