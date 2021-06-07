"use strict";

var swiper = new Swiper('.client-swiper', {
  // Optional parameters
  slidesPerView: 5,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 5
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(".scroll-btn").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1);
});