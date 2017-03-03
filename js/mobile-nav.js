$(function(){

  var query = 500;

  function checkSize() {
    screenWidth = $(window).width();
    if (screenWidth >= query) {
      $('.mobile-icon').hide();
  		$('.main-nav').removeAttr('style');
    }
    else {
      $('.mobile-icon').show();
  		$('.main-nav').hide();
    }
  }
  checkSize();

  $(window).resize(function () {
    checkSize();
  });

  $('.mobile-icon a').click(function (event) {
    event.preventDefault();
    $('.main-nav').toggle();
  });
});
