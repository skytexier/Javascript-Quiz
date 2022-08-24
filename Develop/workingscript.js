var questionselect = document.querySelector("#quizmain")
var timer = document.querySelector("#timer")
var startGame = document.querySelector("#startgame");
var mainQuestion = document.querySelector("#mainquestion"); 
var choice = document.querySelector("#choice");
var quizzUl = document.querySelector("#quizquestion")
var quizz1 = document.createElement("li")

//Start Game
startGame.addEventListener("click", startquiz) 


function startquiz () {
 var multipleQuestions = [{
    id: 0,
    question: "What is does localStorage.setItem do?",
    answers: {
        a: "Creates an object that allows users to save key/value pairs in browser",
        b: "Gets items from local storage",
        c: "Downloads items from JavaScript to your computer",
        d: "Creates a repository for JS objects",
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
         a: "Boolean",
         b: "Number",
         c: "Symbol",
         d: "Fast"
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


 localStorage.setItem("multipleQuestions", JSON.stringify(multipleQuestions
    ));


   
 startGame.textContent = "";
 mainQuestion.textContent = multipleQuestions.question;
 quizzUl.append(quizz1);
 quizz1.textContent = "question 1";

console.log(JSON.parse.multipleQuestions[0]);
console.log(multipleQuestions)
};


//Local Storage
localStorage.setItem('name', name); ///
localStorage.setItem('score', score); ///

