const cellArray = [
  { name: "red blood cells", duration: "4 months" },
  { name: "white blood cells", duration: "one year" },
  { name: "skin cells", duration: " 2- 4 weeks" },
  { name: "stomach", duration: "4 days" },
  { name: "stomach cells", duration: "5 minutes" },
  { name: "pancreas", duration: "50 days" },
  { name: "sperm cells", duration: "3 days" },
  { name: "fat cells", duration: "9 - 10 years" },
  { name: "bones", duration: "one decade" },
  { name: "liver", duration: "150 days" },
  { name: "taste buds", duration: "10 days" },
  {
    name: "inner lens cells in eye",
    duration: "..well it will never happen that they start ",
  },
];
let index = 0;
function nextQuestion() {
  ++index;
  if (index > cellArray.length - 1) {
    index = 0;
  }
  document.getElementById("kindOfCell").textContent = cellArray[index].name;
  document.getElementById("time").textContent = cellArray[index].duration;
}

function showSolution() {
  document.getElementById("time").classList.remove("time");
}

const hoverElement = document.getElementById("hover");
hoverElement.addEventListener("mouseleave", () => {
  document.getElementById("time").classList.add("time");
});
