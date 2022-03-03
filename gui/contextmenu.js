$(document).ready(function(){
  $('body').append('<div id="contextmenu" style="text-align: center;left: 69px;display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;align-content: flex-start;flex-wrap: wrap;"><h4 class="" style="margin: 0px;">Context Menu</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/">Accommodation I</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/about">Particularity IV</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/creations">Creations III</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/downloads">Downloads IX</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/random">Random LXIX</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/contact">Association II</h4>&#10;&#13;<h4 class="cOption" href="https://parv66.github.io/parv66.inc/random/CDXX">??? </h4></div>');
	$(document).bind('contextmenu', function(event){
		$("#contextmenu").css({"top": event.pageY + "px", "left": event.pageX + "px"}).show();
		event.preventDefault();
	});
	$(document).bind('click', function(){
		$("#contextmenu").hide();
	})
});
