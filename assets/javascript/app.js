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
  
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let unanswered = 0;
  let round = 0;
  let outcome = "";
  
  let quizPlay = function (round) {
  
    $(`#gameDisplay`).append(`<h3>${quiz[round].question}</h3>`);
  
    $(`#gameDisplay`).append(`<p class="answerChoice" id="answer">${quiz[round].answer}</p>`);
    $(`#answer`).click(function () {
      correctAnswers++;
      outcome = "RIGHT";
      $(`#gameDisplay`).html("");
      $(`#gameDisplay`).append(`<p>You were ${outcome}!</p>`)
      $(`#gameDisplay`).append(`<p>The correct answer was: ${quiz[round].answer}!</p>`)
    })
  
    $(`#gameDisplay`).append(`<p class="answerChoice" id="guess1">${quiz[round].guess1}</p>`);
    $(`#guess1`).click(function () {
      wrongAnswers++;
      outcome = "WRONG";
      $(`#gameDisplay`).html("");
      $(`#gameDisplay`).append(`<p>You were ${outcome}!</p>`)
      $(`#gameDisplay`).append(`<p>The correct answer was: ${quiz[round].answer}!</p>`)
    })
  
    $(`#gameDisplay`).append(`<p class="answerChoice" id="guess2">${quiz[round].guess2}</p>`);
    $(`#guess2`).click(function () {
      wrongAnswers++;
      outcome = "WRONG";
      $(`#gameDisplay`).html("");
      $(`#gameDisplay`).append(`<p>You were ${outcome}!</p>`)
      $(`#gameDisplay`).append(`<p>The correct answer was: ${quiz[round].answer}!</p>`)
    })
  
    $(`#gameDisplay`).append(`<p class="answerChoice" id="guess3">${quiz[round].guess3}</p>`);
    $(`#guess3`).click(function () {
      wrongAnswers++;
      outcome = "WRONG";
      $(`#gameDisplay`).html("");
      $(`#gameDisplay`).append(`<p>You were ${outcome}!</p>`)
      $(`#gameDisplay`).append(`<p>The correct answer was: ${quiz[round].answer}!</p>`)
    })
  
  }
  
  
  $(document).ready(function () {
  
    $(`#gameDisplay`).append(`<button id="buttonPlay">PLAY</button>`);
    $(`#buttonPlay`).click(function () {
      $(`#buttonPlay`).remove();
      quizPlay(round);
    })
  
  
  })