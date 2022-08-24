var questionselect = document.querySelector("#quizmain")
var timer = document.querySelector("#timer")
var startGame = document.querySelector("#startgame");
var mainQuestion = document.querySelector("#mainquestion"); 
var choice = document.querySelector("#choice");
var quizzUl = document.querySelector("#quizquestion");
var result = document.querySelector("#result");
///var quizz1 = document.createElement("li");
var quizzContainer = document.querySelector("#question-container");
var optionS = document.querySelectorAll('.option');
var option1 = document.getElementById('1');
var option2 = document.getElementById('2');
var option3 = document.getElementById('3');
var option4 = document.getElementById('4');

console.log(optionS)

//Pre Quiz Attributes
quizzContainer.setAttribute("style", "display: none");
result.setAttribute("style", "display: none");

var multipleQuestions = [{
    id: 0,
    question: "What is does localStorage.setItem do?",
    answers: {
        a: "Creates an object that allows users to save key/value pairs in browser", correct: true,
        b: "Gets items from local storage", correct: false,
        c: "Downloads items from JavaScript to your computer", correct: false,
        d: "Creates a repository for JS objects", correct: false, 
    },
        correctAnswer: 'a' 
    }, 
    {
    id: 1,
     question: "What does CSS stand for?",
     answers: {
        a: "Computer Style Sheet",
        b: "Compact Starter Style",
        c: "Cascading Style Sheet",
        d: "Cooking Something Saucy"
     },
     correctAnswer: 'c'
 },
 {  id: 2,
     question: "What does DOM mean?",
     answers: {
         a: "Document Object Mode",
         b: "Desync on Monday",
         c: "Downloaded Override Module",
         d: "Document Object Model"
     },
     correctAnswer: 'd'
 },
 {  id: 3,
     question: "Which of the following is NOT a JavaScript data type ",
     answers: {
         a: "Boolean", correct: false,
         b: "Number", correct: false,
         c: "Symbol", correct: false,
         d: "Fast", correct: true,
     },
     correctAnswer: 'd'
 },
 {  id: 4,
    question: "An object can be transformed into a string using what?",
    answers: {
         a: "DOMs",
         b: "JSON",
         c: "CSS",
         d: "Gitbash"
     },
     correctAnswer: 'b'
 }];

 console.log(JSON.stringify(multipleQuestions));

 //Timer
function startTimer(){
    setInterval(setTimer, 90000);
}
 //Start Game
startGame.addEventListener("click", startQuiz); 
function startQuiz (){

    
    quizzContainer.setAttribute("style", "display: block");
    startGame.setAttribute("style", "display:none");

    //First Question
    mainQuestion.textContent = multipleQuestions[0].question;
    option1.textContent = multipleQuestions[0].answers.a;
    option2.textContent = multipleQuestions[0].answers.b;
    option3.textContent = multipleQuestions[0].answers.c;
    option4.textContent = multipleQuestions[0].answers.d;

    option1.addEventListener("click", () => {
    option1.style.backgroundColor = "green";
    result.textContent = "Correct!";
    result.setAttribute("style", "display: flex");
    });

    option2.addEventListener("click", () => {
    option2.style.backgroundColor = "red";
    result.textContent = "Wrong!";
    result.setAttribute("style", "display: flex");
    });
    
    option3.addEventListener("click", () => {
    option3.style.backgroundColor = "red";
    result.textContent = "Wrong!";
    result.setAttribute("style", "display: flex");
    });

    option4.addEventListener("click", () => {
    option4.style.backgroundColor = "red";
    result.textContent = "Wrong!";
    result.setAttribute("style", "display: flex");
        });

//If loop?
    if (click.multipleQuestions[0].answers.a = true) {
        startGame.addEventListener("click", startQuiz2);
    }
}


function startQuiz2 (){
    quizzContainer.setAttribute("style", "display: block");
    startGame.setAttribute("style", "display:none");

    //First Question
    mainQuestion.textContent = multipleQuestions[1].question;
    option1.textContent = multipleQuestions[1].answers.a;
    option2.textContent = multipleQuestions[1].answers.b;
    option3.textContent = multipleQuestions[1].answers.c;
    option4.textContent = multipleQuestions[1].answers.d;

    option1.addEventListener("click", () => {
    option1.style.backgroundColor = "green";
    startGame.setAttribute("style", "display:block")
    startGame.textContent = "Correct!";
    });

    option2.addEventListener("click", () => {
    option2.style.backgroundColor = "red";
    startGame.setAttribute("style", "display:block")
    startGame.textContent = "Wrong!";
    });
    
    option3.addEventListener("click", () => {
    option3.style.backgroundColor = "red";
    startGame.setAttribute("style", "display:block")
    startGame.textContent = "Wrong!";
    });

    option4.addEventListener("click", () => {
    option4.style.backgroundColor = "red";
    startGame.setAttribute("style", "display:block")
    startGame.textContent = "Wrong!";
        });

}
