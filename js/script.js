
$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $(".gnav-sp").toggleClass('panelactive');
});

$(".gnav-sp a").click(function(){
    $(".openbtn").removeClass('active');
    $(".gnav-sp").removeClass('panelactive');
});