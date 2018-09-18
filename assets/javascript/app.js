quiz = [
    {
        question: "I kissed a girl and I...",
        answer: "liked it",
        guess1: "hated it",
        guess2: "had to tell somebody",
        guess3: "got emotional",
        src: "https://giphy.com/embed/eovguhftazsCQ",
    },
    {
        question: "Hey, alright now, alright now, fellas (Yeah?) Now, what's cooler than being cool?",
        answer: "Ice Cold",
        guess1: "A Polar Bear",
        guess2: "Ice Breakers",
        guess3: "Alaska",
        src: "https://giphy.com/embed/XT8TJ9TsxkmLm",
    },
    {
        question: "You can stand under my...",
        answer: "umbrella",
        guess1: "shed",
        guess2: "awning",
        guess3: "porch",
        src: "https://giphy.com/embed/26gss3wlXc5td8oH6",
    },
    {
        question: "Billie Jean is not my...",
        answer: "lover",
        guess1: "mother",
        guess2: "brother",
        guess3: "cousin",
        src: "https://giphy.com/embed/ibE2G1af8aMZG",
    },
    {
        question: "I used to rule the world seas would...",
        answer: "rise when I gave the word",
        guess1: "crash against the shore",
        guess2: "flood the streets",
        guess3: "bow down to me",
        src: "https://giphy.com/embed/U8a1q7u9n0HFm",
    },
];

$(document).ready(function () {

    $(`#gameDisplay`).append(`<button id="buttonPlay">PLAY</button>`);
    $(`#buttonPlay`).click(function () {
        $(`#buttonPlay`).remove();
        quizPlay(round);
    })

});


let correctAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
let time = 10;
let answerScreenCountdown = 5;
let round = 0;
let questionAnswered = false;


let quizPlay = function (round) {

    if (round < quiz.length) {

        let setTimer = function () {
            console.log(time);
            $("#timerDisplay").html(`<h1>${time}</h1>`);
            time--;
            if (time < 0 && questionAnswered === false) {
                clearInterval(timeUp);
                noAnswer(round);
            }
        };
        let timeUp = setInterval(setTimer, 1000);

        $(`#gameDisplay`).append(`<h1 id="timerDisplay">${time}</h1>`)

        $(`#gameDisplay`).append(`<h2 id="questions">${quiz[round].question}</h2>`);

        $(`#gameDisplay`).append(`<p class="answerChoice" id="answer">${quiz[round].answer}</p>`);
        $(`#answer`).click(function () {
            clearInterval(timeUp);
            questionAnswered = true;
            rightAnswer(round);
        })

        $(`#gameDisplay`).append(`<p class="answerChoice" id="guess1">${quiz[round].guess1}</p>`);
        $(`#guess1`).click(function () {
            clearInterval(timeUp);
            questionAnswered = true;
            incorrectAnswer(round);
        })

        $(`#gameDisplay`).append(`<p class="answerChoice" id="guess2">${quiz[round].guess2}</p>`);
        $(`#guess2`).click(function () {
            clearInterval(timeUp);
            questionAnswered = true;
            incorrectAnswer(round);
        })

        $(`#gameDisplay`).append(`<p class="answerChoice" id="guess3">${quiz[round].guess3}</p>`);
        $(`#guess3`).click(function () {
            clearInterval(timeUp);
            questionAnswered = true;
            incorrectAnswer(round);
        })

    } else {
        scoreboard();
    };

}

let rightAnswer = function (round) {
    correctAnswers++;
    outcome = "Good job! You got that right!";
    $(`#gameDisplay`).html("");
    $(`#gameDisplay`).append(`<p>${outcome}</p>`);
    $(`#gameDisplay`).append(`<p>The correct answer is: ${quiz[round].answer}!</p>`);
    $(`#gameDisplay`).append(`<iframe src=${quiz[round].src} width="300" height="400" frameBorder="0" ></iframe>`);

    // lets the game to continue after the answerScreen
    let nextQuestion = function () {
        console.log(answerScreenCountdown);
        answerScreenCountdown--;
        if (answerScreenCountdown < 0) {
            clearInterval(nextRound);
            $("#gameDisplay").html("");
            time = 10;
            answerScreenCountdown = 5;
            round++;
            questionAnswered = false;
            quizPlay(round);
        };
    };
    let nextRound = setInterval(nextQuestion, 1000);
};

let incorrectAnswer = function (round) {
    wrongAnswers++;
    outcome = "Ooo sorry, you got that wrong.";
    $(`#gameDisplay`).html("");
    $(`#gameDisplay`).append(`<p>${outcome}</p>`)
    $(`#gameDisplay`).append(`<p>The correct answer is: ${quiz[round].answer}!</p>`);
    $(`#gameDisplay`).append(`<iframe src=${quiz[round].src} width="300" height="400" frameBorder="0" ></iframe>`);

    // lets the game to continue after the answerScreen
    let nextQuestion = function () {
        console.log(answerScreenCountdown);
        answerScreenCountdown--;
        if (answerScreenCountdown < 0) {
            clearInterval(nextRound);
            $("#gameDisplay").html("");
            time = 10;
            answerScreenCountdown = 5;
            round++;
            questionAnswered = false;
            quizPlay(round);
        };
    };
    let nextRound = setInterval(nextQuestion, 1000);
};

let noAnswer = function (round) {
    unanswered++;
    outcome = "Took too long!";
    $(`#gameDisplay`).html("");
    $(`#gameDisplay`).append(`<p>${outcome}!</p>`)
    $(`#gameDisplay`).append(`<p>The correct answer is: ${quiz[round].answer}!</p>`)
    $(`#gameDisplay`).append(`<iframe src=${quiz[round].src} width="300" height="400" frameBorder="0" ></iframe>`);

    // lets the game to continue after the answerScreen
    let nextQuestion = function () {
        console.log(answerScreenCountdown);
        answerScreenCountdown--;
        if (answerScreenCountdown < 0) {
            clearInterval(nextRound);
            $("#gameDisplay").html("");
            time = 10;
            answerScreenCountdown = 5;
            round++;
            questionAnswered = false;
            quizPlay(round);
        };
    };
    let nextRound = setInterval(nextQuestion, 1000);
};

//working on scoreboard
let scoreboard = function () {

    $("#gameDisplay").html("");
    $("#gameDisplay").append(`<h2>Results!</h2>`);
    $("#gameDisplay").append(`<p>Correct: ${correctAnswers}</p>`);
    $("#gameDisplay").append(`<p>Incorrect: ${wrongAnswers}</p>`);
    $("#gameDisplay").append(`<p>Unanswered: ${unanswered}</p>`);
    $("#gameDisplay").append(`<button id="resetBtn">Play Again</button>`)
    $("#resetBtn").click(function () {
        $("#gameDisplay").html("");
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        time = 10;
        answerScreenCountdown = 5;
        round = 0;
        questionAnswered = false;
        quizPlay(round);
    })
}

//idea of how to randomize the answerChoices
let arr = [];
  
while (arr.length < 4) {
    let rand = Math.floor(Math.random() * 4)
    if (arr.indexOf(rand) === -1) {
        arr.push(rand);
        console.log(rand);
    } else {
    rand = Math.floor(Math.random() * 4);
    };
};

console.log(arr);