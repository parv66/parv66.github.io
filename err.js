document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode !== 69) {
    return;
  }
  err();
});
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
