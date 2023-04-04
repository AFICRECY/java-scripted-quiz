## Technology Used:
| Technology Used         | Resource URL           |
| ------------- |:-------------:|
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |  
| Git | [https://git-scm.com/](https://git-scm.com/)     |
| JavaScript  | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |

## Description:

[Visit Deployed Site]: 

This web application is a fun and engaging JavaScript focused coding assessment which contains various questions and multiple choice answers ranging from many different topics within the JavaScript language. The difficulty level of the questions range from simple vocabulary terms, to figuring out what a function may return, or even deciphering a for loop or an if else statement. This application also includes a Timer set at 85 seconds, counting down until 0 seconds. Every wrong answer will subtract time from the quiz-taker’s time. Finally, the application includes a section where, once the game has been either completed or won, a user is able to enter their initials and their score will be shown. 


## Table of Contents:
* Installation (JavaScript, Functions querySelector, getElementById, Event Listeners, and Objects, API’s )
* Usage
* Credits
* License


### Installation:

This project required a knowledge of JavaScript, Functions, document window methods, querySelector, getElementById, Event Listeners, textContent, Objects, Variables, For Loops, If/Else Statements, and Data Types. The coding languages in HTML, Css, and Java Script were all incorporated into this web application and were linked to each-other. The code in the Java Script facilitates the interactivity of the website and incorporates the usage of buttons and querySelectors, and eventListeners, as well as the usage of arrays containing objects, to aid in connecting the bare skeleton of the HTML to a JavaScript quiz with multiple choice answers. 


( For the start button and the Next Button we will need to place a document.querySelector,
which is connected to the classes on the HTML button tags. The SetTimer variable, and its querySelector is used to connect to the seconds id in the HTML, so that the timer and the seconds. The document.getElementById is connected to the question id on the HTML h1 tag so that it can populate the questions when the game has started)

```
var startButton = document.querySelector(".start-game");
var nextButton = document.querySelector(".next");
var setTimer = document.querySelector("#seconds");
var question = document.getElementById("question");
var answerButton1 = document.querySelector(".answer1");
var answerButton2 = document.querySelector(".answer2");
var answerButton3 = document.querySelector(".answer3");
var answerButton4 = document.querySelector(".answer4");
```



```
var buttonTags = document.querySelectorAll("button");
buttonTags[0].setAttribute("style", "color: white;");
````
(Above I used a setAttribute to make the font color of the buttons white. (Styling the webpage through JavaScript)


```
startButton.addEventListener("click", startQuiz );
```
(This event listener is supposed to (with a click event) initiate the quiz to start)



(Below are the variable containing an array of objects which contain the content of the Multiple Choice Quiz.
It includes the: Question, the multiple choice answer options, and the correctAnswer.)

```
var questionsAndAnswers = [
      { query: "Which of the following is not a primitive data type in JavaScript?",
     answers: [Number, String, Boolean, Object],
     correctAnswer: "Object",
   },
   { query: "What does the 'typeof' operator do in JavaScript?",
   answers: ["Returns the data type of a variable","Checks if a variable is defined","Assigns a value to a variable","Concatenates two strings"],
   correctAnswer: "Returns the data type of a variable",
 },
```



(This is an example of being able to access elements and ids using dot notation and highlightin what index the object or value that I am targeting is at.)
```
displayQuestion()
function displayQuestion() {
   question.textContent = questionsAndAnswers[0].query
   answers1.textContent = questionsAndAnswers[0].answers
   answers2.textContent = questionsAndAnswers[0].answers
   answers3.textContent = questionsAndAnswers[0].answers
   answers4.textContent = questionsAndAnswers[0].answers
```




```
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
```

(The set time function is includes the setInterval() method which takes initates the countdown from the time the start button is pressed. When the countdown reaches zero, the action of the countdownstop. The clearInterval() method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval)


### Usage:
Coding assessments are a very important part of testing a programmer's knowledge of a language or software. More specifically, coding assessments are useful to developers looking for employment, or a company/employer looking for worthy and skilled candidates. Testing ones knowledge is key in preparation for interviews as well as ensuring whether or not you are truly proficient in certain coding languages. 


## Credits:
*  Traversing the DOM: https://zellwk.com/blog/dom-traversals/
* Input Multiple choice: http://www.bellaonline.com/articles/art22573.asp
* Query Selector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
* Get Element By Id: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
* JavaScript Objects: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
* JavaScript Function Parameters: https://www.w3schools.com/js/js_function_parameters.asp 
* Linear Geadients: https://www.w3schools.com/css/css3_gradients.asp
* Document Object Model: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model 
* ForEach (Array Prototype): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

