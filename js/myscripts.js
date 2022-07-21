$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      nextArrow: '<div class="next_arrow"></div>',
      prevArrow: '<div class="prev_arrow"></div>',
      arrows: false,
      dots: false,
      pauseOnHover: true,
    });
  });

  $(".b-description").mouseenter(function() {
    $(this).children(".read-more").show();
  })
  
  $(".b-description").mouseleave(function() {
    $(this).children(".read-more").hide();
  })

  const body = document.querySelector('body');
  const blog = document.querySelector('.blog');
  const customerLogos = document.querySelector('.customer-logos');
  const para = document.querySelectorAll('.para');
  const heading2 = document.querySelectorAll('.heading2');
  const heading3 = document.querySelectorAll('.heading3');
  const heading4 = document.querySelectorAll('.heading4');
  const toggle = document.querySelectorAll('.toggle');
  toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    blog.classList.toggle('active');
    customerLogos.classList.toggle('active');
    para.classList.toggle('active');
    heading2.classList.toggle('active');
    heading3.classList.toggle('active');
    heading4.classList.toggle('active');
  }

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
const month = document.querySelectorAll(".month");
const priceToggle = document.querySelector('.price-toggle');    
priceToggle.onclick = function(){
  priceToggle.classList.toggle('active');
  // body.classList.toggle('active');
  // price.innerText = "$500"
  if (price1.innerText === "$29") {
    price1.innerText = "$500";
  } else {
    price1.innerText = "$29";
  }

  if (price2.innerText === "$49") {
    price2.innerText = "$500";
  } else {
    price2.innerText = "$49";
  }

  if (price3.innerText === "$99") {
    price3.innerText = "$500";
  } else {
    price3.innerText = "$99";
  }

  if (month.innerText === "Month") {
    month.innerText = "Year";
  } else {
    month.innerText = "Month";
  }
}