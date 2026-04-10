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