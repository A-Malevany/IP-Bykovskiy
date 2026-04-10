const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});

const heroSlider = () => {
    const sectionClass = '.hero';
    const sections = document.querySelectorAll(sectionClass);

    sections.forEach(section => {
        const sliderEl = section.querySelector('.swiper');
        if (!sliderEl) return;

        const slides = section.querySelectorAll('.swiper-slide');
        const pagination = section.querySelector('.swiper-pagination');

        if (slides.length > 0) {
            new Swiper(sliderEl, {
                loop: slides.length > 1,
                slidesPerView: 1,
                spaceBetween: 20,
                speed: 600,
                watchOverflow: true,
                grabCursor: true,

                pagination: {
                    el: pagination,
                    clickable: true,
                    dynamicBullets: false,
                },
            });
        }
    });
}
heroSlider();

const gallerySlider = () => {
    const sectionClass = '.production-gallery';
    const sections = document.querySelectorAll(sectionClass);

    sections.forEach(section => {
        const sliderEl = section.querySelector('.swiper');
        if (!sliderEl) return;

        const slides = section.querySelectorAll('.swiper-slide');
        const nextBtn = section.querySelector('.swiper-button-next');
        const prevBtn = section.querySelector('.swiper-button-prev');

        if (slides.length > 0) {
            new Swiper(sliderEl, {
                loop: slides.length > 4,
                slidesPerView: 4,
                spaceBetween: 20,
                speed: 600,
                watchOverflow: true,
                grabCursor: true,

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn
                },

                breakpoints: {
                    0: { slidesPerView: 1.2 },
                    600: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 }
                }
            });
        }
    });
}
gallerySlider();

const manufacturersSlider = () => {
    const sectionClass = '.manufacturers';
    const sections = document.querySelectorAll(sectionClass);

    sections.forEach(section => {
        const sliderEl = section.querySelector('.swiper');
        if (!sliderEl) return;

        const slides = section.querySelectorAll('.swiper-slide');
        const nextBtn = section.querySelector('.swiper-button-next');
        const prevBtn = section.querySelector('.swiper-button-prev');

        if (slides.length > 0) {
            new Swiper(sliderEl, {
                loop: false,
                slidesPerView: 6,
                spaceBetween: 20,
                speed: 600,
                watchOverflow: true,

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn
                },

                breakpoints: {
                    0: { slidesPerView: 2.2 },
                    600: { slidesPerView: 3 },
                    1000: { slidesPerView: 4 },
                    1200: { slidesPerView: 6 }
                }
            });
        }
    });
}
manufacturersSlider();

const menuMobile = () => {
    const btn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('.mobile-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('is-active');
        document.body.classList.toggle('is-locked', menu.classList.contains('is-active'));
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            document.body.classList.remove('is-locked');
        });
    });

    document.addEventListener('click', (e) => {
        if (menu.classList.contains('is-active') && !menu.contains(e.target)) {
            menu.classList.remove('is-active');
            document.body.classList.remove('is-locked');
        }
    });
}
menuMobile();