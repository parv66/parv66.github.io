$(document).ready(function(){
	$("#contextmenu").hide();
        $(document).bind('contextmenu', function(event){
		$("#contextmenu").css({"top": event.pageY-280 + "px", "left": event.pageX-2 + "px"}).show();
		event.preventDefault();
	});
	$(document).bind('click', function(){
		$("#contextmenu").hide();
	})
});
