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
  $('.js-reviews-btn').on('click', function () {
    $(this).addClass('btn-loading');
    $(this).attr('disabled', 'disabled');

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        quantity: 4,
      },
      success: function (res) {
        if (!res.isShowMore) {
          $('.js-reviews-btn').hide();
        }
        createHtmlString(res.reviews);

        $('.js-reviews-btn').removeClass('btn-loading');
        $('.js-reviews-btn').removeAttr('disabled');
      },
      error: function (err) {
        console.log(err);
        console.log('Все пропало - гипс снимают, клиент уезжает!!!');
      }
    });
  });

  function createHtmlString(arr) {
    let string = '';

    arr.forEach(function (elem) {
      string = string + `<div class="reviews-item">
        <img src="${elem.photoUrl}" alt="${elem.photoAlt}" class="reviews-ava" />
        <div class="reviews-text">
          <strong class="reviews-name">${elem.name}</strong>
          <blockquote class="reviews-quote">
            “${elem.text}”
          </blockquote>
        </div>
      </div>`;
    });

    addToPage(string);
  }

  function addToPage(str) {
    $('.js-reviews-wrap').append(str);
  }
});
