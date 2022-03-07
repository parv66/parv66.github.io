$('.tabbtn1').click(function(){
  $('.tab1').css('z-index', '6');
  $('.tab2').css('z-index', '-6');
  $('.tab3').css('z-index', '-6');
  $('.tab4').css('z-index', '-6');
});
$('.tabbtn2').click(function(){
  $('.tab1').css('z-index', '-6');
  $('.tab2').css('z-index', '6');
  $('.tab3').css('z-index', '-6');
  $('.tab4').css('z-index', '-6');
});
$('.tabbtn3').click(function(){
  $('.tab1').css('z-index', '-6');
  $('.tab2').css('z-index', '-6');
  $('.tab3').css('z-index', '6');
  $('.tab4').css('z-index', '-6');
});
$('.tabbtn4').click(function(){
  $('.tab1').css('z-index', '-6');
  $('.tab2').css('z-index', '-6');
  $('.tab3').css('z-index', '-6');
  $('.tab4').css('z-index', '6');
});
