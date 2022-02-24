$( document ).ready(function() {
    //create soudns element
  crtSndEle();
  
  $(".mcbtn").click(function(){
    let sound = document.getElementById('mcBtnClicked');
    sound.volume = 0.6;
    sound.play();
  });
  
  function crtSndEle() {
    var audio = document.createElement('audio');
    audio.src = 'https://parv66.tk/random.click.ogg'
    audio.id = 'mcBtnClicked';
    document.getElementByTagName('body').appendChild(audio);
  }
});
