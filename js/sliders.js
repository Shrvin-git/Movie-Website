const swiperHeafer = new Swiper('.swiper_hero', {


    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const swiperRec = new Swiper('.swiper_recommended', {

    freeMode: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next_recommended_movie',
        prevEl: '.swiper-button-prev_recommended_movie',
    },

});
const swiperMovies = new Swiper('.swiper_serial', {
    freeMode: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next_recommended_movie',
        prevEl: '.swiper-button-prev_recommended_movie',
    },

});
const swiper = new Swiper('.one-movie-slider', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    // Optional parameters
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperAnimation = new Swiper('.swiper-animation', {
    freeMode: true,
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesAction = new Swiper('.swiper-action', {
    freeMode: true,
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesDrama = new Swiper('.swiper-drama', {
    freeMode: true,
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesScary = new Swiper('.swiper-scary', {
    freeMode: true,
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesComedy = new Swiper('.swiper-comedy-movie', {
    freeMode: true,
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
