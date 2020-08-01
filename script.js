var highScoreDiv = document.getElementById("#highScoreDiv");
var timerDiv = document.getElementById("#timerDiv");

var topDiv = document.getElementById("#topDiv");
var middleDiv = document.getElementById("#middleDiv");
var bottomDiv = document.getElementById("#bottomDiv");

// var questionsAsked = document.getElementById("#questions");
var question = document.getElementById("#questions")   
var choices = document.getElementById("#choices");
var choiceA = document.getElementById("#A");
var choiceB = document.getElementById("#B");
var choiceC = document.getElementById("#C");
var choiceD = document.getElementById("#D");


var questionsQuiz = [
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        choiceA: "2names",
        choiceB: "_first_and_last_names",
        choiceC: "FirstAndLast",
        choiceD: "None of the above",
        answer: "A"
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choiceA: "<BODY>",
        choiceB: "<HEAD>",
        choiceC: "<TITLE>",
        choiceD: "<SCRIPT>",
        answer: "D"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>",
        choiceB: "<scripting>",
        choiceC: "<script>",
        choiceD: "<javascript>",
        answer: "C"
    },
    {
        question: "The _______ method of an Array object adds and / or removes elements from an array.",
        choiceA: "Reverse",
        choiceB: "Shift",
        choiceC: "Slice",
        choiceD: "Splice",
        answer: "D"
    },
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        choiceA: "Microsoft",
        choiceB: "Navigator",
        choiceC: "LiveWire",
        choiceD: "Native",
        answer: "c"
    }
];

// --- TIMER ----
function startTimer() {
    startT();
};

function startT() {
    var counter = 30;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            // alert('sorry, out of time');
            clearInterval(counter);
        }
    }, 1000);
}

//------
var lastQuestion = questionsQuiz.length - 1;
var currentQuestion = 0;

function renderQuestion() {
    var q = questionsQuiz[currentQuestion];

    questions.innerHTML = "<p>" + q.question + "</p";
    A.innerHTML = q.choiceA;
    B.innerHTML = q.choiceB;
    C.innerHTML = q.choiceC;
    D.innerHTML = q.choiceD;
}

button1.style.display = "none";
renderQuestion();
quizDiv.style.display = "block"



