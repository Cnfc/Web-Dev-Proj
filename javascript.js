var playing = false;
var score;
var action;
var timeremaining;

  document.getElementById("startreset").onclick = function () {
    if (playing == true) {
      location.reload();
    } else {
      playing = true;
      score = 0;
      document.getElementById('scorevalue').innerHTML = score;
      //show coundown box
      show("timeremaining");
      timeremaining = 2;
      document.getElementById('timeremainingvalue').innerHTML = timeremaining;
      //change button to reset
      document.getElementById('startreset').innerHTML = "Reset Game";
      startCountdown();
      //generate new QA
      generateQA();
    }
  }
//start counter
function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    if(timeremaining == 0){
      stopCountdown();
      show("gameover");
      document.getElementById('gameover').innerHTML = "<p>Game Over !</p><p>You score is " + score +".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById('startreset').innerHTML = "Start Game"

    }

  }, 1000)
}
//stop counter
function stopCountdown() {
  clearInterval(action);
}
//hide an elements
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}
// generateQA
function generateQA(){

}