$(document).ready(function () {

$( '#tabbtnone' ).on( 'click', function () {
  console.log('clicked one');
  $('#tabone').toggle();
  $('#tabtwo').toggle();
  $('#tabthree').toggle();
  $('#tabfour').toggle();
});
$( '#tabbtntwo' ).on( 'click', function () {
  console.log('clicked 2');
  $('#tabone').toggle();
  $('#tabtwo').toggle();
  $('#tabthree').toggle();
  $('#tabfour').toggle();
});
$( '#tabbtnthree' ).on( 'click', function () {
  console.log('clicked 3');
  $('#tabone').toggle();
  $('#tabtwo').toggle();
  $('#tabthree').toggle();
  $('#tabfour').toggle();
});

$( '#tabbtnfour' ).on( 'click', function () {
  console.log('clicked 4')
  $('#tabone').toggle();
  $('#tabtwo').toggle();
  $('#tabthree').toggle();
  $('#tabfour').toggle();
});
});
