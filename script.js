// Handle pin clicks
document.querySelectorAll('.map-pin').forEach(pin => {
    pin.addEventListener('click', () => {
        const placeId = pin.getAttribute('data-place');
        document.getElementById(placeId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Handle image sliders
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = slides.children.length;

    function updateSlide() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    });
});

const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const overlay = document.querySelector(".map-overlay");
const okBtn = document.getElementById("overlay-ok-btn");

okBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Handle info buttons for place images
document.querySelectorAll('.info-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const infoOverlay = btn.nextElementSibling;
    infoOverlay.style.display = 'flex';
  });
});

// Handle close info buttons
document.querySelectorAll('.close-info-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const infoOverlay = btn.closest('.info-overlay');
    infoOverlay.style.display = 'none';
  });
});

// Handle references toggle
const referencesToggle = document.querySelector('.references-toggle');
const referencesContent = document.querySelector('.references-content');

referencesToggle.addEventListener('click', () => {
  if (referencesContent.style.display === 'block') {
    referencesContent.style.display = 'none';
    referencesToggle.textContent = 'References ▼';
  } else {
    referencesContent.style.display = 'block';
    referencesToggle.textContent = 'References ▲';
  }
});
