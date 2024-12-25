let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

//scrlloing feature 
let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down, hide the header
            header.style.top = "-80px"; // Adjust height as per your header height
        } else {
            // Scrolling up, show the header
            header.style.top = "0";
        }
        lastScrollY = window.scrollY;
    });