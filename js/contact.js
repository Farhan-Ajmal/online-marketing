const body = document.querySelector('body');
// const para = document.querySelectorAll('.para');
const heading2 = document.querySelectorAll('.heading2');
// const heading4 = document.querySelectorAll('.heading4');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
//   para.classList.toggle('active');
  heading2.classList.toggle('active');
//   heading4.classList.toggle('active');
}