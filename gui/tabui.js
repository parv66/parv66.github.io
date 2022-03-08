$(document).ready(function () {
  $('#tabtwo').show();
  $('#tabbtnone').addClass("tabbtnactive");
  $('#tabbtntwo').removeClass("tabbtnactive");  
  $('#tabbtnthree').removeClass("tabbtnactive");
  $('#tabbtnfour').removeClass("tabbtnactive");  
  $('#tabtwo').hide();
  $('#tabthree').hide();
  $('#tabfour').hide();
  $( '#tabbtnone' ).on( 'click', function () {
    console.log('clicked one');
    $('#tabbtnone').addClass("tabbtnactive");
    $('#tabbtntwo').removeClass("tabbtnactive");
    $('#tabbtnthree').removeClass("tabbtnactive");
    $('#tabbtnfour').removeClass("tabbtnactive");
    $('#tabone').show();
    $('#tabtwo').hide();
    $('#tabthree').hide();
    $('#tabfour').hide();
  });
  $( '#tabbtntwo' ).on( 'click', function () {
    console.log('clicked 2');
    $('#tabbtnone').removeClass("tabbtnactive");
    $('#tabbtntwo').addClass("tabbtnactive");
    $('#tabbtnthree').removeClass("tabbtnactive");
    $('#tabbtnfour').removeClass("tabbtnactive");
    $('#tabone').hide();
    $('#tabtwo').show();
    $('#tabthree').hide();
    $('#tabfour').hide();
  });
  $( '#tabbtnthree' ).on( 'click', function () {
    console.log('clicked 3');
    $('#tabbtnone').removeClass("tabbtnactive");
    $('#tabbtntwo').removeClass("tabbtnactive");
    $('#tabbtnthree').addClass("tabbtnactive");
    $('#tabbtnfour').removeClass("tabbtnactive");
    $('#tabone').hide();
    $('#tabtwo').hide();
    $('#tabthree').show();
    $('#tabfour').hide();
  });
  $( '#tabbtnfour' ).on( 'click', function () {
    console.log('clicked 4')
    $('#tabbtnone').removeClass("tabbtnactive");
    $('#tabbtntwo').removeClass("tabbtnactive");
    $('#tabbtnthree').removeClass("tabbtnactive");
    $('#tabbtnfour').addClass("tabbtnactive");
    $('#tabone').hide();
    $('#tabtwo').hide();
    $('#tabthree').hide();
    $('#tabfour').show();
  });
});
