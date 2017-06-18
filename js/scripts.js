$(function() {

  // auto scroll to bio on 'enter' button click

  $(".enter").click(function() {
    $("html body").animate({
      scrollTop: $("nav").offset().top}, "slow");
    });

  // auto scroll to projects on down-chevron click

  $(".chevron").click(function() {
    $("html body").animate({
      scrollTop: $(".projects-top").offset().top-140}, "slow");
    });

    // auto scroll to projects on projects-link click

    $(".projects-link").click(function() {
      $("html body").animate({
        scrollTop: $(".projects-top").offset().top-140}, "slow");
      });

  // auto scroll to bio on bio-link click

  $(".bio-link").click(function() {
    $("html body").animate({
      scrollTop: $(".bio").offset().top-135}, "slow");
    });


  // nav bar background color on scroll

  var stickyHeaderTop = $('.nav-bar').offset().top-100;

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

});
