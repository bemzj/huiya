var scrollh;
//轮播图
var banner = new Swiper('.swiper-container-banner', {
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
    loop:true,
    noSwiping : true,
	noSwipingClass : 'stop-swiping',
	onSlideChangeStart: function(swiper){
//  	var index = swiper.activeIndex%12;
//  	if(index==0)
//  	{
//  		index=12;
//  	}
		console.log();
		var index1 =  $('.swiper-container-product').find('.swiper-slide-active').index();
   		$('.swiper-container-product .swiper-slide').eq(index1+5).addClass('borderBlack');
   		$('.swiper-container-product .swiper-slide').eq(index1+5).siblings('.swiper-slide').removeClass('borderBlack');
    }
});

//瓷砖轮播图
var slide = true;
var tile = new Swiper('.swiper-container-tile', {
    direction: 'horizontal',
//  autoplay : 5000,
    loop:true,
    autoplayDisableOnInteraction : false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onSlideChangeStart: function(swiper){
    	var index = swiper.activeIndex%12;
    	if(index==0)
    	{
    		index=12;
    	}
   		product.slideTo(index, 1000, false);
   		$('.swiper-container-product .swiper-slide').eq(index+5).addClass('borderBlack');
   		$('.swiper-container-product .swiper-slide').eq(index+5).siblings('.swiper-slide').removeClass('borderBlack');
    }
});
$('.proLeft').click(function(){
	product.slidePrev();
	var index = product.activeIndex%12;
    if(index==0)
    {
    	index=12;
    }
   	tile.slideTo(index, 1000, false);
});
$('.proRight').click(function(){
	product.slideNext();
	slide=false;
	var index = product.activeIndex%12;
    if(index==0)
    {
    	index=12;
    }
   	tile.slideTo(index, 1000, false); 
});
$('.swiper-container-product .swiper-slide').click(function(){
	var index = ($(this).index()+7)%12;
    if(index==0)
    {
    	index=12;
    }
    $(this).addClass('borderBlack');
    $(this).siblings('.swiper-slide').removeClass('borderBlack');
   	tile.slideTo(index, 1000, false);
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
	//弹出
	var scrollhh;
	$('.know a').click(function(){
		scrollhh = scrollh;
		$('#content').stop().slideUp(400);
		$('#popWindow').stop().animate({top:'0%'},400);
	});
	$('#popWindow').click(function(){		
		$('#content').stop().slideDown(400,function(){
			$(document).scrollTop(scrollhh);
			$('#popWindow').stop().animate({top:'100%'},400);
			$('#popWindow').scrollTop(0);
		});	
	});
});
//窗口大小改变时
$(window).resize(function(){
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
$(window).scroll(function(){
	//记录滚动条位置
	scrollh = $(document).scrollTop();
	//视频播放按钮垂直居中
	$('#video .videoplay').css('padding-top',($('#video').height()-$('#video .videoplay').height())/2);
});
//
function videoPaly(url){

    $(".video_box").animate({top:0,opacity:1}).find("video").attr("src",url)[0].play();
}

$(".video_box .video_close").on("click",function(){
    $(".video_box").animate({top:'-100%',opacity:0}).find("video")[0].pause();
})
