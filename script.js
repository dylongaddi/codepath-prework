let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const lives = document.getElementById("lives");
const streak = document.getElementById("streak");
let pattern = [1, 2, 3, 4, 5, 6];
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
let mistakes = 0;

function startGame() {
  //initialize game variables
  mistakes = 0;
  progress = 0;
  clueHoldTime = 1000;
  gamePlaying = true;
  updateLives();
  updateStreak();
  createRandPattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}




function stopGame() {
  gamePlaying = false;
  lives.textContent = "Lives: 3"
  streak.textContent = "Streak: 0"
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame() {
  stopGame();
  alert("Game Over. You ran out of lives.");
}

function winGame() {
  stopGame();
  alert("Congratulations. You won!");
}

function updateLives() {
  lives.textContent = "Lives: " + (3 - mistakes);
}

function updateStreak() {
  streak.textContent = "Streak: " + progress;
}

function createRandPattern() {
  for (let i = 0; i < pattern.length; i++) {
    const randomInt =  Math.floor(Math.random() * 6) + 1;
    pattern[i] = randomInt;
  }
  console.log(pattern);
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence() {
  
  guessCounter = 0;
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 80;
  console.log("CHT:" + clueHoldTime)
}

function guess(btn){
  
  let userGuess = btn;
  
  console.log("user guessed: " + userGuess);
  if(!gamePlaying){
    return;
  }
  
  /**
  if userGuess != pattern(at )
    then lose game
  if turn is not over
    then increment guess counter
  if it is not the last turn
    increment progress, play next clue sequence
  else
    win game
  
  */
  
    if (userGuess != pattern[guessCounter]) {
      mistakes += 1;
      updateLives();
      alert("Your guess was incorrect! -1 life. Try again.")
      if (mistakes == 3) {
        loseGame();
      }
    } else if (guessCounter != progress) {
      guessCounter += 1;
    } else if (progress != pattern.length - 1) {
      progress += 1;
      playClueSequence();
      updateStreak();
    } else {
      winGame();
    }
}
 

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  5: 600,
  6: 700
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
