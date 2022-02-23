//copperplusplus trade//
$("#toption0").on("click", function() {
    $(".curr").first().appendTo("#38");
    if ($('#38').is(':empty')) {
        $('.tbox2').empty();
        $('#copperplusplus').clone().appendTo('.tbox2');
    }
    else {
        $('.tbox2').empty();
        $('#copperplusplus').clone().appendTo('.tbox2');
    }
    //button giv class part(giving AND removing classes accorinding to the trade)//
    $('#tbtn').removeClass('addon1');
    $('#tbtn').removeClass('addon2');
    $('#tbtn').removeClass('addon3');
    $('#tbtn').removeClass('addon4');
    $('#tbtn').addClass('addon0');
})
//papple trade
$("#toption1").on("click", function() {
    $(".curr").first().appendTo("#38");
    if ($('#38').is(':empty')) {
        $('.tbox2').empty();
        $('#papple').clone().appendTo('.tbox2');
    }
    else {
        $('.tbox2').empty();
        $('#papple').clone().appendTo('.tbox2');
    }
    //button giv class part(giving AND removing classes accorinding to the trade)//
    $('#tbtn').removeClass('addon0');
    $('#tbtn').removeClass('addon2');
    $('#tbtn').removeClass('addon3');
    $('#tbtn').removeClass('addon4');
    $('#tbtn').addClass('addon1');
})
//making trade button actually trade/download//
document.getElementById("tbtn").addEventListener("click", tradeMade);
function tradeMade(){
   if ($('#tbtn').hasClass("addon0")){
       $('#38').empty();
       $('#tbtn').removeClass('addon0');
       $('.tbox2').empty();
       alert('copperplusplus')
   //download copperplusplus
   }
   else if ($('#tbtn').hasClass("addon1")){
       $('#38').empty();
       $('#tbtn').removeClass('addon1');
       $('.tbox2').empty();
       alert('placeable apples')
   //download placeableapples
   }
   else if ($('#tbtn').hasClass("addon2")){
       $('#38').empty();
       $('#tbtn').removeClass('addon2');
       $('.tbox2').empty();
       alert('sweetsplusplus beta')
   //download sweetsplusplus
   }
   else if ($('#tbtn').hasClass("addon3")){
       $('#38').empty();
       $('#tbtn').removeClass('addon3');
       $('.tbox2').empty();
       alert('invalid')
   //download whatever
   }
   else if ($('#tbtn').hasClass("addon4")){
       $('#38').empty();
       $('#tbtn').removeClass('addon4');
       $('.tbox2').empty();
       alert('invaild the 2nd')
   //download whatever
   }
   else {
       alert('ugh looks like some error idk hwo did this happen')
   }

}
//this thing works!!!!//
if ( $('#38').children().length > 0 ) {
      $("html").css("background-color", "yellow");
}
//end
//clear trade slots when currency removed//
//(https://parv66.tk/gui/itemdrag.js{52:5})//
//end//
//lists =>
//copperplusplus: addon0
//placeable apples: addon1
//sweetsplusplus: addon2
//lists.end();
