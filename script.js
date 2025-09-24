const testimonials = [
    {
        name: "KAVYA BHARDWAJ",
        text: "Hey! I just recieved the ring It is just so beautiful and cute with the perfect fit exactly what I was looking for. I loved it! Cant wait to order more from you!!",
        image: "images/user-1.webp"
    },
    {
        name: "HARGUN SANDHU",
        text: "Absolutely loved the pearl hoops!! Most premium in quality and immensely comfortable to wear. Hope to keep shopping !!",
        image: "images/user-2.webp"
    },
    {
        name: "IPSHITA KHUNGER",
        text: "Just received my order some time ago and I really want to mention that the packaging was pretty good! Moreover, the quality is amazing!!",
        image: "images/user-3.webp"
    },
    {
        name: "SHRUTI KHANDELWAL",
        text: "I recently purchased a pair of pearl drop earrings and a cuff, and I must say, the quality is top-notch! The design looks even better in person.",
        image: "images/user-4.webp"
    },
    {
        name: "SONIA DUGGAL",
        text: "Hey! Received my order today, It is wayyyy more amazing than I thought. The quality is really good and the packaging looks sooooo stunning",
        image: "images/user-5.webp"
    },
    {
        name: "TWINKLE KHANNA",
        text: "What a fab job you've done with the packaging & what a premium quality jewellery piece! LOVE LOVE LOVE LOVE LOVE MY PEARL DROP EARRINGS",
        image: "images/user-6.webp"
    },
    {
        name: "KRITI MAKWANA",
        text: "Really loved the packaging And the pieces are just amazing! Looking forward to order again for some bracelets and necklaces!!",
        image: "images/user-7.jpeg"
    },
    {
        name: "ANKITA GUPTA",
        text: "Received the order Lovely pieces and love how you had put them all together even my younger sister has her eyes on them thank you",
        image: "images/user-8.jpeg"
    },
    {
        name: "AFIFA AKHTAR",
        text: "Just received the rings dear, Very happy with the quality of the ring. Thank you very much! Keep up the good work",
        image: "images/user-9.jpeg"
    },
    {
        name: "KRISHIKA JAIN",
        text: "I really loved the jewellery and trust me this brand can get viral! Hope this one gets the love it deserves!!",
        image: "images/user-10.jpeg"
    },
    {
        name: "DAMANJEET KAUR",
        text: "I Received the courier It's so beautiful Loved the packing The bracelet is super super Looking forward for more shopping with u",
        image: "images/user-11.jpeg"
    },
    {
        name: "AYESHA SURAWALA",
        text: "They're soooo damnnnn exceptional, I LOVED them and their unique products! Thank you so soo soooo muchhh for these beauties.",
        image: "images/user-12.jpeg"
    }
];

let currentTestimonial = 0;

function showTestimonial(index) {
    currentTestimonial = index;
    const testimonial = testimonials[index];
    document.getElementById('testimonialContent').innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
        <h4 class="testimonial-name">${testimonial.name}</h4>
        <p class="testimonial-text">${testimonial.text}</p>
    `;
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}
setInterval(nextTestimonial, 3000);

document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        this.textContent = 'Added!';
        this.style.background = '#28a745';
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.background = '#c19a6b';
        }, 2000);
    });
});

let isScrolling = false;
const gallery = document.querySelector('.gallery-container');
gallery.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        isScrolling = true;
        e.preventDefault();
        gallery.scrollLeft += e.deltaY;
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
});

document.querySelector('.newsletter-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-input').value;
    if (email) {
        this.textContent = 'SUBSCRIBED!';
        this.style.background = '#28a745';
        setTimeout(() => {
            this.textContent = 'SUBSCRIBE';
            this.style.background = '#c19a6b';
            document.querySelector('.newsletter-input').value = '';
        }, 2000);
    }
});