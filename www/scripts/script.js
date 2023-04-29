$(document).ready(function () {

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


  let servicesCaptionsText = $('.services-caption').text();

  $('.services-caption').each(function () {

    console.log($(this).text());
  });

});
