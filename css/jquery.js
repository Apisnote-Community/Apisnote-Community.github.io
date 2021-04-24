var mvh = $('.main-visual').height();

$(window).scroll(function(){
  var top = $(window).scrollTop();
  if ( top > 2 ){
    $('.header-5').removeClass('top');
    $('.header-5').addClass('scroll');
    }
  else{
    $('.header-5').removeClass('scroll');
    $('.header-5').addClass('top');
   }
});
