document.addEventListener('DOMContentLoaded', function () {
    // Get the carousel element
    const carousel = document.getElementById('carouselExampleCaptions');
    const backgroundImage = document.querySelector('.background-image');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const leftMenu = document.querySelector('.left-menu');
    const rightMenu = document.querySelector('.right-menu');
    const mobileMenu = document.querySelector('.mobile-nav .nav-menu');
    const body = document.body;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav .nav-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Listen for slide change event
    carousel.addEventListener('slide.bs.carousel', function (event) {
        // Add the animation class
        backgroundImage.classList.add('changing');

        const nextSlide = event.relatedTarget;
        const nextImage = nextSlide.querySelector('img').src;

        // Update the background image after a small delay
        setTimeout(() => {
            backgroundImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${nextImage})`;

            // Remove the animation class
            setTimeout(() => {
                backgroundImage.classList.remove('changing');
            }, 50);
        }, 300);
    });

    // Add scroll event listener for navbar
    const mainNav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });
});