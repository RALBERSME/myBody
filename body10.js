function closeModule() {
  document.getElementById("module").classList.add("hidden");
  document.getElementById("container").classList.remove("hidden");
}
let side1 = document.querySelector(".side1");
let side2 = document.querySelector(".side2");

window.addEventListener("scroll", () => {
  side1.style.left = -window.scrollY + "px";
  side2.style.left = window.scrollY + "px";
});
