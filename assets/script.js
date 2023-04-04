var startButton = document.querySelector(".start-game");
var setTimer = document.querySelector("#seconds");
var nextButton = document.querySelector(".next");
var question = document.getElementById("question");
var answerButton1 = document.querySelector(".answer1");
var answerButton2 = document.querySelector(".answer2");
var answerButton3 = document.querySelector(".answer3");
var answerButton4 = document.querySelector(".answer4");
var numberCorrect = 0;
var secondsLeft = 85;
var timerInterval;
var gameStarted = false;
var correctAnswer



var questionsAndAnswers = [
       { query: "Which of the following is not a primitive data type in JavaScript?",
      answers: ["Number","String","Boolean","Object"],
      correctAnswer: "Object",
    }, 
    { query: "What does the 'typeof' operator do in JavaScript?",
    answers: ["Returns the data type of a variable","Checks if a variable is defined","Assigns a value to a variable","Concatenates two strings"],
    correctAnswer: "Returns the data type of a variable",
  }, 
  { query: "Which of the following is not a comparison operator in JavaScript?",
  answers: ["==","===","!=","=<"],
  correctAnswer: "=<",
}, 
{ query: "What is the output of the following code: var x = true; console.log(!x)?",
answers: ["True","False","Undefined","Error"],
correctAnswer: "False",
}, 
{ query: "What does the “NaN” value represent in JavaScript?",
answers: ["Not a number","Null value","Unefined value","Boolean value"],
correctAnswer: "Not a number",
}, 
{ query: "What is the output of the following code: var x = 5; var y = “5”; console.log(x == y);?",
answers: ["True","False","Undefined","Error"],
correctAnswer: "True",
}, 
{ query: "What does the 'this' keyword refer to in JavaScript?",
answers: ["The current function","The global object","The object that the function belongs to","The parent object of the current object"],
correctAnswer: "The object that the function belongs to",
}, 
{ query: "What is the output of the following code: var x = [1, 2, 3]; console.log(x.length);?",
answers: ["1","2","3","4"],
correctAnswer: "3",
}, 
{ query: "What does the 'forEach' method do in JavaScript?",
answers: ["Adds a new element to the end of an array","Removes an element from the beginning of an array","Executes a function once for each element in an array","Reverses the order of the elements in an array"],
correctAnswer: "Executes a function once for each element in an array",
}, 
{ query: "What is the correct syntax for a “for” loop in JavaScript?",
answers: ["for (var i = 0; i < 5; i++)","for (i = 0; i < 5; i++)","for (var i = 5; i > 0; i-)","for (i = 5; i > 0; i-)"],
correctAnswer: "for (var i = 0; i < 5",
}
]

// { query: "How are you?",
// answers: ["a text content","b","c","d"],
// correctAnswer: "a text content",
// }, 



displayQuestion()
function displayQuestion() {
    question.textContent = questionsAndAnswers[0].query
    answers1.textContent = questionsAndAnswers[0].answers
    answers2.textContent = questionsAndAnswers[0].answers
    answers3.textContent = questionsAndAnswers[0].answers
    answers4.textContent = questionsAndAnswers[0].answers

    question.textContent = questionsAndAnswers[0].query[3]
    answers1.textContent = questionsAndAnswers[0].answers[4]
    answers2.textContent = questionsAndAnswers[0].answers[4]
    answers3.textContent = questionsAndAnswers[0].answers[4]
    answers4.textContent = questionsAndAnswers[0].answers[4]


}


function startQuiz()


answerButton1.addEventListener("click", answerOne );






function questionEleven() {
    
    var questions = document.getElementById("question");
    questions.innerHTML = "What is the output of the following code: console.log(Math.random());";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "0";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "0.5";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "1";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "A random number between 0 and 1";
}

function answerEleven() {
    var correctOrNot = document.getElementById("results");
    correctOrNot.innerHTML = "You're Wrong!";
}

answerButton11.addEventListener("click", answerEleven );



function questionTwelve() {
    
    var questions = document.getElementById("question");
    questions.innerHTML = "What is the difference between '==' and '===' operators in JavaScript?";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "They are interchangeable";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "'==' checks for value equality, while '===' checks for value and type equality";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "'===' checks for value equality, while '==' checks for value and type equality";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "They both perform the same operation";
}

function answerTwelve() {
    var correctOrNot = document.getElementById("results");
    correctOrNot.innerHTML = "You're Wrong!";
}

answerButton12.addEventListener("click", answerTwelve );



function questionThirteen() {
    
    var questions = document.getElementById("question");
    questions.innerHTML = "Which of the following is not a valid JavaScript array method?";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "push()";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "pop()";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "shift()";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "splice()";
}

function answerThirteen() {
    var correctOrNot = document.getElementById("results");
    correctOrNot.innerHTML = "You're Wrong!";
}

answerButton13.addEventListener("click", answerThirteen );



function questionFourteen() {
    
    var questions = document.getElementById("question");
    questions.innerHTML = "Which of the following is not a valid way to declare a variable in JavaScript?";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "var x;";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "let y;";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "const z;";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "variable w;";
}

function answerFourteen() {
    var correctOrNot = document.getElementById("results");
    correctOrNot.innerHTML = "You're Wrong!";
}

answerButton14.addEventListener("click", answerFourteen );



function questionFifteen() {
    
    var questions = document.getElementById("question");
    questions.innerHTML = "What is the output of the following code: var x = true; var y = false; console.log(x || y);";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "True";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "False";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "Error";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "NaN";
}

function answerFifteen() {
    var correctOrNot = document.getElementById("results");
    correctOrNot.innerHTML = "You're Wrong!";
}

answerButton15.addEventListener("click", answerFifteen );


startButton.addEventListener("click", questionOne );

nextButton.addEventListener("click", nextButtonPress );











// function for the next nextButton
// use an integer to say, the first time you click the next button, it will populate with text 
// from question 2. And youll have some integer that will say current question, everytime you 
// click the next button the integer will increase by an increment. So when your clicking the 
// next button, if current question is true, then everything inside the if statement is populating 
// everything for question 2.



// Pseudo Code: 
// has a start button 
// has a timer and quiz starts when user clicks start button
// when user clicks next, the next question pops up
// when a question is answered wrong, we subtract time
// when ALL questions are answered OR timer reahes 0, game is over. 
// When the game is over the user can save initials and their score. 

// What code will need: 
// 1. For the start button we will need to place a document.querySelector(# or .) AND .addEventListener("click", startTheGame ); ✓
//          a. var startButton = document.querySelector(".start-game");
//          b. startButton.addEventListener("click", startTheGame ); 

// 2. Create a global variable of setTimer and set it equal to a document.quesrySelector(#seconds)
//          a. Put if statements in the function for when time reaches 0 and if they 
//          b. Make sure that your function is called in the startthegame function

// 3. Create a function for saving the scores of the players 
//          a. create a local variable for savedwins and set it equal to the localStorage.getItem("") 
//          b. create a conditional statement within the savedwins function and include a .textContent in the if statement. 

// 4. Create a startthegame(event) function and put the conditional statements and the questions inside there?????
//          a.declare local variables for (game started=true, the questions as objects?)
//          b. Make sure that the setTime function is called in the start game function (at the end)
// 5. Make a function for a set time interval and inside make a object that contains the associated properties.(timerInterval, seconds left) 




// function setTime() {
//     timerInterval= setInterval(function() {
//     secondsLeft--;
    
//     if(secondsLeft === 0){
//       secretWord.textContent = "You Lost!";
//       clearInterval(timerInterval);
//     }
//   }, 1000);
// }

// function Wins() {

//     var SavedWins = localStorage.getItem("correct");
//     if (SavedWins !== null) {
//       winCount.textContent = SavedWins;
//       numberCorrect =  SavedWins;
//     } else {
//       winCount.textContent = 0;
//       numberCorrect = 0;
//     }
    
// }// var answerButton1 = document.querySelector(".answer1");
// var answerButton2 = document.querySelector(".answer2");
// var answerButton3 = document.querySelector(".answer3");
// var answerButton4 = document.querySelector(".answer4");
// var answerButton5 = document.querySelector(".answer5");
// var answerButton6 = document.querySelector(".answer6");
// var answerButton7 = document.querySelector(".answer7");
// var answerButton8 = document.querySelector(".answer8");
// var answerButton9 = document.querySelector(".answer9");
// var answerButton10 = document.querySelector(".answer10");
// var answerButton11 = document.querySelector(".answer11");
// var answerButton12 = document.querySelector(".answer12");
// var answerButton13 = document.querySelector(".answer13");
// var answerButton14 = document.querySelector(".answer14");
// var answerButton15 = document.querySelector(".answer15");