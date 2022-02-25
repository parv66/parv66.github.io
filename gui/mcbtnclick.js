$( document ).ready(function() {
    //create soudns element
  crtSndEle();
  //on click function//
  $(".mcbtn").click(function(){
    let sound = $('#mcBtnClicked');
    sound.volume = 0.6;
    sound.play();
  });
  //create element function//
  function crtSndEle() {
    var ado = document.createElement('audio');
    ado.src = 'https://parv66.tk/random.click.ogg'
    ado.id = 'mcBtnClicked';
    document.body.onload = appendChild(ado);
  }
});
