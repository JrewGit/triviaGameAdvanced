quiz = [
    {
      question: "I'm blue if I was green I would?",
      answer: "Die",
      guess1: "Cry",
      guess2: "Lie",
      guess3: "Fly",
    },
    {
      question: "Hey, alright now, alright now, fellas (Yeah?) Now, what's cooler than being cool?",
      answer: "Ice Cold",
      guess1: "A Polar Bear",
      guess2: "Ice Breakers",
      guess3: "Alaska",
    },
    {
      question: "You can stand under my...",
      answer: "Umbrella",
      guess1: "Shed",
      guess2: "Awning",
      guess3: "Porch",
    },
    {
      question: "When the pimp's in the crib, ma...",
      answer: "Drop it like its hot",
      guess1: "Run away and get help",
      guess2: "Stop drop and roll",
      guess3: "Call 911",
    },
    {
      question: "I used to rule the world seas would...",
      answer: "Rise when I gave the word",
      guess1: "Crash against the shore",
      guess2: "Flood the streets",
      guess3: "Bow down to me",
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
        $("#timerDisplay").html(`<h2>${time}</h2>`);
        time--;
        if (time < 0 && questionAnswered === false) {
          clearInterval(timeUp);
          noAnswer(round);
        }
      };
      let timeUp = setInterval(setTimer, 1000);
  
      $(`#gameDisplay`).append(`<h2 id="timerDisplay">${time}</h2>`)
  
      $(`#gameDisplay`).append(`<h3>${quiz[round].question}</h3>`);
  
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
    $(`#gameDisplay`).append(`<p>${outcome}</p>`)
    $(`#gameDisplay`).append(`<p>The correct answer is: ${quiz[round].answer}!</p>`)
  
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
    $("#gameDisplay").append(`<h2>Results</h2>`);
    $("#gameDisplay").append(`<p>Correct: ${correctAnswers}</p>`);
    $("#gameDisplay").append(`<p>Incorrect: ${wrongAnswers}</p>`);
    $("#gameDisplay").append(`<p>Unanswered: ${unanswered}</p>`);
    $("#gameDisplay").append(`<button id="resetBtn">Play Again</button>`)
    $("#resetBtn").click(function() {
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
  // let arr = [];
  
  // for (let i = 0; i < 4; i++) {
  //     let x = Math.floor(Math.random() * 4);
  //     if (arr.indexOf(x) === -1) {
  //         arr.push(x);
  //         i++;
  //     else { x = Math.floor(Math.random() * 4); };