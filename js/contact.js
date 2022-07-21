const body = document.querySelector('body');
const heading2 = document.querySelectorAll('.heading2');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  heading2.classList.toggle('active');
}