$(document).ready(function () {

  // Открытие/закрытие меню
  // let isClose = true;

  let $burger = $('.js-header-burger');

  $burger.on('click', function () {

    $('.js-nav').slideToggle();

    // if (isClose) {
    //   $('.js-nav').slideDown();
    //   isClose = false;
    // } else {
    //   $('.js-nav').slideUp();
    //   isClose = true;
    // }
  });


  // Аккордионы
  let prevBtn;

  $('.js-accordion-btn').on('click', function () {
    if (this === prevBtn) {
      $(this).next().slideToggle();
      return;
    }

    $(this).next().slideDown();
    $(prevBtn).next().slideUp();
    prevBtn = this;
  });

  // Табы в контактах
  $('.js-tabs-link').on('click', function (event) {
    event.preventDefault();
    let index = $(this).index('.js-tabs-link');

    console.log(index);

    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.js-contacts-item').removeClass('active');
    $('.js-contacts-item').eq(index).addClass('active');
  });


  // Фильтры в работах

  $('.js-works-filter').on('click', function (event) {
    event.preventDefault();

    $('.js-works-filter').removeClass('active');
    $(this).addClass('active');

    let filter = $(this).data('filter');

    if (filter === 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function () {
      let type = $(this).data('type');

      if (filter === type) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


  // Карусель на странице Works.html
  $('.js-slider').slick();


  // Ajax запрос отзывов
  $.ajax({
    type: 'POST',
    url: '../jsons/reviews.json',
    data: {
      quantity: 4
    },
    success: function (res) {
      console.log('Ура работает!');
      console.log(res);
    },
    error: function (err) {
      console.log(err);
      console.log('Все пропало - гипс снимают, клиент уезжает!!!');
    }
  });

});
