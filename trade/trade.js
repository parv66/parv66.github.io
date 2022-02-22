$( document ).ready(function() {

//the click to move currency part//
  $("#toption0").on("click", function() {
  $(".curr").first().appendTo(".tbox1");
  if($('#38').is(':empty')){
  $('#copperplusplus').clone().appendTo('.tbox2');
  }
  else{
  $('.tbox2').empty();
  $('#copperplusplus').clone().appendTo('.tbox2');
  }
  })
  
  
  
  
  //clear trade slots when currency removed//
  if ($('#38').is(':empty')) { 
    $('.tbox2').empty();
} 
});
