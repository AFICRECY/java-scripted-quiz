var startButton = document.querySelector(".start-game");
var setTimer = document.querySelector("#seconds");
var nextButton = document.querySelector(".next");
var numberCorrect = 0;
var secondsLeft = 85;
var timerInterval;
var gameStarted = false;

function startGame() {
    gameStarted = true;
    var questions = document.getElementById("question");
    questions.innerHTML = "Question Text";
   
    var answer1 = document.getElementById("a_text");
    answer1.innerHTML = "Answer 1 text";

    var answer2 = document.getElementById("b_text");
    answer2.innerHTML = "Answer 2 text";

    var answer3 = document.getElementById("c_text");
    answer3.innerHTML = "Answer 3 text";
   
    var answer4 = document.getElementById("d_text");
    answer4.innerHTML = "Answer 4 text";
}

// function changeText() {
//     var paragraph = document.getElementById("my-paragraph");
//     paragraph.innerHTML = "New text!";
//   }




startButton.addEventListener("click", startGame );

nextButton.addEventListener("click", nextButtonPress );

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