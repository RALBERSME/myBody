const infoText = document.getElementById("infoText");

const dataArray = [
  `<h1 id="time">Ancient Egypt</h1>
        <a
                   href="#"
          onclick='window.open("https://www.youtube.com/watch?v=4e-ZQ6D-Kt8"); return false;'
          >Hygiene in ancient Egypt! </a
        >`,
  `<h1 id="time">Ancient Rome</h1>
        <a
                  href="#"
          onclick='window.open("https://www.youtube.com/watch?v=7VVN66BA4Fw"); return false;'
          >What Hygiene Was Like for a Roman Emperor? </a
        >`,
  `<h1 id="time">Native America</h1>
        <a
                    href="#"
          onclick='window.open("https://www.youtube.com/watch?v=UnU1JDbp7HM"); return false;'
          >The Surprising Secrets of Native American Hygiene! </a
        >`,
  `<h1 id="time">Colonial America</h1>
        <a
                    href="#"
          onclick='window.open("https://www.youtube.com/watch?v=3vgC7CFbSW0"); return false;'
          >What Hygiene Was Like in Colonial America? </a
        >`,
  `<h1 id="time">Middle Ages</h1>
        <a
           href="#"
          onclick='window.open("https://www.youtube.com/watch?v=MO0Bvg0c3m0"); return false;'
          >What Hygiene Was Like For Poor Medieval Peasants? </a
        >`,
  `<h1 id="time">Black Plague</h1>
        <a
           href="#"
          onclick='window.open("https://www.youtube.com/watch?v=Ti62EYoII48"); return false;'
          >What Hygiene Was Like During the Black Plague? </a
        >`,
  `<h1 id="time">Wild West</h1>
        <a
                   href="#"
          onclick='window.open("https://www.youtube.com/watch?v=nOg00Q08Wek"); return false;'
          >What Was Hygiene Like In The Wild West? </a
        >`,
  `<h1 id="time">At the Court of Versailles</h1>
        <a
                 href="#"
          onclick='window.open("https://www.youtube.com/watch?v=a_EH2CHS_-Q"); return false;'
          >What Hygiene Was Like at The Court of Versailles? </a
        >`,
  `<h1 id="time">Industrial Revolution</h1>
        <a
                   href="#"
          onclick='window.open("https://www.youtube.com/watch?v=Uan6pbm_nfQ"); return false;'
          >What Hygiene Was Like During the Industrial Revolution? </a
        >`,
  `<h1 id="time">Victorian Era</h1>
        <a
           href="#"
          onclick='window.open("https://www.youtube.com/watch?v=EnYzMu8OiOQ"); return false;'
          >What Was Hygiene Like In The Victorian Era? </a
        >`,
  `<h1 id="time">Great Depression</h1>
        <a
                   href="#"
          onclick='window.open("https://www.youtube.com/watch?v=2rtEZSvTv9w"); return false;'
          >What Hygiene Was Like During The Great Depression? </a
        >`,
];

function textSelect(elementText) {
  let num = Number(elementText);
  infoText.innerHTML = dataArray[num - 1];
}
