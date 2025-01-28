// script.js
$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true, // Enable center mode
      centerPadding: '10%', // Adjust this value for the gap
  });
});