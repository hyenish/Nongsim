//lnb_btn을 누르면 lnb가 나타남
$('.lnb_btn').click(function(){
    $('#lnb').css({'display':'block'});
    $('.dark').css({'display':'block'});
});

//gnb 사라짐(dark누르거나 close_btn누를 때)
$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('#lnb').css({'display':'none'});
});
$('.btn_close').click(function(){
    $('.dark').css({'display':'none'});
    $('#lnb').css({'display':'none'});
});