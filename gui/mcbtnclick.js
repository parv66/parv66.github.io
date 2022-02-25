var ado = document.createElement('audio');
ado.src = 'https://parv66.tk/random.click.ogg'
ado.id = 'btnSnd';
document.body.appendChild(ado);
//on click function//
const mcbtn = document.querySelectorAll('.mcbtn')
mcbtn.forEach.addEventListener("click", playsnd);
function playsnd(){
  let sound = document.querySelector('#btnSnd');
  sound.volume = 0.6;
  sound.play();
}
