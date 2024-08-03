const herbArray = [
  {
    name: "Aloe Vera",
    description:
      "Aloe vera contains vitamins and minerals that are needed for the proper function of all body systems. It also contains enzymes, laxative compounds, anti-inflammatory fatty acids and wound-healing hormones. Aloe vera can be used to soothe skin irritations, burns, wounds and rashes; treat cold sores; moisturize your hair and scalp; and reduce inflammation when used topically. When taken internally, aloe vera works to relieve constipation, aid digestion, boost your immune system and even improve diabetes symptoms.",
  },

  {
    name: "Anise",
    description:
      "The seed and oil of anise can be used to relieve several health conditions. Anise aids digestion, works as an anti-flatulence agent, and can be used to relieve coughs and colds. It can also increase urine flow, stimulate your appetite, ease menstrual discomfort, increase sex drive and increase milk production in women who are breastfeeding.",
  },
  {
    name: "Annatto",
    description:
      "Annatto is derived from the seeds of the achiote tree, and it’s often used as a coloring agent because of its bright color that ranges from yellow to deep orange. Aside from its ability to color food naturally, annatto also contains antimicrobial properties and antioxidants, making it useful for killing bacteria, aiding wound healing, supporting your cardiovascular and eye health, and protecting your liver. Some people may have an allergy or intolerance to annatto, so introduce it into your diet slowly to make sure it doesn’t cause any adverse reactions.",
  },

  {
    name: "Arrowroot",
    description:
      "Arrowroot is the starch that’s obtained from the rhizomes of a perennial herb called Maranta arundinacea. It can be used to aid digestion, treat urinary tract infections, help fight foodborne pathogens, relieve mouth pain and boost your immune system. The best way to use arrowroot for healing is to take it internally by mixing the powder into juice or any other beverage.",
  },
  {
    name: "Asafoetida",
    description:
      "Asafoetida is a resinous gum that’s derived from the perennial fennel plant. You can use asafoetida in powder form to relieve chest congestion and asthma; treat digestive issues like IBS, diarrhea, constipation and gassiness; regulate your blood sugar levels; and lower your blood pressure. You can add powdered asafoetida to soups and stews or purchase it as a supplement in tincture or capsule form.",
  },
  {
    name: "Ashwagandha",
    description:
      "Ashwagandha is an adaptogenic herb that can lower cortisol levels and balance your thyroid hormones. It has also been proven effective in supporting your adrenal function, helping you overcome adrenal fatigue that occurs when your adrenals are overtaxed by stress. Some other ashwagandha benefits include its ability to support your brain health, improve your mood, increase your stamina and inhibit the proliferation of cancer cells.",
  },

  {
    name: "Astragalus Root",
    description:
      "Astragalus root has been used in Traditional Chinese Medicine for thousands of years. This Chinese herb is an adaptogenic herb that helps the body fight off stress and disease. It boosts the health and function of your immune, cardiovascular and respiratory systems; helps heal wounds; may help prevent diabetes; slows the growth of tumors; and alleviates symptoms of chemotherapy. The antioxidants found in astragalus root help you combat disease and aging due to free radical damage. You can find astragalus in many forms, including as a tincture, capsule or topical ointment.",
  },

  {
    name: "Barberry",
    description:
      "Barberry is a berberine-containing plant that is used to fight infections due to its antibacterial, antifungal and antiprotozoal properties. Barberry can also be used to prevent and treat diabetes, aid digestion, cleanse your liver and gallbladder, and improve your cardiovascular health by improving hypertension, cardiac arrhythmias and ischemic heart disease.",
  },
  {
    name: "Basil",
    description:
      "Basil is an aromatic herb in the mint family that anti-inflammatory, anti-stress and antibacterial properties. It also works as a pain reliever, blood vessel protector, immune booster and cancer fighter. Basil contains essential oils that are rich in antioxidants and are responsible for the many benefits of basil.",
  },

  {
    name: "Bay Leaf",
    description:
      "Bay leaves come from the ancient tree Laurus nobilis, and it’s often used in cooking because of its distinctive savory flavor. Bay leaf has antimicrobial, antifungal and antioxidant properties. It can be used to help fight cancer, improve insulin function, improve cholesterol levels, prevent candida, treat dandruff, improve skin infections and support wound healing.",
  },
  {
    name: "Berberine",
    description:
      "Berberine is a natural alkaloid that’s found in a variety of traditional herbs, including barberry, goldenseal and turmeric. It’s sold as an extract that can be used to fight bacteria, helping treat conditions that are conventionally treated with antibiotics. Berberine also potentially works as a natural remedy for diabetes, high cholesterol, heart disease, obesity, Alzheimer’s disease, lung inflammation, SIBO and cancer.",
  },
  {
    name: "Black Cohosh",
    description:
      "The roots and rhizomes of black cohosh, a flowering plant native to North America, are used to treat or relieve a number of hormonal issues, including menopause symptoms, like hot flashes, trouble sleeping and bone loss. Black cohosh provides a safe alternative to hormone replacement therapy, which is often used for menopause relief, and it can also help women manage PCOS and treat uterine fibroids.",
  },

  {
    name: "Black Currant",
    description:
      "Black currant is a small shrub that belongs to the gooseberry family of plants. The bush produces dark purple, nutrient-dense berries that are loaded with vitamin C. These berries are rich in anthocyanins, which possess many health-promoting properties, including the ability to help prevent obesity, heart disease, cancer and diabetes. Eating black currant berries can also promote eye health, kill pathogens and viruses and boost your immune system.",
  },
  {
    name: "Boldo",
    description:
      "Peurnus boldus, more commonly known as boldo, is a Chilean tree that has been used for thousands of years for its medicinal benefits. It’s an effective antioxidant that can be used to prevent diseases caused by free radical damage. Boldo is known to help relieve gastrointestinal issues, bladder infections, gallstones and liver disease. It also works as a diuretic, increasing urine flow and promoting detoxification.",
  },

  {
    name: "Borage",
    description:
      "Borage is a plant that’s used for medicinal purposes. The flowers, leaves and oil from the seeds can be used to improve skin conditions like eczema, reduce fever, and relieve conditions like cough, rheumatoid arthritis and pain caused by inflammation. Borage oil contains high amounts of GLA, a type of omega-6 fatty acid that is helpful for treating a wide range of health issues, like PMS symptoms, ADHD, bone loss, hormone imbalances, respiratory conditions, heart disease and stroke.",
  },

  {
    name: "Boswellia Serrata",
    description:
      "Extracts derived from tress of the genus called boswellia contain powerful compounds that can reduce inflammation, fight cancer and prevent heart disease. Use boswellia extract to improve your immunity, reduce arthritis pain, speed up healing and prevent autoimmune disease.",
  },
  {
    name: "Bupleurum",
    description:
      "Bupleurum is a plant that has been used in Traditional Chinese Medicine to promote detoxification for over 2,000 years. You can also use bupleurum to improve the health of your liver, boost adrenal gland function, treat depression associated with PMS or menopause, relieve seizures, and fight ovarian cancer.",
  },

  {
    name: "Burdock Root",
    description:
      "Burdock is a biennial plant in the daisy family. The root contains health-promoting antioxidants, including quercetin, luteolin and phenolic acids. It can be consumed in powdered, fresh, dried or tea form to promote detoxification and circulation, strengthen the lymphatic system, protect you against diabetes, and help heal skin conditions like acne, eczema and psoriasis. Burdock root is also used to combat cancer and improve arthritis.",
  },
  {
    name: "Calendula",
    description:
      "Calendula is a plant that’s taken orally and used topically to treat or relieve a number of health concerns. It possesses powerful anti-inflammatory capabilities, helps speed healing, relaxes muscle spasms and improves oral health. Calendula also contains antimicrobial and antiviral properties, and research shows that it can be used to relieve irritations from cancer treatments like radiation and chemotherapy.",
  },

  {
    name: "Cardamom",
    description:
      "Cardamom is made from the seed pods of various plants in the ginger family. It’s rich in phytonutrients and manganese. Consuming ground cardamom can help fight bad breath and the formation of cavities, lower your blood pressure, improve diabetes symptoms, aid your digestive system, and fight cancer.",
  },
  {
    name: "Cat’s Claw",
    description:
      "Cat’s claw is a wood vine that grows in the Amazon rainforest. It has antioxidant, antiviral, anti-inflammatory and anti-mutagenic properties. You can use cat’s claw in extract, capsule, tablet and tea form to combat arthritis, improve digestive problems, boost immunity, lower blood pressure, improve DNA damage and fight cancer.",
  },
  {
    name: "Cayenne Pepper",
    description:
      "Cayenne pepper is a shrub that makes hollow fruit that grows into long pods and adds a spicy flavor to various dishes. These pods are available in fresh, dried or powdered form and valued for their many health benefits. Cayenne can be used to support digestion; prevent blood clots; relieve migraine, nerve and joint pain; promote detoxification; improve allergy symptoms; and support weight loss.",
  },
  {
    name: "Chamomile",
    description:
      "Chamomile plants are used to improve several health conditions, including allergies, insomnia, anxiety, depression, arthritis and gastrointestinal disorders. Chamomile benefits also include its ability to help fight skin irritations; relieve toothaches, PMS symptoms and muscle spasms; reduce inflammation; and heal wounds.",
  },

  {
    name: "Chicory Root",
    description:
      "Chicory root is a plant-based starch that’s categorized as a soluble fiber and prebiotic. It is often taken as an extract or supplement to relieve digestive issues like constipation, diarrhea, IBS, gas and bloating. Chicory root also works as a natural remedy for managing diabetes, protects the liver from toxicity and free radicals, reduces inflammation, and relieves stress.",
  },

  {
    name: "Chives",
    description:
      "Chive, or Allium schoenoprasum, is a perennial plant that is closely related to scallions and leeks. Chives are often used as a flavoring herb, but they also act as a mild stimulant and diuretic. Chives have antiseptic and antibacterial properties, and they work as a natural bug repellant as well.",
  },

  {
    name: "Cilantro",
    description:
      "Cilantro is a versatile herb that contains many healing properties, including phytonutrients, phenolic compounds and flavonoids. Cilantro benefits include its ability to promote the detoxification of heavy metals, reduce anxiety, improve sleep, lower blood sugar levels, boost your heart health, support your digestion, promote skin health and fight free radical damage that can lead to a number of degenerative diseases.",
  },

  {
    name: "Cinnamon",
    description:
      "Cinnamon is a spice that comes from the bark of the Cinnamomum tree. The compounds found in cinnamon and extracted to make cinnamon oil make this one of the most beneficial spices on earth. Cinnamon health benefits come from its anti-inflammatory, antioxidant, antimicrobial, anti-diabetic, immune-boosting, heart-protecting and cancer-fighting properties.",
  },

  {
    name: "Comfrey",
    description:
      "Comfrey is a perennial herb that can be used topically to relieve muscle and joint pain, reduce lower back pain, and improve arthritis pain. It can also be used to speed wound healing and lessen skin irritations. Comfrey should only be used topically for up to 10 consecutive days. Ingesting this herb can cause liver damage.",
  },

  {
    name: "Coriander Seed",
    description:
      "The dried seeds of the cilantro plant are known as coriander, which is commonly used as whole seeds or ground into powder. Consuming coriander seeds can help lower blood sugar levels, ease digestive issues, improve cholesterol levels, decrease blood pressure and prevent neurological disease.",
  },

  {
    name: "Cumin Seed",
    description:
      "Cumin seeds come from the herb Cuminum cyminum, which is a member of the parsley family. It’s often ground into a powder for cooking. Cooking with cumin seeds can help aid your digestion, boost your immune system, promote the health of your skin, relieve respiratory conditions, promote detoxification, combat oxidative stress, fight infections and prevent diabetes.",
  },

  {
    name: "Curry Leaf",
    description:
      "Curry leaves come from the curry tree that’s native to India and Sri Lanka. Using curry leaves for flavoring provides fiber, iron, and vitamins A, C and E. They can support the health of your heart, fight diabetes, prevent or fight infections, lower your cholesterol levels, and prevent iron deficiency anemia.",
  },

  {
    name: "Devil’s Claw",
    description:
      "Devil’s claw is derived from the dried root of the Harpagophytum procumbens plant. Devil’s claw contains antioxidant and antispasmodic properties. It’s commonly used to relieve arthritis pain because of its ability to reduce inflammation and ease pain. Some other devil’s claw benefits are digestive support and improved kidney health.",
  },

  {
    name: "Dill Weed",
    description:
      "Dill weed belongs to the same family as bay leaf, parsley and cumin. Adding chopped or whole dill weed to your recipes can help ease menstrual cramps, aid digestion, fight infections and lower cholesterol levels. Dill weed also has anticonvulsant properties, so it is used to treat epilepsy as well.",
  },
  {
    name: "Echinacea",
    description:
      "Echinacea is a cornflower that’s native to North America, and both the root of the plant and the part that grows above ground contain beneficial components. Echinacea is known for its ability to boost your immune system and reduce your chances of catching the common cold. It’s commonly used as a natural cold remedy, but it can also be used to alleviate pain, reduce inflammation, relieve constipation and improve skin problems.",
  },
  {
    name: "Fennel",
    description:
      "Fennel is a perennial herb that’s native to the Mediterranean and often used to support digestion. Dried fennel seeds and fennel seed oil are able to relieve digestive issues like gas, bloating, heartburn and colic in infants. Fennel benefits also include its ability to treat respiratory infections, improve eye health, ease menopausal symptoms, improve heart health and lower blood pressure.",
  },
  {
    name: "Fenugreek",
    description:
      "Fenugreek is an annual herb that’s part of the pea family. Its seeds and leaves are often used to reduce inflammation, aid digestion, improve cholesterol levels, improve glycemic control and boost exercise performance. In men, fenugreek is known to increase libido, and in women who are breastfeeding, it can be used to promote milk flow.",
  },
  {
    name: "Feverfew",
    description:
      "The dried leaves of the feverfew herb are used to ease migraine pain, treat fevers, heal skin issues like dermatitis, prevent blood clots and relieve arthritis pain. Feverfew effectively reduces inflammation and eases pain naturally, and women use it to improve issues with infertility, menstruation and childbirth. The leaves can be found in tablet, capsule and liquid extract forms.",
  },
  {
    name: "Fingerroot",
    description:
      "Fingerroot is an herb that’s native to China and Southeast Asia. The rhizomes are consumed to reduce inflammation and inflammatory diseases, and the leaves are used for easing allergy symptoms and fighting infections. Fingerroot can also be beneficial in treating ulcers, working as a natural aphrodisiac and helping heal wounds quickly.",
  },
  {
    name: "Galangal",
    description:
      "Galangal is part of the ginger family, and it’s often used in Thai food. Some of the many galangal benefits include its ability to improve sperm count and function, reduce inflammation, fight and prevent infections, ease digestive issues, and support cognitive health. Research shows that galangal also acts as a potentially revolutionary cancer-fighting agent, as it has proven to effectively fight and prevent a broad number of cancers and tumors.",
  },
  {
    name: "Garam Masala",
    description:
      "Garam masala is an Indian spice blend that commonly contains cinnamon, cardamom, black peppercorns, nutmeg, cumin, ginger, fennel, coriander and bay leaves. Using garam masala in your recipes can improve your digestion, fight diabetes, reduce inflammation, boost your heart health and may work to prevent cancer.",
  },
  {
    name: "Ginger Root",
    description:
      "Ginger root is the rhizome of the Zingiber officinale plant that contains 115 different chemical components. It’s often used in Asian cooking for a sophisticated flavor and is even used as a pickling spice. It works as a potent antioxidant, reduces inflammation, boosts the immune system, supports digestion, reduces pain and lowers cholesterol levels. Ginger root benefits also include its ability to improve diabetes, reduce arthritis pain and fight cancer.",
  },
  {
    name: "Ginkgo Biloba",
    description:
      "Ginkgo biloba is a natural extract that’s derived from the Chinese ginkgo tree. It contains flavonoids and terpenoids, both of which have strong antioxidant properties and can help fight age-related diseases, like dementia and Alzheimer’s. Ginkgo biloba benefits also include its ability to fight depression and anxiety, ease PMS symptoms, relieves headaches, boost eye health, treat ADHD, and improve libido.",
  },

  {
    name: "Ginseng",
    description:
      "Ginseng belongs to the genus Panax, and it’s used to reduce stress, improve brain function, reduce inflammation, aid weight loss, lower blood sugar levels, boost the immune system, support lung function, treat sexual dysfunction and prevent cancer.",
  },
  {
    name: "Goldenseal",
    description:
      "The dried rhizomes and roots of goldenseal are used to make liquid extracts, capsules, tablets, teas and skin care products. Goldenseal can help ease digestive issues, like diarrhea, constipation, peptic ulcers and gassiness; boost your immune system; support the health of your mouth and eyes; fight cancer; and boost your heart health.",
  },
  {
    name: "Gotu Kola",
    description:
      "Gotu kola belongs to the same plant family as parsley, celery and carrots. This herb commonly used in traditional Asian cuisines is loaded with antioxidants and helps repair skin conditions like psoriasis, reduce fever, improve blood circulation, reduces inflammation, eases depression and anxiety, and fights free radicals that can cause gastric ulcers.",
  },
  {
    name: "Holy Basil",
    description:
      "Holy basil is an adaptogen herb that can be used to relieve or ease conditions like anxiety, hypothyroidism, adrenal fatigue and acne. Research shows that holy basil benefits also include its ability to fight cancer, control blood glucose levels and regulate cortisol levels. You can find holy basil in supplement form or drink tulsi tea for these benefits.",
  },
  {
    name: "Horehound",
    description:
      "Horehound is a plant that belongs to the mint family. It’s known to work as a natural treatment for coughs because of its expectorant abilities. Horehound also has antiseptic, analgesic, antioxidant and appetite-stimulating properties, as shown in animal research. It’s useful for relieving motion sickness and aiding digestion as well.",
  },
  {
    name: "Horny Goat Weed",
    description:
      "Horney goat weed works as a natural aphrodisiac because of its ability to increase testosterone production and estrogen levels. You can use horny goat weed to improve your libido, boost your circulation, regulate your cortisol levels, prevent bone loss, increase lean muscle mass, and treat conditions like erectile dysfunction and vaginal dryness.",
  },
  {
    name: "Horseradish Root",
    description:
      "The root of the horseradish plant can be used to fight disease because of its antioxidant power. It also has antimicrobial and antibacterial properties, which help boost your immune system and fight infections. Some other horseradish root benefits include its ability to ease respiratory issues, treat urinary tract infections, aid digestion, ease pain and possible prevent cancer.",
  },
  {
    name: "Hyssop",
    description:
      "Hyssop is a healing plant that is commonly used to relieve digestive issues, improve appetite, fight infections, improve circulation, promote skin health, and support the health of your liver and gallbladder. Hyssop can also help to prevent the common cold and ease respiratory conditions like asthma. It is available in capsules, teas and extracts.",
  },
  {
    name: "Juniper Berries",
    description:
      "Juniper berries are female seed cones that come from juniper plants. They are an excellent source of antioxidants, helping prevent and fight diseases that are caused by free radical damage. Juniper berries can also be used to fight skin and respiratory infections, improve the health of your skin, aid your digestion, boost the health of your heart, lower your blood sugar levels, and help relieve insomnia.",
  },

  {
    name: "Kava Root",
    description:
      "Kava is an herbal plant that is commonly used to ease anxiety, stress and insomnia. It also boosts the immune system, relieves headache and migraine pain, eases respiratory tract infections, and may even play a role in cancer prevention. However, kava root comes with the potential for drug abuse, and when taken by mouth, it can cause liver damage.",
  },
  {
    name: "Kudzu Root",
    description:
      "Kudzu root contains phytochemicals that can help fight disease that’s caused by inflammation and reduce signs of aging. Kudzu root can help treat alcoholism when used in appropriate doses, improve diabetes and cardiovascular health, ease digestive issues like diarrhea, and improve menopause symptoms like hot flashes and night sweats.",
  },

  {
    name: "Lemon Balm",
    description:
      "Lemon balm is a plant in the mint family that possesses antibacterial, antidiabetic, anti-stress, anti-anxiety, anti-inflammatory and antioxidant properties. It can be used to aid digestion, regulate an overactive thyroid, ease PMS symptoms, improve your sleep, boost your mood, and protect your heart and liver.",
  },
  {
    name: "Lemongrass",
    description:
      "Lemongrass is an herb that has stimulating, soothing, balancing and relaxing properties. It can be used to fight fungal and bacterial infections, reduce inflammation, repel insects, ease stomach aches, boost energy, ease anxiety, reduce fevers, ease pain, and stimulate menstrual flow.",
  },
  {
    name: "Licorice Root",
    description:
      "Licorice root is an adaptogen herb that’s a member of the legume family. Licorice root extract can be used to relieve acid reflux and heartburn, regulate cortisol levels, boost immunity, fight viral and bacterial infections, ease PMS and menopause symptoms, relieve cough and sore throat with its expectorant and anti-inflammatory properties, and ease cramps due to its antispasmodic abilities.",
  },
  {
    name: "Maca Root",
    description:
      "Maca root is considered a superfood because of its ability to make people feel more “alive.” It works to balance hormones naturally, increase fertility in both men and women, improve stamina, boost sexual function, and boost energy levels. Maca root powder contains over 20 amino acids and 20 free-form fatty acids, allowing for its status as a superfood.",
  },

  {
    name: "Marigolds",
    description:
      "The marigold flower is used to make herbal ointments, topical creams, tinctures and teas to treat a number of health conditions, including muscle cramps, eye inflammation, fungal infections, and skin conditions like eczema and dermatitis. Marigolds can also help ease digestive issues, boost the immune system, reduce inflammation and fight cancer.",
  },
  {
    name: "Marshmallow Root",
    description:
      "Marshmallow root has fibrous extracts that swell up in the body and form a gel-like substance that can work to reduce inflammation in the lining of the stomach. Marshmallow root can also be used to relieve dry coughs and colds, improve low saliva production, fight bacterial and respiratory infections, treat skin conditions, and reduce joint pain that’s caused by inflammation.",
  },

  {
    name: "Milk Thistle",
    description:
      "Milk thistle is a weed that has been used medicinally for over 2,000 years. It works by drawing toxins that can cause illness and disease out of the body. It can effectively decrease or even reverse damage that has been done to the liver due to pollution exposure, heavy metals and the use of prescription medications. Milk thistle benefits also include its ability to protect you against cancer, lower cholesterol levels, control diabetes and reduce signs of aging.",
  },
  {
    name: "Mint",
    description:
      "Mint is one of the most popular medicinal herbs because it’s often seen in products like chewing gum and breath fresheners. Eating mint, drinking mint tea or using mint extracts can help to aid digestion, relieve headache pain, ease nausea, improve signs of depression, and relieve respiratory conditions like chronic cough or asthma.",
  },
  {
    name: "Moringa",
    description:
      "Throughout the world, just about every part of the moringa plant is used to treat a variety of health conditions, including diabetes, anemia, allergies, arthritis, epilepsy, thyroid disorders, high blood pressure, low sex drive and cancer. It has antibacterial, antifungal, antiviral, antiparasitic, antioxidant and anti-inflammatory properties, and it’s an excellent source of protein, vitamins A and C, potassium, calcium and amino acids.",
  },
  {
    name: "Mugwort",
    description:
      "Mugwort is a plant that was traditionally used to help women relieve symptoms of menopause. Today, it’s used in a method called moxibustion to reverse the breech position of fetuses and alleviating joint pain. Mugwort is also helpful in treating mild depression and attacking certain cancer cells.",
  },
  {
    name: "Mullein",
    description:
      "Mullein is an herb that contains carbohydrates, proteins, fats, oils, flavonoids and tannins, just to name a few of its components. It can be used as a natural remedy for ear infections; to calm bursitis (fluid-filled sacs) in the shoulder, elbow and hip; kill bacteria; reduce inflammation; fight infections; and help the body to get rid of mucus.",
  },
  {
    name: "Mustard Seed",
    description:
      "Mustard seeds come from various mustard plants, and they are used as a spice in many regions of the world, including as a pickling spice. They are an excellent source of folate, vitamin A, calcium, potassium, magnesium and phosphorus.Plus, mustard seeds can reduce inflammation that causes pain and swelling; treat gum disease; boost the health of your heart, skin and hair; and help prevent or fight infections due to their antibacterial and antifungal properties. Mustard oil is extracted from mustard seeds and can be used to reap these benefits, but there are some concerns about mustard oil toxicity.",
  },
  {
    name: "Nutmeg",
    description:
      "Nutmeg is a spice that comes from the seeds of an evergreen tree. It is rich in vitamins and minerals like vitamin B6, thiamine, manganese, magnesium, folate and copper. When it’s used in small amounts for cooking or baking, nutmeg can help aid digestion, ease pain, promote detoxification, boost cognitive function and regulate blood pressure levels. Although it’s uncommon, excessive ingestion of nutmeg can cause life-threatening toxicity.",
  },
  {
    name: "Olive Leaf",
    description:
      "Olive leaf comes from the olive tree, and it is used in extracts, powders and teas to reduce inflammation, improve cardiovascular health, boost the immune system, prevent diabetes, support cognitive function, protect the skin, kill bacteria and fungi, reduce the risk of cancer, and boost energy levels.",
  },

  {
    name: "Oregano",
    description:
      "Oregano is an herb that has been used for healing for thousands of years. Oregano has the power to reduce inflammation; fight bacterial, fungal, viral and parasitic infections; combat allergies; and even shrink tumors. Oil of oregano is extracted from the herb to make a powerful antibiotic agent that can kill many species of harmful bacteria.",
  },
  {
    name: "Paprika",
    description:
      "Paprika is a spice that’s made from a variety of peppers in the Capsicum annuum family. Capsaicin, an ingredient in hot peppers that are used to make paprika, is known to support immune function and aid in treating autoimmune conditions. Paprika also contains many antioxidants, including carotenoids, that fight free radical damage that can cause disease, and it can be used to improve the health of your heart and eyes.",
  },
  {
    name: "Parsley",
    description:
      "Parsley is an herb that can be used fresh or as a dried spice. It has the power to fight a number of health concerns, including bad breath, inflammation, kidney stones, digestive issues, skin problems, poor immunity, bladder infection and oxidative stress. Parsley is an excellent source of vitamins K, C and A, and it contains protective flavonoid antioxidants.",
  },
  {
    name: "Passion Flower",
    description:
      "Passion flower is a plant that is used in tea, extract, infusion and tincture forms to relieve menopause symptoms like hot flashes and depression, reduce anxiety, improve sleep, reduce inflammation, lower blood pressure, regulate blood sugar levels, and improve ADHD symptoms.",
  },
  {
    name: "Peppercorns",
    description:
      "Peppercorns come from black pepper vines, and they are dried and used as a spice. Peppercorns exhibit anti-diabetic, anti-cancer and antibacterial properties. They can also be used to aid digestion, lower blood pressure, improve cholesterol levels and reduce weight, as displayed in animal studies.",
  },
  {
    name: "Pimento",
    description:
      "Pimento, which is known as allspice in some countries, comes from an evergreen tree and possesses pain-relieving, detoxifying, antibacterial, antioxidant and anti-stress properties. Pimento can also be used to promote blood circulation, reduce gassiness and boost the immune system.",
  },
  {
    name: "Pine Bark",
    description:
      "Pine bark comes from the inner bark of the Pinus pinaster tree, and an extract is commonly used to make capsules, tablets, creams and lotions. Pine bark extract can be used to lower blood sugar levels, fight infections, help prevent hearing loss, improve erectile dysfunction, reduce inflammation, boost athletic performance and protect your skin from ultraviolet exposure.",
  },
  {
    name: "Psyllium Husk",
    description:
      "Psyllium husk is an edible soluble fiber that comes from a shrub-like herb most common in India. It’s known for its ability to relieve digestive issues like constipation and diarrhea, and it can also be used to lower cholesterol and blood sugar levels, boost the health of your heart, and help with weight management because it encourages a feeling of satiety.",
  },
  {
    name: "Raw Garlic",
    description:
      "Garlic grows in the form of a bulb underneath a perennial plant that’s in the same family as chives, leeks, onions and scallions. Raw garlic fights diseases like cancer, heart disease, diabetes and dementia. It can also be consumed to lower blood pressure levels, fight infections and help reverse hair loss.",
  },
  {
    name: "Red Clover",
    description:
      "Red clover is a plant that belongs to the legume family. It can be used in extract form or in capsules to improve cardiovascular health, reduce menopausal symptoms, help you to maintain strong bones, reduce skin inflammation that causes conditions like eczema and psoriasis, fight respiratory conditions, and lower your risk of certain cancers, such as prostate, endometrial and breast cancer.",
  },
  {
    name: "Rhodiola",
    description:
      "Rhodiola, which is also known as golden root, is an adaptogen herb that can help your body adapt to physical, chemical and environmental stress. Rhodiola extract can be used to increase energy levels and boost athletic performance, lower cortisol levels that spike in times of stress, fight depression, improve brain function, and burn belly fat.",
  },
  {
    name: "Rosemary",
    description:
      "Rosemary is an aromatic herb that’s part of the mint family. It’s known for its ability to improve memory, promote hair growth, relieve muscle aches and pains, improve cognitive function, and soothe digestive issues. Rosemary also possesses anti-inflammatory, anti-cancer, antioxidant, detoxifying, anti-stress and healing properties. It can be chopped or ground and added to meals, or rosemary oil can be be diffused and applied topically.",
  },
  {
    name: "Saffron",
    description:
      "The edible part of the saffron plant is the stigma, which is a long golden stalk that’s within the flower. The stigmas, or threads, can be used in cooking, or ground saffron is available. Consuming saffron promotes cardiovascular health, alleviates symptoms of PMS, treats anxiety and depression, promotes satiety and can help with weight loss, treats erectile dysfunction, and helps prevent or treat cancer.",
  },
  {
    name: "Sage",
    description:
      "Sage is a woody herb that’s closely related to rosemary and has been used medicinally for thousands of years. When consumed even in small amounts, sage can improve your memory and concentration, fight free radicals, prevent degenerative diseases like dementia and Alzheimer’s, reduce inflammation, prevent or improve diabetes, boost your immune system, improve the health of your skin, and strengthen your bones. You can also try red sage.",
  },
  {
    name: "Sarsaparilla",
    description:
      "Sarsaparilla is an herb that’s a member of the lily plant family. The plant’s roots are ground and used to make teas, tinctures and supplements that help relieve respiratory conditions, treat skin problems like psoriasis, reduce pain caused by inflammation, improve libido, ease headache pain, aid digestion, reduce fevers, and fight infections. Research shows that sarsaparilla also has anti-tumor and cancer-preventing effects.",
  },
  {
    name: "Sassafras",
    description:
      "Sassafras is a tree that grows widely in North America, and the compounds found in the bark have medicinal value. Studies indicate that sassafras may be an effective treatment for certain cancers, like liver, gastric, oral, breast, prostate and lung cancer. It can also help with the management of diabetes, fight parasites, improve blood circulation, improve symptoms of epilepsy and help with certain neurological diseases.",
  },
  {
    name: "Shilajit",
    description:
      "Shilajit is a tar-like substance that can be found in the Himalayan and Tibet Mountains. You can use shilajit powder, resin or supplements to reduce inflammation, fight infections, boost energy levels, regulate hormones, strengthen your immune system, support your skeletal health, boost the health of your heart and brain, aid in breaking addictions, and help in managing diabetes.",
  },
  {
    name: "Skullcap",
    description:
      "Skullcap is a plant in the mint family that can be used to alleviate anxiety, insomnia and hysteria; stimulate blood flow in the pelvic region; relieve muscle spasms; reduce inflammation; and encourage menstruation. Research also suggests that skullcap, which is available in many forms, can help fight cancer cells because of its ability to neutralize free radicals.",
  },
  {
    name: "Slippery Elm",
    description:
      "Slippery elm is a tree with a bark that is used to make teas, capsules, tablets and lozenges. It can be used to ease digestive issues like diarrhea, constipation, IBS and bloating; lower stress and anxiety levels; aid weight loss; improve skin conditions like psoriasis; and prevent breast cancer. You can also use slippery elm for pets to relieve their digestive problems and reduce inflammation.",
  },
  {
    name: "Sorrel",
    description:
      "Sorrel is an herb that is used to add a tangy flavor to foods, but it also boasts health benefits because of its nutrient content and antioxidants, along with its antimicrobial, cancer-preventing and immune-boosting properties. Sorrel can be used to reduce blood pressure, promote blood circulation, improve diabetes symptoms, support the health of your kidneys, improve skin conditions and relieve digestive issues.",
  },
  {
    name: "St. John’s Wort",
    description:
      "St. John’s wort is an herb that’s most commonly used as a natural remedy for depression, anxiety and insomnia. It can also be effective in improving ADHD symptoms, treating heart palpitations, relieving obsessive-compulsive disorder and seasonal affective disorder, easing symptoms of menopause, and boosting mood.",
  },
  {
    name: "Stinging Nettle",
    description:
      "Stinging nettle is a plant that’s native to Europe and Asia. Products made from the roots, stems and leaves of stinging nettle can help improve urinary issues and benign prostatic hyperplasia, ease allergy symptoms and prevent reactions to hay fever, ease joint pain and symptoms of osteoarthritis, slow down bleeding after surgery, and improve eczema symptoms.",
  },
  {
    name: "Tarragon",
    description:
      "Tarragon is an herb that’s in the sunflower family and has a flavor similar to anise. Fresh and uncooked tarragon leaves can be used in cooking, and tarragon essential oil is used to aid digestion and spark appetite. Tarragon can also be helpful in improving sleep, encouraging menstruation, fighting bacteria and relieving toothaches.",
  },
  {
    name: "Thyme",
    description:
      "Thyme is an herb that’s part of the mint family and often used in cooking. Thyme is a source of vitamins and minerals like vitamin C, vitamin A, iron, manganese and calcium. It can be used to boost your mood, relieve respiratory conditions like sore throat and bronchitis, lower blood pressure and cholesterol levels, and fight cancer cells.",
  },
  {
    name: "Triphala",
    description:
      "Triphala is an herbal formulation that’s made from three fruits: amla, haritaki and bibhitaki. Dried powder from these fruits is mixed and, when consumed, boast health benefits like lowering cholesterol levels, aiding weight loss, reducing inflammation, relieving constipation and fighting cancer, as animal research has demonstrated. Triphala can also be taken as a tea, tablet and liquid supplement.",
  },
  {
    name: "Tulsi",
    description:
      "Tulsi is used in cooking and to make flavored water, juices and tulsi tea. When consumed, tulsi can help treat skin diseases, eye diseases, chronic fever, respiratory conditions like bronchitis and bronchial asthma, arthritis, diarrhea, and dysentery. Tulsi can also be used to improve bad breath, prevent cavities, ease headache pain and balance hormones naturally.",
  },
  {
    name: "Turmeric",
    description:
      "Turmeric is one of the most powerful herbs on the planet, and its benefits often rival those of conventional medications. Turmeric supplements can be taken in place of antidepressants, anticoagulants, arthritis medications, skin condition treatments, anti-inflammatory medications and cholesterol regulators. Other turmeric benefits include its ability to aid weight loss, treat gastrointestinal issues, ease pain and treat cancer naturally.",
  },
  {
    name: "Valerian Root",
    description:
      "Valerian root comes from a plant that’s native in Europe and parts of Asia. The root is sold as a dry powdered extract in capsules, teas, tinctures and fluid extracts. Valerian root is commonly used as a natural sleep aid because of its sedative properties. It can also ease anxiety, lower blood pressure, improve your ability to deal with stress and ease menstrual cramps.",
  },

  {
    name: "Vanilla Extract",
    description:
      "When vanilla beans are combined with alcohol, this makes a vanilla tincture or extract that’s added to recipes for flavor. Vanilla extract also comes with a slew of health benefits, including its ability to fight bacterial infections, reduce inflammation, boost your mental health, reduce fevers and improve cholesterol levels.",
  },
  {
    name: "Vervain",
    description:
      "Vervain is an herb that can be found in powder, tincture, capsule and tea forms. Vervain has cardioprotective, antimicrobial, antibacterial, anti-inflammatory, sedative and anti-anxiety properties, according to animal models. It can also be used to improve your gum health by using vervain and hot water as a mouthwash.",
  },
  {
    name: "Vitex (Chasteberry)",
    description:
      "Vitex, which is also known as chasteberry, can be used to tone your body’s systems, positively affect your hormones and improve the health of your skin. Use vitex to relieve PMS symptoms, reduce uterine fibroids, improve female fertility, treat endometriosis, reduce menopause symptoms, remedy amenorrhea, treat an enlarged prostate and promote lactation in women who are breastfeeding.",
  },
  {
    name: "Wild Yam",
    description:
      "Wild yam is an herb that’s also known as colic root. It can be found in dried root, liquid, tea, capsule and dried root powder forms. Wild yam benefits include its ability to regulate blood sugar levels, improve cholesterol levels, reduce hyperpigmentation, relieve symptoms of diverticulosis and help fight cancer.",
  },
  {
    name: "Witch Hazel",
    description:
      "Witch hazel is a plant, and the leaves, twigs and bark are used to make a skin-healing astringent that’s used to reduce acne, skin inflammation, poison ivy and insect bites. Using witch hazel can also help heal cracked skin, ingrown hairs, excess sweating, varicose veins, razor burn and hemorrhoids.",
  },
  {
    name: "Yarrow",
    description:
      "Yarrow is an herb, and the leaves can be used fresh or dried for cooking. Yarrow can also be used to make infused vinegars and oils. Consuming yarrow can help heal skin wounds, stop bleeding, aid amenorrhea, treat mastitis, reduce inflammation, ease anxiety, improve digestive issues, reduce blood pressure and ease asthma.",
  },
];

const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

// Show posts in DOM
async function showPosts() {
  const posts = herbArray;

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <div class="number">${post.name}</div>
      <div class="post-info">
        <h2 class="post-title">${post.name}</h2>
        <p class="post-body">${post.description}</p>
      </div>
    `;

    postsContainer.appendChild(postEl);
  });
}

// Show loader & fetch more posts
function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

// Show initial posts
showPosts();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener("input", filterPosts);

/*removeHidden*/
function removeHidden() {
  document.getElementById("herbsSearch").classList.remove("hidden");
  document.getElementById("antibacterialContainer").classList.add("hidden");
}

/*botancis */
function showBotanics() {
  document.getElementById("botanicContainer").classList.remove("hidden");
}

/*antibacHerb*/
const antibacHerbsArray = [
  {
    name: "Calendula (Calendula officinalis)",
    link: "https://en.wikipedia.org/wiki/Calendula",
    image: "Images/calendula.jpg",
  },
  {
    name: "Cinnamon (Cinamomum zeylanicum)",
    link: "https://krishi.icar.gov.in/jspui/bitstream/123456789/31031/1/Chapter%209.pdf",
    image: "Images/cinnamon.jpg",
  },
  {
    name: "Clove (Syzygium aromaticum)",
    link: "https://www.britannica.com/plant/clove",
    image: "Images/white-clover.jpg",
  },
  {
    name: "Garlic (Allium sativum)",
    link: "https://www.britannica.com/plant/garlic",
    image: "Images/garlic.jpg",
  },
  {
    name: "Echinacea (Echinacea angustifolia",
    link: "https://www.medicalnewstoday.com/articles/252684",
    image: "Images/purple.jpg",
  },
  {
    name: "Oregon Grape Root (Mahonia aquifolium)",
    link: "https://www.gaiaherbs.com/blogs/herbs/oregon-grape",
    image: "Images/oregon.jpg",
  },

  {
    name: "Usnea (Usnea barbata)",
    link: "https://en.wikipedia.org/wiki/Usnea",
    image: "Images/tree.jpg",
  },
  {
    name: "Uva Ursi (Arctostaphylos uva-ursi)",
    link: "https://en.wikipedia.org/wiki/Arctostaphylos_uva-ursi",
    image: "Images/bearberry.jpg",
  },
  {
    name: "Yarrow (Achillea millefolium)",
    link: "https://www.fs.usda.gov/wildflowers/plant-of-the-week/achillea_millefolium.shtml",
    image: "Images/yarrow-plant.jpg",
  },
];
let countAntibacs = 0;
function showNextAntibac() {
  countAntibacs++;
  if (countAntibacs >= antibacHerbsArray.length) {
    countAntibacs = -1;
    return countAntibacs;
  }
  document.getElementById("nameAntibacHerb").textContent =
    antibacHerbsArray[countAntibacs].name;
  let link = antibacHerbsArray[countAntibacs].image;
  document.getElementById("imgAntibacHerb").setAttribute("src", link);

  document
    .getElementById("linkAntibacHerb")
    .setAttribute("href", antibacHerbsArray[countAntibacs].link);
}

function removeHiddenAntibacterial() {
  document.getElementById("herbsSearch").classList.add("hidden");
  document.getElementById("antibacterialContainer").classList.remove("hidden");
}

/*antiviralHerb*/
const antiviralHerbsArray = [
  {
    name: "Astragalus Root (Astragalus membranaceus)",
    link: "https://www.fusionhealth.com.au/blogs/fusionhealth-healthhub-blog-astragalus-traditional-benefits.html?lang=en_AU",
    image: "Images/stay-at-home.jpg",
  },
  {
    name: "Cat's Claw (Uncaria tomentosa)",
    link: "https://naturalpoland.com/en/products/plant-extracts/cat-s-claw-uncaria-tomentosa-extract/",
    image: "Images/cats-paw.jpg",
  },
  {
    name: "Cranberry (Vaccinium macrocarpon)",
    link: "https://plants.usda.gov/DocumentLibrary/plantguide/pdf/cs_vaox.pdf",
    image: "Images/fruit3.jpg",
  },
  {
    name: "Elderberry (Sambucus nigra)",
    link: "https://strictlymedicinalseeds.com/product/elderberry-black-sambucus-nigra-potted-plant-organic/",
    image: "Images/elderberry.jpg",
  },
  {
    name: "Ginger (Zingiber officinale)",
    link: "https://www.britannica.com/plant/ginger",
    image: "Images/root.jpg",
  },
  {
    name: "Lemon Balm (Melissa officinalis)",
    link: "https://en.wikipedia.org/wiki/Lemon_balm",
    image: "Images/melissa.jpg",
  },

  {
    name: "Licorice Root (Glycyrrhiza glabra)",
    link: "https://www.healthline.com/nutrition/licorice-root",
    image: "Images/board.jpg",
  },
  {
    name: "Mullein (Verbascum Thapsus)",
    link: "http://floreduquebec.ca/english/verbascum-thapsus",
    image: "Images/mulleins.jpg",
  },
  {
    name: "Olive Leaf (Olea europaea)",
    link: "https://karger.com/anm/article/76/1/10/52354/Olive-Leaf-Olea-europaea-L-folium-Potential",
    image: "Images/tree2.jpg",
  },
  {
    name: "Oregano (Origanum vulgare)",
    link: "https://www.britannica.com/plant/oregano",
    image: "Images/oregano2.jpg",
  },
];
let countAntiviral = 0;
function showNextAntiviral() {
  countAntiviral++;
  if (countAntiviral >= antiviralHerbsArray.length) {
    countAntiviral = -1;
    return countAntiviral;
  }
  document.getElementById("nameAntiviralHerb").textContent =
    antiviralHerbsArray[countAntiviral].name;
  let link = antiviralHerbsArray[countAntiviral].image;
  document.getElementById("imgAntiviralHerb").setAttribute("src", link);

  document
    .getElementById("linkAntiviralHerb")
    .setAttribute("href", antiviralHerbsArray[countAntiviral].link);
}

function removeHiddenAntiViral() {
  document.getElementById("herbsSearch").classList.add("hidden");
  document.getElementById("antiviralContainer").classList.remove("hidden");
}
