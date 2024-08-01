const productArray = [
  {
    product: "Milk",
    productProtein:
      "One cup (246 mL) of dairy milk provides 8.32 g of protein.",
    productDescription:
      "It's a good source of high quality protein, and it's high in vitamins           and minerals, like calcium, phosphorus, and riboflavin (vitamin B2) - however if you suffer lactose intolerance void dairy milk.",
  },
  {
    product: "Egg",
    productProtein: "One large egg (50 g) provides 6.3 g of protein.",
    productDescription:
      "Eggs are an excellent source of vitamins, minerals, healthy fats, and antioxidants; the egg white is almost pure protein. Eat the whole egg, as it provides additional minerals, antioxidants, fats and vitamins.",
  },
  {
    product: "Almonds",
    productProtein: "One ounce (28.35 g) of almonds provides 6 g of protein.",
    productDescription:
      "They are rich in fiber, vitamin E, manganese, and magnesium as well as high in plant-based protein. Their consumption might decrease cholestrol which is among others responsible for heart disease and high blood pressure.",
  },
  {
    product: "Chicken breast",
    productProtein:
      "One half of a chicken breast (86 g) provides 26.7 g of protein.",
    productDescription:
      "They have lots of protein as well as a variety of B vitamins, plus minerals like zinc and selenium.",
  },
  {
    product: "Cottage cheese",
    productProtein:
      "One cup (226 g) of cottage cheese provides 28 g of protein.",
    productDescription:
      "It is high in protein while low in fat and calories. Cottage cheese is rich in calcium, selenium, vitamin B12, B2 and phosphorus.",
  },
  {
    product: "Greek yogurt",
    productProtein: "One 7-ounce (200-g) container provides 19.9 g.",
    productDescription:
      "Greek yogurt is a very thick type of yogurt. It is high in protein and provides calcium, vitamin B12, vitamin A, selenium and zinc.",
  },
  {
    product: "Lentils",
    productProtein:
      "100 g (about 1/2 cup) of cooked lentils provides 9.02 g of protein.",
    productDescription:
      "Lentils are among the richest sources of plant-based protein. They also provide fibrer, folate, magnesium, potassium, iron, copper and manganese.",
  },
  {
    product: "Lean beef",
    productProtein:
      "A 3-ounce (85-g) serving of lean beef provides 24.6 g of protein.",
    productDescription:
      "It is a rich in protein, high in bioavailable iron, zinc, selenium, and vitamins B12 and B6.",
  },
  {
    product: "Fish",
    productProtein:
      "Half a salmon fillet (124 g) provides 30.5 g of protein, while a cod fillet (180 g) provides 41 g of protein.",
    productDescription:
      "Fish is high in protein and provides several important vitamins and minerals, like iodine, selenium, and vitamin B12. Accordingly eating fish tends to lower the risk of heart disease and type 2 diabetes. Fatty fish is high in omega-3 fats.",
  },
  {
    product: "Pumpkin Seed",
    productProtein: "100 g dried pumpkin seeds contains 37.1 g of protein.",
    productDescription:
      "Pumpkin Seeds are rich in magnesium, fiber and fats. They shall reduce breast cancer risk, my support bladder and prostate health and support healthy sleep.",
  },
];

function showDetails(num) {
  document.getElementById("container").innerHTML = `
 <div id="infoText">
            <h2 id="product">${productArray[num].product}</h2>
        <br />
        <h3 id="productProtein">
          ${productArray[num].productProtein}
        </h3>
        <br />
        <h4 id="productDescription">
          ${productArray[num].productDescription}
        </h4><br>
        <a href="body6.html">back to main page</a>
        </div>
`;
}
