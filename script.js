document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.btn-gold').forEach(button => {
    if (button.textContent.includes('Add to Cart')) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.textContent = 'Added!';
            this.classList.add('btn-success');
            this.classList.remove('btn-gold');
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.classList.remove('btn-success');
                this.classList.add('btn-gold');
            }, 2000);
        });
    }
});

const carousel = new bootstrap.Carousel('#featuredCarousel', {
    interval: 5000,
    wrap: true
});

let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');

function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    testimonialSlides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
    showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 3000);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});