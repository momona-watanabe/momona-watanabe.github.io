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
  


  begin: (anim) => {
    // アニメーションが始まるときに透明度を徐々に上げる
    anim.animatables[0].target.style.opacity = 0;
    anime({
      targets: anim.animatables[0].target,
      opacity: 1,
      duration: 3000,
      easing: 'linear'
    });
  }
};

// アニメーションを実行
anime(animationParams);




const animationOptions = {
  duration: 700,
  easing: 'easeInOutQuad',
};

const animations = [
  { targets: '.copy1', translateX: { value: -32 }, translateY: [{ value: 90, duration: 550 }, { value: 120, duration: 650 }, { value: 80, duration: 750 }], ...animationOptions },
  { targets: '.copy2', translateX: { value: 12 }, translateY: [{ value: 110, duration: 600 }, { value: 140, duration: 700 }, { value: 100, duration: 800 }], ...animationOptions },
  { targets: '.copy3', translateX: { value: 48 }, translateY: [{ value: 80, duration: 650 }, { value: 110, duration: 750 }, { value: 70, duration: 850 }], ...animationOptions },
  { targets: '.copy4', translateX: { value: 88 }, translateY: [{ value: 55, duration: 700 }, { value: 85, duration: 800 }, { value: 45, duration: 900 }], ...animationOptions },
  { targets: '.copy5', translateX: { value: 128 }, translateY: [{ value: 70, duration: 750 }, { value: 100, duration: 850 }, { value: 60, duration: 950 }], ...animationOptions },
  { targets: '.copy6', translateX: { value: 158 }, translateY: [{ value: 25, duration: 800 }, { value: 55, duration: 900 }, { value: 15, duration: 1000 }], ...animationOptions },
  { targets: '.copy7', translateX: { value: 168 }, translateY: [{ value: 30, duration: 850 }, { value: 60, duration: 950 }, { value: 20, duration: 1050 }], ...animationOptions }
];

animations.forEach(animation => anime(animation));



