  $('.main-nav__toggle').on('click', function() {
    $('.popup').addClass('popup--active');
     $('.popup__block').addClass('popup__block--active');
  });

$('.popup__btn').on('click', function() {
    $('.popup').removeClass('popup--active');
     $('.popup__block').removeClass('popup__block--active');
  });