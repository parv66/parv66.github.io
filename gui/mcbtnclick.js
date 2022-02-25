	var ado = document.createElement('audio');
	ado.src = 'https://parv66.tk/random.click.ogg'
	ado.id = 'btnsnd';
	document.body.appendChild(ado);
  console.log("element created")
	//on click function//
$('.mcbtn').click(function(){
    let sound = document.querySelector('#btnsnd');
	  sound.volume = 0.6;
	  sound.play();
    console.log("playeed soundd")
});
