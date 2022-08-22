var questionselect = document.querySelector("#quizmain")
var timer = document.querySelector("#timer")
var questions = ["What does JS stand for?", "What does CSS mean?", "Why am I alive?"]
var startGame = document.querySelector("#startgame");
var mainQuestion = document.querySelector("#mainquestion");
var quizzQuestions = document.querySelector("#quizuestion");

startGame.addEventListener("click", function(event){
    event.preventDefault();
    startGame.innerHTML = "";
    mainQuestion.textContent = questions[1];
})



//Local Storage
localStorage.setItem('name', name); ///
localStorage.setItem('score', score); ///
