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
function getCard3() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Fever
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
              onclick='window.open("https://en.wikipedia.org/wiki/Fever"); return false;'
            >
              Fever is a rise in body temperature, usually caused by infection. There is no single agreed-upon upper limit for normal temperature: sources use values ranging between 37.2 and 38.3 °C (99.0 and 100.9 °F) in humans. Fevers do not typically go higher than 41 to 42 °C (106 to 108 °F).</a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/fever#prevention"); return false;'
            ><u>Limiting exposure to infectious agents:</u> 
                  Wash your hands often, especially before eating, after using the toilet, and after being around large numbers of people.<br>
    <br>
    Avoid touching your nose, mouth, or eyes. Doing so makes it easier for viruses and bacteria to enter your body and cause infection.
    <br>
    Avoid sharing cups, glasses, and eating utensils with other people. </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/how-to-break-a-fever"); return false;'
            >
             What You Need to Know About Breaking a Fever</a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://vicks.com/en-us/treatments/how-to-treat-the-flu/how-to-reduce-a-fever-associated-with-cold-or-flu"); return false;'
            >
              10 Ways to Reduce Fever from a Cold or Flu</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.medicinenet.com/how_do_you_break_a_fever_naturally/article.htm"); return false;'
            >
              How Do You Break a Fever Naturally? </a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.farmersalmanac.com/10-natural-ways-treat-fever"); return false;'
            >
            10 Natural Ways To Treat A Fever

 </a
            >
            
          </div>`;
}

function getCard4() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
           Spinal disc herniation
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
              onclick='window.open("https://en.wikipedia.org/wiki/Spinal_disc_herniation"); return false;'
            >
              A spinal disc herniation is an injury to the intervertebral disc between two spinal vertebrae, usually caused by excessive strain or trauma to the spine. It may result in back pain, pain or sensation in different parts of the body, and physical disability. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.spinegroupbeverlyhills.com/blog/5-tips-to-reduce-your-risks-for-a-herniated-disc"); return false;'
            >Exercise regularly, practice safe lifting, use good posture, rethink your sleeping position, void smoking.<br>
    <br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/pain-management/treatments-for-herniated-disk"); return false;'
            >What Are the Treatments for a Herniated Disk?
             </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://nyulangone.org/conditions/herniated-disc/treatments/nonsurgical-treatments-for-herniated-disc"); return false;'
            >
              Nonsurgical Treatments for Herniated Disc</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.ncbi.nlm.nih.gov/books/NBK279469/"); return false;'
            >
              Slipped disc: Learn More – Slipped disc – Non-surgical treatment options</a>
            <br /> <br />
            <a
              href="#"
              onclick='window.open("https://my.clevelandclinic.org/health/diseases/12768-herniated-disk"); return false;'
            >
              Herniated Disk (Slipped, Ruptured or Bulging Disk)</a>
              <br /> <br />
            <a
              href="#"
              onclick='window.open("https://orthoinfo.aaos.org/en/diseases--conditions/herniated-disk-in-the-lower-back/"); return false;'
            >
              Herniated Disk in the Lower Back</a>
          </div>`;
}

function getCard5() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
           Diabetes mellitus
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
              onclick='window.open("https://en.wikipedia.org/wiki/Diabetes"); return false;'
            >
              Diabetes mellitus is a group of common endocrine diseases characterized by sustained high blood sugar levels.Diabetes is due to either the pancreas not producing enough insulin, or the cells of the body becoming unresponsive to the hormone's effects. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/in-depth/diabetes-prevention/art-20047639"); return false;'
            >Lose extra weight, be more physically active, eat healthy plant foods, eat healthy fats, skip fad diets and make heathier choices, reduce sugar and other carbohydrates. <br>
    <br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.medicalnewstoday.com/articles/323627"); return false;'
            >Diabetes types and treatments
             </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.healthpartners.com/blog/why-diabetic-wounds-wont-heal-and-tips-to-treat-them/"); return false;'
            >
             Diabetic wounds that won’t heal? Learn why you’re healing slowly and how to speed up the process.</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/diabetes/can-you-reverse-type-2-diabetes"); return false;'
            >
              Can You Reverse Type 2 Diabetes?</a>
            <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.stamfordhealth.org/healthflash-blog/diabetes-and-endocrine/type-2-diabetes-natural-remedies/"); return false;'
            >
              10 Natural Home Remedies for Type 2 Diabetes</a>
              <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.hackensackmeridianhealth.org/en/healthu/2021/07/16/how-diabetics-should-treat-cuts-and-scrapes"); return false;'
            >
              How Diabetics Should Treat Cuts and Scrapes</a>
          </div>`;
}
function getCard6() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
           Burnout (Occupational)
            <i
              id="close"
              onclick="closeCard()"
              class="fa fa-times"
              aria-hidden="true"
            ></i>
          </h2>

          <div class="details" id="details">
            <p><u>What is it?</u></p>
            
            <a
              href="#"
              onclick='window.open("https://en.wikipedia.org/wiki/Occupational_burnout"); return false;'
            ><small>
              The ICD-11 of the World Health Organization (WHO) describes occupational burnout as an occupational phenomenon resulting from chronic workplace stress that hasn't been successfully managed, with symptoms characterized by "feelings of energy depletion or exhaustion; increased mental distance from one’s job, or feelings of negativism or cynicism related to one's job; and reduced professional efficacy.</small> </a
            ><br /><br />

            
            
            <a
              href="#"
              onclick='window.open("https://www.mindtools.com/apt37nj/avoiding-burnout"); return false;'
            ><small><u>Be aware of its symptoms:</u> <br>
                Having a negative and critical attitude at work. Dreading going into work, and wanting to leave once you're there.
    Having low energy, and little interest at work.
    Having trouble sleeping.
    Being absent from work a lot.
    Having feelings of emptiness.
    Experiencing physical complaints such as headaches, illness, or backache.
        Having thoughts that your work doesn't have meaning or make a difference.
    Pulling away emotionally from your colleagues or clients.
    Feeling that your work and contribution goes unrecognized.
     You're thinking of quitting work, or changing roles.</small> <br><br>
     <p><u>How to prevent?</u></p>
    Work with purpose, perform a job analysis, give to others, take control, exercise regularly, learn to manage stress.
    <br><br />
               <p><u>How to heal?</u></p>
            
            <a
              href="#"
              onclick='window.open("https://www.forbes.com/sites/tracybrower/2023/04/10/how-to-recover-from-burnout-new-study-hold-surprises/"); return false;'
            >How To Recover From Burnout: New Study Holds Surprises
             </a
            ><br>
            <a
              href="#"
              onclick='window.open("https://health.clevelandclinic.org/how-to-recover-from-burnout"); return false;'
            >
            12 Ways To Recover From Burnout</a
            ><br>
            <a
              href="#"
              onclick='window.open("https://www.betterup.com/blog/how-to-recover-from-burnout"); return false;'
            >
              14 tips to deal with from burnout and love your life again</a>
           <br>
            <a
              href="#"
              onclick='window.open("https://www.medicalnewstoday.com/articles/recover-from-burnout"); return false;'
            >
             7 strategies to help people recover from burnout</a>
              <br>
            <a
              href="#"
              onclick='window.open("https://www.oprahdaily.com/life/a36801181/how-to-recover-from-burnout/"); return false;'
            >
              Feeling Burned Out? These Experts Offer a Recovery Plan</a>
          </div>`;
}
function getCard7() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
           Dermatitis
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
              onclick='window.open("https://en.wikipedia.org/wiki/Dermatitis"); return false;'
            >
              Dermatitis is inflammation of the skin, typically characterized by itchiness, redness and a rash. Dermatitis is often called eczema, and the difference between those terms is not standardized.  </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.mayoclinic.org/diseases-conditions/contact-dermatitis/symptoms-causes/syc-20352742"); return false;'
            >Avoid irritants and allergens, wash your skin, wear protective clohing or gloves, apply an iron-on-patch to cover metal fasteners next to your skin, apply a barrier cream or gel, use moisturizer, take care around pets. <br>
    <br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://my.clevelandclinic.org/health/diseases/4089-dermatitis"); return false;'
            >Dermatitis: Types, Treatments, Causes & Symptoms
             </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/diagnosis-treatment/drc-20353279"); return false;'
            >
             Atopic dermatitis (eczema) - Diagnosis and treatment</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/skin-problems-and-treatments/understanding-dermatitis-treatment"); return false;'
            >
              Understanding Dermatitis - Diagnosis and Treatment</a>
            <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/contact-dermatitis"); return false;'
            >
              What Is Contact Dermatitis?</a>
              <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.medicalnewstoday.com/articles/324228"); return false;'
            >
              16 natural remedies for eczema <small>(aloa vera, apple cider vinegar, bleach in the bath, colloidal oatmeal, baths, coconut oil, honey, tea tree oil, dietary changes, gentle soaps and detergents, avoid strong heat sources, skin protection in cold water, acupressure, comfortable fabrics, avoid scratching, stress management).</small> </a>
          </div>`;
}

function getCard8() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
           Cold (Common cold)
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
              onclick='window.open("https://en.wikipedia.org/wiki/Common_cold"); return false;'
            >
              The common cold or the cold is a viral infectious disease of the upper respiratory tract that primarily affects the respiratory mucosa of the nose, throat, sinuses, and larynx. Signs and symptoms may appear in as little as two days after exposure to the virus.These may include coughing, sore throat, runny nose, sneezing, headache, and fever. People usually recover in seven to ten days, but some symptoms may last up to three weeks.   </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/cold-flu/cold-flu-secrets"); return false;'
            >Eat green vegetables, get vitamin D, keep moving, get enough sleep, skip the alcohol, calm down, drink green tea, add fruits and veggies that have lots of vitamin C to meals, practice good hygiene.  <br>
    <br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.hopkinsmedicine.org/health/wellness-and-prevention/the-dos-and-donts-of-easing-cold-symptoms"); return false;'
            >The Do’s and Don’ts of Easing Cold Symptoms
             </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.mountsinai.org/health-library/selfcare-instructions/common-cold-how-to-treat-at-home"); return false;'
            >
            Common cold - how to treat at home</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/cold-flu/how-to-get-rid-of-a-cold-fast"); return false;'
            >
              How to Get Rid of a Cold Fast</a>
            <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/cold-and-flu/14-tips-prevent-colds-flu-1"); return false;'
            >
              14 Natural Treatment Tips for Colds and Flu</a>
              <br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.piedmont.org/living-real-change/9-natural-cold-and-flu-remedies"); return false;'
            >
             Nine Of The Best Natural Cold And Flu Remedies </a>
          </div>`;
}
function getCard9() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Periorbital puffiness (Puffy Eyes)
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
              onclick='window.open("https://en.wikipedia.org/wiki/Periorbital_puffiness"); return false;'
            >
              Periorbital puffiness, also known as puffy eyes, or swelling around the eyes, is the appearance of swelling in the tissues around the eyes, called the orbits. It is almost exclusively caused by fluid buildup around the eyes, or periorbital edema. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.westlakedermatology.com/blog/under-eye-bags-treatments-and-prevention/"); return false;'
            >
              <small>
    Get between 7-9 hours of beauty sleep nightly,
    sleep with your head slightly elevated to prevent fluid from pooling,
    stay hydrated and minimize your sodium intake by avoiding salty foods to prevent fluid retention,
    seek treatment for allergies if necessary,
    apply a cold compress, chilled cucumber slices or cold/damp tea bags under your eyes for 10-15 minutes each morning,
    consistently use a high-quality anti-aging eye cream and (if possible) store it in the fridge so it goes on cool to further reduce swelling,
    use fingertips to gently massage or tap on eye bags to help circulate fluid,
    stop smoking, 
    practice safe sun care.</small>
 </a
            ><br /><br>
            <p><u>How to heal?</u></p>
           
            <a
              href="#"
              onclick='window.open("https://www.mayoclinic.org/diseases-conditions/bags-under-eyes/diagnosis-treatment/drc-20369931"); return false;'
            >
              Bags under eyes - Diagnosis and treatment </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/beauty-skin-care/how-to-get-rid-of-bags-under-eyes"); return false;'
            >
              17 Ways to Get Rid of Bags Under Your Eyes </a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://plasticsurgeonsnyc.com/how-to-permanently-remove-bags-under-your-eyes/"); return false;'
            >
              How to Permanently Remove Bags Under Your Eyes</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.verywellhealth.com/how-to-get-rid-of-eye-bags-7104751"); return false;'
            >
             How to Get Rid of Eye Bags Naturally </a
            >
            
          </div>`;
}
function getCard10() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Constipation
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
              onclick='window.open("https://en.wikipedia.org/wiki/Constipation"); return false;'
            >
              Constipation is a bowel dysfunction that makes bowel movements infrequent or hard to pass. The stool is often hard and dry. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.bupa.co.uk/newsroom/ourviews/prevent-constipation"); return false;'
            >
              <small>
    Eating fibre is important, as it helps to prevent constipation. Fibre can be found in fruits, vegetables,
    wholegrain cereals,
    wholemeal bread,
    wholegrain rice,
    rolled oats or oat bran,
    seeds - such as flax seeds -,
    pulses, such as peas and beans (though for some people, these can cause bloating).
 </small>
 </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.niddk.nih.gov/health-information/digestive-diseases/constipation/treatment"); return false;'
            >
              Treatment for Constipation - NIDDK (National Institute of Health) </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.medicalnewstoday.com/articles/318694"); return false;'
            >
              13 home remedies for constipation</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://gutscharity.org.uk/advice-and-information/symptoms/constipation/"); return false;'
            >
              Constipation | Causes, Symptoms, Treatment & Support</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.health.harvard.edu/staying-healthy/8-ways-to-get-constipation-relief"); return false;'
            >
             8 ways to get constipation relief  </a
            >
            
          </div>`;
}
function getCard11() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Diarrhea
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
              onclick='window.open("https://en.wikipedia.org/wiki/Diarrhea"); return false;'
            >
              Diarrhea (American English), also spelled diarrhoea or diarrhœa (British English), is the condition of having at least three loose, liquid, or watery bowel movements in a day. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/diarrhea/prevention-of-diarrhea"); return false;'
            >
              <small>
    Preventing diarrhea includes properly preparing food, protecting yourself against infections, and following some proper hygiene habits in your daily life.<br><u>Avoid drinking tap water when traveling:</u><br>Here are some ways to prevent diarrhea when you’re traveling:

    Drink bottled water,
    don’t drink beverages that use ice made with tap water,
    don’t eat food washed with tap water,
    don’t brush your teeth with tap water,
    try not to change your diet too much,
    don’t eat food if you are unsure whether it was cooked or handled properly,
    don’t eat meats that look undercooked.Wash your hands.
 </small>
 </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/digestive-disorders/understanding-diarrhea-treatment"); return false;'
            >
              How to Stop Diarrhea </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/digestive-health/most-effective-diarrhea-remedies"); return false;'
            >
              The 5 Most Effective Diarrhea Remedies</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.medicinenet.com/what_naturally_stops_diarrhea/article.htm"); return false;'
            >
              What Naturally Stops Diarrhea?</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.metropolisindia.com/blog/disease/home-remedies-to-get-rid-of-diarrhea-ones-that-really-work"); return false;'
            >
             Home Remedies for Loose Motion and Diarrhea  </a
            >
            
          </div>`;
}
function getCard12() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Athlete's foot
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
              onclick='window.open("https://en.wikipedia.org/wiki/Athlete%27s_foot"); return false;'
            >
              Athlete's foot, known medically as tinea pedis, is a common skin infection of the feet caused by a fungus. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.aad.org/public/diseases/a-z/athletes-foot-prevent"); return false;'
            >
              <small>
    Wear shower shoes, flip-flops, or sandals when walking around pools, gyms, shower or locker areas, and hotel rooms. <br>Even if you have not gone barefoot in public areas, keep your feet dry. <br>Wash your feet every day with soap and completely dry them after washing.<br>Wear socks made of natural fabrics or fabrics that dry quickly or wick moisture away from the skin.<br>Alternate the shoes you wear each day, if possible, to ensure shoes are dry when they are put on.<br>If you live with someone who has athlete’s foot, don’t share towels, linens, or shoes. 
 </small>
 </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/skin-problems-and-treatments/understanding-athletes-foot-basics"); return false;'
            >
              Understanding Athlete's Foot: The Basics </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/health/home-remedies-for-athletes-foot"); return false;'
            >
              Home Remedies for Athlete’s Foot</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.medicalnewstoday.com/articles/319563"); return false;'
            >
              Five home remedies for athlete's foot</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.citymd.com/health-and-wellness/how-get-rid-athletes-foot-tips-tricks"); return false;'
            >
            How to get rid of athlete's foot: tips and tricks from CityMD  </a
            >
            
          </div>`;
}

function getCard13() {
  removeHidden();
  document.getElementById("card").innerHTML = `
<h2 id="cardTitle">
            Headache
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
              onclick='window.open("https://en.wikipedia.org/wiki/Headache"); return false;'
            >
              Headache, also known as cephalalgia, is the symptom of pain in the face, head, or neck. </a
            ><br /><br />

            <p><u>How to prevent?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.froedtert.com/headache/prevention"); return false;'
            >
              <small>
    <u>Lifestyle Changes</u><br>
    sleep, diet, exercise, hydration, limit caffeine and alcohol, reduce stress.
 </small>
 </a
            ><br /><br>
            <p><u>How to heal?</u></p>
            <br />
            <a
              href="#"
              onclick='window.open("https://www.mayoclinic.org/diseases-conditions/chronic-daily-headaches/in-depth/headaches/art-20047375"); return false;'
            >
              Headaches: Treatment depends on your diagnosis and symptoms </a
            ><br />

             <br />
            <a
              href="#"
              onclick='window.open("https://www.webmd.com/migraines-headaches/5-ways-to-get-rid-of-headache"); return false;'
            >
              Ways to Get Rid of a Headache Quickly</a
            ><br /> <br />
            <a
              href="#"
              onclick='window.open("https://www.healthline.com/nutrition/headache-remedies"); return false;'
            >
              18 Remedies to Get Rid of Headaches Naturally</a><br /><br>
            <a
              href="#"
              onclick='window.open("https://www.health.com/condition/headaches-and-migraines/21-natural-ways-to-prevent-and-treat-headaches"); return false;'
            >
            20 Natural Remedies to Get Rid of a Headache  </a
            >
            
          </div>`;
}
