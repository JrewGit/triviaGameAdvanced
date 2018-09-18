#Make Title;
#Make playButton;
  #when playButton clicked:
    #removes the playButton (leaves the title);
    #appends quiz div;
#Make starter variables: correctAnswers, wrongAnswers, unanswered and set them to 0;
#Make a quiz div;
    #appends a timer;
    #appends question 1;
    #appends clickable choices;
      if answer is clicked and is right:
        #removes the choices;
        #says "correct";
        #correctAnswers ++;
        #appends the question answer;
        appends a gif/picture/song of the answer;
      if answer is clicked and is wrong:        
        #removes the choices;
        #says "wrong";
        #wrongAnswers++;
        #appends the question answer;
        appends a gif/picture/song of the answer;
      if answer is not clicked:
        #says "time up";
        #unanswered++;
        #removes the choices;
        #appends question answer;
        appends a gif/picture/song of the answer;
Repeats through all of the questions;
    When all of the questions are done:
      remove quiz div;
      append scoreBoard;
      prints "Results";
      prints correctAnswers, wrongAnswers, and unanswered;
Make a reset button;
    if the reset button is clicked:
      reset all of the starting variables;
      go back to the beginning of the game;

TODO:

Fix bug that puts the answer in the same spot for each round.

Get the game to stay on the answer screen for 5 seconds then move on to the next question and repeat until done;

After done: show scoreboard;

make reset button;
        

        
