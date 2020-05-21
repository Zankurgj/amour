document.addEventListener('DOMContentLoaded', function () {
  $('.product-gallery-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    variableWidth: false,
    customPaging: function (slider, i) {
      const thumb = $(slider.$slides[i]).data('image');
      return `<div style="background-image: url('${thumb}');" class="product-gallery-slider-pagin"></div>`;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  });

  $('.product-recommend-slider').slick({
    infinite: false,
    dots: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
          arrows: false,
        },
      },
    ],
  });

  $(window)
    .on('resize', () => {
      let init = $('.lk-course-wrapper').data('init-slider');
      if (window.innerWidth < 1000) {
        if (!init) {
          $('.lk-course-wrapper')
            .slick({
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              mobileFirst: true,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 1000,
                  settings: 'unslick',
                },
              ],
            })
            .data({ 'init-slider': true });
        }
      } else {
        if (init) {
          $('.lk-course-wrapper')
            .slick('unslick')
            .data({ 'init-slider': false });
        }
      }
    })
    .trigger('resize');
});

// вспомогательные функции

const spoilerToogle = (el) => {
  $(el).toggleClass('spoiler--opened');
  var animateEL = $(el).children('.spoiler-text-wrapper');
  animateEL.slideToggle(200);
};

const stopScroll = () => {
  $('html, body').css({
    overflow: 'hidden',
  });
};

const renewScroll = () => {
  $('html, body').css({
    overflow: 'auto',
  });
};

const changeTabs = (el) => {
  const tabIndex = el.value;
  const tabsEl = document.querySelectorAll('.lk-reserve-tab-wrapper');
  const activetab = document.querySelector('.lk-reserve-tab-wrapper--show');
  for (const tab of tabsEl) {
    if (tab.getAttribute('data-tabIndex') === tabIndex) {
      activetab.classList.remove('lk-reserve-tab-wrapper--show');
      tab.classList.add('lk-reserve-tab-wrapper--show');
    }
  }
};

const onShowMenu = (el) => {
  el.classList.toggle('btn-hamburger--active');
  const menu = document.querySelector('.main-header-nav');
  menu.classList.toggle('main-header-nav--show');
};

const onAddBasket = (el) => {
  el.setAttribute('disabled', 'disabled');
  showCheckPopup();
};

const showCheckPopup = () => {
  const popup = document.querySelector('.product-about-check-block');
  popup.classList.add('popup-show');
};
const hideCheckPopup = () => {
  const popup = document.querySelector('.product-about-check-block');
  popup.classList.remove('popup-show');
};
const onAddLike = (el) => {
  el.classList.toggle('btn-heart--full');
};
