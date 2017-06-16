$(function() {
  $(".enter").click(function() {
    $("html,body").animate({
      scrollTop: $("nav").offset().top}, "slow");
    });
});
