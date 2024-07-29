function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchFor");
  filter = input.value.toUpperCase();
  ul = document.getElementById("illness");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function closeCard() {
  document.getElementById("card").classList.add("hidden");
}

function removeHidden() {
  document.getElementById("card").classList.remove("hidden");
}
function getCard0() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Alzheimer's disease
            <i
              id="close"
              onclick="closeCard()"
              class="fa fa-times"
              aria-hidden="true"
            ></i>
          </h2>

          <div class="details" id="details">
            <p><u>What is it?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://en.wikipedia.org/wiki/Alzheimer%27s_disease"); return false;'
            >
              It is the cause of 60–70% of cases of dementia. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=xBDGgovA1LI"); return false;'
            >
              5 ways to build an Alzheimer’s-resistant brain | Lisa Genova </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=tkIg-SxPzTA"); return false;'
            >
              Alzheimer’s Is Not Normal Aging — And We Can Cure It | Samuel
              Cohen | TED Talks </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.amazon.de/Alzheimers-Solution-revolutionary-prevent-reverse/dp/1471162788/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TPAHFWW3X4T2&dib=eyJ2IjoiMSJ9.puQSLveFEY9_vV_nFbUkVYeiQjS7Uc1Tpbt6mj9G0hCLymaBqZ_V4y3-BAe7QBduNLHGxnH_cXfU8H720f93W5lw_VOvKgcOahXcIRStyoeHZnyjmyak5Nmkwh791g9Nns0UsPziVLvjUyZyOSj1mt5SicAGIJsmPgwu-QH2QLJkaGgArliljgsLf3eKTwUMSbLZ3q2KMr20IygbnjpA6-dpNO9yNfK5hISx-WY4UZc.-JMIf53TLC9NC0Mu5qTnDqjsoX9a49sJd3RoCYgFWWM&dib_tag=se&keywords=alzheimer+ayesha+sherzai&qid=1722241097&sprefix=alzheimer+ayesha+sherzai%2Caps%2C78&sr=8-1"); return false;'
            >
              The Alzheimer's Solution: A revolutionary guide to how you can prevent and reverse memory loss </a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.hugendubel.de/de/taschenbuch/michael_nehls-die_alzheimer_luege-26132234-produkt-details.html"); return false;'
            >
              Die Alzheimer-Lüge<br>Die Wahrheit über eine vermeidbare Krankheit (German)</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.amazon.de/30-Day-Alzheimers-Solution-Definitive-Preventing/dp/0062996959/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=TPAHFWW3X4T2&dib=eyJ2IjoiMSJ9.puQSLveFEY9_vV_nFbUkVYeiQjS7Uc1Tpbt6mj9G0hCLymaBqZ_V4y3-BAe7QBduNLHGxnH_cXfU8H720f93W5lw_VOvKgcOahXcIRStyoeHZnyjmyak5Nmkwh791g9Nns0UsPziVLvjUyZyOSj1mt5SicAGIJsmPgwu-QH2QLJkaGgArliljgsLf3eKTwUMSbLZ3q2KMr20IygbnjpA6-dpNO9yNfK5hISx-WY4UZc.-JMIf53TLC9NC0Mu5qTnDqjsoX9a49sJd3RoCYgFWWM&dib_tag=se&keywords=alzheimer+ayesha+sherzai&qid=1722241241&sprefix=alzheimer+ayesha+sherzai%2Caps%2C78&sr=8-4"); return false;'
            >
             The 30-Day Alzheimer's Solution: The Definitive Food and Lifestyle Guide to Preventing Cognitive Decline </a
            >
            
          </div>`;
}
function getCard1() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Athritis - Rheumatoid arthritis
            <i
              id="close"
              onclick="closeCard()"
              class="fa fa-times"
              aria-hidden="true"
            ></i>
          </h2>

          <div class="details" id="details">
            <p><u>What is it?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://en.wikipedia.org/wiki/Rheumatoid_arthritis"); return false;'
            >
              Rheumatoid arthritis is a long-term autoimmune disorder that primarily affects joints </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=IRU1F1S-KBA"); return false;'
            >
              4 VITAL exercises to prevent arthritis before it's too late </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=3Oq5o-g-vgY"); return false;'
            >
             Stop Arthritic Joint Pain, No Meds Needed! </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=yOeG88uVP2Y"); return false;'
            >
              Können wir Arthritis umkehren und Knorpel nachwachsen lassen? (German)</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.amazon.de/ARTHRITIS-Psoriatic-Rheumatoid-Arthritis-Autoimmunity/dp/1976938945/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17ZODC05M45L9&dib=eyJ2IjoiMSJ9.FNohNftDLaT9nl2j4ZIpRHH-EmFUVEYZf98Bvm7R2YXVCFZSHexM7-Afr2py0_TB_f4fYGsK_gHlPqrDIp9nIuof3lRpcgf14QDFAiW8eAPWYuMA60rK2BoUSYO-2c3JA2b36zbIWr45mn4gFR_JHPQMhRvWSgi-y2nZp1nJ3mEKIZf_v3Od5CKVWplRP21EoggaMA0kMlPe0iGhVPy_3uAKPd1GFkTa-kjBUoqXPiQ.lqIOZG4ImLz33EUGHv0wKCj-X83xoOl-7CL4jGnkOrw&dib_tag=se&keywords=arthritis+how+to+heal&qid=1722241965&sprefix=arthritis+how+to+heal%2Caps%2C77&sr=8-1"); return false;'
            >
              ARTHRITIS - The Best Thing That Ever Happened to Me.: Healing The Pain Of Psoriatic And Rheumatoid Arthritis And How Autoimmunity Can Heal Your Body And Soul </a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.hugendubel.de/de/buch_kartoniert/susan_blum-arthritis_heilen-30688697-produkt-details.html"); return false;'
            >
             Arthritis heilen

Gesunder Darm - gesunde Gelenke: Das individuelle 3-Schritte-Programm zur natürlichen Behandlung rheumatischer Erkrankungen (German) </a
            >
            
          </div>`;
}

function getCard2() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Parkinson's disease
            <i
              id="close"
              onclick="closeCard()"
              class="fa fa-times"
              aria-hidden="true"
            ></i>
          </h2>

          <div class="details" id="details">
            <p><u>What is it?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://en.wikipedia.org/wiki/Parkinson%27s_disease"); return false;'
            >
              It is a long-term neurodegenerative disease of mainly the central nervous system that affects both the motor and non-motor systems of the body. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=zixzEN7qNCM"); return false;'
            >
              How to Prevent Falls in Parkinson's Disease | Parkinson's Foundation </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=12-YpTVrjw4"); return false;'
            >
             S. Korean scientist successfully cures a patient's Parkinson's disease </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=qMZEdTJIrJc"); return false;'
            >
             Is there a cure for Parkinson's disease? How is it treated?</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=RpMEMX-c7VU"); return false;'
            >
              Can Parkinson's Disease Be Reversed? </a><br /><br> 
            <a
              href="#"
              onclick='window.open("https://www.hugendubel.de/de/buch_kartoniert/susan_blum-arthritis_heilen-30688697-produkt-detahttps://www.youtube.com/watch?v=2dwEsJCni-g"); return false;'
            >
            Parkinson's Disease RECOVERY |Parkinson's Disease Exercises | Best Parkinson Treatment in INDIA | PD </a
            >
            <br> <br>
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=VvZnP_njKpI"); return false;'
            >
            1 Minute Parkinson's Exercise That Will Astonish You! You Have To See It To Believe It. </a
            >
             <br> <br>
            <a
              href="#"
              onclick='window.open("https://www.youtube.com/watch?v=Ceg7R3sw7Qs"); return false;'
            >
           New Treatment for Parkinson's Disease Patients - Focused Ultrasound is Safe and Effective </a
            >
          </div>`;
}
