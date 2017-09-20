//轮播图
var banner = new Swiper('.swiper-container-banner', {
    direction: 'horizontal',
    autoplay : 5000,
    loop:true,
    autoplayDisableOnInteraction : false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});
//瓷砖轮播图
var tile = new Swiper('.swiper-container-tile', {
    direction: 'horizontal',
    autoplay : 5000,
    loop:true,
    autoplayDisableOnInteraction : false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
});
//产品
var product = new Swiper('.swiper-container-product', {
    direction: 'horizontal',
    slidesPerView : 6,
    slidesPerGroup : 1,
    spaceBetween : 20,
    onInit: function(swiper){
    	$('.proLeft').hide();
    },
    onSlideChangeStart: function(swiper){   	
     if(swiper.isEnd)
     {
     	$('.proRight').hide();
     }else{
     	$('.proRight').show();
     }
     if(swiper.isBeginning){
     	$('.proLeft').hide();    	
     }else{
     	$('.proLeft').show();
     }
    }
});
$('.proLeft').click(function(){
	product.slidePrev();
});
$('.proRight').click(function(){
	product.slideNext();
});
//文档初始化
$(function(){
	//导航下来
	$('.navs').mouseover(function(){
		$(this).find('.twoNav').stop().slideDown();
		$(this).children('a').css('color','#b7dddf');
	});
	$('.navs').mouseleave(function(){
		$(this).find('.twoNav').stop().slideUp();
		$(this).children('a').css('color','#333333');
	});
});
//窗口大小改变时
$(window).resize(function(){
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
$(window).scroll(function(){
	//视频播放按钮垂直居中
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
