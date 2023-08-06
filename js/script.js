/*ハンバーガーメニュー*/
$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $(".gnav-sp").toggleClass('panelactive');
});

$(".gnav-sp a").click(function(){
    $(".openbtn").removeClass('active');
    $(".gnav-sp").removeClass('panelactive');
});






/*loadingアニメーション*/
$(window).on('load',function(){
  $("#splash").delay(150).fadeOut('slow',function(){
      $('body').addClass('appear');
  });
 
  $('.splashbg').on('animationend', function() {    
      
  });
      
});





/*fadeupアニメーション*/
function fadeAnime(){

  $('.fadeUpTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
}

  $(window).scroll(function (){
    fadeAnime();
  });










