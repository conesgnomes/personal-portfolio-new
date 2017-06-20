$(function() {

  // background image on header

  // $(window).scroll(function() {
  //   var scrolledY = $(window).scrollTop();
  //   $('header').css('background-position', 'left ' + ((scrolledY)) + 'px');
  // });

  if ($("#js-parallax-window").length) {
    parallax();
  }
// });

  $(window).scroll(function(e) {
    if ($("#js-parallax-window").length) {
      parallax();
    }
  });

  function parallax(){
    if( $("#js-parallax-window").length > 0 ) {
      var plxBackground = $("#js-parallax-background");
      var plxWindow = $("#js-parallax-window");

      var plxWindowTopToPageTop = $(plxWindow).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

      var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
      var windowInnerHeight = window.innerHeight;
      var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
      var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
      var plxSpeed = 0.35;

      plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
    }
  };

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
      scrollTop: $(".bio").offset().top-134}, "slow");
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
