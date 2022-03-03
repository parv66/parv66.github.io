$(document).ready(function(){
  $('body').append('<div id="contextmenu" style="text-align: center;left: 69px;display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;align-content: flex-start;flex-wrap: wrap;"><a class="" style="margin: 0px;text-shadow: 0.125em 0.125em 0 #3F3F3F;">Context Menu</a><a class="cinfo" style="color: #5555FF;text-shadow: 0.125em 0.125em 0 #232391;">Equipment</a>&#10;&#13;<a class="cOption" style="margin-top: 5px;" href="https://parv66.github.io/parv66.inc/">Accommodation I</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/about">Particularity IV</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/creations">Creations III</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/downloads">Downloads IX</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/random">Random LXIX</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/contact">Associate II</a>&#10;&#13;<a class="cOption" href="https://parv66.github.io/parv66.inc/random/CDXX">???</a>&#10;&#13;<br><a class="cOption" style="color:#fff">Durability: 69 / 420</a><a class="cinfo">parv66:context_menu</a><a class="cinfo">NBT: 5 tag(s)</a></div>');
	$(document).bind('contextmenu', function(event){
		$("#contextmenu").css({"top": event.pageY + "px", "left": event.pageX + "px"}).show();
		event.preventDefault();
	});
	$(document).bind('click', function(){
		$("#contextmenu").hide();
	})
});
