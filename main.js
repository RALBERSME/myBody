const ape = document.getElementById("ape");
const slideshow = document.getElementById("slideshow");
const oops = document.getElementById("oops");
const ball = document.getElementById("ball");
const weight = document.getElementById("weight");

/* slideshow */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

/* enter and remove elements after certain time */
setTimeout(() => {
  ape.style.animation = "headRolling 4s 0s ease-out forwards";
  oops.style.opacity = "1";
}, 1000);

setTimeout(() => {
  slideshow.style.animation = "fadeIn 3s 1s linear forwards";
  oops.style.opacity = "0";
  ball.style.opacity = ".3";
  weight.style.opacity = ".3";
}, 5000);
setTimeout(() => {
  ball.style.opacity = "1";
  weight.style.opacity = "1";
}, 9000);
