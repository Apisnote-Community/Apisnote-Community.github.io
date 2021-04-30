var mvh = $('.main-visual').height();

$(window).scroll(function(){
  var top = $(window).scrollTop();
  if ( top > 5 ){
    $('.header-5').removeClass('top');
    $('.header-5').addClass('scroll');
    $('.header-nav-item').addClass('scroll');
    $('.header-nav-item:hover').addClass('scroll');
    $('.logo_img').attr('src',"image/apisnote-logo.png");
    }
  else{
    $('.header-5').removeClass('scroll');
    $('.header-5').addClass('top');
    $('.header-nav-item').removeClass('scroll');
    $('.logo_img').attr('src',"image/apisnote_logo.png");
   }
});
