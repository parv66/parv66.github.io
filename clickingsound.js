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
    var error = document.getElementById("e").style.animation="error666 1s linear infinite";
    var one = 0;
  }
}
function err() { 
   one++
   if (one == 3) {
      var element = document.getElementById("error");
      element.classList.add("err");
            var error = document.getElementById("errors");
            error.play();
  }
}
