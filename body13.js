let numberClicks = 0;
let distance = -800;

function goNext() {
  numberClicks++;
  let moveDistance = numberClicks * distance;
  document.querySelectorAll(".unit").forEach((unit) => {
    unit.style.transform = `translateX(${moveDistance}px)`;
    unit.style.transitionDuration = "3s";
  });
}
