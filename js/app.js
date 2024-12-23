let recMoviesElements = [
    { id: 1, coverMovie: 'img/recommended-movie5.png', durationMovie: '3h 15m', score: 8.3, nameMovie: 'Oppenheimer 2023' },
    { id: 2, coverMovie: 'img/recommended-movie4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'Avatar The Way Of  ...' },
    { id: 3, coverMovie: 'img/recommended-movie3.png', durationMovie: '3h 26m', score: 8, nameMovie: 'Killers Of The Flower...' },
    { id: 4, coverMovie: 'img/recommended-movie2.png', durationMovie: '3h', score: 7.6, nameMovie: 'Mission Impossible' },
    { id: 5, coverMovie: 'img/recommended-movie1.png', durationMovie: '1h 55m', score: 7.5, nameMovie: 'Tick Tick... Boom 2021' },
    { id: 2, coverMovie: 'img/recommended-movie4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'Avatar The Way Of  ...' },
]
let recSerialElements = [
    { id: 6, coverMovie: 'img/recommended-serial5.png', durationMovie: '3h 15m', score: 8.3, nameMovie: 'Planet Earth III' },
    { id: 7, coverMovie: 'img/recommended-serial4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'The Last Of Us' },
    { id: 8, coverMovie: 'img/recommended-serial3.png', durationMovie: '3h 26m', score: 8, nameMovie: 'The Lord Of The Ri...' },
    { id: 9, coverMovie: 'img/recommended-serial2.png', durationMovie: '3h', score: 7.6, nameMovie: 'House Of The Dragon' },
    { id: 10, coverMovie: 'img/recommended-serial1.png', durationMovie: '1h 55m', score: 7.5, nameMovie: 'Reacher' },
    { id: 7, coverMovie: 'img/recommended-serial4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'The Last Of Us' },
]
let recAnimationlElements = [
    { id: 11, coverMovie: 'img/recommended-animation5.png', durationMovie: '3h 15m', score: 8.3, nameMovie: 'What If...?' },
    { id: 12, coverMovie: 'img/recommended-animation4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'Spiderman: Across The ...' },
    { id: 13, coverMovie: 'img/recommended-animation3.png', durationMovie: '3h 26m', score: 8, nameMovie: 'Attack On Titan' },
    { id: 14, coverMovie: 'img/recommended-animation2.png', durationMovie: '3h', score: 7.6, nameMovie: 'Scavengers Regin' },
    { id: 15, coverMovie: 'img/recommended-animation1.png', durationMovie: '1h 55m', score: 7.5, nameMovie: 'Sonic The Hedgehg ...' },
    { id: 12, coverMovie: 'img/recommended-animation4.png', durationMovie: '3h 12m', score: 7.7, nameMovie: 'Spiderman: Across The ...' },
]
let recActionlElements = [
    { id: 16, coverMovie: 'img/action-movie5.png', durationMovie: '60m', score: 8.7, nameMovie: 'The Boys' },
    { id: 17, coverMovie: 'img/action-movie4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Spiderman No Way Home' },
    { id: 18, coverMovie: 'img/action-movie3.png', durationMovie: '3h 2m', score: 8.4, nameMovie: 'Avengers: Endgame' },
    { id: 19, coverMovie: 'img/action-movie2.png', durationMovie: '3h', score: 7.6, nameMovie: 'The Witcher' },
    { id: 20, coverMovie: 'img/action-movie1.png', durationMovie: '2h 30m', score: 7.7, nameMovie: 'John Wick: Chapter 4' },
    { id: 17, coverMovie: 'img/action-movie4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Spiderman No Way Home' },
]
let recDramalElements = [
    { id: 21, coverMovie: 'img/drama-movie-5.png', durationMovie: '60m', score: 8.7, nameMovie: 'Joker' },
    { id: 22, coverMovie: 'img/drama-movie-4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Stranger Things' },
    { id: 23, coverMovie: 'img/drama-movie-3.png', durationMovie: '3h 2m', score: 8.4, nameMovie: '1917' },
    { id: 24, coverMovie: 'img/drama-movie-2.jfif', durationMovie: '3h', score: 7.6, nameMovie: 'Chenobyl' },
    { id: 25, coverMovie: 'img/drama-movie-1.png', durationMovie: '2h 30m', score: 7.7, nameMovie: 'Top Gun: Maverick' },
    { id: 22, coverMovie: 'img/drama-movie-4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Stranger Things' },
]
let recComedylElements = [
    { id: 26, coverMovie: 'img/comedy-movie5.png', durationMovie: '60m', score: 8.7, nameMovie: 'Ted Lasso' },
    { id: 27, coverMovie: 'img/comedy-movie4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Red Notice' },
    { id: 28, coverMovie: 'img/comedy-movie3.png', durationMovie: '3h 2m', score: 8.4, nameMovie: 'Jumanji The Next Level' },
    { id: 29, coverMovie: 'img/comedy-movie2.png', durationMovie: '3h', score: 7.6, nameMovie: 'The Ground Tour' },
    { id: 30, coverMovie: 'img/comedy-movie1.png', durationMovie: '2h 30m', score: 7.7, nameMovie: 'Why Him?' },
    { id: 27, coverMovie: 'img/comedy-movie4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'Red Notice' },
]
let recScarylElements = [
    { id: 31, coverMovie: 'img/scary-movie-5.png', durationMovie: '60m', score: 8.7, nameMovie: 'Hannibal' },
    { id: 32, coverMovie: 'img/scary-movie-4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'It Chapter Two' },
    { id: 33, coverMovie: 'img/scary-movie-3.png', durationMovie: '3h 2m', score: 8.4, nameMovie: 'Get Out' },
    { id: 34, coverMovie: 'img/scary-movie-2.png', durationMovie: '3h', score: 7.6, nameMovie: 'Moon Knight' },
    { id: 35, coverMovie: 'img/scary-movie-1.png', durationMovie: '2h 30m', score: 7.7, nameMovie: 'The Menu' },
    { id: 32, coverMovie: 'img/scary-movie-4.png', durationMovie: '2h 28m', score: 8.2, nameMovie: 'It Chapter Two' },
]
let heroSectionMovies = [
    { id: 1, imgMovie: 'img/openhymer.jfif', movieName: 'Oppenheimer 2023', movieDescription: 'فیلم اوپنهایمر Oppenheimer پدر بمب اتم به کارگردانی کریستوفر نولان است . فیلم بر اساس وقایع واقعی با روایت داستان جی رابرت اوپنهایمر است. اساس زندگینامه کای برد و مارتین جی شروین است. این فیلم قرار است در تاریخ 21 جولای 2023 در سینماهای ایالات متحده اکران شود. این فیلم برای اولین بار برای یونیورسال پیکچرز پخش می شود.', genre: 'تاریخی، درام، زندگی‌نامه', score: '8/3', durationMovie: 3, },
    { id: 2, imgMovie: 'img/Emilia perez.jpg', movieName: 'Emilia Pérez', movieDescription: 'Emilia Pérez یا امیلیا پرز یک وکیل در مکزیک را دنبال می‌کند. Emilia Pérez یا امیلیا پرز روایت میکند که پیشنهادی غیرمنتظره از سوی یکی از ترسناک‌ترین رؤسای کارتل دریافت می‌کند. این رئیس کارتل تصمیم گرفته از تجارت بی‌رحمانه خود کناره‌گیری کند و ناپدید شود. برای رسیدن به رویای پنهانی‌اش، او به کمک این وکیل نیاز دارد تا به زنی که همیشه آرزویش را داشته تبدیل شود و از چنگ زندگی جنایتکارانه‌اش فرار کند. ', genre: 'دلهره‌آور، داستانی، داستان جنایی', score: '7.8', durationMovie: 2, },
    { id: 3, imgMovie: 'img/Figh Club.jpg', movieName: 'Fight Club ', movieDescription: 'در فیلم باشگاه مشت زنی : «راوی»، جوانی پریشان، پی می‌برد که به کمک مشت‌بازی با دست‌های برهنه، بیش از هر زمان دیگری احساس زنده بودن می‌کند. او و «تایلر» که به دوستانی صمیمی تبدیل شده‌اند، هفته‌ای یک بار با هم ملاقات می‌کنند تا با هم مشت بازی کنند. در حالی که افراد دیگری هم به باشگاه‌شان می‌پیوندند، محفل‌شان به رغم آن که مخفی است بین شرکت کننده‌هایش، شهرت و محبوبیت یک باشگاه زیرزمینی را پیدا می‌کند و... ', genre: 'درام، روانشناسی ', score: '8.      5', durationMovie: 2, },
    { id: 4, imgMovie: 'img/resident-evil-final-chapter.jpg', movieName: 'Resident Evil 6', movieDescription: ' ویروس تی که توسط شرکت آمبرلا ساخته شده بود اکنون به سراسر جهان شیوع کرده و موجب تبدیل شدن انسان ها به زامبی، موجودات شیطانی و هیولا شده است. آلیس کارمند سابق این شرکت که هم اکنون یک جنگجوی سرکش است، به دوستانش ملحق شده تا وارد هسته مرکزی شرکت آمبرلا در زیر شهر راکون سیتی شوند و آن را برای همیشه از بین ببرند…  ', genre: 'علمی تخیلی، ترسناک ', score: '6.9', durationMovie: 4, },
]
let showAdvanceSearchBoxBtn = document.querySelector('.advance-search_box')
let advanceSearchBoxElem = document.querySelector('.advance-search_box-bottom')
let advanceArrowToggle = document.querySelector('#flash_toggle')
let recommendedMoviesItems = document.querySelectorAll('.recommended-item')
let mobileMenuElem = document.querySelectorAll('.menu_mobile_elem')
let recMoviesWrapper = document.querySelector('.recommended-movie_slider_wrapper')
let recSerialsWrapper = document.querySelector('.recommended-serial_slider_wrapper')
let recAnimationsWrapper = document.querySelector('.swiper-animation-wrapper')
let recActionWrapper = document.querySelector('.swiper-wrapper-action')
let recDramaWrapper = document.querySelector('.swiper-drama-wrapper')
let recComedyWrapper = document.querySelector('.swiper-comedy-wrapper')
let recScaryyWrapper = document.querySelector('.swiper-scary-wrapper')
let heroSlidersWrapper = document.querySelector('.hero_section_wrapper')
let menuMobileBtn = document.querySelector('.menu_mobile_toggle')
let menuMobile = document.querySelector('.menu_mobile_box')



recMoviesElements.forEach(function (movies) {
    recMoviesWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide recommended-movies_slider" role="group" aria-label="5 / 7" data-swiper-slide-index="4" style="width: 230px; margin-left: 30px;"><div class= "recommended-item" ><div class="recommended-item_cover"><div class="info"> </div><img class="recommended_movie_img" src="' + movies.coverMovie + '" alt=""></div><div class="recommended-item_info"><div class="recommended-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + movies.durationMovie + '</span></div><div class="recommended-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + movies.score + '</p></div></div><span class="recommended-item_name">' + movies.nameMovie + '</span></div> </div>')
})
recSerialElements.forEach(function (movies) {
    recSerialsWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide recommended-serial_slider" role="group" aria-label="3 / 7" data-swiper-slide-index="2" style="width: 230px; margin-left: 30px;"><div class= "recommended-serial-item" ><div class="recommended-item_cover"><img class="recommended_serial_img" src="' + movies.coverMovie + '" alt=""></div><div class="recommended-item_info"><div class="recommended-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + movies.durationMovie + '</span></div><div class="recommended-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + movies.score + '</p></div></div><span class="recommended-item_name">' + movies.nameMovie + '</span> </></div>'
    )
})
recAnimationlElements.forEach(function (animation) {
    recAnimationsWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide recommended_animation_slider" role="group" aria-label="3 / 7" data-swiper-slide-index="2" style="width: 230px; margin-left: 30px;"><div class= "recommended-animation-item" ><div class="recommended-animation-item_cover"><img class="recommended_animation_img" src="' + animation.coverMovie + '" alt=""></div><div class="recommended-animation-item_info"><div class="recommended-animation-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + animation.durationMovie + '</span></div><div class="recommended-animation-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + animation.score + '</p></div></div> <span class="recommended-animation-item_name">' + animation.nameMovie + '</span> </ ></div>'
    )
})
recActionlElements.forEach(function (action) {
    recActionWrapper.insertAdjacentHTML('beforeend',
        ' <div class="swiper-slide recommended-action-slider" role="group" aria-label="4 / 6" data-swiper-slide-index="3" style="width: 230px; margin-left: 30px;"><div class= "recommended-action-item" ><div class="recommended-action-item_cover"><img class="recommended_action_img" src="' + action.coverMovie + '" alt=""></div><div class="recommended-action-item_info"><div class="recommended-action-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + action.durationMovie + '</span></div><div class="recommended-action-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + action.score + '</p></div></div><span class="recommended-action-item_name">' + action.nameMovie + '</span></ ></div> '
    )
})
recDramalElements.forEach(function (drama) {
    recDramaWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide swiper-drma-sliders" role="group" aria-label="1 / 7" data-swiper-slide-index="0" style="width: 230px; margin-left: 30px;"><div class= "recommended-drama-item" ><div class="recommended-drama-item_cover"><img class="recommended_drama_img" src="' + drama.coverMovie + '" alt=""></div><div class="recommended-drama-item_info"><div class="recommended-drama-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + drama.durationMovie + '</span></div><div class="recommended-drama-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + drama.score + '</p></div></div><span class="recommended-drama-item_name">' + drama.nameMovie + '</span></></div> '
    )
})
recComedylElements.forEach(function (comedy) {
    recComedyWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide recommended-serial_slider" role="group" aria-label="3 / 7" data-swiper-slide-index="2" style="width: 230px; margin-left: 30px;"><div class= "recommended-serial-item" ><div class="recommended-item_cover"><img class="recommended_serial_img" src="' + comedy.coverMovie + '"alt=""></div><div class="recommended-item_info"><div class="recommended-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + comedy.durationMovie + '</span></div><div class="recommended-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + comedy.score + '</p></div></div><span class="recommended-item_name">' + comedy.nameMovie + '</span> </></div>'
    )
})
recScarylElements.forEach(function (scary) {
    recScaryyWrapper.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide swiper-scary-sliders swiper-slide-active" role="group" aria-label="1 / 7" data-swiper-slide-index="0" style="width: 230px; margin-left: 30px;"><div class="recommended-scary-item"><div class="recommended-scary-item_cover"><img class="recommended_scary_img" src="' + scary.coverMovie + '" alt=""></div><div class="recommended-scary-item_info"><div class="recommended-scary-item_info_time"><div style="display: flex;align-items: center;"><img src="img/logo/icon_time.png" alt=""></div><span>' + scary.durationMovie + '</span></div><div class="recommended-scary-item_info_metha"><div style="display: flex;align-items: center;"><img src="img/logo/icon_meta.png" alt=""></div><p>' + scary.score + '</p></div></div><span class="recommended-scary-item_name">' + scary.nameMovie + '</span></div></div>'
    )
})

// heroSectionMovies.forEach(function (items) {
//     heroSlidersWrapper.insertAdjacentHTML('beforeend',
//         '<div class="swiper-slide swiper-hero-slide swiper-slide-active" role="group" aria-label="4 / 4" data-swiper-slide-index="3" style="width: 1270px;"><div class= "hero_section"> <div class="hero_section_right"><h1 class="hero_section_title"> ' + items.movieName + ' </h1><span class="FA_name_movie">رزیدنت اویل </span><h2 class="movie_synopsis"> خلاصه داستان </h2><p class="movie_description"> ' + items.movieDescription + ' </p><div class="hero_section_genre"><span class="genre">ژانر</span><span class="genre_title"> ' + items.genre + ' </span></div><div class="hero_section_movie_score"><div class="hero_section_movie_time"> <span>' + items.durationMovie + ' Hours</span> </div><div class="hero_section_movie_metha"><p><span>' + items.score + '</span>/10</p></div></div><button class="hero_section_show_movie"> مشاهده و دانلود با تمام کیفیت ها </button></div></ ></div > '
//     )
// })








menuMobileBtn.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open');
    menuMobile.classList.toggle('menu_mobile_clsoe')
})

showAdvanceSearchBoxBtn.addEventListener('click', function () {
    advanceSearchBoxElem.classList.toggle('advance-search_box-toggle')
    advanceArrowToggle.classList.toggle('flash_toggle')
})
recommendedMoviesItems.forEach(function (recMovies) {
    recMovies.addEventListener('mouseover', function () {
        console.log('mouseover');
    })
})



