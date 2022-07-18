$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      nextArrow: '<div class="next_arrow"></div>',
      prevArrow: '<div class="prev_arrow"></div>',
      arrows: false,
      dots: true,
      pauseOnHover: true,
    });
  });

  $(".b-description").mouseenter(function() {
    $(this).children(".read-more").show();
  })
  
  $(".b-description").mouseleave(function() {
    $(this).children(".read-more").hide();
  })


