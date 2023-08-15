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




const animationCopy1 = {
  targets: '.copy1',
  translateX: 
    { value: -32, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 90, duration: 550, easing: 'easeInOutQuad' },
    { value: 120, duration: 650, easing: 'easeInOutQuad' },
    { value: 80, duration: 750, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy1);


const animationCopy2 = {
  targets: '.copy2',
  translateX: 
    { value: 12, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 110, duration: 600, easing: 'easeInOutQuad' },
    { value: 140, duration: 700, easing: 'easeInOutQuad' },
    { value: 100, duration: 800, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy2);


const animationCopy3 = {
  targets: '.copy3',
  translateX: 
    { value: 48, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 80, duration: 650, easing: 'easeInOutQuad' },
    { value: 110, duration: 750, easing: 'easeInOutQuad' },
    { value: 70, duration: 850, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy3);


const animationCopy4 = {
  targets: '.copy4',
  translateX: 
    { value: 88, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 55, duration: 700, easing: 'easeInOutQuad' },
    { value: 85, duration: 800, easing: 'easeInOutQuad' },
    { value: 45, duration: 900, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy4);


const animationCopy5 = {
  targets: '.copy5',
  translateX: 
    { value: 128, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 70, duration: 750, easing: 'easeInOutQuad' },
    { value: 100, duration: 850, easing: 'easeInOutQuad' },
    { value: 60, duration: 950, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy5);


const animationCopy6 = {
  targets: '.copy6',
  translateX: 
    { value: 158, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 25, duration: 800, easing: 'easeInOutQuad' },
    { value: 55, duration: 900, easing: 'easeInOutQuad' },
    { value: 15, duration: 1000, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy6);


const animationCopy7 = {
  targets: '.copy7',
  translateX: 
    { value: 168, duration: 700, easing: 'easeInOutQuad'},
  
  translateY: [
    { value: 30, duration: 850, easing: 'easeInOutQuad' },
    { value: 60, duration: 950, easing: 'easeInOutQuad' },
    { value: 20, duration: 1050, easing: 'easeInOutQuad' }
  ],

};

anime(animationCopy7);
