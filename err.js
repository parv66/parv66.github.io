document.addEventListener("keydown", function(event) {
  event.preventDefault();
  switch (event.which) {
    case 112:
     err();
  }
})
var one = 0;
function err() { 
   one++
   if (one == 3) {
      var element = document.getElementById("errl");
      element.classList.add("errl");
            var audio = document.getElementById("errors");
            audio.play();
            audio.volume = 0.2;
  }
}
