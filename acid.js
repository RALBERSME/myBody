const products = [
  {
    name: "lemon",
    acid: false,
    alkaline: true,
  },
  {
    name: "wheat",
    acid: true,
    alkaline: false,
  },
  {
    name: "vegetables",
    acid: false,
    alkaline: true,
  },
  {
    name: "quinoa",
    acid: false,
    alkaline: true,
  },
  {
    name: "meat",
    acid: true,
    alkaline: false,
  },

  {
    name: "sugar",
    acid: true,
    alkaline: false,
  },
  {
    name: "spelt",
    acid: false,
    alkaline: true,
  },
  {
    name: "alcohol",
    acid: true,
    alkaline: false,
  },

  {
    name: "nuts",
    acid: true,
    alkaline: false,
  },
  {
    name: "almond",
    acid: false,
    alkaline: true,
  },
  {
    name: "soy",
    acid: false,
    alkaline: true,
  },
  {
    name: "grains",
    acid: true,
    alkaline: false,
  },

  {
    name: "caffeine",
    acid: true,
    alkaline: false,
  },

  {
    name: "aged cheese",
    acid: true,
    alkaline: false,
  },
  {
    name: "lentils",
    acid: false,
    alkaline: true,
  },
  {
    name: "seeds",
    acid: false,
    alkaline: true,
  },
];
let count = 0;
function showNext() {
  const product = document.getElementById("product");
  if (localStorage.getItem("count")) {
    count = Number(localStorage.getItem("count"));
  } else {
    count = 0;
  }

  if (count < products.length - 1) {
    count = count + 1;
  } else {
    count = 0;
  }
  localStorage.setItem("count", count);
  localStorage.getItem("count");
  product.textContent = products[count].name;
  const acidBox = document.getElementById("acid");
  const alkBox = document.getElementById("alk");
  acidBox.classList.remove("falseAnswer");
  alkBox.classList.remove("falseAnswer");
  document.getElementById("btnNext").classList.add("hidden");
}

function showResult() {
  document.getElementById("btnNext").classList.add("hidden");
  if (localStorage.getItem("count")) {
    count = Number(localStorage.getItem("count"));
  } else {
    count = 0;
  }
  localStorage.setItem("count", count);
  const acidBox = document.getElementById("acid");
  const alkBox = document.getElementById("alk");
  if (products[count].acid === false) {
    acidBox.classList.add("falseAnswer");
  } else {
    console.log("alk");
    alkBox.classList.add("falseAnswer");
  }

  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
let area = document.querySelectorAll(".area");
let element = document.querySelector(".element");
const sound = new Audio("shortsound.mp3");

function boxEnter() {
  this.classList.add("dragstart");
  this.classList.add("hide");
}

function boxLeave() {
  this.classList.remove("dragstart", "hide");
}

function dragEnter(event) {
  event.preventDefault();
}

function dragOver(event) {
  event.preventDefault();
}

function dropBox() {
  this.append(element);
  sound.play();
}

element.addEventListener("dragstart", boxEnter);
element.addEventListener("dragend", boxLeave);

for (const x of area) {
  x.addEventListener("dragenter", dragEnter);
  x.addEventListener("dragover", dragOver);
  x.addEventListener("drop", dropBox);
}
