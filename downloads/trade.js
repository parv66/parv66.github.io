//copperplusplus trade//
$("#toption0").on("click", function() {
    $(".curr").first().appendTo(".tbox1");
    if ($('#38').is(':empty')) {
        $('#copperplusplus').clone().appendTo('.tbox2');
    }
    else {
        $('.tbox2').empty();
        $('#copperplusplus').clone().appendTo('.tbox2');
    }
    //button giv class part(giving AND removing classes accorinding to the trade)//
    $('.tbtn').removeClass('addon1');
    $('.tbtn').removeClass('addon2');
    $('.tbtn').removeClass('addon3');
    $('.tbtn').removeClass('addon4');
    $('.tbtn').addClass('addon0');
})
//papple trade
$("#toption1").on("click", function() {
    $(".curr").first().appendTo(".tbox1");
    if ($('#38').is(':empty')) {
        $('#papple').clone().appendTo('.tbox2');
    }
    else {
        $('.tbox2').empty();
        $('#papple').clone().appendTo('.tbox2');
    }
    //button giv class part(giving AND removing classes accorinding to the trade)//
    $('.tbtn').removeClass('addon0');
    $('.tbtn').removeClass('addon2');
    $('.tbtn').removeClass('addon3');
    $('.tbtn').removeClass('addon4');
    $('.tbtn').addClass('addon1');
})
//making trade button actually trade/download//
const tbtn = document.querySelectorAll('.tbtn');
  tbtn.addEventListener('click', moveItem);
  tbtn.addEventListener('contextmenu', moveItem);
  tbtn.setAttribute('draggable', false);
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
