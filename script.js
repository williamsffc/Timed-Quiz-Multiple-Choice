var question = document.getElementById("#middleDiv");
var choiceA = document.getElementById("#A");
var choiceB = document.getElementById("#B");
var choiceC = document.getElementById("#C");
var choiceD = document.getElementById("#D");
var clickBttn = document.getElementById("#bottomDiv");

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
]

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

var startQ = document.getElementById("#button1");

startQ.addEventListener("click", startQuiz);

function startQuiz() {
    startQ.style.display = "none";
    quizDiv.style.display = "block";
};

//---- on click i want to clear top/middle/bottom and replace
//---- top with question
//---- middle with questions (buttons)



