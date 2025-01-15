// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


const food = new Swiper('.menu__food', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.menu__food-pagination',
    },
    navigation: {
      nextEl: '.menu__food-button-next',
      prevEl: '.menu__food-button-prev',
    },

});

const sauce = new Swiper('.menu__sauce', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
     el: '.menu__sauce-pagination',
  },
  navigation: {
    nextEl: '.menu__sauce-button-next',
    prevEl: '.menu__sauce-button-prev',
  },
});

const drinks = new Swiper('.menu__drinks', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
     el: '.menu__drinks-pagination',
  },
  navigation: {
    nextEl: '.menu__drinks-button-next',
    prevEl: '.menu__drinks-button-prev',
  },
});
