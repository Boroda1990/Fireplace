$(document).ready(function(){
  $('.our-work-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      }
    ]
  });
});


$('.our-work-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
  $(".our-work-slider__counter").text(counter);
});




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать далее";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "inline";
  }
}

$(function() {
  var $modal = $('#modal'),
    $map = $('#map');
  $modal.on('shown.bs.modal', function () {
    google.maps.event.trigger($map[0], 'resize');
  });
});





