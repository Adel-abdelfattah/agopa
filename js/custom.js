var wid = 992;
$(".list-menu").hover(function(){
  if( $(window).innerWidth() >= wid) { 
    $(this).children('.dropdown-menu').stop(true, false, true).slideToggle(350).delay(3000);
  };
});

$(".nav-link").click(function(){
  if( $(window).innerWidth() < wid) { 
    $(this).children('.dropdown-menu').stop(false, false, false).slideToggle(350).delay(3000);
  }
});


$(".search").click(function(){
  $(".dropdown-search").toggleClass("ddd");
  return false;
});



$(document).click(function() {
  $(".dropdown-search").removeClass("ddd");
}); 

$(".dropdown-search").click(function(e) {
  e.stopPropagation();
});

$("#right-form").click(function(){
  $(".overlay").show();
  $(".right-form").addClass("gh");
});

$(".overlay, .rotate").click(function() {
  $(".overlay").hide();
  $(".right-form").removeClass("gh");
});


$(window).on("scroll", function(){
  var winTop = $(window).scrollTop();
  if (winTop >=140){
    $(".sticky-header").addClass("sticky-header-1");
  }else{
    $(".sticky-header").removeClass("sticky-header-1");
  }
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    loop: true,
    dots: 0
  });
})