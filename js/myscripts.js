$(document).ready(function () {
  $(".user-reviews").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
const userReviews = document.querySelector('.user-reviews');
const para = document.querySelectorAll('.para');
const heading2 = document.querySelectorAll('.heading2');
const heading3 = document.querySelectorAll('.heading3');
const heading4 = document.querySelectorAll('.heading4');
const toggle = document.querySelectorAll('.toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  blog.classList.toggle('active');
  userReviews.classList.toggle('active');
  para.classList.toggle('active');
  heading2.classList.toggle('active');
  heading3.classList.toggle('active');
  heading4.classList.toggle('active');
  }

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
const month1 = document.querySelector(".month1");
const month2 = document.querySelector(".month2");
const month3 = document.querySelector(".month3");
const priceToggle = document.querySelector('.price-toggle');    
priceToggle.onclick = function(){
  priceToggle.classList.toggle('active');
  if (price1.innerText === "$29") {
    price1.innerText = "$299";
  } else {
    price1.innerText = "$29";
  }

  if (price2.innerText === "$49") {
    price2.innerText = "$599";
  } else {
    price2.innerText = "$49";
  }

  if (price3.innerText === "$99") {
    price3.innerText = "$1,999";
  } else {
    price3.innerText = "$99";
  }

  if (month1.innerText === "Month") {
    month1.innerText = "Year";
  } else {
    month1.innerText = "Month";
  }

  if (month2.innerText === "Month") {
    month2.innerText = "Year";
  } else {
    month2.innerText = "Month";
  }

  if (month3.innerText === "Month") {
    month3.innerText = "Year";
  } else {
    month3.innerText = "Month";
  }
}