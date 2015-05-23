
var question2 = "Congrats you have made it to the second stage of the game! In this next phase you must decide which bus route will save you from the zombie invasion occurring in Words city, route 34, 35 or 36";

var questionNumber = 1;
var prompt = document.getElementById('prompt');

document.getElementById('button').addEventListener('click', function(e){
  var ans = document.getElementById('ans').value;
  switch(questionNumber) {
    case 1:
    if(ans == 2) {
     prompt.innerHTML = question2;
     questionNumber = 2;
    } else {
      alert("Try again");
    }
    break;

    case 2:
    if(ans == 36) {
       alert("You have survived for now...");

    } else {

      alert("try again");
    }
    break;
    default:
    alert("you have entered invalid selection");
    break;
  }
});
