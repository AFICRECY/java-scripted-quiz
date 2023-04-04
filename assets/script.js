var startButton = document.querySelector(".start-game");
var nextButton = document.querySelector(".next");
// For the start button and the Next Button we will need to place a document.querySelector,
// which is connected to the classes on the HTML button tags.
var setTimer = document.querySelector("#seconds");
// This querySelector is used to connect to the seconds id in the HTML, so that the timer and the seconds 
// will be visible and interactive
var question = document.getElementById("question");
// The document.getElementById is connected to the question id on the HTML h1 tag so that it can populate the 
// questions when the game has started
var answerButton1 = document.querySelector(".answer1");
var answerButton2 = document.querySelector(".answer2");
var answerButton3 = document.querySelector(".answer3");
var answerButton4 = document.querySelector(".answer4");
// The above querySelectors also connect the below array of questionsAndAnswers to the HTML for the multiple 
// choice options to be populated along with the question.
var numberCorrect = 0;
var buttonTags = document.querySelectorAll("button")''
var numWrong = 0;
var secondsLeft = 85;
var timerInterval;
var gameStarted = false;
var correctAnswer;
var userInput;
var results;

buttonTags[0].setAttribute("style", "color: white;");

function setTime() {
        var timerInterval= setInterval(function() {
        secondsLeft--;
        setTimer.textContent = secondsLeft;
        if(secondsLeft === 0){
          h1.textContent = "You Lost!";
          clearInterval(timerInterval);}
        else if (correctAnswer == Null); {
        timerInterval = (var i = 0; i < secondsLeft.length; i--)
        // If the user selects the wrong answer then the time is reduced. 
        // Still needing some clarity on the set time interval concept and whether or not the length property should be applied. 
      }, 1000);
    }

// The set time function is includes the setInterval() method which takes initates the countdown from the time the start button is pressed. 
// When the countdown reaches zero, the action of the countdownstop. The clearInterval() method stops the execution of the interval. 
// It takes one parameter: the variable name assigned to the interval




// Below are the variable containing an array of objects which contain the content of the Multiple Choice Quiz. 
// It includes the: Question, the multiple choice answer options, and the correctAnswer. 
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


startButton.addEventListener("click", startQuiz );
// This event listener is supposed to (with a click event) initiate the quiz to start 

nextButton.addEventListener("click", nextButtonPress );
//Here I used the addEventListener() method, which took in two parameters (the click event) becayse we want something to happen when a user clicks on the startButton and also the second parameter, the action
//  that we want performed when a user clicks the respective button. The same logic can be applied to the "next" button as well. 



// The below code is the displayQuestions function which is initiated when the startButton is pressed and the click event starts. 
// This is an example of being able to access elements and ids using dot notation and highlightin what index the object or value that I 
// am ttargeting is at. 
displayQuestion()
function displayQuestion() {
    question.textContent = questionsAndAnswers[0].query
    answers1.textContent = questionsAndAnswers[0].answers
    answers2.textContent = questionsAndAnswers[0].answers
    answers3.textContent = questionsAndAnswers[0].answers
    answers4.textContent = questionsAndAnswers[0].answers

    question.textContent = questionsAndAnswers[0].query[1]
    answers1.textContent = questionsAndAnswers[0].answers[2]
    answers2.textContent = questionsAndAnswers[0].answers[2]
    answers3.textContent = questionsAndAnswers[0].answers[2]
    answers4.textContent = questionsAndAnswers[0].answers[2]

    question.textContent = questionsAndAnswers[0].query[2]
    answers1.textContent = questionsAndAnswers[0].answers[3]
    answers2.textContent = questionsAndAnswers[0].answers[3]
    answers3.textContent = questionsAndAnswers[0].answers[3]
    answers4.textContent = questionsAndAnswers[0].answers[3]

    question.textContent = questionsAndAnswers[0].query[3]
    answers1.textContent = questionsAndAnswers[0].answers[4]
    answers2.textContent = questionsAndAnswers[0].answers[4]
    answers3.textContent = questionsAndAnswers[0].answers[4]
    answers4.textContent = questionsAndAnswers[0].answers[4]

    question.textContent = questionsAndAnswers[0].query[4]
    answers1.textContent = questionsAndAnswers[0].answers[5]
    answers2.textContent = questionsAndAnswers[0].answers[5]
    answers3.textContent = questionsAndAnswers[0].answers[5]
    answers4.textContent = questionsAndAnswers[0].answers[5]

    question.textContent = questionsAndAnswers[0].query[4]
    answers1.textContent = questionsAndAnswers[0].answers[5]
    answers2.textContent = questionsAndAnswers[0].answers[5]
    answers3.textContent = questionsAndAnswers[0].answers[5]
    answers4.textContent = questionsAndAnswers[0].answers[5]

    question.textContent = questionsAndAnswers[0].query[5]
    answers1.textContent = questionsAndAnswers[0].answers[6]
    answers2.textContent = questionsAndAnswers[0].answers[6]
    answers3.textContent = questionsAndAnswers[0].answers[6]
    answers4.textContent = questionsAndAnswers[0].answers[6]

    question.textContent = questionsAndAnswers[0].query[7]
    answers1.textContent = questionsAndAnswers[0].answers[8]
    answers2.textContent = questionsAndAnswers[0].answers[8]
    answers3.textContent = questionsAndAnswers[0].answers[8]
    answers4.textContent = questionsAndAnswers[0].answers[8]

    question.textContent = questionsAndAnswers[0].query[8]
    answers1.textContent = questionsAndAnswers[0].answers[9]
    answers2.textContent = questionsAndAnswers[0].answers[9]
    answers3.textContent = questionsAndAnswers[0].answers[9]
    answers4.textContent = questionsAndAnswers[0].answers[9]

    question.textContent = questionsAndAnswers[0].query[9]
    answers1.textContent = questionsAndAnswers[0].answers[10]
    answers2.textContent = questionsAndAnswers[0].answers[10]
    answers3.textContent = questionsAndAnswers[0].answers[10]
    answers4.textContent = questionsAndAnswers[0].answers[10]
}




function startQuiz() {
    gameStarted = true; 
    displayQuestion();
    setTime();
}
// This function starts the timer as well as begins the click event for the quiz to begin. 



function finalScore() {
    var numberCorrect = 0;
    var numWrong = 0;
    var numberCorrect = localStorage.getItem(correctAnswer);
    foreach. button(".next") {
       for (var correctAnswer = "get value");
        if ( numWrong = Null); 
        correctAnswer++;
    }
    var finalScore = Math.floor((numCorrect / numWrong * 100));
    document.getElementById("scoreDisplay").innerHTML = finalScore;
    
}
// This function is intended to count the number of questions answered correctly versus incorrectly. 
// When the quiz has concluded I would like for the number correct and the number wrong to be divided and 
// the result to be multiplied by 100 so that the percentage is stored in the variable "finalScore" and is 
// displayed on the HTML document where the id "score-display" is. 











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




// 

    
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