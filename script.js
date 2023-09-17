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

// Aggiorna la posizione iniziale dell'indicatore
updateSlide();



/*
// Funzione per lo scorrimento automatico delle immagini
setInterval(() => {
    currentSlide = (currentSlide + 1) % 5; // Incrementa l'indice dell'immagine corrente e torna a 0 dopo aver raggiunto l'ultima immagine
    updateSlide(); // Aggiorna la visualizzazione del carosello
}, 7000); // Cambia immagine ogni 7 secondi
*/

// Funzione per mostrare/nascondere il menu a tendina su mobile
function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}


// Aggiungi l'evento di click al logo e all'icona hamburger per mostrare/nascondere il menu su mobile
document.querySelector('.logo').addEventListener('click', toggleMenu);
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);


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
