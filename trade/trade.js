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
})

 function isEmpty( el ){
      return !$.trim(el.html())
  }
  if (isEmpty($('#38'))) {
          $('.tbox2').empty();
};
  }

//clear trade slots when currency removed//
if ($('#38').is(':empty')) {
    $('.tbox2').empty();
};
