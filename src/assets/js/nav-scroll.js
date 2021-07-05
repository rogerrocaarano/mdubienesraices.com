$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".transparencia-header").addClass("scrolled");
    } else {
      $(".transparencia-header").removeClass("scrolled");
    }
  });
});
