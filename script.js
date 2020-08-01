var highScoreDiv = document.getElementById("#highScoreDiv");
var timerDiv = document.getElementById("#timerDiv");

var topDiv = document.getElementById("#topDiv");
var middleDiv = document.getElementById("#middleDiv");
var bottomDiv = document.getElementById("#bottomDiv");

var quiz = document.getElementById("#quizDiv");
var question = document.getElementById("#questions");
var choiceA = document.getElementById("#A");
var choiceB = document.getElementById("#B");
var choiceC = document.getElementById("#C");
var choiceD = document.getElementById("#D");

var startBttn = document.getElementById("#button1");


var questionsQuiz = [
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        choiceA: "2names",
        choiceB: "_first_and_last_names",
        choiceC: "FirstAndLast",
        choiceD: "None of the above",
        answer: "A",
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choiceA: "&ltbody&gt",
        choiceB: "&lthead&gt",
        choiceC: "&lttittle&gt",
        choiceD: "&ltscript&gt",
        answer: "D",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "&ltjs&gt",
        choiceB: "&ltscripting&gt",
        choiceC: "&ltscript&gt",
        choiceD: "&ltjavascript&gt",
        answer: "C",
    },
    {
        question: "The _______ method of an Array object adds and / or removes elements from an array.",
        choiceA: "Reverse",
        choiceB: "Slice",
        choiceC: "Splice",
        choiceD: "Shift",
        answer: "C"
    }
];

button1.addEventListener("click", startTimer)

// --- TIMER ----
function startT() {
    var counter = 10;
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

//--- QUESTIONS AND ANSWERS DISPLAY
var lastQuestion = questionsQuiz.length + 1;
var currentQuestion = 0;

function renderQuestion() {
    var q = questionsQuiz[currentQuestion];
    questions.innerHTML = "<p>" + q.question + "</p";
    A.innerHTML = q.choiceA;
    B.innerHTML = q.choiceB;
    C.innerHTML = q.choiceC;
    D.innerHTML = q.choiceD;
};

function startTimer() {
    button1.style.display = "none";
    renderQuestion();
    quizDiv.style.display = "block"
    startT();
};

// CHECK FOR CORRECT ANSWERS

function answerMatch(choice) {
    (choice == questionsQuiz[currentQuestion].answer)

    if (currentQuestion < lastQuestion) {
        currentQuestion++
        renderQuestion();
        console.log(choice)
    } else{
        clearInterval(startT);
    }

}






