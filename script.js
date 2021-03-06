var highScoreDiv = document.getElementById("#highScoreDiv");
var timerDiv = document.getElementById("#timerDiv");

var topDiv = document.getElementById("#topDiv");
var middleDiv = document.getElementById("#middleDiv");
var bottomDiv = document.getElementById("#bottomDiv");

var quiz = document.getElementById("#quizDiv");
var question = document.getElementById("#questions");
var choiceA = document.getElementById("#btn-0");
var choiceB = document.getElementById("#btn-1");
var choiceC = document.getElementById("#btn-2");
var choiceD = document.getElementById("#btn-3");



var startBttn = document.getElementById("#button1");

var questionsQuiz = [
    {
        questionTitle: "Which of the following is not a valid JavaScript variable name?",
        questionChoices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
        correctAnswer: "A",
    },
    {
        questionTitle: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        questionChoices: ["<body>", "<script>", "<tittle>", "<head>"],
        correctAnswer: "B",
    },
    {
        questionTitle: "Inside which HTML element do we put the JavaScript?",
        questionChoices: ["<js>", "<scripting>", "<script>", "<javascript>"],
        correctAnswer: "C",
    },
    {
        questionTitle: "The _______ method of an Array object adds and / or removes elements from an array.",
        questionChoices: ["Splice", "Slice", "Reverse", "Shift"],
        correctAnswer: "A",
    },
];

var counter = 10 * questionsQuiz.length;

button1.addEventListener("click", startTimer);

var timer 
// --- TIMER ----
function startT() {

    timer = setInterval(function () {
        counter--;
        if (counter > 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            clearInterval(counter);
        }
        if (counter < 1) {
            clearInterval(counter);
            span.innerHTML = "--";
            alert("PLEASE TRY AGAIN...");
            alert = function () { };
        }
    }, 850);
};

var lastQuestion = questionsQuiz.length; 
var currentQ = 0;
var correctAnswer = 0;

function correctAnswer() {
    if (correctAnswer === 0) {
        span = document.getElementById("countQ");
        span.innerHTML = countQ;
    }

    if (correctAnswer > 0){
        span = document.getElementById("countQ");
        span.innerHTML = countQ;
    }
};

//--- QUESTIONS AND ANSWERS DISPLAY
function displayQ() {
    document.getElementById("questionTitle").textContent = questionsQuiz[currentQ].questionTitle;
    document.getElementById("btn-0").textContent = questionsQuiz[currentQ].questionChoices[0];
    document.getElementById("btn-1").textContent = questionsQuiz[currentQ].questionChoices[1];
    document.getElementById("btn-2").textContent = questionsQuiz[currentQ].questionChoices[2];
    document.getElementById("btn-3").textContent = questionsQuiz[currentQ].questionChoices[3];

    for (var i = 0; i < questionsQuiz.length; i++) {
        document.getElementById("btn-" + i).textContent = questionsQuiz[currentQ].questionChoices[i];
    }
};


function startTimer() {
    button1.style.display = "none";
    quizDiv.style.display = "block";
    displayQ();
    startT();
};

// ANSWER CHECK
function answerMatch(choice) {
    if (choice == questionsQuiz[currentQ].correctAnswer) {
        alert("You guessed it right! :)")
        correctAnswer++;
        currentQ++;
    } else {
        currentQ++
        counter -= 10
        alert("Try one more time!")
    }

    if (currentQ < lastQuestion) {
        displayQ();

    } else {
        currentQ = 0;
        quizDiv.style.display = "none";
        button1.style.display = "block";
        clearInterval(timer);

        var userName = prompt("Hello, What's your name?");

        alert("The quiz has ended. " + userName + ", you have gained: " + counter);

        span = document.getElementById("countQ");
        span.innerHTML = (" " + userName + " (" + counter + " points)");

        counter = 10 * questionsQuiz.length;
    }
}






