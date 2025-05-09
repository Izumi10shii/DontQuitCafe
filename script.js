// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional smooth scroll for gallery button (if button exists)
const viewGalleryBtn = document.querySelector('.btn');
const galleryPageLink = document.querySelector('a[href="gallery.html"]');

if (viewGalleryBtn && galleryPageLink) {
  viewGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = galleryPageLink.getAttribute('href');
  });
}

// Slider functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Initialize the slider
showSlide(currentIndex);