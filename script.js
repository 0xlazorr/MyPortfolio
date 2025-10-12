tailwind.config = {
    darkMode: 'class',
}

// Set theme on initial load to prevent Flash of Unstyled Content (FOUC)
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

    function updateThemeIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        themeToggleLightIcon.classList.toggle('hidden', !isDark);
        themeToggleDarkIcon.classList.toggle('hidden', isDark);
        themeToggleLightIconMobile.classList.toggle('hidden', !isDark);
        themeToggleDarkIconMobile.classList.toggle('hidden', isDark);
    }

    updateThemeIcons();

    const handleThemeToggle = () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateThemeIcons();
        initParticles(); // Re-initialize particles with new theme colors
    };

    themeToggleBtn.addEventListener('click', handleThemeToggle);
    themeToggleBtnMobile.addEventListener('click', handleThemeToggle);

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a, header nav > ul a').forEach(link => {
        link.addEventListener('click', (e) => {
            mobileMenu.classList.add('hidden');
            if (link.hash !== "") {
                e.preventDefault();
                document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Typing Effect ---
    const typingTextElement = document.getElementById('typing-text');
    const phrases = ["Full-Stack Developer", "Building Web Experiences", "Tech Enthusiast."];
    let phraseIndex = 0; let charIndex = 0; let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        charIndex += isDeleting ? -1 : 1;
        typingTextElement.textContent = currentPhrase.substring(0, charIndex);

        let typeSpeed = isDeleting ? 75 : 150;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();

    // --- Particle Canvas Animation ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particlesArray;

    function setCanvasSize() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    }

    class Particle {
        constructor(x, y, dX, dY, size, color) { this.x = x; this.y = y; this.directionX = dX; this.directionY = dY; this.size = size; this.color = color; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = this.color; ctx.fill(); }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX; this.y += this.directionY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        const particleColor = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim();
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let dX = (Math.random() * .4) - .2;
            let dY = (Math.random() * .4) - .2;
            particlesArray.push(new Particle(x, y, dX, dY, size, particleColor));
        }
    }

    function connectParticles() {
        const lineColorRGB = getComputedStyle(document.documentElement).getPropertyValue('--particle-line-rgb').trim();
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    let opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(${lineColorRGB}, ${opacityValue})`;
                    ctx.lineWidth = 1; ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke();
                }
            }
        }
    }

    let animationFrameId;
    function animateParticles() {
        cancelAnimationFrame(animationFrameId); // Ensure no multiple loops
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => p.update());
        connectParticles();
        animationFrameId = requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => { setCanvasSize(); initParticles(); });
    setCanvasSize(); initParticles(); animateParticles();

    // --- Scroll Fade-in Animation ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.15 });
    sections.forEach(section => observer.observe(section));

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
            .then(() => {
                formStatus.textContent = "Thank you! Your message has been sent.";
                contactForm.reset();
            })
            .catch((error) => {
                formStatus.textContent = "Oops! Something went wrong. Please try again.";
                formStatus.classList.remove('text-green-500');
                formStatus.classList.add('text-red-500');
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.classList.remove('text-red-500');
                    formStatus.classList.add('text-green-500');
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                }, 5000);
            });
    });

    // --- Testimonial Slider ---
    const slider = document.getElementById('testimonial-container');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentIndex = 0;
    let slideInterval;

    function updateSliderPosition() { if (slides.length > 0) slider.style.transform = `translateX(-${currentIndex * 100}%)`; }
    function showNextSlide() { currentIndex = (currentIndex + 1) % slides.length; updateSliderPosition(); }
    function showPrevSlide() { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateSliderPosition(); }

    function startInterval() {
        slideInterval = setInterval(showNextSlide, 7000);
    }
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    if (slides.length > 0) {
        startInterval();
        nextBtn.addEventListener('click', () => { showNextSlide(); resetInterval(); });
        prevBtn.addEventListener('click', () => { showPrevSlide(); resetInterval(); });
    }


    // --- Back to Top Button ---
    const toTopButton = document.getElementById('to-top-button');
    window.addEventListener('scroll', () => {
        toTopButton.classList.toggle('hidden', window.pageYOffset <= 300);
    });
    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});