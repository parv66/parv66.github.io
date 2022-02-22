$( document ).ready(function() {
//clicked trade btn part//
//the click to move currency part//
  $("#toption0").on("click", function() {
  $(".curr").first().appendTo(".tbox1");
  if($('.curr','#38').length == 1) {
  $(".copperplusplus").clone(".tbox2");
  }})
  
  $("#toption1").on("click", function() {
  $(".curr").first().appendTo(".tbox1");
  if($('.curr','#38').length == 1) {
  $(".papple").clone(".tbox2");
}})
  
  $("#toption2").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
  
  $("#toption3").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
  
  $("#toption4").on("click", function() {
  $(".curr").first().appendTo(".tbox1");})
});
