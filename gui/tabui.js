$( '#tabbtnone' ).on( 'click', function () {
  console.log('clicked one');
  $('#tabone').css('display', 'block');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'none');
});
$( '#tabbtntwo' ).on( 'click', function () {
  console.log('clicked 2');
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'block');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'none');
});
$( '#tabbtnthree' ).on( 'click', function () {
  console.log('clicked 3');
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'block');
  $('#tabfour').css('display', 'none');
});

$( '#tabbtnfour' ).on( 'click', function () {
  console.log('clicked 4')
  $('#tabone').css('display', 'none');
  $('#tabtwo').css('display', 'none');
  $('#tabthree').css('display', 'none');
  $('#tabfour').css('display', 'block');  
});
