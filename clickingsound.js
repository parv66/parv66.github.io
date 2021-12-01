function play() {
        var audio = document.getElementById("buttonclick");
        audio.play();
      }
var one = 0;
function error666() { 
  one++
  if (one == 3) {
    var audio = document.getElementById("error666");
    audio.play();
    var error = document.getElementByID('html').style.animation="error666 1s linear infinite";
    var one = 0;
  }
}
