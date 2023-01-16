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
    img: "the-fool.jpg",
    meaning: "The Fool represents new beginnings, spontaneity, and trust in the universe."
  },
  {
    name: "The Magician",
    img: "the-magician.jpg",
    meaning: "The Magician represents power, creativity, and the ability to manifest your desires."
  },
  // more cards...
  {
    name: "The High Priestess",
    img: "the-high-priestess.jpg",
    meaning: "The High Priestess represents intuition, secrets, and the unconscious mind."
  },
  {
    name: "The Empress",
    img: "the-empress.jpg",
    meaning: "The Empress represents motherhood, nurturing, and abundance."
  },
  {
    name: "The Emperor",
    img: "the-emperor.jpg",
    meaning: "The Emperor represents authority, stability, and structure."
  },
  {
    name: "The Hierophant",
    img: "the-hierophant.jpg",
    meaning: "The Hierophant represents tradition, spirituality, and guidance."
  },
  {
    name: "The Lovers",
    img: "the-lovers.jpg",
    meaning: "The Lovers represents love, harmony, and balance."
  },
  // and so on
  {
    name: "The Chariot",
    img: "the-chariot.jpg",
    meaning: "The Chariot represents determination, control, and willpower."
  },
  {
    name: "Strength",
    img: "strength.jpg",
    meaning: "Strength represents inner power, courage, and compassion."
  },
  {
    name: "The Hermit",
    img: "the-hermit.jpg",
    meaning: "The Hermit represents introspection, wisdom, and inner guidance."
  },
  {
    name: "Wheel of Fortune",
    img: "wheel-of-fortune.jpg",
    meaning: "The Wheel of Fortune represents the cyclical nature of life, destiny, and change."
  },
  {
    name: "Justice",
    img: "justice.jpg",
    meaning: "Justice represents balance, fairness, and the consequences of one's actions."
  },
  {
    name: "The Hanged Man",
    img: "the-hanged-man.jpg",
    meaning: "The Hanged Man represents sacrifice, patience, and perspective."
  },
  {
    name: "Death",
    img: "death.jpg",
    meaning: "Death represents transformation, change, and rebirth."
  },
  {
    name: "Temperance",
    img: "temperance.jpg",
    meaning: "Temperance represents balance, self-control, and harmony."
  },
  {
    name: "The Devil",
    img: "the-devil.jpg",
    meaning: "The Devil represents temptation, materialism, and addiction."
  },
  // and so on
  {
    name: "The Tower",
    img: "the-tower.jpg",
    meaning: "The Tower represents sudden change, upheaval, and chaos."
  },
  {
    name: "The Star",
    img: "the-star.jpg",
    meaning: "The Star represents hope, inspiration, and aspiration."
  },
  {
    name: "The Moon",
    img: "the-moon.jpg",
    meaning: "The Moon represents intuition, emotions, and the subconscious."
  },
  {
    name: "The Sun",
    img: "the-sun.jpg",
    meaning: "The Sun represents vitality, success, and positivity."
  },
  {
    name: "Judgement",
    img: "judgement.jpg",
    meaning: "Judgement represents accountability, self-evaluation, and redemption."
  },
  {
    name: "The World",
    img: "the-world.jpg",
    meaning: "The World represents completion, wholeness, and unity."
  },
  {
    name: "Ace of Wands",
    img: "ace-of-wands.jpg",
    meaning: "The Ace of Wands represents new beginnings, inspiration, and creativity."
  },
  {
    name: "Two of Wands",
    img: "two-of-wands.jpg",
    meaning: "The Two of Wands represents planning, decision-making, and potential."
  },
  {
    name: "Three of Wands",
    img: "three-of-wands.jpg",
    meaning: "The Three of Wands represents expansion, growth, and exploration."
  },
  {
    name: "Four of Wands",
    img: "four-of-wands.jpg",
    meaning: "The Four of Wands represents celebration, stability, and harmony."
  },
  {
    name: "Five of Wands",
    img: "five-of-wands.jpg",
    meaning: "The Five of Wands represents competition, conflict, and challenges."
  },
  {
    name: "Six of Wands",
    img: "six-of-wands.jpg",
    meaning: "The Six of Wands represents victory, success, and recognition."
  },
  {
    name: "Seven of Wands",
    img: "seven-of-wands.jpg",
    meaning: "The Seven of Wands represents defense, perseverance, and courage."
  },
  {
    name: "Eight of Wands",
    img: "eight-of-wands.jpg",
    meaning: "The Eight of Wands represents swift action, communication, and travel."
  },
  {
    name: "Nine of Wands",
    img: "nine-of-wands.jpg",
    meaning: "The Nine of Wands represents resilience, preparation, and inner strength."
  },
  {
    name: "Ten of Wands",
    img: "ten-of-wands.jpg",
    meaning: "The Ten of Wands represents burden, responsibility, and burnout."
  },
  {
    name: "Page of Wands",
    img: "page-of-wands.jpg",
    meaning: "The Page of Wands represents enthusiasm, curiosity, and new ideas."
  },
  {
    name: "Knight of Wands",
    img: "knight-of-wands.jpg",
    meaning: "The Knight of Wands represents action, adventure, and impulsiveness."
  },
  {
    name: "Queen of Wands",
    img: "queen-of-wands.jpg",
    meaning: "The Queen of Wands represents confidence, creativity, and passion."
  },
  {
    name: "King of Wands",
    img: "king-of-wands.jpg",
    meaning: "The King of Wands represents leadership, vision, and determination."
  },
  {
    name: "Ace of Cups",
    img: "ace-of-cups.jpg",
    meaning: "The Ace of Cups represents new emotions, love, and compassion."
  },
  {
    name: "Two of Cups",
    img: "two-of-cups.jpg",
    meaning: "The Two of Cups represents balance, harmony, and partnership."
  },
  {
    name: "Three of Cups",
    img: "three-of-cups.jpg",
    meaning: "The Three of Cups represents celebration, friendship, and joy."
  },
  {
    name: "Four of Cups",
    img: "four-of-cups.jpg",
    meaning: "The Four of Cups represents introspection, contemplation, and apathy."
  },
  {
    name: "Five of Cups",
    img: "five-of-cups.jpg",
    meaning: "The Five of Cups represents loss, grief, and disappointment."
  },
  {
    name: "Six of Cups",
    img: "six-of-cups.jpg",
    meaning: "The Six of Cups represents nostalgia, childhood, and forgiveness."
  },
  {
    name: "Seven of Cups",
    img: "seven-of-cups.jpg",
    meaning: "The Seven of Cups represents delusions, difficulty with making decisions, dreams, fantasies, illusion",
  },
  {
    name: "Eight of Cups",
    img: "eight-of-cups.jpg",
    meaning: "The Eight of Cups represents abandoning, breaking up, disapointment, distancing yourself, ending a relationship (possibly toxic)",
  },
  {
    name: "Nine of Cups",
    img: "nine-of-cups.jpg",
    meaning: "The Nine of Cups represents achievements, contentment, fulfillment of wishes, material comfort, pleasure, recognition, satisfaction",
  },
  {
    name: "Ten of Cups",
    img: "ten-of-cups.jpg",
    meaning: "The Ten of Cups represents a dream coming true, emotional security, emotional stability, familly, fulfillment, hapiness, harmony",
  },
  {
    name: "Page of Cups",
    img: "page-of-cups.jpg",
    meaning: "The Page of Cups represents curiosity, dreamer, emotional freedom, head in the clouds, idealism, innocence, intuition, naivety, romance",
  },
  {
    name: "Knight of Cups",
    img: "knight-of-cups.jpg",
    meaning: "The Knight of Cups represents beauty, charm, creativity, dreamer, emotional transformation, friendly atmosphere, idealist, imagination",
  },
  {
    name: "Queen of Cups",
    img: "queen-of-cups.jpg",
    meaning: "The Queen of Cups represents a loving person (usually a woman), big heart, caring, charm, clairvoyence, compassion, emotionality"
  },
  {
    name: "King of Cups",
    img: "king-of-cups.jpg",
    meaning: "The King of Cups represents compassion, counseling, devotion, diplomacy, emotional balance, emotional security"
  },
  {
    name: "Ace of Swords",
    img: "ace-of-swords.jpg",
    meaning: "The Ace of Swords represents clarity, decision-making, and truth."
  },
  {
    name: "Two of Swords",
    img: "two-of-swords.jpg",
    meaning: "The Two of Swords represents balance, indecision, and inner conflict."
  },
  {
    name: "Three of Swords",
    img: "three-of-swords.jpg",
    meaning: "The Three of Swords represents heartbreak, betrayal, and emotional pain."
  },
  {
    name: "Four of Swords",
    img: "four-of-swords.jpg",
    meaning: "The Four of Swords represents rest, contemplation, and inner peace."
  },
  {
    name: "Five of Swords",
    img: "five-of-swords.jpg",
    meaning: "The Five of Swords represents defeat, loss, and aggressive behavior."
  },
  {
    name: "Six of Swords",
    img: "six-of-swords.jpg",
    meaning: "The Six of Swords represents transition, moving on, and healing."
  },
  {
    name: "Seven of Swords",
    img: "seven-of-swords.jpg",
    meaning: "The Seven of Swords represents deception, cleverness, and stealth."
  },
  {
    name: "Eight of Swords",
    img: "eight-of-swords.jpg",
    meaning: "The Eight of Swords represents restriction, confinement, and limitations."
  },
  {
    name: "Nine of Swords",
    img: "nine-of-swords.jpg",
    meaning: "The Nine of Swords represents fear, anxiety, and nightmares."
  },
  {
    name: "Ten of Swords",
    img: "ten-of-swords.jpg",
    meaning: "The Ten of Swords represents endings, finality, and release."
  },
  {
    name: "Page of Swords",
    img: "page-of-swords.jpg",
    meaning: "The Page of Swords represents communication, news, and curiosity."
  },
  {
    name: "Knight of Swords",
    img: "knight-of-swords.jpg",
    meaning: "The Knight of Swords represents action, ambition, and impulsiveness."
  },
  {
    name: "Queen of Swords",
    img: "queen-of-swords.jpg",
    meaning: "The Queen of Swords represents intelligence, wisdom, and objectivity."
  },
  {
    name: "King of Swords",
    img: "king-of-swords.jpg",
    meaning: "The King of Swords represents logic, justice, and authority."
  },
  {
    name: "King of Swords",
    img: "king-of-swords.jpg",
    meaning: "The King of Swords represents logic, justice, and authority."
  },
  {
    name: "Ace of Pentacles",
    img: "ace-of-pentacles.jpg",
    meaning: "The Ace of Pentacles represents new beginnings, abundance, and material success."
  },
  {
    name: "Two of Pentacles",
    img: "two-of-pentacles.jpg",
    meaning: "The Two of Pentacles represents balance, flexibility, and adaptability."
  },
  {
    name: "Three of Pentacles",
    img: "three-of-pentacles.jpg",
    meaning: "The Three of Pentacles represents teamwork, collaboration, and skill."
  },
  {
    name: "Four of Pentacles",
    img: "four-of-pentacles.jpg",
    meaning: "The Four of Pentacles represents security, stability, and hoarding."
  },
  {
    name: "Five of Pentacles",
    img: "five-of-pentacles.jpg",
    meaning: "The Five of Pentacles represents poverty, hardship, and material loss."
  },
  {
    name: "Six of Pentacles",
    img: "six-of-pentacles.jpg",
    meaning: "The Six of Pentacles represents charity, generosity, and balance in giving and receiving."
  },
  {
    name: "Seven of Pentacles",
    img: "seven-of-pentacles.jpg",
    meaning: "The Seven of Pentacles represents hard work, patience, and reaping the rewards."
  },
  {
    name: "Eight of Pentacles",
    img: "eight-of-pentacles.jpg",
    meaning: "The Eight of Pentacles represents apprenticeship, craftsmanship, and skill-building."
  },
  {
    name: "Nine of Pentacles",
    img: "nine-of-pentacles.jpg",
    meaning: "The Nine of Pentacles represents self-sufficiency, comfort, and luxury."
  },
  {
    name: "Ten of Pentacles",
    img: "ten-of-pentacles.jpg",
    meaning: "The Ten of Pentacles represents family, tradition, and inheritance."
  },
  {
    name: "Page of Pentacles",
    img: "page-of-pentacles.jpg",
    meaning: "The Page of Pentacles represents study, practicality, and financial opportunities."
  },
  {
    name: "Knight of Pentacles",
    img: "knight-of-pentacles.jpg",
    meaning: "The Knight of Pentacles represents hard work, responsibility, and commitment."
  },
  {
    name: "Queen of Pentacles",
    img: "queen-of-pentacles.jpg",
    meaning: "The Queen of Pentacles represents comfort, nurturing, and practicality."
  },
  {
    name: "King of Pentacles",
    img: "king-of-pentacles.jpg",
    meaning: "The King of Pentacles represents stability, wealth, and success."
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
      cardDiv.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <h2>${card.name}</h2>
        <p>${card.meaning}</p>
      `;
      cardContainer.appendChild(cardDiv);
    });

    //get the names of the cards
    const selectedCardNames = [];
    const cardDivs = document.querySelectorAll("#reading .card");
    cardDivs.forEach(cardDiv => {
        selectedCardNames.push(cardDiv.querySelector("h2").textContent);
    });

    if(selectedCardNames.length === 3){
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
    if(response && response.data && response.data.choices && response.data.choices[0]){
        readingResponseText.value = response.data.choices[0].text;
    } else {
        console.log("Error generating response from API");
    }
    } else {
        console.log("Please select 3 cards to generate a response.")
    }
});
  
  
  // JavaScript for manual card selection
  const cardList = document.getElementById("card-list");
  const selectedCards = document.getElementById("selected-cards");
  
  let selectedCardCount = 0;
  
  // create a div for each card and add it to the card list
  tarotDeck.forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <h2>${card.name}</h2>
        <p>${card.meaning}</p>
      `;
      cardList.appendChild(cardDiv);
      cardDiv.addEventListener("click", e => {
          if(selectedCardCount < 3){
              //Add the selected card to the selected card container
              selectedCardCount++;
              selectedCards.appendChild(cardDiv.cloneNode(true));
              cardDiv.classList.add("selected");
          }
      });
  });
  const generateReadingMeaningBtn = document.getElementById("generate-reading-meaning-btn");
  const generateManualMeaningBtn = document.getElementById("generate-manual-meaning-btn");
  const responseContainer = document.getElementById("response-container");
  const readingCardContainer = document.getElementById("reading-card-container");
  const manualResponseText = document.getElementById("response-text-manual");
  const readingResponseText = document.getElementById("response-text-reading");

  const selectedCardNames = [];

generateManualMeaningBtn.addEventListener("click", async () => {
    //Get the selected cards names
    const selectedCardDivs = document.querySelectorAll("#selected-cards .card");
    selectedCardDivs.forEach(cardDiv => {
        selectedCardNames.push(cardDiv.querySelector("h2").textContent);
    });

    if(selectedCardNames.length === 3){
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
                if(response && response.data && response.data.choices && response.data.choices[0]){
                    manualResponseText.value = response.data.choices[0].text;
                } else {
                    console.log("Error generating response from API");
                }
            } else {
                console.log("Please select 3 cards to generate a response.")
            }
        });
