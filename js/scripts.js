$(function() {
  $(".enter").click(function() {
    $("html,body").animate({
      scrollTop: $("nav").offset().top}, "slow");
    });

  //   // Check the initial Poistion of the Sticky Header
  // var stickyHeaderTop = $('.nav-bar').offset().top;
  //
  // $(window).scroll(function(){
  //   if( $(window).scrollTop() > stickyHeaderTop ) {
  //     $('.nav-bar').css({position: 'fixed', top: '0px', justify-content: 'space-between'});
  //     $('.stickyalias').css('display', 'block');
  //   } else {
  //     $('.nav-bar').css({position: 'static', top: '0px'});
  //     $('.stickyalias').css('display', 'none');
  //   }
  // });
});
