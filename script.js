// JavaScript for navigation
const home = document.getElementById("home");
const reading = document.getElementById("reading");
const manual = document.getElementById("manual");

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    switch (href) {
        case "#home":
            home.classList.remove("hidden");
            reading.classList.add("hidden");
            manual.classList.add("hidden");
            break;
        case "#reading":
            home.classList.add("hidden");
            reading.classList.remove("hidden");
            manual.classList.add("hidden");
            break;
        case "#manual":
            home.classList.add("hidden");
            reading.classList.add("hidden");
            manual.classList.remove("hidden");
            break;
    }
  });
});

// JavaScript for reading generation
const generateBtn = document.getElementById("generate-btn");
const cardContainer = document.getElementById("card-container");

const tarotDeck = [
  {
    name: "The Fool",
    img: "assets/the-fool.jpg",
    meaning: "The Fool represents new beginnings, spontaneity, and trust in the universe.",
    arcana: "major"
  },
  {
    name: "The Magician",
    img: "assets/the-magician.jpg",
    meaning: "The Magician represents power, creativity, and the ability to manifest your desires.",
    arcana: "major"
  },
  // more cards...
  {
    name: "The High Priestess",
    img: "assets/the-high-priestess.jpg",
    meaning: "The High Priestess represents intuition, secrets, and the unconscious mind.",
    arcana: "major"
  },
  {
    name: "The Empress",
    img: "assets/the-empress.jpg",
    meaning: "The Empress represents motherhood, nurturing, and abundance.",
    arcana: "major"
  },
  {
    name: "The Emperor",
    img: "assets/the-emperor.jpg",
    meaning: "The Emperor represents authority, stability, and structure.",
    arcana: "major"
  },
  {
    name: "The Hierophant",
    img: "assets/the-hierophant.jpg",
    meaning: "The Hierophant represents tradition, spirituality, and guidance.",
    arcana: "major"
  },
  {
    name: "The Lovers",
    img: "assets/the-lovers.jpg",
    meaning: "The Lovers represents love, harmony, and balance.",
    arcana: "major"
  },
  // and so on
  {
    name: "The Chariot",
    img: "assets/the-chariot.jpg",
    meaning: "The Chariot represents determination, control, and willpower.",
    arcana: "major"
  },
  {
    name: "Strength",
    img: "assets/strength.jpg",
    meaning: "Strength represents inner power, courage, and compassion.",
    arcana: "major"
  },
  {
    name: "The Hermit",
    img: "assets/the-hermit.jpg",
    meaning: "The Hermit represents introspection, wisdom, and inner guidance.",
    arcana: "major"
  },
  {
    name: "Wheel of Fortune",
    img: "assets/wheel-of-fortune.jpg",
    meaning: "The Wheel of Fortune represents the cyclical nature of life, destiny, and change.",
    arcana: "major"
  },
  {
    name: "Justice",
    img: "assets/justice.jpg",
    meaning: "Justice represents balance, fairness, and the consequences of one's actions.",
    arcana: "major"
  },
  {
    name: "The Hanged Man",
    img: "assets/the-hanged-man.jpg",
    meaning: "The Hanged Man represents sacrifice, patience, and perspective.",
    arcana: "major"
  },
  {
    name: "Death",
    img: "assets/death.jpg",
    meaning: "Death represents transformation, change, and rebirth.",
    arcana: "major"
  },
  {
    name: "Temperance",
    img: "assets/temperance.jpg",
    meaning: "Temperance represents balance, self-control, and harmony.",
    arcana: "major"
  },
  {
    name: "The Devil",
    img: "assets/the-devil.jpg",
    meaning: "The Devil represents temptation, materialism, and addiction.",
    arcana: "major"
  },
  // and so on
  {
    name: "The Tower",
    img: "assets/the-tower.jpg",
    meaning: "The Tower represents sudden change, upheaval, and chaos.",
    arcana: "major"
  },
  {
    name: "The Star",
    img: "assets/the-star.jpg",
    meaning: "The Star represents hope, inspiration, and aspiration.",
    arcana: "major"
  },
  {
    name: "The Moon",
    img: "assets/the-moon.jpg",
    meaning: "The Moon represents intuition, emotions, and the subconscious.",
    arcana: "major"
  },
  {
    name: "The Sun",
    img: "assets/the-sun.jpg",
    meaning: "The Sun represents vitality, success, and positivity.",
    arcana: "major"
  },
  {
    name: "Judgement",
    img: "assets/judgement.jpg",
    meaning: "Judgement represents accountability, self-evaluation, and redemption.",
    arcana: "major"
  },
  {
    name: "The World",
    img: "assets/the-world.jpg",
    meaning: "The World represents completion, wholeness, and unity.",
    arcana: "major"
  },
  {
    name: "Ace of Wands",
    img: "assets/ace-of-wands.jpg",
    meaning: "The Ace of Wands represents new beginnings, inspiration, and creativity.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Two of Wands",
    img: "assets/two-of-wands.jpg",
    meaning: "The Two of Wands represents planning, decision-making, and potential.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Three of Wands",
    img: "assets/three-of-wands.jpg",
    meaning: "The Three of Wands represents expansion, growth, and exploration.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Four of Wands",
    img: "assets/four-of-wands.jpg",
    meaning: "The Four of Wands represents celebration, stability, and harmony.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Five of Wands",
    img: "assets/five-of-wands.jpg",
    meaning: "The Five of Wands represents competition, conflict, and challenges.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Six of Wands",
    img: "assets/six-of-wands.jpg",
    meaning: "The Six of Wands represents victory, success, and recognition.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Seven of Wands",
    img: "assets/seven-of-wands.jpg",
    meaning: "The Seven of Wands represents defense, perseverance, and courage.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Eight of Wands",
    img: "assets/eight-of-wands.jpg",
    meaning: "The Eight of Wands represents swift action, communication, and travel.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Nine of Wands",
    img: "assets/nine-of-wands.jpg",
    meaning: "The Nine of Wands represents resilience, preparation, and inner strength.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Ten of Wands",
    img: "assets/ten-of-wands.jpg",
    meaning: "The Ten of Wands represents burden, responsibility, and burnout.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Page of Wands",
    img: "assets/page-of-wands.jpg",
    meaning: "The Page of Wands represents enthusiasm, curiosity, and new ideas.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Knight of Wands",
    img: "assets/knight-of-wands.jpg",
    meaning: "The Knight of Wands represents action, adventure, and impulsiveness.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Queen of Wands",
    img: "assets/queen-of-wands.jpg",
    meaning: "The Queen of Wands represents confidence, creativity, and passion.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "King of Wands",
    img: "assets/king-of-wands.jpg",
    meaning: "The King of Wands represents leadership, vision, and determination.",
    arcana: "minor",
    suit: "wands"
  },
  {
    name: "Ace of Cups",
    img: "assets/ace-of-cups.jpg",
    meaning: "The Ace of Cups represents new emotions, love, and compassion.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Two of Cups",
    img: "assets/two-of-cups.jpg",
    meaning: "The Two of Cups represents balance, harmony, and partnership.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Three of Cups",
    img: "assets/three-of-cups.jpg",
    meaning: "The Three of Cups represents celebration, friendship, and joy.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Four of Cups",
    img: "assets/four-of-cups.jpg",
    meaning: "The Four of Cups represents introspection, contemplation, and apathy.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Five of Cups",
    img: "assets/five-of-cups.jpg",
    meaning: "The Five of Cups represents loss, grief, and disappointment.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Six of Cups",
    img: "assets/six-of-cups.jpg",
    meaning: "The Six of Cups represents nostalgia, childhood, and forgiveness.",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Seven of Cups",
    img: "assets/seven-of-cups.jpg",
    meaning: "The Seven of Cups represents delusions, difficulty with making decisions, dreams, fantasies, illusion",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Eight of Cups",
    img: "assets/eight-of-cups.jpg",
    meaning: "The Eight of Cups represents abandoning, breaking up, disapointment, distancing yourself, ending a relationship (possibly toxic)",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Nine of Cups",
    img: "assets/nine-of-cups.jpg",
    meaning: "The Nine of Cups represents achievements, contentment, fulfillment of wishes, material comfort, pleasure, recognition, satisfaction",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Ten of Cups",
    img: "assets/ten-of-cups.jpg",
    meaning: "The Ten of Cups represents a dream coming true, emotional security, emotional stability, familly, fulfillment, hapiness, harmony",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Page of Cups",
    img: "assets/page-of-cups.jpg",
    meaning: "The Page of Cups represents curiosity, dreamer, emotional freedom, head in the clouds, idealism, innocence, intuition, naivety, romance",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Knight of Cups",
    img: "assets/knight-of-cups.jpg",
    meaning: "The Knight of Cups represents beauty, charm, creativity, dreamer, emotional transformation, friendly atmosphere, idealist, imagination",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Queen of Cups",
    img: "assets/queen-of-cups.jpg",
    meaning: "The Queen of Cups represents a loving person (usually a woman), big heart, caring, charm, clairvoyence, compassion, emotionality",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "King of Cups",
    img: "assets/king-of-cups.jpg",
    meaning: "The King of Cups represents compassion, counseling, devotion, diplomacy, emotional balance, emotional security",
    arcana: "minor",
    suit: "cups"
  },
  {
    name: "Ace of Swords",
    img: "assets/ace-of-swords.jpg",
    meaning: "The Ace of Swords represents clarity, decision-making, and truth.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Two of Swords",
    img: "assets/two-of-swords.jpg",
    meaning: "The Two of Swords represents balance, indecision, and inner conflict.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Three of Swords",
    img: "assets/three-of-swords.jpg",
    meaning: "The Three of Swords represents heartbreak, betrayal, and emotional pain.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Four of Swords",
    img: "assets/four-of-swords.jpg",
    meaning: "The Four of Swords represents rest, contemplation, and inner peace.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Five of Swords",
    img: "assets/five-of-swords.jpg",
    meaning: "The Five of Swords represents defeat, loss, and aggressive behavior.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Six of Swords",
    img: "assets/six-of-swords.jpg",
    meaning: "The Six of Swords represents transition, moving on, and healing.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Seven of Swords",
    img: "assets/seven-of-swords.jpg",
    meaning: "The Seven of Swords represents deception, cleverness, and stealth.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Eight of Swords",
    img: "assets/eight-of-swords.jpg",
    meaning: "The Eight of Swords represents restriction, confinement, and limitations.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Nine of Swords",
    img: "assets/nine-of-swords.jpg",
    meaning: "The Nine of Swords represents fear, anxiety, and nightmares.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Ten of Swords",
    img: "assets/ten-of-swords.jpg",
    meaning: "The Ten of Swords represents endings, finality, and release.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Page of Swords",
    img: "assets/page-of-swords.jpg",
    meaning: "The Page of Swords represents communication, news, and curiosity.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Knight of Swords",
    img: "assets/knight-of-swords.jpg",
    meaning: "The Knight of Swords represents action, ambition, and impulsiveness.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Queen of Swords",
    img: "assets/queen-of-swords.jpg",
    meaning: "The Queen of Swords represents intelligence, wisdom, and objectivity.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "King of Swords",
    img: "assets/king-of-swords.jpg",
    meaning: "The King of Swords represents logic, justice, and authority.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "King of Swords",
    img: "assets/king-of-swords.jpg",
    meaning: "The King of Swords represents logic, justice, and authority.",
    arcana: "minor",
    suit: "swords"
  },
  {
    name: "Ace of Pentacles",
    img: "assets/ace-of-pentacles.jpg",
    meaning: "The Ace of Pentacles represents new beginnings, abundance, and material success.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Two of Pentacles",
    img: "assets/two-of-pentacles.jpg",
    meaning: "The Two of Pentacles represents balance, flexibility, and adaptability.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Three of Pentacles",
    img: "assets/three-of-pentacles.jpg",
    meaning: "The Three of Pentacles represents teamwork, collaboration, and skill.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Four of Pentacles",
    img: "assets/four-of-pentacles.jpg",
    meaning: "The Four of Pentacles represents security, stability, and hoarding.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Five of Pentacles",
    img: "assets/five-of-pentacles.jpg",
    meaning: "The Five of Pentacles represents poverty, hardship, and material loss.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Six of Pentacles",
    img: "assets/six-of-pentacles.jpg",
    meaning: "The Six of Pentacles represents charity, generosity, and balance in giving and receiving.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Seven of Pentacles",
    img: "assets/seven-of-pentacles.jpg",
    meaning: "The Seven of Pentacles represents hard work, patience, and reaping the rewards.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Eight of Pentacles",
    img: "assets/eight-of-pentacles.jpg",
    meaning: "The Eight of Pentacles represents apprenticeship, craftsmanship, and skill-building.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Nine of Pentacles",
    img: "assets/nine-of-pentacles.jpg",
    meaning: "The Nine of Pentacles represents self-sufficiency, comfort, and luxury.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Ten of Pentacles",
    img: "assets/ten-of-pentacles.jpg",
    meaning: "The Ten of Pentacles represents family, tradition, and inheritance.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Page of Pentacles",
    img: "assets/page-of-pentacles.jpg",
    meaning: "The Page of Pentacles represents study, practicality, and financial opportunities.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Knight of Pentacles",
    img: "assets/knight-of-pentacles.jpg",
    meaning: "The Knight of Pentacles represents hard work, responsibility, and commitment.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "Queen of Pentacles",
    img: "assets/queen-of-pentacles.jpg",
    meaning: "The Queen of Pentacles represents comfort, nurturing, and practicality.",
    arcana: "minor",
    suit: "pentacles"
  },
  {
    name: "King of Pentacles",
    img: "assets/king-of-pentacles.jpg",
    meaning: "The King of Pentacles represents stability, wealth, and success.",
    arcana: "minor",
    suit: "pentacles"
  },
];

generateBtn.addEventListener("click", async () => {
  // generate 3 random cards from the tarot deck
  const cards = [
  tarotDeck[Math.floor(Math.random() * tarotDeck.length)],
  tarotDeck[Math.floor(Math.random() * tarotDeck.length)],
  tarotDeck[Math.floor(Math.random() * tarotDeck.length)],
  ];
  
  // clear the card container
  cardContainer.innerHTML = "";
  
  // create a div for each card and add it to the card container
  cards.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = <img src="${card.img}" alt="${card.name}"><h2>${card.name}</h2> <p>${card.meaning}</p></img>  ;
  cardContainer.appendChild(cardDiv);
  })
  });
  
  //get the names of the cards
  const selectedCardNames = [];
  const cardDivs = document.querySelectorAll("#reading .card");
  cardDivs.forEach(cardDiv => {
  selectedCardNames.push(cardDiv.querySelector("h2").textContent);
  });

  if(selectedCardNames.length === 3){
  // Call OpenAI API to get response
  const apiKey = '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';
  const cards = selectedCardNames.join(', ');
  const prompt = "What is the overall meaning of the three cards selected ${cards}?";
  const response = await axios({
  method: 'post',
  url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
  headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
},
data: {
prompt: prompt,
max_tokens: 100
}
});
// Extract response text and display in text area
if(response && response.data && response.data.choices && response.data.choices[0]){
const readingResponseText = document.getElementById("response-text-reading");
readingResponseText.value = response.data.choices[0].text;
} else {
console.log("Error generating response from API");
}
}

// JavaScript for manual card selection
const majorArcanaContainer = document.getElementById("major-arcana-container");
const minorArcanaContainer = document.getElementById("minor-arcana-container");
const cupsContainer = document.getElementById("cups-container");
const wandsContainer = document.getElementById("wands-container");
const swordsContainer = document.getElementById("swords-container");
const pentaclesContainer = document.getElementById("pentacles-container");

const emptyCard1 = document.getElementById("empty-card-1");
const emptyCard2 = document.getElementById("empty-card-2");
const emptyCard3 = document.getElementById("empty-card-3");
const selectedCards = document.getElementById("selected-cards");
const generateManualMeaningBtn = document.getElementById("generate-manual-meaning-btn");
const manualResponseContainer = document.getElementById("response-container");
const manualResponseText = document.getElementById("response-text-manual");

tarotDeck.forEach(card => {
const cardDiv = document.createElement("div");
cardDiv.classList.add("card");
cardDiv.innerHTML = <img src="${card.img}" alt="${card.name}"> <h2>${card.name}</h2> </img> ;
cardDiv.addEventListener("click", () => {
if (selectedCards.childElementCount < 3) {
selectedCards.appendChild(cardDiv);
}
});

if (card.arcana === "major") {
majorArcanaContainer.appendChild(cardDiv);
} else {
minorArcanaContainer.appendChild(cardDiv);
}
});

// JavaScript for manual card selection
const emptyCard1 = document.getElementById("empty-card-1");
const emptyCard2 = document.getElementById("empty-card-2");
const emptyCard3 = document.getElementById("empty-card-3");
const selectedCards = document.getElementById("selected-cards");
const generateManualMeaningBtn = document.getElementById("generate-manual-meaning-btn");
const responseTextManual = document.getElementById("response-text-manual");

let selectedCard1, selectedCard2, selectedCard3;

const cardList = document.querySelectorAll("#card-list .card");

cardList.forEach(card => {
card.addEventListener("click", e => {
if (!selectedCard1) {
emptyCard1.innerHTML = "";
selectedCard1 = e.target.cloneNode(true);
emptyCard1.appendChild(selectedCard1);
} else if (!selectedCard2) {
emptyCard2.innerHTML = "";
selectedCard2 = e.target.cloneNode(true);
emptyCard2.appendChild(selectedCard2);
} else if (!selectedCard3) {
emptyCard3.innerHTML = "";
selectedCard3 = e.target.cloneNode(true);
emptyCard3.appendChild(selectedCard3);
}
});
});

generateManualMeaningBtn.addEventListener("click", async () => {
if (selectedCard1 && selectedCard2 && selectedCard3) {
selectedCards.innerHTML = "";
selectedCards.appendChild(selectedCard1);
selectedCards.appendChild(selectedCard2);
selectedCards.appendChild(selectedCard3);

const selectedCardNames = [
  selectedCard1.querySelector("h2").textContent,
  selectedCard2.querySelector("h2").textContent,
  selectedCard3.querySelector("h2").textContent
];
const apiKey = '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';
const cards = selectedCardNames.join(', ');
const prompt = `What is the overall meaning of the three cards selected ${cards}?`;
const response = await axios({
  method: 'post',
  url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  data: {
    prompt: prompt,
    max_tokens: 100
  }
});
if (response && response.data && response.data.choices && response.data.choices[0]) {
  responseTextManual.value = response.data.choices[0].text;
} else {
  console.log("Error generating response from API");
}

// JavaScript for manual card selection
const majorArcanaContainer = document.getElementById("major-arcana-container");
const minorArcanaContainer = document.getElementById("minor-arcana-container");
const cupsContainer = document.getElementById("cups-container");
const wandsContainer = document.getElementById("wands-container");
const swordsContainer = document.getElementById("swords-container");
const pentaclesContainer = document.getElementById("pentacles-container");
const emptyCard1 = document.getElementById("empty-card-1");
const emptyCard2 = document.getElementById("empty-card-2");
const emptyCard3 = document.getElementById("empty-card-3");
const selectedCards = document.getElementById("selected-cards");
const generateManualMeaningBtn = document.getElementById("generate-manual-meaning-btn");
const responseContainer = document.getElementById("response-container");
const responseTextManual = document.getElementById("response-text-manual");

// add event listeners to empty cards to allow card selection
emptyCard1.addEventListener("click", () => selectCard(emptyCard1));
emptyCard2.addEventListener("click", () => selectCard(emptyCard2));
emptyCard3.addEventListener("click", () => selectCard(emptyCard3));

// function to handle card selection
function selectCard(emptyCard) {
// check if a card has already been selected for the empty card
if (emptyCard.querySelector(".card")) {
// if so, remove the selected card
emptyCard.querySelector(".card").remove();
} else {
// if not, show the card selection modal
cardSelectionModal.classList.remove("hidden");
}
}

// loop through tarot deck and create elements for each card
tarotDeck.forEach(card => {
// create card element
const cardDiv = document.createElement("div");
cardDiv.classList.add("card");
cardDiv.innerHTML = <img src="${card.img}" alt="${card.name}"><h2>${card.name}</h2></img>  ;

// add click event to card
cardDiv.addEventListener("click", () => {
// check if the card has already been selected
if (cardDiv.classList.contains("selected")) {
// if so, deselect the card
cardDiv.classList.remove("selected");
} else {
// if not, select the card
cardDiv.classList.add("selected");
}
});

// add card to appropriate container
if (card.arcana === "major") {
majorArcanaContainer.appendChild(cardDiv);
} else {
switch (card.suit) {
case "cups":
cupsContainer.appendChild(cardDiv);
break;
case "wands":
wandsContainer.appendChild(cardDiv);
break;
case "swords":
swordsContainer.appendChild(cardDiv);
break;
case "pentacles":
pentaclesContainer.appendChild(cardDiv);
}
};

// JavaScript for manual reading generation
const generateManualMeaningBtn = document.getElementById("generate-manual-meaning-btn");
const responseContainer = document.getElementById("response-container");
const responseTextManual = document.getElementById("response-text-manual");

generateManualMeaningBtn.addEventListener("click", async () => {
// get the selected cards
const selectedCards = document.querySelectorAll("#manual .selected");
const selectedCardNames = [];
selectedCards.forEach(card => {
selectedCardNames.push(card.querySelector("h2").textContent);
});

if (selectedCardNames.length === 3) {
  // send the request to the API
  const apiKey = "YOUR_API_KEY";
  const cards = selectedCardNames.join(", ");
  const prompt = `What is the overall meaning of the three cards selected ${cards}?`;
  const response = await axios({
    method: "post",
    url: "https://api.openai.com/v1/engines/text-davinci-002/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    data: {
      prompt: prompt,
      max_tokens: 100
    }
  });

  if (response && response.data && response.data.choices && response.data.choices[0]) {
    responseTextManual.value = response.data.choices[0].text;
  } else {
    console.log("Error generating response from API");
  }
} else {
  responseTextManual.value = ("Please select 3 cards");
};