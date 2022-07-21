const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    //now on clicking button then within the article toggle the class on the actual parent (question)
    question.classList.toggle("show-text");
  });
});

$(document).ready(function () {
  $(".testimonial").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
  });
});

const body = document.querySelector('body');
const para = document.querySelectorAll('.para');
const heading2 = document.querySelectorAll('.heading2');
const heading4 = document.querySelectorAll('.heading4');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  para.classList.toggle('active');
  heading2.classList.toggle('active');
  heading4.classList.toggle('active');
}