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

var lastQuestion = questions.length - 1;
var runningQuestion = 0,

function renderQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

runningQuestion = 0;
renderQuestion();

runningQuestion++
renderQuestion()

// -------------------- check Answers

function answerMatch(answer) {
    if (questions[runningQuestion].correct == answer) {
        score++
        correctAnswer();
    } else {
        wrongAnswer();
    }

    if (runningQuestion < lastQuestion) {
        count = 0;
        runningQuestion++;
        renderQuestion();
    }
