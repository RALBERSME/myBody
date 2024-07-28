function explainOil() {
  const oilDetails = document.getElementById("oilDetails");
  oilDetails.classList.remove("hidden");
  oilDetails.innerHTML = `<span class="oilName2"
        >Oils explained<br />
        Oils have different structures:
        <br />
        Flaxseed oil is O<sub>3</sub>;<br />
        Sunflower Oil is O<sub>6</sub>;<br />
        Olive and Almond are O<sub>9</sub>;<br />
        they all have double bonds <br />and are therefore unsaturated;
        <br />
        coconut oil in difference is a saturated fat. <br />
        But what's this all about? Barbara will explain it to you:<br /> 
        <a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=slWOfJzWAf8&list=PLLla-zjIR4DZimirAyK_NL2K51pqgtVgV&index=8"); return false;'
          >click for <br />Fantastic Fats
        </a></span
      >`;
}

function goodFats() {
  const oilDetails = document.getElementById("oilDetails");
  oilDetails.classList.remove("hidden");
  oilDetails.innerHTML = `<span class="oilName2"
        >The good fats<br />
        Do you want to learn more about 
        <br />
        Flaxseed, Chia, Olive, Almond, ...etc oil? <br>
        The following video clips will provide you with more info:<br /><br />
        <a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=_n38YWIrKrY"); return false;'
          >click for <br />12 Oils Ranked by Health Effect
        </a>
        <br><br /><a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=pljQrjiDC9Q"); return false;'
          >click for <br />Top 10 Cooking Oils...<br>The Good, Bad and Toxic!
        </a>
        </span
      >`;
}

function transFats() {
  const oilDetails = document.getElementById("oilDetails");
  oilDetails.classList.remove("hidden");
  oilDetails.innerHTML = `<span class="oilName2"
        >The risky fats<br />
                    Trans fats can be found in<br> margarine, vegetable shortening,<br> fried foods and crackers, biscuits and pies.  <br>
                The following video clips explain why they are risky:<br /><br />
        <a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=7fgXd7I52ik"); return false;'
          >click for <br />Avoid This HIDDEN Source of Trans Fats 
        </a>
        <br><br /><a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=v372Fz3QQ-w"); return false;'
          >click for <br />The truth about trans fat 
        </a>
        </span
      >`;
}

function hiddenChampion() {
  const oilDetails = document.getElementById("oilDetails");
  oilDetails.classList.remove("hidden");
  oilDetails.innerHTML = `<span class="oilName2"
        >The hidden champion<br />
        Have you ever heard of castor oil?
        <br />
        Certainly in connection with digestion. <br>
        However, castor oil can even more!<br />
        The following video clips might<br> surprise you of its power:<br /><br>
        <a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=qOCWDo0zVGw"); return false;'
          >click for <br />Top 12 Castor Oil Benefits and Uses
        </a>
        <br><br><a
          href="#"
          onclick='window.open("https://www.youtube.com/watch?v=bVGEkusDIHQ"); return false;'
          >click for <br />What they DON'T tell<br> you about it !
        </a>
        </span
      >`;
}
