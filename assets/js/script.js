const wordText = document.querySelector(".word");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timeText.innerText = maxTime; // Display initial time

  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timeText.innerText = maxTime; // Update time text
    } else {
      clearInterval(timer); // Stop the timer
      alert(`Time's up! ${correctWord.toUpperCase()} was the correct word`);
      initGame();
    }
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join(""); // Set the innerText correctly
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length); // Set maxlength attribute
};

const words = [
  { word: "champion" },
  { word: "conditioning" },
  { word: "defense" },
  { word: "handoff" },
  { word: "kickoff" },
  { word: "offense" },
  { word: "players" },
  { word: "referee" },
  { word: "scrimmage" },
  { word: "tickets" },
  { word: "touchdown" },
  { word: "victory" },

  // Add more words as needed
];

// Call initGame to start the game initially
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
  initGame();
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

