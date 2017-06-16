$(function() {

  // auto scroll on 'enter' button click

  $(".enter").click(function() {
    $("html,body").animate({
      scrollTop: $("nav").offset().top}, "slow");
    });

  var stickyHeaderTop = $('.nav-bar').offset().top;

  // nav bar background color on scroll

  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyHeaderTop ) {
      $('.nav-bar').css({background: 'rgba(255, 255, 255, 0.6)'});
    } else {
      $('.nav-bar').css({background: 'none'});
    }
  });

  // hamburger menu animation

  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
