$(document).ready(function () {
  $('#tabtwo').show();
  $( '#tabbtnone' ).on( 'click', function () {
    console.log('clicked one');
    $('#tabone').show();
    $('#tabtwo').hide();
    $('#tabthree').hide();
    $('#tabfour').hide();
  });
  $( '#tabbtntwo' ).on( 'click', function () {
    console.log('clicked 2');
    $('#tabone').hide();
    $('#tabtwo').show();
    $('#tabthree').hide();
    $('#tabfour').hide();
  });
  $( '#tabbtnthree' ).on( 'click', function () {
    console.log('clicked 3');
    $('#tabone').hide();
    $('#tabtwo').hide();
    $('#tabthree').show();
    $('#tabfour').hide();
  });
  $( '#tabbtnfour' ).on( 'click', function () {
    console.log('clicked 4')
    $('#tabone').hide();
    $('#tabtwo').hide();
    $('#tabthree').hide();
    $('#tabfour').hide();
  });
});
