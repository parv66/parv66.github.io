window.onload=function(){
	var ado = document.createElement('audio');
	ado.src = 'https://parv66.github.io/random.click.ogg'
	ado.id = 'btnsnd';
	document.body.appendChild(ado);
  	console.log("element created")
	
	//clicking part
	$('.mcbtn').click(function(){
	console.log("button click registered")
	let sound = document.querySelector('#btnsnd');
	sound.volume = 0.2;
	sound.currentTime = 0.02;
	sound.play();
	console.log("playeed soundd")
});
}	

