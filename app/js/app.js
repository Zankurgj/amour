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
  getScroll();
});

// вспомогательные функции

const spoilerToogle = (el) => {
  $(el).toggleClass('spoiler--opened');
  var animateEL = $(el).siblings('.spoiler-content');
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

const changeTabs = (index) => {
  console.log(index);
  const tabIndex = index;
  const tabsEl = document.querySelectorAll('.popup-tabs-item');
  const activetab = document.querySelector('.popup-tabs-item--show');
  for (const tab of tabsEl) {
    if (tab.getAttribute('data-tabIndex') === tabIndex) {
      activetab.classList.remove('popup-tabs-item--show');
      tab.classList.add('popup-tabs-item--show');
    }
  }
};

const onShowMenu = (el) => {
  el.classList.toggle('btn-hamburger--active');
  const menu = document.querySelector('.main-header-nav');
  menu.classList.toggle('main-header-nav--show');
  bodyStopScroll();
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

const getScroll = () => {
  const parent = document.querySelector('.scroll-parent-container');
  if (parent) {
    const fixedEl = document.querySelector('.product-about-buy');
    const parentElementHeight = parent.offsetHeight + 64 - window.screen.height;
    changeScrollClass(parentElementHeight, fixedEl);
    window.onscroll = () => {
      changeScrollClass(parentElementHeight, fixedEl);
    };
  }
};

const changeScrollClass = (parentElementHeight, fixedEl) => {
  if (getScrollVal(parentElementHeight)) {
    fixedEl.classList.remove('fixed-mobile');
  } else {
    fixedEl.classList.add('fixed-mobile');
  }
};

const getScrollVal = (parentElementHeight) => {
  return (
    Math.round(
      this.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    ) >= parentElementHeight
  );
};

const changeTabSize = (el) => {
  document
    .querySelector('#tab1-btn-wrapper')
    .classList.add('tab-size-btn-wrapper--show');
};

const onChangeTabsItem = (el) => {
  el.classList.remove('tab-size-btn-wrapper--show');
  document.querySelector('#tab1').setAttribute('checked', 'false');
  document.querySelector('#tab2').setAttribute('checked', 'checked');
  changeTabs('tab2');
};

const changeTabLength = (el) => {
  document
    .querySelector('#tab2-btn-wrapper')
    .classList.add('tab-size-btn-wrapper--show');
};
const onClosePopUpSize = () => {
  document.querySelector('#popup1').classList.remove('popup-block--show');
};
const onShowPopUpSize = () => {
  document.querySelector('#popup1').classList.add('popup-block--show');
};

const initMpSlider = () => {
  const sliderSelector = document.querySelector(
    '.product-recommend-slider--mp'
  );
  setMpSliderWidth(sliderSelector);
  $('.product-recommend-slider--mp').slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 1,
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
  window.addEventListener('resize', () => {
    setMpSliderWidth(sliderSelector);
  });
};

const setMpSliderWidth = (sliderSelector) => {
  const mobileBp = 1024;
  if (window.innerWidth >= mobileBp) {
    sliderSelector.style.width = `${getMpSliderWidth(sliderSelector)}px`;
  } else {
    sliderSelector.style.width = 'auto';
  }
};

const getMpSliderWidth = (sliderSelector) => {
  const distanceLeft = sliderSelector.getBoundingClientRect().left;
  const distanceRight = window.innerWidth - distanceLeft;
  return distanceRight;
};

// фильтр
const onSetFilter = (valueFilter) => {
  const btnfilter = document.querySelector('.btn-primary--catalog-nav-footer');
  btnfilter.disabled = false;
  const textFild1 = document.querySelector('.catalog-nav-footer-btn-text');
  const textFild2 = document.querySelector('.catalog-nav-footer-text-field');
  const itemQuantity = 23;
  const textTeplate1 = `Показать ${itemQuantity} товаров`;
  const textTeplate2 = `показано товаров ${itemQuantity}`;
  btnfilter.classList.add('have-item');
  textFild1.innerHTML = textTeplate1;
  textFild2.innerHTML = textTeplate2;
};

const onToggleCatalogMenu = () => {
  document
    .querySelector('.catalog-nav-wrapper')
    .classList.toggle('catalog-nav-wrapper--show');
  bodyStopScroll();
};

const bodyStopScroll = () => {
  document.querySelector('body').classList.toggle('body-stop-sroll');
};

const products = {
  1: {
    color: 'Голубой',
    images: [
      'product-gal-img.jpg',
      'product-gal-img.jpg',
      'product-gal-img.jpg',
    ],
    cost: '1 000',
  },
  2: {
    color: 'Белый',
    images: [
      'product-gal-img.jpg',
      'product-gal-img.jpg',
      'product-gal-img.jpg',
      'product-gal-img.jpg',
    ],
    cost: '1 234',
  },
  3: {
    color: 'Серый',
    images: [
      'product-gal-img.jpg',
      'product-gal-img.jpg',
      'product-gal-img.jpg',
    ],
    cost: '2 000',
  },
};

const changeSlideColor = (el) => {
  $('.js-btn-change').removeClass('active');
  $(el).addClass('active');
  const id = el.getAttribute('data-productId');
  const costSelector = document.querySelector('#productCost');
  const colorSelector = document.querySelector('#productColor');
  const colorSelectorMobile = document.querySelector('#productColorMobile');
  const colorTitleSelector = document.querySelector('#productColorTitle');

  const productItem = products[+id];
  costSelector.innerHTML = productItem.cost;
  colorSelector.innerHTML = productItem.color;
  colorSelectorMobile.innerHTML = productItem.color;
  colorTitleSelector.innerHTML = productItem.color;
  $('.product-gallery-slider').slick('removeSlide', null, null, true);
  for (image of productItem.images) {
    changeSlides(image);
  }
};

const changeSlides = (img) => {
  const slideTemplate = `<div class="product-gallery-slider-item" data-image="./images/dest/img/${img}"><img src="./images/dest/img/${img}" alt="product" data-rjs="2" /></div>`;
  $('.product-gallery-slider').slick('slickAdd', `${slideTemplate}`);
};
