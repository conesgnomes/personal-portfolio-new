$(function() {

  // auto scroll on 'enter' button click

  $(".enter").click(function() {
    $("html,body").animate({
      scrollTop: $("nav").offset().top}, "slow");
    });

  var stickyHeaderTop = $('.nav-bar').offset().top-100;

  // nav bar background color on scroll

  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyHeaderTop ) {
      $('.nav-bar').css({background: 'rgba(244, 244, 244, 0.8)'});
    } else {
      $('.nav-bar').css({background: 'none'});
    }
  });

  // hamburger menu animation

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('ul').toggleClass('open');
	});

  // mobile menu toggle



});
