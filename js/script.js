//ハンバーガーメニュー
$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $(".gnav-sp").toggleClass('panelactive');
});

$(".gnav-sp a").click(function(){
    $(".openbtn").removeClass('active');
    $(".gnav-sp").removeClass('panelactive');
});






//loadingアニメーション
$(window).on('load',function(){

  $("#splash").delay(150).fadeOut('slow',function(){
    $('body').addClass('appear'); 
  });
});






// fadeUp
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





// メインコピーフェードイン
const animationParams = {
  targets: '#calve',
  translateX: 
    { value: 0, duration: 2500, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 50, duration: 600, easing: 'easeInOutQuad' },
    { value: 10, duration: 600, easing: 'easeInOutQuad' },
    { value: 30, duration: 600, easing: 'easeInOutQuad' },
    { value: 0, duration: 600, easing: 'easeOutQuad' }
  ],
  begin: (anim) => {
    // アニメーションが始まるときに透明度を徐々に上げる
    anim.animatables[0].target.style.opacity = 0;
    anime({
      targets: anim.animatables[0].target,
      opacity: 1,
      duration: 2200,
      easing: 'linear'
    });
  }
};

// アニメーションを実行
anime(animationParams);
