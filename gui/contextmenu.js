$(document).ready(function(){
  $('body').append('');
	$(document).bind('contextmenu', function(event){
		$("#contextmenu").css({"top": event.pageY + "px", "left": event.pageX + "px"}).show();
		event.preventDefault();
	});
	$(document).bind('click', function(){
		$("#contextmenu").hide();
	})
});
