let timerInterval;
let gifInterval;
let timeLeft = 0;
let currentReps = 0;
const gifCount = 102; // Assuming there are 102 GIFs named 1.gif to 102.gif

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function startBreak() {
  timeLeft = Math.floor(Math.random() * 120) + 1;
  updateTimerDisplay();

  clearInterval(timerInterval);
  clearInterval(gifInterval);

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      clearInterval(gifInterval);
    }
  }, 1000);

  gifInterval = setInterval(() => {
    const gifNumber = Math.floor(Math.random() * gifCount) + 1;
    document.getElementById("gif-display").src = `images/${gifNumber}.gif`;
  }, 6000);
}

function setReps() {
  const feeling = document.getElementById("feeling").value;
  let maxReps = 0;

  if (feeling === "tired") maxReps = 8;
  else if (feeling === "neutral") maxReps = 14;
  else if (feeling === "good") maxReps = 20;

  currentReps = Math.floor(Math.random() * (maxReps + 1));
  document.getElementById("reps").textContent = currentReps;
}

function dropRep() {
  if (currentReps > 0) {
    currentReps--;
    document.getElementById("reps").textContent = currentReps;
  }
}

function failSet() {
  clearInterval(timerInterval);
  clearInterval(gifInterval);
  currentReps = 0;
  document.getElementById("reps").textContent = "0";
  document.getElementById("timer").textContent = "00:00";
  document.getElementById("gif-display").src = "images/31.gif"; // Return to default GIF
  alert("Set failed! Take a break and reset.");
}

function firstEdgingProject() {
  window.location.assign("https://marvelous-mousse-3885fa.netlify.app/");
}

function cumCountdown() {
  window.location.assign("https://tranquil-selkie-f19076.netlify.app/");
}

function gooningToGifs() {
  window.location.assign("https://zippy-melomakarona-a53f43.netlify.app/");
}