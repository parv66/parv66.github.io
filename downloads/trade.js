//copperplusplus trade//
$("#toption0").on("click", function() {
    $(".curr").first().appendTo("#38");
    if ($('#38').is(':empty')){
       $('.tbox2').empty();
       $('.toptionNeg').removeClass('toptionNeg');
       $('.toptionPos').removeClass('toptionPos');
       $('#toption0').addClass('toptionNeg');
      console.log("empty #38")
    }
    else {
       $('.tbox2').empty();
       $('#copperplusplus').clone().appendTo('.tbox2');
       //button giv class part(giving AND removing classes accorinding to the trade)//
       $('#tbtn').removeClass('addon1');
       $('#tbtn').removeClass('addon2');
       $('#tbtn').removeClass('addon3');
       $('#tbtn').removeClass('addon4');
       $('#tbtn').addClass('addon0');
       $('.toptionPos').removeClass('toptionPos');
       $('.toptionNeg').removeClass('toptionNeg');
       $('#toption0').addClass('toptionPos');
    }
})
//papple trade
$("#toption1").on("click", function() {
    $(".curr").first().appendTo("#38");
    if ($('#38').is(':empty')){
         $('.tbox2').empty();
         $('.toptionNeg').removeClass('toptionNeg');
         $('.toptionPos').removeClass('toptionPos');
         $('#toption1').addClass('toptionNeg');
         console.log("empty #38")
    }
    else {
        $('.tbox2').empty();
        $('#tbtn').addClass('addon1');
        $('#papple').clone().appendTo('.tbox2');
        $('#tbtn').removeClass('addon0');
        $('#tbtn').removeClass('addon2');
        $('#tbtn').removeClass('addon3');
        $('#tbtn').removeClass('addon4');
        $('.toptionPos').removeClass('toptionPos');
        $('.toptionNeg').removeClass('toptionNeg');
        $('#toption1').addClass('toptionPos');
    }
    
})
//making trade button actually trade/download//
//document.getElementById("tbtn").addEventListener("click", tradeMade);
function tradeMade(){
   if ($('#tbtn').hasClass("addon0")){
       $('#38').empty();
       $('#tbtn').removeClass('addon0');
       if (!$('#38').is(':empty')) {
       document.querySelector('.number').innerHTML = document.querySelector('.number').innerHTML - 1;
       }
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

//(download page part)clear trade//
//let currfirst = document.getElementById(currency);
//currfirst.addEventListener("click", cleartrd) 

$('#currency').click(function(){
    $('#tbtn').removeClass('addon0');
    $('#tbtn').removeClass('addon1');
    $('#tbtn').removeClass('addon2');
    $('#tbtn').removeClass('addon3');
    $('#tbtn').removeClass('addon4');
    $('.tbox2').first().empty();
    console.log("hey stop cheesing the system! }:(")
    cleartrd();
});
function cleartrd(){ 
   $('.tbox2').empty(); 
}
//yep, thats it...//
//end//
//lists =>
//copperplusplus: addon0
//placeable apples: addon1
//sweetsplusplus: addon2
//lists.end();
