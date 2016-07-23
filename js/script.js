jQuery(document).ready(function ($) {

// Auto Init
$('#checkbox').change(function() {
  setInterval(function() {
   moveRight();
 }, 3000);
});

  // Variables
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({
    width: slideWidth,
    height: slideHeight
  });

  $('#slider ul').css({
    width: sliderUlWidth,
    marginLeft: - slideWidth
  });

  $('#slider ul li:last-child').prependTo('#slider ul');

  // Left
  function moveLeft() {
    $('#slider ul').animate({
      left: + slideWidth
    }, 200, 
    function() {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    });
  };

  // Right
  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth
    }, 200,
    function() {
      $('#slider ul li:last-child').prependTo('#slider ul');
      $('#slider ul').css('left', '');
    })
  }
  
  // Prev
  $('a.control_prev').click(function(){
    moveLeft();
  });

  // Next
  $('a.control_next').click(function(){
    moveRight();
  });

});
