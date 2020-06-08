document.addEventListener('DOMContentLoaded', function () {
  $('.product-gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: false,
    dots: true,
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
          dots: true,
          customPaging: function (slider, i) {
            return `<div class="product-gallery-slider-pagin--mobile"></div>`;
          },
        },
      },
    ],
  });
});

// вспомогательные функции

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
  toggleCheckPopop();
};

// const showCheckPopup = () => {
//   const popup = document.querySelector('.product-about-check-block');
//   popup.classList.add('popup-show');
// };
// const hideCheckPopup = () => {
//   const popup = document.querySelector('.product-about-check-block');
//   popup.classList.remove('popup-show');
// };
const toggleCheckPopop = () => {
  const popup = document.querySelector('.popup-about-check-wrapper');
  popup.classList.toggle('popup-show');
  setTimeout(() => popup.classList.remove('popup-show'), 6000);
};
const onAddLike = (el) => {
  el.classList.toggle('btn-heart--full');
};

const getScroll = () => {
  const fixedEl = document.querySelector('.product-about-buy');
  const parent = fixedEl.parentNode;
  changeScrollClass(fixedEl, parent);
  window.onscroll = () => {
    changeScrollClass(fixedEl, parent);
  };
};

const changeScrollClass = (element, parent) => {
  if (getScrollVal(element, parent) <= 0) {
    element.classList.remove('fixed-mobile');
  } else {
    element.classList.add('fixed-mobile');
  }
};

const getScrollVal = (element, parent) => {
  return (
    parent.getBoundingClientRect().top -
    window.screen.height +
    element.offsetHeight
  );
};

const changeTabSize = (el) => {
  document
    .querySelector('#tab1-btn-wrapper')
    .classList.add('tab-size-btn-wrapper--show');
};

const onChangeTabsItem = (el) => {
  // el.classList.remove('tab-size-btn-wrapper--show');
  document.querySelector('#tab1').setAttribute('checked', 'false');
  document.querySelector('#tab2').setAttribute('checked', 'checked');
  changeTabs('tab2');
};

const changeTabLength = (el) => {
  document
    .querySelector('#tab2-btn-wrapper')
    .classList.add('tab-size-btn-wrapper--show');
};
const onTogglePopUpSize = () => {
  document.querySelector('#popup1').classList.toggle('popup-block--show');
  bodyStopScroll();
};

// const initMpSlider = () => {
//   const sliderSelector = document.querySelector(
//     '.product-recommend-slider--mp'
//   );
//   setMpSliderWidth(sliderSelector);
// $('.product-recommend-slider--mp').slick({
//   infinite: false,
//   dots: false,
//   arrows: false,
//   slidesToShow: 1,
//   variableWidth: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         variableWidth: true,
//         infinite: false,
//         arrows: false,
//       },
//     },
//   ],
// });
// window.addEventListener('resize', () => {
//   setMpSliderWidth(sliderSelector);
// });
// };

// const setMpSliderWidth = (sliderSelector) => {
//   const mobileBp = 1024;
//   if (window.innerWidth >= mobileBp) {
//     sliderSelector.style.width = `${getMpSliderWidth(sliderSelector)}px`;
//   } else {
//     sliderSelector.style.width = 'auto';
//   }
// };

// const getMpSliderWidth = (sliderSelector) => {
//   const distanceLeft = sliderSelector.getBoundingClientRect().left;
//   const distanceRight = window.innerWidth - distanceLeft;
//   return distanceRight;
// };

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
    href: 'product1',
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
    href: 'product2',
  },
  3: {
    color: 'Серый',
    images: [
      'product-gal-img.jpg',
      'product-gal-img.jpg',
      'product-gal-img.jpg',
    ],
    cost: '2 000',
    href: 'product3',
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
  history.pushState(null, null, productItem.href.toString());
  costSelector.innerHTML = productItem.cost;
  colorSelector.innerHTML = productItem.color;
  colorSelectorMobile.innerHTML = productItem.color;
  colorTitleSelector.innerHTML = productItem.color;
  refreshStatePage();
  $('.product-gallery-slider').slick('removeSlide', null, null, true);
  for (image of productItem.images) {
    changeSlides(image);
  }
};
const refreshStatePage = () => {
  const checkItems = document.querySelectorAll('.btn-tab-size:checked');
  const activBtnsWrapper = document.querySelectorAll(
    '.tab-size-btn-wrapper--show'
  );
  for (checkItem of checkItems) {
    checkItem.checked = false;
  }
  for (activBtn of activBtnsWrapper) {
    activBtn.classList.remove('tab-size-btn-wrapper--show');
  }
};
const changeSlides = (img) => {
  const slideTemplate = `<div class="product-gallery-slider-item" data-image="./images/dest/img/${img}"><img src="./images/dest/img/${img}" alt="product" data-rjs="2" /></div>`;
  $('.product-gallery-slider').slick('slickAdd', `${slideTemplate}`);
};

const onTogglePopUpFb = () => {
  document
    .querySelector('.popup-fast-buy')
    .classList.toggle('popup-fast-buy--show');
  bodyStopScroll();
};

const onTogglePromocode = () => {
  const btn = document.querySelector('.js-form-toggle-btn');
  const form = document.querySelector('.js-basket-promocode-form');
  btn.classList.toggle('btn-promocode-block--hide');
  form.classList.toggle('basket-promocode-form--hide');
  document.querySelector('#promocode-input').focus();
};
const onCounterMinus = (id) => {
  let val = getCounterVal(id);
  if (val > 0) {
    --val;
  }
  setCounterVal(id, val);
};
const onCounterPlus = (id) => {
  let val = getCounterVal(id);
  ++val;
  setCounterVal(id, val);
};
const getCounterVal = (id) => {
  return document.getElementById(id).value;
};
const setCounterVal = (id, val) => {
  document.getElementById(id).value = val;
};

const onChangeLengthBasket = () => {};
const onChangeSizeBasket = () => {};

$(document).on('click', function (e) {
  const parent = $('.spoiler-content--opened').parent('li');
  if ($(e.target).closest(parent).length) return;
  $('.spoiler-content--opened').slideToggle(200);
  $('.spoiler-content--opened').removeClass('spoiler-content--opened');
  $('.spoiler--opened').removeClass('spoiler--opened');
});

const spoilerToogle = (el) => {
  if (!$(el).hasClass('spoiler--opened')) {
    $('.btn-spoiler-catalog').removeClass('spoiler--opened');
    $('.spoiler-content--opened').slideToggle(200);
    $('.spoiler-content--opened').removeClass('spoiler-content--opened');
    $(el).toggleClass('spoiler--opened');

    var animateEL = $(el).siblings('.spoiler-content');
    animateEL.addClass('spoiler-content--opened');
    animateEL.slideToggle(200);
  } else {
    $(el).removeClass('spoiler-content--opened');
    $(el).siblings('.spoiler-content').slideToggle(200);
    $(el).siblings('.spoiler-content').removeClass('spoiler-content--opened');
  }
};

const onToggleSearch = () => {
  const searchSelector = document.querySelector('.main-header-search-inner');
  searchSelector.classList.toggle('main-header-search-inner--show');
  document.querySelector('#search-input').focus();
};

$('#search-input').on('input', function () {
  const resultSelector = document.querySelector('.main-header-search-result');
  var input = $(this);
  var val = input.val();
  if (val) {
    resultSelector.classList.add('main-header-search-result--show');
  } else {
    resultSelector.classList.remove('main-header-search-result--show');
  }
});

const onTogglePopUpReturn = () => {
  document.querySelector('#popup1').classList.toggle('popup-block--show');
  bodyStopScroll();
};

const showAuthForm = (formId) => {
  const activeForm = document.querySelector('.popup-auth-form--show');
  activeForm.classList.remove('popup-auth-form--show');
  document.querySelector(`#${formId}`).classList.add('popup-auth-form--show');
};

const onToggleAuth = () => {
  document.querySelector('.popup-auth').classList.toggle('popup-auth--show');
};
