let movieSeason = document.querySelectorAll('.download-box_season')
let movieEpisode = document.querySelector('.download-box_wrapper')
let movieQualityItems = document.querySelector('.download_box_quality')
let movieEpisodeElem = document.querySelectorAll('.download-box_episod')



movieSeason.forEach(function (items) {
  items.addEventListener('click', function (event) {
    // movieEpisode.classList.toggle('download-box_wrapper--toggle')
    event.target.nextElementSibling.classList.toggle('download-box_wrapper--toggle')
  })
})



movieEpisodeElem.forEach(items => {
  items.addEventListener('click', function () {
    items.classList.toggle('download-box_episod--toggle')

  })
});








const swiper = new Swiper('.swiper', {
  loop: true,
  freeMode: true,

  breakpoints: {

    400: {
      slidesPerView: 3,
    },
    578: {
      slidesPerView: 3,
    },
    763: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});