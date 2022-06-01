$(document).ready(function(){
	$("body").append("<div id='contextmenu' style='box-shadow: rgb(0, 0, 0) 2px 0px 0px 0px, rgb(0, 0, 0) 0px -2px 0px 0px, rgb(0, 0, 0) 0px 2px 0px 0px, rgb(0, 0, 0) -2px 0px 0px 0px; width: auto; height: auto; border: 2px solid rgb(44, 8, 99); position: fixed; background-color: rgba(16, 0, 16, 0.94); padding: 0.38em; font-family: minefont; margin: 0.125em 0.25em; z-index: 6420; top: 1px; left: 1px; flex-flow: column nowrap; place-content: center; align-items: flex-start; display: flex;'><a style='margin:0;text-shadow:.125em .125em 0 #3e3e3e;color:#fff;cursor:default'>Context Menu</a> <a style='color:#55F;text-shadow:.125em .125em 0 #232391;margin:0;cursor:default'>Equipment</a><a class='coption' style='margin-top:10px;cursor:default;text-shadow: 0.125em 0.125em 0 #363636;color:#9f9f9f;text-decoration:none;'>Accommodation I</a><a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/about'>Particularity IV</a> <a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/creations'>Creations III</a> <a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/downloads'>Downloads IX</a> <a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/random'>Random LXIX</a> <a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/contact'>Associate II</a> <a class='coption' style='text-shadow:.125em .125em 0 #1f1f1f;color:#555;text-decoration:none' href='https://parv66.github.io/random/CDXX'>???</a> <a style='color:#fff;text-decoration:none;text-shadow:.125em .125em 0 #3e3e3e;margin:0;margin-top:10px;cursor:default'>Durability: 69 / 420</a> <a style='text-shadow:.125em .125em 0 #222;margin:0;color:#555;cursor:default'>parv66:context_menu</a> <a style='text-shadow:.125em .125em 0 #222;margin:0;color:#555;cursor:default'>NBT: 5 tag(s)</a></div>");
	$("#contextmenu").hide();
        $(document).bind('contextmenu', function(event){
		if(event.pageY < 644){
			$("#contextmenu").css({"top": event.pageY + "px", "left": event.pageX-2 + "px"}).show();
			console.log("up");
			event.preventDefault();
		}
		else if(event.pageY > 644){
			$("#contextmenu").css({"top": event.pageY-280 + "px", "left": event.pageX-2 + "px"}).show();
			console.log("down");
			event.preventDefault();
		}
	});
	$(document).bind('click', function(){
		$("#contextmenu").hide();
	})
});
