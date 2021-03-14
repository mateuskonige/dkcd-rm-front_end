$(document).ready(function () {
  $(".menu").hide();

  $(".nav-mobile button i").on("click", function () {
    $(".menu").slideToggle("600");
  });
});
