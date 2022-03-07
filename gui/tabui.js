$( '#tabbtnone' ).on( 'click', function () {
  $('#tabone').css('display', 'block');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'none');
});
$( '#tabbtntwo' ).on( 'click', function () {
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'block');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'none');
});
$( '#tabbtnthree' ).on( 'click', function () {
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'block');
  $('#tabfour').css('display', 'none');
});

$( '#tabbtnfour' ).on( 'click', function () {
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'block');  
});
