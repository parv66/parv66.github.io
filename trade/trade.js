$( document ).ready(function() {
//clear trade slots when currency removed//
  if ( $('#38').children().length == 0 ){
  $(".tbox2").empty();
  }
//the click to move currency part//
  $("#toption0").on("click", function() {
  $(".curr").first().appendTo(".tbox1");
  $('#copperplusplus').clone().appendTo('.tbox2');
  })
  
  $("#toption1").on("click", function() {
  $(".curr").first().appendTo(".tbox1");
  $('#papple').clone().appendTo('.tbox2');
})
  
  $("#toption2").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
  
  $("#toption3").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
  
  $("#toption4").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
});
