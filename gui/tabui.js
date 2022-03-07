$('.tabbtnone').click(function(){
  $('.tabone').css('display', 'block');
  $('.tabtwo').css('display', 'none');
  $('.tabthree').css('display', 'none');
  $('.tabfour').css('display', 'none');
});
$('.tabbtntwo').click(function(){
  $('.tabone').css('display', 'none');
  $('.tabtwo').css('display', 'block');
  $('.tabthree').css('display', 'none');
  $('.tabfour').css('display', 'none');
});
$('.tabbtnthree').click(function(){
  $('.tabone').css('display', 'none');
  $('.tabtwo').css('display', 'none');
  $('.tabthree').css('display', 'block');
  $('.tabfour').css('display', 'none');
});
$('.tabbtnfour').click(function(){
  $('.tabone').css('display', 'none');
  $('.tabtwo').css('display', 'none');
  $('.tabthree').css('display', 'none');
  $('.tabfour').css('display', 'block');
});
