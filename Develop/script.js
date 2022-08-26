
// Selecting elements
var questionselect = document.querySelector("#quizmain");
var timer = document.querySelector("#timer");
var startGame = document.querySelector("#startgame");
var startPrompt = document.getElementById('start-prompt');
var mainQuestion = document.querySelector("#mainquestion");
var choice = document.querySelector("#choice");
var quizzUl = document.querySelector("#quizquestion");
var result = document.querySelector("#result");
var quizzContainer = document.querySelector("#question-container");
var options = document.querySelector("#options");
var highscoreBtn = document.getElementById('highscoreBtn');
var highscoreEl = document.querySelector('#highscore');
var time = 120
var highscoreSubmit = document.createElement("button");
var input = document.createElement("input");

var iterator = 0;

console.log(options);

//Pre Quiz Attributes
quizzContainer.setAttribute("style", "display: none");
result.setAttribute("style", "display: none");

// Quiz Question Object Array
var multipleQuestions = [
  {
    id: 0,
    question: "What is does localStorage.setItem do?",
    answers: [
      "Creates an object that allows users to save key/value pairs in browser",
      "Gets items from local storage",
      "Downloads items from JavaScript to your computer",
      "Creates a repository for JS objects"
    ],
    correctAnswer: 0,
  },

  {
    id: 1,
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheet",
      "Compact Starter Style",
      "Cascading Style Sheet",
      "Cooking Something Saucy"
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "What does DOM mean?",
    answers: [
      "Document Object Mode",
      "Desync on Monday",
      "Downloaded Override Module",
      "Document Object Model"
    ],
    correctAnswer: 3,
  },
  {
    question: "What is not a common data type",
    id: 3,
    answers: [
      "Boolean",
      "Number",
      "Symbol",
      "Fast",
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "An object can be transformed into a string using what?",
    answers: [
      "DOMs",
      "JSON",
      "CSS",
      "Gitbash",
     
    ],
    correctAnswer: 1,
  },
];


//Highscore Button On Click
highscoreBtn.addEventListener("click", showScores);
//Start Game On click 
startGame.addEventListener("click", startQuiz);
//Start Game Timer On click
startGame.addEventListener("click", function(){
  
  //Timer
  var startTimer = setInterval(function () { 
    time --;
    timer.textContent = "" + time
    if (time === 0){
      clearInterval(startTimer);
      gameOver(); 
    } if (iterator === 5) {
      clearInterval(startTimer);
    }
  }, 1000);
});

//Highscore Board
function showScores(){
mainQuestion.textContent = localStorage.getItem('score');
quizzContainer.setAttribute("style", "display: none");
result.setAttribute("style", "display: none");
startGame.textContent =  "Restart quiz?"
startGame.addEventListener("click", startQuiz)
iterator = 0
startGame.setAttribute("style", "display: block");
startPrompt.textContent = "Above is your name followed by your score!"
}



// Highscore / End of Game submit
function highScore(){
  //Text
  mainQuestion.textContent = "Congrats on completing the quiz! You can now long the time left as a highscore! Remember, the more time you have left the higher the score."
  startPrompt.setAttribute('style', 'display: block',);
  startPrompt.textContent = "Enter your initials below!"
  input.setAttribute('style', 'display: inline-block');
  //Input
  input.type = "text"
  input.name = "fname"
  input.value = ""
  highscoreEl.append(input);
  highscoreEl.append(highscoreSubmit);
  highscoreSubmit.textContent = "Submit your name and highscore!"
  console.log(time)

  highscoreSubmit.addEventListener("click", function (){
    localStorage.setItem('score', input.value + " : " + time)
    showScores();
});

}

function gameOver(){
  multipleQuestions.textContent = "";
  mainQuestion.textContent = "Out of time! Press Start Quiz to retry!!"
  quizzContainer.setAttribute("style", "display: none");
  result.setAttribute("style", "display: none");
  startGame.setAttribute("style", "display: flex");
  time = 120;
}



function startQuiz() {
  //Pre Game Styling
  quizzContainer.setAttribute("style", "display: block");
  startGame.setAttribute("style", "display:none");
  result.setAttribute("style", "display: none");
  startPrompt.setAttribute("style", "display:none");
  highscoreEl.setAttribute("style", "display:none");
  
  // Clear what was inside the questionaires
  options.innerHTML = "";
  result.textContent = "";
  mainQuestion.textContent = "";


  // Question Text Content
  if (iterator < 5) {
  var currentQuestion = multipleQuestions[iterator]; // { question: "", answers: [], correctAnswer: 1 }
  mainQuestion.textContent = currentQuestion.question;
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var currentAnswer = currentQuestion.answers[i];

    var buttonOptionEl = document.createElement("button");
    buttonOptionEl.classList.add("option");
    buttonOptionEl.setAttribute("id", i + 1);

    // currentQuestion.answers => ["Peter", "James", "Patrick"]
    // correctAnswer= => 1
    buttonOptionEl.setAttribute("data-correct", currentQuestion.answers[currentQuestion.correctAnswer]);
    buttonOptionEl.textContent = currentAnswer

    buttonOptionEl.addEventListener("click", handleSelectOption);
    options.appendChild(buttonOptionEl);
  console.log(iterator); 
    // if (){
    //   startQuiz();
    // }
}} else {
  highscoreEl.setAttribute("style", "display:block");
  highScore();
  console.log(time)
}};

function handleSelectOption() {
  var correctAnswer = this.getAttribute("data-correct");
  var userAnswer = this.textContent;

  if (correctAnswer === userAnswer) {
    // TODO:
    this.style.backgroundColor = "green";
    result.textContent = "Correct!";
    result.setAttribute("style", "display: none");
    iterator++;
    startQuiz();
  } else {
    this.style.backgroundColor = "red";
    result.setAttribute("style", "display: block");
    result.textContent = "Wrong!";
    time = time - 10;

  };
};

